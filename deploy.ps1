# LatitudeOPS Deployment Script

Write-Host ""
Write-Host "================================="
Write-Host " LatitudeOPS Deployment"
Write-Host "================================="
Write-Host ""

Write-Host "Current Git Status:"
Write-Host "-------------------"

git status

Write-Host ""

$confirm = Read-Host "Continue with deployment? (Y/N)"

if ($confirm -ne "Y") {

    Write-Host ""
    Write-Host "Deployment cancelled."
    pause
    exit

}


Write-Host ""
$commitMessage = Read-Host "Enter commit message"


Write-Host ""
Write-Host "Adding files..."

git add .


Write-Host ""
Write-Host "Creating commit..."

git commit -m "$commitMessage"


Write-Host ""
Write-Host "Pushing to GitHub..."

git push


Write-Host ""
Write-Host "================================="
Write-Host " Deployment Complete"
Write-Host " Cloudflare will automatically rebuild"
Write-Host "================================="

pause
