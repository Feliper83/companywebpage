#!/usr/bin/env pwsh
# Optimize images for web using imagemagick

Write-Host "🖼️  Image Optimization Script" -ForegroundColor Cyan
Write-Host "=============================" -ForegroundColor Cyan
Write-Host ""

# Check if imagemagick is installed
$magickInstalled = Get-Command magick -ErrorAction SilentlyContinue

if (-not $magickInstalled) {
    Write-Host "❌ ImageMagick not installed!" -ForegroundColor Red
    Write-Host ""
    Write-Host "Install with:" -ForegroundColor Yellow
    Write-Host "   choco install imagemagick" -ForegroundColor White
    Write-Host "   OR download from: https://imagemagick.org/script/download.php" -ForegroundColor White
    Write-Host ""
    Write-Host "Alternative: Use online tools like tinypng.com or squoosh.app" -ForegroundColor Yellow
    exit 1
}

Write-Host "✅ ImageMagick found" -ForegroundColor Green
Write-Host ""

$sourceDir = "public/images"
$targetDir = "public/images-optimized"

# Create target directory
New-Item -ItemType Directory -Path $targetDir -Force | Out-Null

Write-Host "📁 Source: $sourceDir" -ForegroundColor White
Write-Host "📁 Target: $targetDir" -ForegroundColor White
Write-Host ""

$totalOriginal = 0
$totalOptimized = 0
$filesProcessed = 0

Get-ChildItem -Path $sourceDir -Recurse -Include *.jpg,*.jpeg,*.png | ForEach-Object {
    $originalSize = $_.Length
    $relativePath = $_.FullName.Substring($sourceDir.Length + 1)
    $targetPath = Join-Path $targetDir $relativePath
    $targetFolder = Split-Path $targetPath -Parent
    
    # Create subfolder if doesn't exist
    if (-not (Test-Path $targetFolder)) {
        New-Item -ItemType Directory -Path $targetFolder -Force | Out-Null
    }
    
    Write-Host "⚙️  Processing: $($_.Name)..." -ForegroundColor Yellow
    
    # Optimize based on file type
    if ($_.Extension -eq ".png") {
        # PNG: Reduce colors, strip metadata
        magick $_.FullName -strip -quality 85 -colors 256 $targetPath
    } else {
        # JPG/JPEG: Compress, resize if too large, strip metadata
        $width = (magick identify -format "%w" $_.FullName)
        if ([int]$width -gt 1920) {
            # Resize large images to max 1920px width
            magick $_.FullName -strip -quality 80 -resize "1920>" $targetPath
        } else {
            # Just compress
            magick $_.FullName -strip -quality 80 $targetPath
        }
    }
    
    $optimizedSize = (Get-Item $targetPath).Length
    $savings = [math]::Round(($originalSize - $optimizedSize) / $originalSize * 100, 1)
    
    $totalOriginal += $originalSize
    $totalOptimized += $optimizedSize
    $filesProcessed++
    
    Write-Host "   Original: $([math]::Round($originalSize/1KB, 2)) KB" -ForegroundColor White
    Write-Host "   Optimized: $([math]::Round($optimizedSize/1KB, 2)) KB" -ForegroundColor Green
    Write-Host "   Savings: $savings%" -ForegroundColor Cyan
    Write-Host ""
}

$totalSavings = [math]::Round(($totalOriginal - $totalOptimized) / $totalOriginal * 100, 1)

Write-Host "✅ Optimization Complete!" -ForegroundColor Green
Write-Host ""
Write-Host "📊 Summary:" -ForegroundColor Cyan
Write-Host "   Files processed: $filesProcessed" -ForegroundColor White
Write-Host "   Original size: $([math]::Round($totalOriginal/1MB, 2)) MB" -ForegroundColor White
Write-Host "   Optimized size: $([math]::Round($totalOptimized/1MB, 2)) MB" -ForegroundColor Green
Write-Host "   Total savings: $totalSavings%" -ForegroundColor Cyan
Write-Host ""
Write-Host "💡 Next steps:" -ForegroundColor Yellow
Write-Host "   1. Review images in: $targetDir" -ForegroundColor White
Write-Host "   2. If satisfied, replace originals:" -ForegroundColor White
Write-Host "      Remove-Item -Recurse public/images" -ForegroundColor Gray
Write-Host "      Rename-Item public/images-optimized public/images" -ForegroundColor Gray
Write-Host "   3. Rebuild and redeploy:" -ForegroundColor White
Write-Host "      npm run client:build" -ForegroundColor Gray
Write-Host "      npm run deploy:frontend" -ForegroundColor Gray
Write-Host ""

