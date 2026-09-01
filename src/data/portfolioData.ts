import type { PortfolioData } from '../types/portfolio';

export const portfolioData: PortfolioData = {
  personal: {
    name: 'Bindhu',
    headline: 'AI & ML Student | Developer | Problem Solver',
    subHeadline: 'I build intelligent, practical solutions that turn real-world problems into technology-driven experiences.',
    statusText: 'Open to internships, collaborations & opportunities',
    statusAvailable: true,
    university: 'Vaagdevi College of Engineering',
    degree: 'B.Tech CSE (AI & ML)',
    period: '2024 – 2028',
    location: 'Telangana, India',
    email: 'bollepellibindhu@gmail.com',
    linkedin: 'https://www.linkedin.com/in/bindhu-bollepelli-804a2432b?utm_source=share_via&utm_content=profile&utm_medium=member_android',
    github: 'https://github.com/Bindhu2711',
    resumeUrl: '#resume',
    aboutText: 'I am a 3rd-year B.Tech Computer Science student specializing in Artificial Intelligence & Machine Learning at Vaagdevi College of Engineering (2024–2028). Passionate about applying AI algorithms and modern software development practices to solve genuine human and industrial challenges. With experience gained through hackathons, technical projects, and hands-on learning, I enjoy transforming abstract concepts into reliable, functional code.',
    interests: [
      'Building Practical Products',
      'Continuous Technical Learning',
      'Algorithmic Problem Solving',
      'Exploring Generative & Vision AI',
      'Participating in Hackathons',
      'Creating Impactful Tools'
    ]
  },

  skills: [
    {
      id: 'programming',
      title: 'Programming',
      description: 'Core languages utilized for data structures, algorithm development, and backend scripts.',
      skills: [
        { name: 'Python', level: 'Proficient', tag: 'Core AI / Data', iconName: 'Terminal' },
        { name: 'Java', level: 'Intermediate', tag: 'OOP / Enterprise', iconName: 'Code' },
        { name: 'C', level: 'Intermediate', tag: 'Systems / Low-level', iconName: 'Cpu' }
      ]
    },
    {
      id: 'ai-ml',
      title: 'AI & ML',
      description: 'Specialized focus area covering artificial intelligence models, computer vision, and NLP principles.',
      skills: [
        { name: 'Artificial Intelligence', level: 'Intermediate', tag: 'Search & Heuristics', iconName: 'Brain' },
        { name: 'Machine Learning', level: 'Intermediate', tag: 'Supervised / Unsupervised', iconName: 'Sparkles' },
        { name: 'NLP', level: 'Exploring', tag: 'Text Analytics', iconName: 'MessageSquareText' },
        { name: 'Computer Vision', level: 'Intermediate', tag: 'OpenCV / Image Analysis', iconName: 'Eye' }
      ]
    },
    {
      id: 'development',
      title: 'Development',
      description: 'Tools and web technologies used to construct interactive frontends and version-controlled projects.',
      skills: [
        { name: 'HTML5', level: 'Proficient', tag: 'Semantic Web', iconName: 'Layout' },
        { name: 'CSS3 / Tailwind', level: 'Proficient', tag: 'Responsive UI Design', iconName: 'Palette' },
        { name: 'JavaScript (ES6+)', level: 'Intermediate', tag: 'Web Logic', iconName: 'FileCode' },
        { name: 'Git & GitHub', level: 'Proficient', tag: 'Version Control', iconName: 'GitBranch' }
      ]
    },
    {
      id: 'core-cs',
      title: 'Core CS',
      description: 'Fundamental computer science concepts forming the backbone of software engineering.',
      skills: [
        { name: 'Data Structures & Algorithms', level: 'Intermediate', tag: 'Problem Solving', iconName: 'Binary' },
        { name: 'DBMS (SQL)', level: 'Intermediate', tag: 'Relational Databases', iconName: 'Database' },
        { name: 'Software Engineering', level: 'Intermediate', tag: 'SDLC & Agile Principles', iconName: 'Layers' },
        { name: 'Computer Organization', level: 'Intermediate', tag: 'Architecture Fundamentals', iconName: 'HardDrive' }
      ]
    }
  ],

  projects: [
    {
      id: 'campusguard-ai',
      title: 'CAMPUSGUARD AI',
      tagline: 'Smart Student Safety & Emergency Intelligence Platform',
      category: ['AI/ML', 'Hackathon', 'Web'],
      problem: 'Ensuring real-time safety, rapid SOS dispatch, and threat communication on large university campuses requires swift, automated coordination.',
      idea: 'Deploy a centralized safety hub that leverages AI classification to prioritize emergency alerts, map danger points, and immediately notify campus security.',
      solution: 'Constructed an emergency intelligence portal featuring instant SOS triggers, geo-fenced safety check-ins, automated risk level assessment, and security dashboard routing.',
      technologies: ['Python', 'JavaScript', 'HTML5/CSS3', 'OpenCV / AI Rules', 'Geolocation API'],
      features: [
        'One-click Emergency SOS Alert system with real-time location broadcast',
        'AI-driven urgency categorization based on keyword & audio/text input',
        'Campus Admin Command Center map with active incident markers',
        'Automated emergency broadcast messages to safety guardians'
      ],
      myContribution: 'Architected the core system workflow, implemented the emergency alert classification logic, and designed the responsive front-end dashboard interface.',
      outcome: 'Built as a hackathon prototype showcasing seamless integration between mobile alert triggers and admin monitoring consoles.',
      githubUrl: 'https://github.com/Bindhu2711/campusguard-ai',
      liveDemoUrl: '#playground-campusguard',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1000&q=80',
      featured: true,
      status: 'Prototype'
    },
    {
      id: 'scamshield',
      title: 'SCAMSHIELD',
      tagline: 'AI-Powered Real-Time Scam Prevention & Threat Intelligence Platform',
      category: ['AI/ML', 'Web'],
      problem: 'Online phishing links, deceptive SMS messages, and financial fraud schemes are becoming increasingly sophisticated, tricking everyday digital users.',
      idea: 'Use natural language processing heuristics and URL risk scoring algorithms to detect malicious content before users engage with dangerous links.',
      solution: 'Developed an interactive verification portal where users can paste suspicious text snippets or URLs to receive an immediate safety evaluation score and risk breakdown.',
      technologies: ['Python', 'NLP Heuristics', 'JavaScript', 'Tailwind CSS', 'REST API'],
      features: [
        'Real-time link and text risk assessment engine',
        'Detection of classic phishing markers, suspicious domain structures, and deceptive language',
        'Community threat database flag system',
        'Actionable safety guidance for flagged communications'
      ],
      myContribution: 'Implemented text rule classification, URL structure parser logic, and designed the user-facing diagnostic interface.',
      outcome: 'Successfully created a responsive demo application capable of evaluating suspicious inputs with clear visual risk indicators.',
      githubUrl: 'https://github.com/Bindhu2711/scamshield',
      liveDemoUrl: '#playground-scamshield',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80',
      featured: true,
      status: 'Completed'
    },
    {
      id: 'fake-currency-detection',
      title: 'Fake Currency Detection',
      tagline: 'Computer Vision Based Verification System for Security & Audit',
      category: ['AI/ML', 'Academic'],
      problem: 'Manual inspection of bank note authenticity is slow and prone to human oversight in high-volume retail or rural context settings.',
      idea: 'Utilize computer vision feature extraction techniques (edge detection, color histogram analysis, alignment mapping) to verify security features on currency notes.',
      solution: 'Created an image processing pipeline that isolates security thread patterns, watermark regions, and micro-printing markers to compare against authentic reference features.',
      technologies: ['Python', 'OpenCV', 'NumPy', 'Matplotlib', 'Tkinter / Web UI'],
      features: [
        'Image pre-processing (grayscale conversion, Gaussian blur, Canny edge detection)',
        'Region-of-interest (ROI) extraction for security thread and watermarks',
        'Feature matching metrics calculating percentage similarity to reference notes',
        'Visual overlay highlighting detected discrepancy areas'
      ],
      myContribution: 'Researched currency security markers, built the image processing pipeline using OpenCV in Python, and crafted test verification script.',
      outcome: 'Academic computer vision project demonstrating effective feature extraction and edge analysis on test currency images.',
      githubUrl: 'https://github.com/Bindhu2711/fake-currency-detection',
      liveDemoUrl: '#playground-currency',
      image: 'https://images.unsplash.com/photo-1580519542036-c47de6196ba5?auto=format&fit=crop&w=1000&q=80',
      featured: true,
      status: 'Completed'
    },
    {
      id: 'water-level-monitoring',
      title: 'Water Level Monitoring System',
      tagline: 'IoT & Web-Based Real-Time Resource Tracking Application',
      category: ['Academic', 'Web', 'Other'],
      problem: 'Unmonitored water tanks in residential and institutional buildings lead to overflow wastage, pump dry-runs, and unrecorded resource loss.',
      idea: 'Combine sensor telemetry with a clean web dashboard to track water volume levels and alert operators when thresholds are breached.',
      solution: 'Designed a telemetry display web interface that renders real-time fill percentages, pump state triggers, and visual water level indicators.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Chart.js', 'Embedded Sensors / Python Mock'],
      features: [
        'Live percentage gauge and animated fluid tank representation',
        'Automatic alert notifications for low (20%) and overflow (90%) thresholds',
        'Historical usage log viewable in simple chart format',
        'Manual and automated pump control state simulator'
      ],
      myContribution: 'Developed the interactive front-end web dashboard, calculated fluid volume visualization math, and designed alert state triggers.',
      outcome: 'Delivered an intuitive academic project interface for monitoring water levels and preventing domestic water wastage.',
      githubUrl: 'https://github.com/Bindhu2711/water-level-monitoring',
      liveDemoUrl: '#projects',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
      featured: false,
      status: 'Completed'
    },
    {
      id: 'study-buddy-matcher',
      title: 'Study Buddy Matcher',
      tagline: 'Student Collaborative Partner Discovery Platform',
      category: ['Web', 'Academic'],
      problem: 'College students often struggle to find peer study partners with matching course schedules, complementary skills, and exam prep goals.',
      idea: 'Build a matching web tool where students filter peers based on shared subjects, study times, and project interests.',
      solution: 'Created a responsive web matching concept that lets users filter profiles, send study invites, and coordinate academic collaboration.',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'Local Storage'],
      features: [
        'Subject and course-based candidate filtering',
        'Profile matching score based on shared academic interests',
        'Interactive request/invite workflow mock',
        'Clean responsive user card grid layout'
      ],
      myContribution: 'Designed user profile schemas, coded filtering algorithms in JavaScript, and styled responsive layout using modern CSS.',
      outcome: 'A lightweight web project designed to foster collaborative peer learning in academic environments.',
      githubUrl: 'https://github.com/Bindhu2711/study-buddy-matcher',
      liveDemoUrl: '#projects',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80',
      featured: false,
      status: 'Completed'
    }
  ],

  impactMetrics: [
    {
      id: 'projects-built',
      label: 'Projects Built',
      value: 5,
      suffix: '+',
      description: 'Hands-on AI/ML & web applications constructed',
      iconName: 'FolderCode'
    },
    {
      id: 'hackathons',
      label: 'Hackathons',
      value: 3,
      suffix: '',
      description: 'Competitive innovation events & coding challenges',
      iconName: 'Trophy'
    },
    {
      id: 'internships',
      label: 'Internships & Trainings',
      value: 2,
      suffix: '',
      description: 'Structured practical learning & industry exposure',
      iconName: 'Briefcase'
    },
    {
      id: 'certifications',
      label: 'Certifications',
      value: 4,
      suffix: '',
      description: 'Verified domain & technical course completions',
      iconName: 'Award'
    },
    {
      id: 'workshops',
      label: 'Workshops & Seminars',
      value: 6,
      suffix: '+',
      description: 'Hands-on technical bootcamps attended',
      iconName: 'GraduationCap'
    },
    {
      id: 'tech-explored',
      label: 'Technologies Explored',
      value: 12,
      suffix: '+',
      description: 'Languages, frameworks, and libraries practiced',
      iconName: 'Cpu'
    }
  ],

  timeline: [
    {
      year: '2024',
      title: 'Commenced B.Tech in CSE (AI & ML)',
      subtitle: 'Vaagdevi College of Engineering',
      description: 'Entered B.Tech Computer Science with specialization in Artificial Intelligence & Machine Learning. Focused on building strong fundamentals in C, Java, and Data Structures.',
      skills: ['C', 'Java', 'Calculus', 'Logic Building'],
      highlight: false
    },
    {
      year: '2025',
      title: 'Core Development & AI Foundations',
      subtitle: 'Projects & Technical Upskilling',
      description: 'Expanded expertise into Python, OpenCV, and Web Development. Created first computer vision project (Fake Currency Detection) and web tools like Study Buddy Matcher.',
      skills: ['Python', 'OpenCV', 'HTML/CSS/JS', 'DBMS'],
      highlight: false
    },
    {
      year: '2026',
      title: 'AI/ML Solutions, Hackathons & Internships (Current)',
      subtitle: '3rd Year Specialization & Practical Leadership',
      description: 'Developed flagship solutions: CAMPUSGUARD AI (Hackathon emergency platform) and SCAMSHIELD (AI scam detection). Participated in regional hackathons and industry virtual internships.',
      skills: ['AI/ML Rules', 'NLP Principles', 'Tailwind CSS', 'System Architecture'],
      highlight: true
    },
    {
      year: '2027 – 2028',
      title: 'Future Milestones & Industry Specialization',
      subtitle: 'Placement Readiness & Advanced Research',
      description: 'Targeting deep learning specialization, capstone industry projects, paper publications, and securing full-time AI/Software Engineering roles.',
      skills: ['Deep Learning', 'PyTorch', 'Cloud Deployment', 'Capstones'],
      highlight: false
    }
  ],

  currentlyBuilding: {
    building: {
      title: 'Smart AI Safety & Verification Modules',
      description: 'Enhancing SCAMSHIELD with refined NLP heuristic filters and lightweight edge detection algorithms.'
    },
    learning: {
      title: 'Neural Networks & PyTorch Fundamentals',
      description: 'Deep diving into deep neural network architectures, loss function optimization, and model evaluation metrics.'
    },
    goal: {
      title: 'AI / Software Internship for Summer 2026',
      description: 'Seeking roles where I can contribute to intelligent software development, data pipelines, and real-world problem solving.'
    },
    exploring: {
      title: 'Computer Vision on Edge Devices',
      description: 'Investigating lightweight OpenCV deployments for real-time video analytics and mobile vision pipelines.'
    }
  },

  achievements: [
    // 🏆 Hackathons
    {
      id: 'ach-mentis-hackathon',
      title: 'MENTIS Hackathon',
      organization: 'MENTIS Innovation Challenge',
      category: 'Hackathons',
      description: 'Developed and presented AI for Early Mental Health & Emotional Well-being solution.',
      badge: 'Participant'
    },
    {
      id: 'ach-dims-hackathon',
      title: 'DIMS Hackathon',
      organization: 'DIMS Technical Challenge',
      category: 'Hackathons',
      description: 'Collaborative problem solving and rapid technical prototyping during the hackathon.',
      badge: 'Participant'
    },

    // 💼 Internships / Training
    {
      id: 'ach-codealpha-internship',
      title: 'CodeAlpha Internship',
      organization: 'CodeAlpha',
      category: 'Internships',
      description: 'Hands-on technical development internship working on practical software tasks.',
      badge: 'Internship'
    },
    {
      id: 'ach-bluestock-internship',
      title: 'Bluestock Internship',
      organization: 'Bluestock',
      category: 'Internships',
      description: 'Technical internship experience focused on software development and domain learning.',
      badge: 'Internship'
    },
    {
      id: 'ach-aws-eduskills',
      title: 'AWS in EduSkills',
      organization: 'AWS Academy / EduSkills Foundation',
      category: 'Internships',
      description: 'Cloud computing foundation and practical technical skills training via the AWS EduSkills initiative.',
      badge: 'Training'
    },

    // 🎓 Workshops
    {
      id: 'ach-iith-workshop',
      title: 'IIT Hyderabad (IITH) Workshop',
      organization: 'IIT Hyderabad',
      category: 'Workshops',
      description: 'Attended specialized technical workshop conducted by IIT Hyderabad covering engineering and technology concepts.',
      badge: 'Workshop'
    },
    {
      id: 'ach-claude-ai-workshop',
      title: 'Claude AI Workshop',
      organization: 'Claude AI Technical Workshop',
      category: 'Workshops',
      description: 'Interactive session on prompt engineering, large language model capabilities, and conversational AI systems.',
      badge: 'Workshop'
    },
    {
      id: 'ach-college-ai-workshop',
      title: 'AI & ML Technical Workshop',
      organization: 'Vaagdevi College of Engineering / Tech Club',
      category: 'Workshops',
      description: 'Completed workshop covering machine learning algorithms, model evaluation, and Python data science tools.',
      badge: 'Workshop'
    },
    {
      id: 'ach-college-web-bootcamp',
      title: 'Web Development Hands-on Bootcamp',
      organization: 'Department of Computer Science',
      category: 'Workshops',
      description: 'Participated in full-stack web basics training focusing on HTML5, modern CSS layouts, and responsive design.',
      badge: 'Workshop'
    },

    // 📜 Certifications
    {
      id: 'ach-python-ds-ai',
      title: 'Python for Data Science & AI Certification',
      organization: 'Online Learning Platform (NPTEL / Coursera)',
      category: 'Certifications',
      description: 'Coursework covering NumPy, Pandas, data processing, and basic algorithm execution in Python.',
      badge: 'Certification'
    },

    // 🌟 Other
    {
      id: 'ach-mahindra-pride',
      title: 'Naandi Mahindra Pride Classroom',
      organization: 'Naandi Foundation & Mahindra Pride',
      category: 'Other',
      description: 'Awarded completion recognition for comprehensive professional skill development, communicative competence, and workplace readiness training.',
      badge: 'Awarded'
    }
  ],

  experiences: [
    {
      id: 'exp-1',
      organization: 'AI & Web Development Project Training',
      role: 'Student Developer Trainee',
      duration: 'June 2025 – August 2025',
      location: 'Vaagdevi College Labs',
      type: 'Training',
      responsibilities: [
        'Collaborated with student team members to develop image analysis scripts in Python using OpenCV.',
        'Structured modular code for data pre-processing and feature extraction in academic projects.',
        'Created intuitive user interfaces for project demonstrations using HTML, CSS, and JavaScript.'
      ],
      skillsGained: ['Python', 'OpenCV', 'JavaScript', 'Teamwork', 'Code Documentation']
    },
    {
      id: 'exp-2',
      organization: 'Virtual Software Engineering Simulation',
      role: 'Participant / Learner',
      duration: '2025',
      location: 'Remote',
      type: 'Simulation',
      responsibilities: [
        'Practiced Git workflow conventions including branch creation, pull requests, and resolving code conflicts.',
        'Analyzed technical specifications to formulate algorithmic solutions for data processing problems.'
      ],
      skillsGained: ['Git/GitHub', 'System Logic', 'Requirements Analysis']
    }
  ],

  beyondCode: [
    {
      category: 'Leadership',
      title: 'Event Organization & Student Mentorship',
      description: 'Actively participating in organizing departmental workshops, coordinating peer study sessions, and managing hackathon team deliverables.',
      highlights: [
        'Coordinated student team responsibilities during technical hackathons',
        'Helped organize department coding events and peer study circles'
      ]
    },
    {
      category: 'Communication',
      title: 'Technical Presentation & Collaboration',
      description: 'Articulating complex technical concepts clearly during project demonstrations, seminar presentations, and documentation writing.',
      highlights: [
        'Delivered project presentations to faculty and peer review panels',
        'Maintained structured READMEs and documentation for repository projects'
      ]
    },
    {
      category: 'Creativity',
      title: 'User-Centric UI/UX & Product Design',
      description: 'Applying clean design aesthetics and logical information architecture so technical projects remain accessible and pleasant to use.',
      highlights: [
        'Designed dark futuristic themes with high contrast readability',
        'Focus on practical user journeys in safety and utility apps'
      ]
    },
    {
      category: 'Problem Solving',
      title: 'Structured Analytical Approach',
      description: 'Breaking down real-world scenarios—such as campus security or fraud detection—into actionable engineering modules.',
      highlights: [
        'Formulated step-by-step problem statements for hackathon challenges',
        'Iteratively refined computer vision thresholds through empirical testing'
      ]
    }
  ],

  github: {
    username: 'Bindhu2711',
    profileUrl: 'https://github.com/Bindhu2711',
    publicRepos: 12,
    topLanguages: [
      { name: 'Python', percentage: 55, color: '#3572A5' },
      { name: 'JavaScript', percentage: 25, color: '#f1e05a' },
      { name: 'HTML/CSS', percentage: 15, color: '#e34c26' },
      { name: 'Java / C', percentage: 5, color: '#b07219' }
    ],
    featuredRepos: [
      {
        name: 'campusguard-ai',
        description: 'Smart Student Safety & Emergency Intelligence Platform developed for campus security.',
        language: 'Python',
        stars: 4,
        forks: 2,
        url: 'https://github.com/Bindhu2711/campusguard-ai'
      },
      {
        name: 'scamshield',
        description: 'AI-powered real-time scam prevention and threat evaluation web interface.',
        language: 'JavaScript',
        stars: 5,
        forks: 1,
        url: 'https://github.com/Bindhu2711/scamshield'
      },
      {
        name: 'fake-currency-detection',
        description: 'OpenCV computer vision pipeline for extracting and matching currency security features.',
        language: 'Python',
        stars: 3,
        forks: 1,
        url: 'https://github.com/Bindhu2711/fake-currency-detection'
      }
    ]
  },

  qaPairs: [
    {
      keywords: ['who', 'about', 'bindhu', 'intro', 'background'],
      question: 'Who is Bindhu?',
      answer: 'Bindhu is a 3rd-year B.Tech Computer Science student specializing in Artificial Intelligence & Machine Learning at Vaagdevi College of Engineering (2024–2028). She builds practical AI and web solutions focused on real-world safety and problem-solving.'
    },
    {
      keywords: ['project', 'projects', 'build', 'built', 'created'],
      question: 'What projects has Bindhu built?',
      answer: 'Bindhu has built several notable projects including CAMPUSGUARD AI (a student safety platform), SCAMSHIELD (AI scam prevention tool), Fake Currency Detection (OpenCV computer vision project), Water Level Monitoring System, and Study Buddy Matcher.'
    },
    {
      keywords: ['skill', 'skills', 'technologies', 'tech', 'stack', 'languages'],
      question: 'What are her AI/ML and technical skills?',
      answer: 'Her core skills include Python, Java, C, Artificial Intelligence, Machine Learning basics, Computer Vision (OpenCV), NLP concepts, HTML/CSS, JavaScript, Git/GitHub, Data Structures, and DBMS.'
    },
    {
      keywords: ['campusguard', 'safety', 'campus'],
      question: 'Tell me about CAMPUSGUARD AI.',
      answer: 'CAMPUSGUARD AI is an emergency intelligence platform for university campuses. It features one-click SOS triggers, geo-fenced safety check-ins, automated risk assessment, and a central command dashboard for campus security.'
    },
    {
      keywords: ['scamshield', 'scam', 'phishing'],
      question: 'Tell me about SCAMSHIELD.',
      answer: 'SCAMSHIELD is an AI-powered scam prevention application that analyzes suspicious URLs and text messages in real time, detecting phishing markers and offering actionable risk scores.'
    },
    {
      keywords: ['hire', 'internship', 'intern', 'why', 'recruiter', 'suitable'],
      question: 'Why would Bindhu be suitable for an internship?',
      answer: 'Bindhu brings strong CS fundamentals (B.Tech CSE AI & ML), practical project-building experience in Python/OpenCV/JS, hands-on hackathon problem solving, and a dedication to writing clean, maintainable code.'
    },
    {
      keywords: ['contact', 'email', 'reach', 'linkedin', 'github'],
      question: 'How can I contact Bindhu?',
      answer: 'You can reach out via Email at bollepellibindhu@gmail.com, or connect on LinkedIn (https://www.linkedin.com/in/bindhu-bollepelli-804a2432b) and view her GitHub (github.com/Bindhu2711).'
    },
    {
      keywords: ['education', 'college', 'degree', 'university', 'cgpa'],
      question: 'What is her education background?',
      answer: 'Bindhu is pursuing her B.Tech degree in Computer Science & Engineering (AI & ML) at Vaagdevi College of Engineering, spanning 2024 to 2028.'
    },
    {
      keywords: ['achievement', 'achievements', 'hackathon', 'hackathons', 'internship', 'workshop', 'certifications', 'award'],
      question: 'What hackathons, internships, and achievements has Bindhu completed?',
      answer: 'Bindhu participated in the MENTIS Hackathon (AI for Early Mental Health) and DIMS Hackathon, completed internships/training with CodeAlpha, Bluestock, and AWS in EduSkills, attended workshops at IIT Hyderabad (IITH) and Claude AI, earned the Python for Data Science & AI certification, and was awarded the Naandi Mahindra Pride Classroom completion.'
    }
  ]
};
