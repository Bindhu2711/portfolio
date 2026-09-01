# Push All Portfolio Repositories to GitHub (Bindhu2711)
param(
    [string]$token = ""
)

$gitPath = "C:\Users\bolle\PortableGit\cmd\git.exe"
$repos = @(
    @{ Name = "portfolio"; Path = "c:\Users\bolle\OneDrive\Desktop\portfolio" },
    @{ Name = "campusguard-ai"; Path = "c:\Users\bolle\OneDrive\Desktop\portfolio\projects\campusguard-ai" },
    @{ Name = "scamshield"; Path = "c:\Users\bolle\OneDrive\Desktop\portfolio\projects\scamshield" },
    @{ Name = "fake-currency-detection"; Path = "c:\Users\bolle\OneDrive\Desktop\portfolio\projects\fake-currency-detection" },
    @{ Name = "water-level-monitoring"; Path = "c:\Users\bolle\OneDrive\Desktop\portfolio\projects\water-level-monitoring" },
    @{ Name = "study-buddy-matcher"; Path = "c:\Users\bolle\OneDrive\Desktop\portfolio\projects\study-buddy-matcher" }
)

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Pushing Repositories to github.com/Bindhu2711 " -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

foreach ($repo in $repos) {
    Write-Host "`nProcessing: $($repo.Name)..." -ForegroundColor Yellow
    Set-Location $repo.Path
    
    if ($token) {
        $authenticatedUrl = "https://Bindhu2711:$token@github.com/Bindhu2711/$($repo.Name).git"
        & $gitPath push -u $authenticatedUrl main --force
    } else {
        & $gitPath push -u origin main
    }
}

Write-Host "`nFinished processing all 6 repositories!" -ForegroundColor Green
