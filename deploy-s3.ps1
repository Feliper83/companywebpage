#!/usr/bin/env pwsh
# Deploy Frontend to S3 + CloudFront
# Script para Windows PowerShell

param(
    [string]$BucketName = "cybevite-frontend-prod",
    [string]$Region = "us-east-1",
    [string]$DistributionId = "E1JZ844ZWDOEY2"
)

Write-Host "🚀 Cybevite Frontend Deployment" -ForegroundColor Cyan
Write-Host "================================" -ForegroundColor Cyan
Write-Host ""

# Build frontend
Write-Host "📦 Building frontend..." -ForegroundColor Yellow
npm run client:build

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completed!" -ForegroundColor Green
Write-Host ""

# Check if bucket exists
Write-Host "🔍 Checking S3 bucket..." -ForegroundColor Yellow
$bucketExists = aws s3 ls "s3://$BucketName" 2>&1

if ($LASTEXITCODE -ne 0) {
    Write-Host "⚠️  Bucket doesn't exist. Creating..." -ForegroundColor Yellow
    aws s3 mb "s3://$BucketName" --region $Region
    
    # Configure as static website
    aws s3 website "s3://$BucketName" `
        --index-document index.html `
        --error-document index.html
    
    Write-Host "✅ Bucket created!" -ForegroundColor Green
}

# Sync files to S3
Write-Host "☁️  Uploading to S3..." -ForegroundColor Yellow
aws s3 sync dist/ "s3://$BucketName" `
    --delete `
    --cache-control "public, max-age=31536000" `
    --exclude "*.html" `
    --exclude "*.json"

# Upload HTML with no-cache (for SPA routing)
aws s3 sync dist/ "s3://$BucketName" `
    --exclude "*" `
    --include "*.html" `
    --include "*.json" `
    --cache-control "no-cache"

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Upload failed!" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Upload completed!" -ForegroundColor Green
Write-Host ""

# Make bucket public (if needed)
Write-Host "🔓 Setting bucket policy..." -ForegroundColor Yellow
$policy = @"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::$BucketName/*"
    }
  ]
}
"@

$policy | Out-File -FilePath "bucket-policy-temp.json" -Encoding utf8
aws s3api put-bucket-policy --bucket $BucketName --policy file://bucket-policy-temp.json
Remove-Item "bucket-policy-temp.json"

Write-Host "✅ Bucket policy updated!" -ForegroundColor Green
Write-Host ""

# Invalidate CloudFront cache (if distribution exists)
if ($DistributionId) {
    Write-Host "🔄 Invalidating CloudFront cache..." -ForegroundColor Yellow
    aws cloudfront create-invalidation `
        --distribution-id $DistributionId `
        --paths "/*"
    Write-Host "✅ Cache invalidated!" -ForegroundColor Green
    Write-Host ""
}

Write-Host "🎉 Deployment Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📍 Website URL:" -ForegroundColor Cyan
Write-Host "   http://$BucketName.s3-website-$Region.amazonaws.com" -ForegroundColor White
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  1. Configure CloudFront for HTTPS and better performance" -ForegroundColor White
Write-Host "  2. Set up custom domain (optional)" -ForegroundColor White
Write-Host "  3. Update DistributionId parameter for cache invalidation" -ForegroundColor White

