#!/usr/bin/env pwsh
# Create CloudFront Distribution for S3 Static Website

param(
    [string]$BucketName = "cybevite-frontend-prod",
    [string]$Region = "us-east-1"
)

Write-Host "🌐 Creating CloudFront Distribution" -ForegroundColor Cyan
Write-Host "====================================" -ForegroundColor Cyan
Write-Host ""

$bucketWebsiteUrl = "$BucketName.s3-website-$Region.amazonaws.com"
$callerRef = "cybevite-$(Get-Date -Format 'yyyyMMddHHmmss')"

Write-Host "📦 S3 Website URL: $bucketWebsiteUrl" -ForegroundColor White
Write-Host ""

# Create CloudFront distribution configuration as PowerShell object
$config = @{
    CallerReference = $callerRef
    Comment = "Cybevite Frontend Distribution"
    Enabled = $true
    Origins = @{
        Quantity = 1
        Items = @(
            @{
                Id = "S3-Website-$BucketName"
                DomainName = $bucketWebsiteUrl
                CustomOriginConfig = @{
                    HTTPPort = 80
                    HTTPSPort = 443
                    OriginProtocolPolicy = "http-only"
                }
            }
        )
    }
    DefaultCacheBehavior = @{
        TargetOriginId = "S3-Website-$BucketName"
        ViewerProtocolPolicy = "redirect-to-https"
        AllowedMethods = @{
            Quantity = 2
            Items = @("GET", "HEAD")
            CachedMethods = @{
                Quantity = 2
                Items = @("GET", "HEAD")
            }
        }
        Compress = $true
        CachePolicyId = "658327ea-f89d-4fab-a63d-7e88639e58f6"
        MinTTL = 0
        DefaultTTL = 86400
        MaxTTL = 31536000
    }
    CustomErrorResponses = @{
        Quantity = 2
        Items = @(
            @{
                ErrorCode = 403
                ResponsePagePath = "/index.html"
                ResponseCode = "200"
                ErrorCachingMinTTL = 300
            },
            @{
                ErrorCode = 404
                ResponsePagePath = "/index.html"
                ResponseCode = "200"
                ErrorCachingMinTTL = 300
            }
        )
    }
    PriceClass = "PriceClass_100"
}

Write-Host "⏳ Creating CloudFront distribution..." -ForegroundColor Yellow
Write-Host "(This takes 10-15 minutes to propagate globally)" -ForegroundColor Yellow
Write-Host ""

# Convert to JSON and save
$config | ConvertTo-Json -Depth 10 | Out-File -FilePath "cloudfront-config.json" -Encoding utf8

try {
    $result = aws cloudfront create-distribution --distribution-config file://cloudfront-config.json | ConvertFrom-Json
    
    $distributionId = $result.Distribution.Id
    $domainName = $result.Distribution.DomainName
    
    Write-Host "✅ CloudFront Distribution Created!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Distribution Details:" -ForegroundColor Cyan
    Write-Host "   Distribution ID: $distributionId" -ForegroundColor White
    Write-Host "   Domain Name: $domainName" -ForegroundColor White
    Write-Host "   Status: Deploying (wait 10-15 min)" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "🌐 Your site will be available at:" -ForegroundColor Green
    Write-Host "   https://$domainName" -ForegroundColor White
    Write-Host ""
    Write-Host "💡 Next Steps:" -ForegroundColor Cyan
    Write-Host "   1. Wait for status to change to 'Deployed'" -ForegroundColor White
    Write-Host "   2. Check status: aws cloudfront get-distribution --id $distributionId" -ForegroundColor White
    Write-Host "   3. Update deploy scripts with Distribution ID" -ForegroundColor White
    Write-Host ""
    
    # Save to file for reference
    @{
        DistributionId = $distributionId
        DomainName = $domainName
        BucketName = $BucketName
        Created = (Get-Date).ToString()
    } | ConvertTo-Json | Out-File "cloudfront-info.json"
    
    Write-Host "✅ Info saved to cloudfront-info.json" -ForegroundColor Green
    
} catch {
    Write-Host "❌ Error creating distribution" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    exit 1
} finally {
    Remove-Item "cloudfront-config.json" -ErrorAction SilentlyContinue
}
