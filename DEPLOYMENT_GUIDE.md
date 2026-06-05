# DEPLOYMENT_GUIDE.md

# Nutrition Food App - Complete Deployment Guide

This guide covers everything you need to know to deploy your Nutrition Food App to production.

## Table of Contents
1. [Pre-Deployment Checklist](#pre-deployment-checklist)
2. [Local Setup Verification](#local-setup-verification)
3. [Heroku Deployment](#heroku-deployment)
4. [Render Deployment](#render-deployment)
5. [Production Best Practices](#production-best-practices)
6. [Monitoring & Maintenance](#monitoring--maintenance)

---

## Pre-Deployment Checklist

Before deploying, ensure you have:

- [ ] Node.js v14+ installed locally
- [ ] MongoDB Atlas account (or local MongoDB)
- [ ] Git installed and repository initialized
- [ ] All dependencies in package.json
- [ ] Environment variables configured
- [ ] Error handling implemented
- [ ] CORS properly configured
- [ ] API endpoints tested locally

---

## Local Setup Verification

### 1. Install Dependencies
```bash
npm install
```

### 2. Create .env File
```bash
cp .env.example .env
```

### 3. Configure MongoDB

**Option A: MongoDB Atlas (Cloud)**
1. Go to https://www.mongodb.com/cloud/atlas
2. Create a free account
3. Create a new cluster
4. Get your connection string
5. Paste into MONGO_URI in .env

**Example:**
```
MONGO_URI=mongodb+srv://username:password@cluster0.mongodb.net/nutrition-db?retryWrites=true&w=majority
```

**Option B: Local MongoDB**
```
MONGO_URI=mongodb://localhost:27017/nutrition-db
```

### 4. Test Locally
```bash
# Development
npm run dev

# Test endpoints
curl http://localhost:5000/api/health
# Should return: { "status": "Server is running" }
```

---

## Heroku Deployment

### Step 1: Install Heroku CLI
```bash
# macOS
brew tap heroku/brew && brew install heroku

# Windows
choco install heroku-cli

# Linux
sudo snap install heroku --classic
```

### Step 2: Login to Heroku
```bash
heroku login
```

### Step 3: Create Heroku App
```bash
heroku create your-app-name
```

Replace `your-app-name` with a unique name (e.g., `nutrition-food-app-2026`).

### Step 4: Add MongoDB Atlas

1. Go to MongoDB Atlas
2. Create a database user (if not exists)
3. Get the connection string
4. Set as environment variable

```bash
heroku config:set MONGO_URI="mongodb+srv://username:password@cluster.mongodb.net/nutrition-db?retryWrites=true&w=majority"
```

### Step 5: Set Other Environment Variables
```bash
heroku config:set JWT_SECRET="your-super-secret-key-12345-change-this"
heroku config:set NODE_ENV="production"
heroku config:set PORT=5000
```

**Generate a strong JWT_SECRET:**
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Step 6: Deploy
```bash
git push heroku main
```

Or if your branch is different:
```bash
git push heroku your-branch-name:main
```

### Step 7: Verify Deployment
```bash
# View logs
heroku logs --tail

# Test your app
curl https://your-app-name.herokuapp.com/api/health
```

### Step 8: Monitor Your App
```bash
# View all config
heroku config

# Restart app
heroku restart

# Scale dynos (if needed)
heroku ps:scale web=1
```

---

## Render Deployment

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### Step 2: Create Render Account
1. Go to https://render.com
2. Sign up with GitHub
3. Authorize Render to access your repositories

### Step 3: Create New Web Service
1. Click "New +" → "Web Service"
2. Select your GitHub repository
3. Configure:
   - **Name:** `nutrition-food-app`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Plan:** Free or Paid

### Step 4: Add Environment Variables
In the "Environment" section, add:

```
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/nutrition-db?retryWrites=true&w=majority
JWT_SECRET=your-super-secret-key-12345
NODE_ENV=production
PORT=5000
```

### Step 5: Deploy
Click "Create Web Service" - deployment starts automatically!

### Step 6: Monitor
- View logs in Render dashboard
- Test: `https://your-app-name.onrender.com/api/health`

---

## Railway Deployment

### Step 1: Create Account
Go to https://railway.app and sign up with GitHub

### Step 2: New Project
1. Click "New Project"
2. Select "Deploy from GitHub repo"
3. Choose your repository

### Step 3: Configure
- Detect Node.js automatically
- Add MongoDB add-on
- Set environment variables

### Step 4: Deploy
Railway deploys automatically on every push!

---

## Vercel Deployment (Backend Only)

Note: Vercel is primarily for static sites. For backend, use Heroku/Render instead.

If you want to use Vercel, create `vercel.json`:

```json
{
  "version": 2,
  "builds": [
    {
      "src": "server.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/(.*)",
      "dest": "server.js"
    }
  ]
}
```

Then deploy:
```bash
npm i -g vercel
vercel
```

---

## Production Best Practices

### 1. Security

**Update .env Variables:**
```bash
# Generate secure keys
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"

# Use in production .env
JWT_SECRET=your-generated-key-here
```

**Enable HTTPS:**
- All cloud platforms provide free SSL
- Redirect HTTP to HTTPS
- Check your provider's settings

**Secure MongoDB:**
1. Use IP Whitelist in MongoDB Atlas
2. Create strong username/password
3. Enable encryption at rest
4. Regular backups enabled

### 2. Code Optimization

**Install Dependencies Only (Production)**
```bash
npm install --production
```

**Add to package.json:**
```json
{
  "engines": {
    "node": "18.x"
  }
}
```

### 3. Database Optimization

**Create Indexes in MongoDB:**
```javascript
// In your MongoDB shell
db.users.createIndex({ email: 1 });
db.meals.createIndex({ userId: 1 });
db.foods.createIndex({ name: 1 });
```

**Enable Query Monitoring:**
- MongoDB Atlas → Metrics
- Watch for slow queries
- Optimize accordingly

### 4. Error Handling

**Already implemented in your code:**
- Try-catch blocks in controllers
- Error middleware in server.js
- Proper HTTP status codes

**Add logging for production:**
```javascript
// server.js - Add logging
app.use((err, req, res, next) => {
  console.error(`[ERROR] ${new Date().toISOString()}: ${err.message}`);
  res.status(500).json({ message: 'Server error' });
});
```

### 5. Performance

**Compress responses:**
```bash
npm install compression
```

```javascript
// server.js
import compression from 'compression';
app.use(compression());
```

**Set connection limits:**
```javascript
// In routes
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

---

## Monitoring & Maintenance

### 1. Health Checks
Your app includes a health endpoint:
```bash
curl https://your-app-name.herokuapp.com/api/health
```

### 2. Error Tracking (Optional)
Integrate Sentry for error tracking:

```bash
npm install @sentry/node
```

```javascript
// server.js
import * as Sentry from "@sentry/node";

Sentry.init({ dsn: "YOUR_SENTRY_DSN" });
app.use(Sentry.Handlers.errorHandler());
```

### 3. Monitoring Logs

**Heroku:**
```bash
heroku logs --tail
heroku logs --tail -n 100  # Last 100 lines
```

**Render:**
View in dashboard or:
```bash
curl https://api.render.com/v1/services/{id}/events
```

### 4. Database Monitoring

**MongoDB Atlas:**
1. Go to Metrics tab
2. Monitor:
   - Query time
   - Connections
   - Storage usage
   - CPU/Memory

### 5. Regular Maintenance

**Weekly:**
- Check error logs
- Monitor performance metrics
- Verify backups

**Monthly:**
- Update dependencies: `npm update`
- Audit security: `npm audit`
- Review database usage

**Quarterly:**
- Major dependency updates
- Performance optimization
- Security review

---

## Troubleshooting Deployment

### App Crashes on Deploy

**Check Logs:**
```bash
heroku logs --tail  # Heroku
# or view Render dashboard
```

**Common Issues:**
1. Missing environment variables
2. Port binding error
3. Database connection failed
4. Node version mismatch

**Solution:**
```bash
heroku config  # View env variables
heroku restart  # Restart app
```

### Database Connection Issues

**Verify Connection String:**
- Check MONGO_URI is correct
- Ensure IP is whitelisted in MongoDB Atlas
- Verify credentials are correct

**Test Connection:**
```bash
node -e "const mongoose = require('mongoose'); mongoose.connect(process.env.MONGO_URI).then(() => console.log('Connected!')).catch(e => console.log(e.message));"
```

### High Memory/CPU Usage

**Optimize:**
1. Add database indexes
2. Implement caching
3. Reduce query size limits
4. Add compression middleware

### Slow API Responses

**Diagnose:**
1. Check database query performance
2. Monitor network latency
3. Enable query logging in MongoDB
4. Add response compression

**Solutions:**
- Add indexes to frequently queried fields
- Implement caching (Redis)
- Optimize algorithms
- Add pagination for large datasets

---

## Next Steps

1. ✅ Deploy to production
2. ✅ Set up monitoring
3. ✅ Configure backups
4. ✅ Set up CI/CD pipeline
5. ✅ Document your API
6. ✅ Create user documentation

---

## Resources

- [Heroku Node.js Guide](https://devcenter.heroku.com/articles/nodejs-support)
- [MongoDB Atlas Documentation](https://docs.atlas.mongodb.com/)
- [Render Docs](https://render.com/docs)
- [Express.js Best Practices](https://expressjs.com/en/advanced/best-practice-security.html)
- [Node.js Security Checklist](https://nodejs.org/en/docs/guides/security/)

---

## Support

For deployment issues:
1. Check the troubleshooting section
2. Review service logs
3. Check environment variables
4. Verify database connection
5. Create an issue on GitHub

Good luck with your deployment! 🚀
