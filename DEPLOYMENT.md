# 🚀 Deployment Guide - Cybevite

Complete step-by-step guide to deploy Cybevite to AWS.

## Prerequisites

- [x] AWS Account with admin access
- [x] AWS CLI installed and configured
- [x] Serverless Framework installed globally
- [x] Node.js 20+ installed
- [x] Neon PostgreSQL database created

---

## Phase 1: Database Setup (Neon)

### 1.1 Create Neon Account

1. Go to https://neon.tech
2. Sign up (free tier available)
3. Create new project: "cybevite"
4. Copy connection string

### 1.2 Configure Environment Variables

Create `src/server/.env`:

```env
DATABASE_URL="postgresql://user:password@ep-xxx.neon.tech/neondb?sslmode=require"
NODE_ENV=production
```

### 1.3 Seed Database

**Option A: Via SQL file directly in Neon console**
1. Go to Neon.tech dashboard → SQL Editor
2. Copy contents of `src/server/db/seed.sql`
3. Execute the SQL

**Option B: Via seed script**
```bash
cd src/server
npm run seed
cd ../..
```

---

## Phase 2: Backend Deployment (Lambda)

### 2.1 Install Serverless Framework

```bash
npm install -g serverless
```

### 2.2 Configure AWS Credentials

```bash
aws configure
# Enter:
# - AWS Access Key ID
# - AWS Secret Access Key  
# - Region: us-east-1
# - Output: json
```

### 2.3 Install Dependencies in Backend

```bash
cd src/server
npm install
npm install --save-dev serverless-offline
cd ../..
```

### 2.4 Deploy Backend

**Option A: Using script (recommended)**
```powershell
.\deploy-backend.ps1 -Stage prod
```

**Option B: Manual**
```bash
cd src/server
serverless deploy --stage prod
cd ../..
```

### 2.5 Save API URL

After deployment, you'll see:
```
endpoints:
  ANY - https://abc123.execute-api.us-east-1.amazonaws.com
```

**Save this URL!** You'll need it for the frontend.

---

## Phase 3: Frontend Deployment (S3)

### 3.1 Update API URL in Frontend

**Option A: Environment variable (recommended)**

Create `.env` in project root:
```env
VITE_API_URL=https://abc123.execute-api.us-east-1.amazonaws.com
```

**Option B: Update vite.config.js**

If deploying to production, update the proxy or create environment-specific config.

### 3.2 Deploy to S3

**Option A: Using script (recommended)**
```powershell
.\deploy-s3.ps1 -BucketName "cybevite-prod" -Region "us-east-1"
```

**Option B: Manual**
```bash
# Build
npm run client:build

# Create bucket
aws s3 mb s3://cybevite-prod --region us-east-1

# Configure static hosting
aws s3 website s3://cybevite-prod \
  --index-document index.html \
  --error-document index.html

# Upload files
aws s3 sync dist/ s3://cybevite-prod --delete

# Make public
aws s3api put-bucket-policy --bucket cybevite-prod --policy '{
  "Version": "2012-10-17",
  "Statement": [{
    "Sid": "PublicReadGetObject",
    "Effect": "Allow",
    "Principal": "*",
    "Action": "s3:GetObject",
    "Resource": "arn:aws:s3:::cybevite-prod/*"
  }]
}'
```

### 3.3 Access Your Site

Your site is now live at:
```
http://cybevite-prod.s3-website-us-east-1.amazonaws.com
```

---

## Phase 4: CloudFront Setup (Optional but Recommended)

### 4.1 Create CloudFront Distribution

1. Go to AWS Console → CloudFront
2. Click "Create Distribution"
3. Configure:
   - **Origin domain**: `cybevite-prod.s3-website-us-east-1.amazonaws.com`
   - **Origin protocol**: HTTP only (S3 website endpoint)
   - **Viewer protocol policy**: Redirect HTTP to HTTPS
   - **Allowed HTTP methods**: GET, HEAD, OPTIONS, PUT, POST, PATCH, DELETE
   - **Cache policy**: CachingOptimized
4. Click "Create distribution"

### 4.2 Configure Custom Error Pages

In CloudFront distribution settings → Error pages:
- **Error code**: 403, **Response path**: `/index.html`, **Response code**: 200
- **Error code**: 404, **Response path**: `/index.html`, **Response code**: 200

This is needed for SPA routing to work correctly.

### 4.3 Get Distribution Info

- **Distribution ID**: `E1234ABCD5678` (save this)
- **CloudFront URL**: `https://d111111abcdef8.cloudfront.net`

### 4.4 Update Deploy Script

