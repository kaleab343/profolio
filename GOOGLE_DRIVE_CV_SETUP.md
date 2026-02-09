# 📄 How to Setup Google Drive CV Download

## Problem
The CV download was showing gibberish/corrupted content when downloaded from the local file.

## Solution
Use Google Drive to host your CV and provide a direct download link.

## 🚀 Step-by-Step Instructions

### Step 1: Upload Your CV to Google Drive
1. Go to [Google Drive](https://drive.google.com)
2. Click **"+ New"** → **"File upload"**
3. Select your CV file: `public/doc/kaleab_cv.pdf` or `public/doc/kaleab_cv_detailed.pdf`
4. Wait for upload to complete

### Step 2: Get Shareable Link
1. Right-click on the uploaded CV file in Google Drive
2. Click **"Share"** or **"Get link"**
3. Change permissions to **"Anyone with the link"** → **"Viewer"**
4. Click **"Copy link"**
5. The link will look like:
   ```
   https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing
   ```

### Step 3: Update portfolio.js
1. Open `src/portfolio.js`
2. Find the line with `resumeLink:`
3. Replace the URL with your Google Drive link:
   ```javascript
   resumeLink: "https://drive.google.com/file/d/YOUR_FILE_ID_HERE/view?usp=sharing",
   ```

### Example:
```javascript
const greeting = {
  username: "Kaleab Zelalem",
  title: "Hi, I'm Kaleab",
  subTitle: emoji(
    "Computer Science graduate..."
  ),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing",
  displayGreeting: true
};
```

### Step 4: Test
1. Save the file
2. Refresh your browser
3. Click "Download my resume" button
4. Google Drive will open and allow download

## 🔄 Alternative: Direct Download Link

If you want a direct download (without opening Google Drive page), convert your link:

**From:**
```
https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing
```

**To:**
```
https://drive.google.com/uc?export=download&id=1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu
```

Just extract the FILE_ID (the part between `/d/` and `/view`) and use this format:
```
https://drive.google.com/uc?export=download&id=FILE_ID
```

## ✅ What Was Changed

### Files Modified:
1. **src/portfolio.js**
   - Changed `resumeLink` from local path to Google Drive link
   
2. **src/containers/greeting/Greeting.js**
   - Updated the download button to use `greeting.resumeLink` instead of local file
   - Changed from download attribute to opening in new tab
   - Added proper security attributes (`target="_blank"` and `rel="noopener noreferrer"`)

## 💡 Benefits of Using Google Drive

✅ **No corruption** - Files are served properly by Google
✅ **Easy updates** - Just upload new version to Google Drive
✅ **Reliable** - Google's CDN ensures fast downloads
✅ **No build issues** - No need to rebuild when CV is updated
✅ **Version control** - Keep track of CV versions in Google Drive

## 🎯 Current Setup

I've set up a placeholder Google Drive link in the code. 

**To use YOUR CV:**
1. Upload `public/doc/kaleab_cv.pdf` to Google Drive
2. Get the shareable link
3. Update `src/portfolio.js` with your link
4. Commit and push changes

---

**Need Help?** Let me know your Google Drive link and I'll update the code for you!
