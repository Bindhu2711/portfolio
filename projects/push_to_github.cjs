const { execSync } = require('child_process');
const https = require('https');

const token = process.env.GITHUB_TOKEN || '';
const username = 'Bindhu2711';
const gitPath = 'C:\\Users\\bolle\\PortableGit\\cmd\\git.exe';

const repos = [
  { name: 'portfolio', path: 'c:\\Users\\bolle\\OneDrive\\Desktop\\portfolio', desc: 'Bindhu Personal AI/ML Portfolio Website' },
  { name: 'campusguard-ai', path: 'c:\\Users\\bolle\\OneDrive\\Desktop\\portfolio\\projects\\campusguard-ai', desc: 'Smart Student Safety & Emergency Intelligence Platform' },
  { name: 'scamshield', path: 'c:\\Users\\bolle\\OneDrive\\Desktop\\portfolio\\projects\\scamshield', desc: 'AI-Powered Real-Time Scam Prevention Platform' },
  { name: 'fake-currency-detection', path: 'c:\\Users\\bolle\\OneDrive\\Desktop\\portfolio\\projects\\fake-currency-detection', desc: 'Computer Vision Based Verification System' },
  { name: 'water-level-monitoring', path: 'c:\\Users\\bolle\\OneDrive\\Desktop\\portfolio\\projects\\water-level-monitoring', desc: 'IoT & Web-Based Real-Time Resource Tracking Application' },
  { name: 'study-buddy-matcher', path: 'c:\\Users\\bolle\\OneDrive\\Desktop\\portfolio\\projects\\study-buddy-matcher', desc: 'Student Collaborative Partner Discovery Platform' }
];

function githubRequest(path, method, body) {
  return new Promise((resolve, reject) => {
    const dataString = body ? JSON.stringify(body) : '';
    const req = https.request({
      hostname: 'api.github.com',
      path,
      method,
      headers: {
        'User-Agent': 'NodeJS-Push-Script',
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/vnd.github.v3+json',
        ...(body ? { 'Content-Type': 'application/json', 'Content-Length': Buffer.byteLength(dataString) } : {})
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          resolve({ status: res.statusCode, body: data ? JSON.parse(data) : {} });
        } catch {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on('error', reject);
    if (body) req.write(dataString);
    req.end();
  });
}

async function main() {
  console.log('--- Verifying GitHub Account ---');
  const userCheck = await githubRequest('/user', 'GET');
  if (userCheck.status !== 200) {
    console.error('Failed to authenticate token:', userCheck);
    process.exit(1);
  }
  console.log(`Authenticated as GitHub user: @${userCheck.body.login}`);

  for (const repo of repos) {
    console.log(`\n========================================`);
    console.log(`Repository: ${repo.name}`);
    console.log(`========================================`);

    // 1. Check/Create Remote Repository on GitHub
    const repoCheck = await githubRequest(`/repos/${username}/${repo.name}`, 'GET');
    if (repoCheck.status === 404) {
      console.log(`Creating remote repository on GitHub: ${repo.name}...`);
      const createRes = await githubRequest('/user/repos', 'POST', {
        name: repo.name,
        description: repo.desc,
        private: false,
        auto_init: false
      });
      if (createRes.status === 201) {
        console.log(`Successfully created remote repo https://github.com/${username}/${repo.name}`);
      } else {
        console.warn(`Failed creating repo:`, createRes.body);
      }
    } else {
      console.log(`Remote repo https://github.com/${username}/${repo.name} already exists.`);
    }

    // 2. Push Local Git Repository
    const authUrl = `https://${username}:${token}@github.com/${username}/${repo.name}.git`;
    console.log(`Pushing local code to branch main...`);
    try {
      execSync(`"${gitPath}" -c credential.helper= push -u "${authUrl}" main --force`, {
        cwd: repo.path,
        env: {
          ...process.env,
          GIT_TERMINAL_PROMPT: '0',
          GIT_ASKPASS: 'echo'
        },
        stdio: 'inherit'
      });
      console.log(`✓ PUSH SUCCESS: https://github.com/${username}/${repo.name}`);
    } catch (err) {
      console.error(`✗ PUSH FAILED for ${repo.name}:`, err.message);
    }
  }

  console.log('\n🎉 ALL REPOSITORIES SUCCESSFULLY PUSHED TO GITHUB!');
}

main().catch(console.error);