Edit `deploy-s3.ps1` line 7:
```powershell
[string]$DistributionId = "E1234ABCD5678"
```

Now future deploys will automatically invalidate the cache.

---

## Testing

### Test Backend

```bash
# Test API endpoint
curl https://your-api-url.execute-api.us-east-1.amazonaws.com/api/sections?lang_code=en

# Should return JSON data
```

### Test Frontend

Visit your CloudFront or S3 URL in browser and verify:
- [ ] Homepage loads
- [ ] Navigation works
- [ ] API calls work (check Network tab)
- [ ] Language switching works

---

## Troubleshooting

### Lambda Deployment Issues

**Error: "Database connection failed"**
- Check DATABASE_URL in `src/server/.env`
- Verify Neon database is active and accessible
- Check CloudWatch logs: AWS Console → Lambda → Monitor → View logs

**Error: "Runtime not supported"**
- Make sure you have `nodejs20.x` in serverless.yml
- Update Node.js locally if needed

### S3 Deployment Issues

**Error: "Access Denied"**
- Check AWS credentials: `aws sts get-caller-identity`
- Verify IAM user has S3 permissions

**Error: "Bucket already exists"**
- Bucket names are globally unique
- Try a different bucket name

### Frontend Not Loading

**Blank page or 404**
- Check browser console for errors
- Verify bucket policy is public
- Check CloudFront error pages configuration

### API Not Working (CORS errors)

**CORS errors in browser console**
- Verify CORS is configured in backend (`src/server/index.js`)
- Check API Gateway CORS settings
- Ensure API URL is correct in frontend

---

## Monitoring

### CloudWatch Logs

View Lambda logs:
```bash
serverless logs -f api --stage prod --tail
```

Or in AWS Console:
1. Go to Lambda → Functions → cybevite-api-prod-api
2. Monitor tab → View logs in CloudWatch

### CloudWatch Metrics

Monitor:
- Lambda invocations
- Lambda errors
- Lambda duration
- API Gateway 4xx/5xx errors

---

## Costs

**Estimated monthly costs (low traffic ~1000 requests/day):**

| Service | Free Tier | After Free Tier |
|---------|-----------|-----------------|
| Lambda | 1M requests/month | $0.20/1M requests |
| API Gateway | 1M requests/month | $1.00/1M requests |
| S3 Storage | 5GB | $0.023/GB |
| S3 Requests | 2000 PUT, 20000 GET | $0.005/1000 PUT |
| CloudFront | 1TB transfer | $0.085/GB |
| Neon Database | 0.5GB free | $0 (free tier) |

**Total estimated: $0-5/month** (within free tier)
**After first year: $5-15/month** (low traffic)

---

## Updating the Application

### Update Backend

```powershell
# Make changes to src/server/
.\deploy-backend.ps1 -Stage prod
```

### Update Frontend

```powershell
# Make changes to src/
.\deploy-s3.ps1 -BucketName "cybevite-prod"
```

### Quick Update Both

```bash
npm run deploy:all
```

---

## Rollback

### Rollback Backend

```bash
cd src/server
serverless rollback --timestamp TIMESTAMP
# Find timestamp in: serverless deploy list
```

### Rollback Frontend

If S3 versioning is enabled:
1. AWS Console → S3 → cybevite-prod
2. Show versions
3. Restore previous version

---

## CI/CD Setup (Optional)

For automated deployments on git push, see GitHub Actions example in `.github/workflows/deploy.yml` (to be created).

---

## Security Best Practices

- [ ] Enable CloudFront with HTTPS only
- [ ] Use AWS Secrets Manager for sensitive data
- [ ] Enable S3 bucket versioning
- [ ] Set up CloudWatch alarms
- [ ] Enable AWS CloudTrail for auditing
- [ ] Use least-privilege IAM policies
- [ ] Enable MFA on AWS account

---

## Next Steps

- [ ] Set up custom domain with Route 53
- [ ] Configure SSL certificate with ACM
- [ ] Set up CI/CD with GitHub Actions
- [ ] Configure CloudWatch alarms
- [ ] Set up automated backups
- [ ] Implement monitoring dashboard
- [ ] Add WAF (Web Application Firewall)

---

## Support

For issues:
1. Check CloudWatch logs
2. Review this documentation
3. Check Serverless Framework docs
4. Open issue on GitHub

---

## Resources

- **Serverless Framework**: https://www.serverless.com/framework/docs
- **AWS Lambda**: https://docs.aws.amazon.com/lambda/
- **Neon PostgreSQL**: https://neon.tech/docs
- **AWS CLI**: https://aws.amazon.com/cli/

---

Last updated: 2025

