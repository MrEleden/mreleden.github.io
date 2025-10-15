# 🚀 Portfolio Setup Guide

Complete step-by-step instructions for setting up and customizing your ML/Data Science portfolio.

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Customization Steps](#customization-steps)
3. [Adding Content](#adding-content)
4. [Testing Locally](#testing-locally)
5. [Deployment](#deployment)
6. [Maintenance](#maintenance)

---

## Initial Setup

### Step 1: Clone and Configure Git

```powershell
# You already have the repository, so just check the remote
git remote -v

# Configure git if not already done
git config user.name "Your Name"
git config user.email "your.email@example.com"
```

### Step 2: Install Ruby and Jekyll (for local testing)

**Windows Installation:**

1. Download and install Ruby from [RubyInstaller](https://rubyinstaller.org/)
   - Choose Ruby+Devkit (latest stable version)
   - During installation, select "Add Ruby executables to PATH"

2. Open a new PowerShell terminal and verify:
   ```powershell
   ruby --version
   gem --version
   ```

3. Install Bundler:
   ```powershell
   gem install bundler
   ```

4. Install dependencies:
   ```powershell
   cd c:\Users\mvill\github\mreleden.github.io
   bundle install
   ```

---

## Customization Steps

### 1. Update Site Configuration (`_config.yml`)

```yaml
# Required changes
title: "Your Name - ML Portfolio"
description: "Your professional tagline"
author: "Your Full Name"

# Social links
github_username: MrEleden  # Your GitHub username
linkedin_username: your-linkedin-id
email: your.email@example.com

# Optional: Add your profile picture path
logo: /assets/img/profile.jpg
```

### 2. Add Your Profile Picture

1. Add your photo to `assets/img/profile.jpg`
2. Recommended specifications:
   - Size: 400x400 pixels (or square aspect ratio)
   - Format: JPG or PNG
   - Professional headshot
   - File size: < 200KB (compress if needed)

### 3. Update Home Page (`index.md`)

Replace placeholders with your information:

- [ ] Update the welcome message
- [ ] List your actual skills and competencies
- [ ] Add your real projects (or remove sample projects)
- [ ] Update contact information
- [ ] Modify achievements section with your accomplishments
- [ ] Update LinkedIn, email, and other social links

### 4. Update About Page (`about.md`)

- [ ] Add your education details
- [ ] List your work experience
- [ ] Update certifications
- [ ] Add real publications (if any)
- [ ] Modify technical skills based on your expertise
- [ ] Update testimonials or remove the section
- [ ] Add your resume link

### 5. Update Projects Page (`projects.md`)

For each project:
- [ ] Replace sample projects with your real projects
- [ ] Add GitHub repository links
- [ ] Include live demo links (if available)
- [ ] Add project screenshots in `assets/img/projects/`
- [ ] Write detailed descriptions of your work
- [ ] Include results and impact metrics

### 6. Update Contact Page (`contact.md`)

- [ ] Update all email addresses
- [ ] Add your LinkedIn profile URL
- [ ] Update social media handles
- [ ] Add your location (city, country)
- [ ] Update availability status
- [ ] Add Calendly link if you use it

---

## Adding Content

### Adding a New Project

1. Open `projects.md`
2. Add a new section using this template:

```markdown
## 🎯 Project Name

**Overview**: Brief description of what the project does.

### Challenge
- Problem you were solving
- Why it was important

### Solution
- Your approach
- Technologies used

### Results
- ✅ Key achievement 1
- ✅ Key achievement 2
- ✅ Impact metrics

**GitHub**: [View Repository](link) | **Demo**: [Live Demo](link)

---
```

### Adding a Blog Post

1. Create a new file in `_posts/` folder:
   ```
   _posts/YYYY-MM-DD-title-of-post.md
   ```

2. Use this front matter:
   ```yaml
   ---
   layout: post
   title: "Your Post Title"
   date: YYYY-MM-DD
   author: Your Name
   categories: [machine-learning, tutorial]
   tags: [python, ml, specific-topic]
   ---
   ```

3. Write your content in Markdown

### Adding Images

```markdown
# In markdown files
![Description](/assets/img/folder/image.png)

# With a link
[![Description](/assets/img/image.png)](link-url)
```

---

## Testing Locally

### Start the Local Server

```powershell
# Navigate to project directory
cd c:\Users\mvill\github\mreleden.github.io

# Serve the site
bundle exec jekyll serve

# With live reload (auto-refresh on changes)
bundle exec jekyll serve --livereload
```

### View Your Site

Open your browser and go to: `http://localhost:4000`

### Common Jekyll Commands

```powershell
# Build the site without serving
bundle exec jekyll build

# Clean build files
bundle exec jekyll clean

# Serve with drafts
bundle exec jekyll serve --drafts

# Serve on a different port
bundle exec jekyll serve --port 4001
```

---

## Deployment

### Deploy to GitHub Pages

1. **Commit your changes**:
   ```powershell
   git add .
   git commit -m "Initial portfolio setup"
   git push origin master
   ```

2. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Click **Settings**
   - Scroll to **Pages** section
   - Under "Source", select branch: `master` (or `main`)
   - Click **Save**

3. **Wait for deployment**:
   - GitHub will build your site (takes 1-5 minutes)
   - Check the Actions tab to monitor progress

4. **Access your site**:
   - Your site will be live at: `https://mreleden.github.io`

### Custom Domain (Optional)

1. Create a file named `CNAME` in the root directory:
   ```
   yourdomain.com
   ```

2. Configure DNS with your domain provider:
   ```
   Type: A
   Name: @
   Value: 185.199.108.153
   Value: 185.199.109.153
   Value: 185.199.110.153
   Value: 185.199.111.153
   ```

3. For www subdomain:
   ```
   Type: CNAME
   Name: www
   Value: mreleden.github.io
   ```

---

## Maintenance

### Regular Updates

**Weekly**:
- Check for broken links
- Update project progress
- Add new blog posts

**Monthly**:
- Update resume
- Review and update skills
- Check analytics (if enabled)

**Quarterly**:
- Add new projects
- Update portfolio screenshots
- Refresh testimonials

### Keeping Dependencies Updated

```powershell
# Update gems
bundle update

# Update GitHub Pages gem specifically
bundle update github-pages
```

### Monitoring

Enable Google Analytics (optional):
1. Create a Google Analytics account
2. Get your tracking ID
3. Add to `_config.yml`:
   ```yaml
   google_analytics: UA-XXXXXXXXX-X
   ```

---

## Troubleshooting

### Site Not Building?

1. Check GitHub Actions for errors:
   - Go to Actions tab in your repo
   - Look for failed builds
   - Read error messages

2. Common issues:
   - YAML syntax errors in `_config.yml`
   - Incorrect front matter in markdown files
   - Missing required files

### Local Server Not Starting?

```powershell
# Clear cache and rebuild
bundle exec jekyll clean
bundle exec jekyll serve

# If port is in use
bundle exec jekyll serve --port 4001
```

### Theme Not Loading?

1. Check `_config.yml` has:
   ```yaml
   remote_theme: pages-themes/minimal@v0.2.0
   plugins:
     - jekyll-remote-theme
   ```

2. Clear browser cache

---

## Next Steps

### Before Going Live

- [ ] Replace all placeholder text
- [ ] Add your profile picture
- [ ] Update all social links
- [ ] Add at least 2-3 real projects
- [ ] Proofread all content
- [ ] Test all internal links
- [ ] Test on mobile devices
- [ ] Get feedback from a friend

### After Launch

- [ ] Share on LinkedIn
- [ ] Add to resume
- [ ] Submit to GitHub Pages showcase
- [ ] Share in relevant communities
- [ ] Add to your email signature

### Continuous Improvement

- [ ] Write regular blog posts
- [ ] Add new projects as you complete them
- [ ] Collect testimonials
- [ ] Track visitor analytics
- [ ] A/B test different descriptions
- [ ] Keep content fresh and updated

---

## Useful Resources

### Learning Resources
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [Markdown Guide](https://www.markdownguide.org/)
- [GitHub Pages Docs](https://docs.github.com/en/pages)

### Tools
- [TinyPNG](https://tinypng.com/) - Image compression
- [Canva](https://www.canva.com/) - Design graphics
- [Grammarly](https://www.grammarly.com/) - Proofread content

### Inspiration
- Browse other ML/DS portfolios on GitHub
- Check out [Jekyll Themes](https://jekyllthemes.io/)
- Look at data science portfolio examples

---

## Getting Help

If you run into issues:

1. Check the [Jekyll documentation](https://jekyllrb.com/docs/troubleshooting/)
2. Search [GitHub Issues](https://github.com/pages-themes/minimal/issues)
3. Ask on [Jekyll Forum](https://talk.jekyllrb.com/)
4. Review the [README.md](./README.md) for common issues

---

**Good luck with your portfolio! 🚀**

Remember: Your portfolio is never "done" - it's a living document that evolves with your career.
