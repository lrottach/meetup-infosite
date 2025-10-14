# GitHub Pages Setup Guide

## ✅ What's been done automatically:
1. Website files moved to root directory for GitHub Pages compatibility
2. GitHub Actions workflow created for automatic deployment
3. All changes committed and pushed to your repository

## 🚀 Next steps to enable GitHub Pages:

### Step 1: Enable GitHub Pages in Repository Settings
1. Go to your GitHub repository: `https://github.com/Chris-Koenig/agentic-coding-showcase`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **GitHub Actions**
5. Save the settings

### Step 2: Wait for deployment
- The GitHub Actions workflow will automatically run
- You can monitor progress in the **Actions** tab
- First deployment may take 2-5 minutes

### Step 3: Access your website
Once deployed, your website will be available at:
**https://chris-koenig.github.io/agentic-coding-showcase/**

## 🔧 What the setup includes:

### Automatic Deployment
- Deploys on every push to master branch
- No manual steps required after initial setup
- Uses latest GitHub Pages deployment actions

### File Structure
```
/
├── index.html          # Main page
├── assets/
│   ├── css/
│   │   └── main.css   # Styles
│   ├── images/        # All images
│   └── js/            # JavaScript modules
└── .github/
    └── workflows/
        └── deploy-pages.yml  # Deployment automation
```

### Features Ready
- ✅ Responsive design
- ✅ Modern styling
- ✅ Speaker profiles with images
- ✅ Event agenda
- ✅ LinkedIn registration link
- ✅ Professional appearance

## 🎯 After enabling Pages:

1. **Test the website** - Visit the URL and check all functionality
2. **Update speaker images** - Add real LinkedIn photos to `assets/images/`
3. **Share the link** - Your meetup website is now live!

## 🔄 Future updates:
Just push changes to master branch - they'll automatically deploy to GitHub Pages!

---
**Repository**: https://github.com/Chris-Koenig/agentic-coding-showcase
**Future URL**: https://chris-koenig.github.io/agentic-coding-showcase/