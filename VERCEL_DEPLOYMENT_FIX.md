# 🚀 Fix Vercel Deployment - Telegram Contact Form

## Problem
The contact form shows "Network error. Please try again later." when deployed on Vercel.

## Root Cause
The Vercel serverless function (`api/send-email.js`) needs environment variables that are not configured.

## ✅ Solution: Configure Vercel Environment Variables

### Step 1: Log into Vercel
1. Go to [https://vercel.com](https://vercel.com)
2. Sign in to your account
3. Select your portfolio project

### Step 2: Add Environment Variables
1. Click on **"Settings"** tab
2. Click on **"Environment Variables"** in the left sidebar
3. Add the following two variables:

   **Variable 1:**
   - Name: `TELEGRAM_BOT_TOKEN`
   - Value: `8220132078:AAGKRnRm_MTHHPOdvqZ4zoWzAxIUvBFnhWk`
   - Environments: ✅ Production, ✅ Preview, ✅ Development
   
   **Variable 2:**
   - Name: `TELEGRAM_CHAT_ID`
   - Value: `500761652`
   - Environments: ✅ Production, ✅ Preview, ✅ Development

4. Click **"Save"** for each variable

### Step 3: Redeploy Your Application
After adding the environment variables, you need to trigger a new deployment:

**Option A: Push a small change**
```bash
git commit --allow-empty -m "Trigger Vercel redeploy with env vars"
git push
```

**Option B: Redeploy from Vercel Dashboard**
1. Go to **"Deployments"** tab
2. Click the three dots (...) on the latest deployment
3. Click **"Redeploy"**
4. Confirm the redeployment

### Step 4: Test the Deployment
1. Wait for deployment to complete (usually 1-2 minutes)
2. Visit your live site
3. Click on the email/contact icon
4. Fill out the form and submit
5. You should receive the message in Telegram! 🎉

## 🔍 Debugging Steps (if still not working)

### Check 1: Verify Environment Variables are Set
1. In Vercel, go to **Settings → Environment Variables**
2. Confirm both `TELEGRAM_BOT_TOKEN` and `TELEGRAM_CHAT_ID` are listed
3. Ensure they are enabled for all environments

### Check 2: View Function Logs
1. In Vercel, go to **Deployments**
2. Click on the latest deployment
3. Click **"Functions"** tab
4. Click on `api/send-email.js`
5. Look for any error messages in the logs

### Check 3: Test the API Directly
Open your browser console and run:
```javascript
fetch('https://YOUR-SITE.vercel.app/api/send-email', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'Test User',
    message: 'Testing API'
  })
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

Replace `YOUR-SITE.vercel.app` with your actual Vercel URL.

### Check 4: Inspect Browser Console
1. Open your deployed site
2. Press F12 to open Developer Tools
3. Go to **Console** tab
4. Try to send a message
5. Look for detailed error messages

Common errors:
- `"Telegram bot is not configured"` → Environment variables not set
- `"Failed to send message via Telegram"` → Invalid bot token or chat ID
- `404 Not Found` → API route not deployed correctly

## 📱 Local Development Setup

For local development, the app now uses a proxy server:

### Run Both Servers:
```bash
npm run start:dev
```

This starts:
- API server on port 3001
- React app on port 3000

### Run Separately (if needed):
```bash
# Terminal 1 - API Server
npm run start:api

# Terminal 2 - React App
npm start
```

## 🔐 Security Best Practices

### ⚠️ Important: Remove Hardcoded Credentials
The bot token and chat ID are currently hardcoded in the source code. For better security:

1. Remove hardcoded values from `server-dev.js`
2. Create a `.env` file locally:
   ```env
   TELEGRAM_BOT_TOKEN=8220132078:AAGKRnRm_MTHHPOdvqZ4zoWzAxIUvBFnhWk
   TELEGRAM_CHAT_ID=500761652
   ```
3. Update `server-dev.js` to read from environment:
   ```javascript
   require('dotenv').config();
   const TELEGRAM_BOT_TOKEN = process.env.TELEGRAM_BOT_TOKEN;
   const TELEGRAM_CHAT_ID = process.env.TELEGRAM_CHAT_ID;
   ```

## ✨ What Was Fixed

### Changed Files:
1. ✅ `src/components/socialMedia/SocialMedia.js` - Removed direct Telegram API calls, now always uses `/api/send-email`
2. ✅ `src/components/footer/Footer.js` - Same as above
3. ✅ `server-dev.js` - New development API server
4. ✅ `src/setupProxy.js` - Proxies API calls to dev server
5. ✅ `package.json` - Added scripts for running dev server

### Why This Fixes the Issue:
- **Development**: Uses local API server (no CORS issues)
- **Production**: Uses Vercel serverless function with environment variables
- **Consistent**: Same `/api/send-email` endpoint in both environments

## 🎯 Next Steps

1. ✅ Set environment variables on Vercel
2. ✅ Redeploy the application
3. ✅ Test the contact form
4. ✅ Receive messages in Telegram
5. 🎉 Enjoy your working contact form!

---

**Need Help?** Check the Telegram setup guide: `TELEGRAM_SETUP.md`
