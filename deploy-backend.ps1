#!/usr/bin/env pwsh
# Deploy Backend to AWS Lambda

param(
    [string]$Stage = "dev"
)

Write-Host "🚀 Cybevite Backend Deployment" -ForegroundColor Cyan
Write-Host "===============================" -ForegroundColor Cyan
Write-Host "Stage: $Stage" -ForegroundColor White
Write-Host ""

# Check if serverless is installed
$serverlessInstalled = Get-Command serverless -ErrorAction SilentlyContinue

if (-not $serverlessInstalled) {
    Write-Host "❌ Serverless Framework not found!" -ForegroundColor Red
    Write-Host "Install with: npm install -g serverless" -ForegroundColor Yellow
    exit 1
}

# Check if .env exists
if (-not (Test-Path "src/server/.env")) {
    Write-Host "⚠️  Warning: .env file not found in src/server/" -ForegroundColor Yellow
    Write-Host "Make sure DATABASE_URL is configured" -ForegroundColor Yellow
    Write-Host ""
}

# Navigate to server directory
Set-Location src/server

# Install dependencies if needed
if (-not (Test-Path "node_modules")) {
    Write-Host "📦 Installing dependencies..." -ForegroundColor Yellow
    npm install
}

Write-Host "✅ Dependencies ready (using pg directly)" -ForegroundColor Green
Write-Host ""

# Deploy with Serverless Framework
Write-Host "🚀 Deploying to AWS Lambda..." -ForegroundColor Yellow
Write-Host ""
serverless deploy --stage $Stage --verbose

if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "🎉 Backend Deployed Successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Check the output above for your API endpoint URL" -ForegroundColor Cyan
    Write-Host "Save this URL - you'll need it for frontend configuration" -ForegroundColor Yellow
} else {
    Write-Host ""
    Write-Host "❌ Deployment failed!" -ForegroundColor Red
    Set-Location ../..
    exit 1
}

# Return to root
Set-Location ../..

