# Quick Reference - Portfolio Cheat Sheet

## 📁 File Structure Quick Guide

```
mreleden.github.io/
├── _config.yml          → Site settings (title, description, theme)
├── index.md             → Home page
├── about.md             → About me page
├── projects.md          → Projects showcase
├── contact.md           → Contact information
├── blog.md              → Blog index
├── _posts/              → Blog posts (YYYY-MM-DD-title.md)
├── assets/
│   ├── css/
│   │   └── style.scss   → Custom styling
│   └── img/             → Images and media
├── README.md            → Repository documentation
├── SETUP_GUIDE.md       → Detailed setup instructions
└── Gemfile              → Ruby dependencies
```

## 🔧 Quick Commands

### Git Commands
```powershell
# Check status
git status

# Add all changes
git add .

# Commit changes
git commit -m "Your message here"

# Push to GitHub
git push origin master

# Pull latest changes
git pull origin master
```

### Jekyll Commands
```powershell
# Start local server
bundle exec jekyll serve

# Start with live reload
bundle exec jekyll serve --livereload

# Build site
bundle exec jekyll build

# Clean build files
bundle exec jekyll clean
```

## ✏️ Content Update Checklist

### Home Page (index.md)
- [ ] Name and title
- [ ] Professional summary
- [ ] Skills and competencies
- [ ] Featured projects
- [ ] Contact links

### About Page (about.md)
- [ ] Professional background
- [ ] Education
- [ ] Work experience
- [ ] Certifications
- [ ] Publications

### Projects Page (projects.md)
- [ ] Project descriptions
- [ ] GitHub links
- [ ] Demo links
- [ ] Technologies used
- [ ] Results/Impact

### Config (_config.yml)
- [ ] Site title
- [ ] Description
- [ ] Author name
- [ ] GitHub username
- [ ] LinkedIn profile
- [ ] Email address

## 📝 Blog Post Template

Create: `_posts/YYYY-MM-DD-title.md`

```markdown
---
layout: post
title: "Your Title"
date: YYYY-MM-DD
author: Your Name
categories: [category1, category2]
tags: [tag1, tag2, tag3]
---

# Main Heading

Your content here...

## Section 1

Content...

## Section 2

Content...
```

## 🎨 Markdown Quick Reference

```markdown
# H1 Heading
## H2 Heading
### H3 Heading

**bold text**
*italic text*
~~strikethrough~~

[Link text](url)
![Image alt](image-path)

- Bullet point
1. Numbered list

> Blockquote

`inline code`

```python
# Code block
code here
```
```

## 🖼️ Adding Images

```markdown
# Basic image
![Alt text](/assets/img/image.png)

# Image with link
[![Alt text](/assets/img/image.png)](url)

# Relative paths
![Local image](./assets/img/projects/project1.png)
```

## 🔗 Internal Links

```markdown
[Home](./index.html)
[About](./about.html)
[Projects](./projects.html)
[Contact](./contact.html)
[Blog](./blog.html)

# Anchor links
[Jump to section](#section-name)
```

## 🎯 Common Tasks

### Add a new project
1. Open `projects.md`
2. Copy a project template
3. Fill in your details
4. Add project image to `assets/img/projects/`
5. Link to GitHub repo

### Write a blog post
1. Create `_posts/YYYY-MM-DD-title.md`
2. Add front matter
3. Write content
4. Update `blog.md` index

### Update profile picture
1. Add image to `assets/img/profile.jpg`
2. Update `logo` in `_config.yml`

### Add a new page
1. Create `pagename.md`
2. Add front matter:
   ```yaml
   ---
   layout: default
   title: Page Title
   ---
   ```
3. Write content
4. Link from navigation

## 🚀 Deployment Workflow

```powershell
# 1. Make changes to files
# 2. Test locally
bundle exec jekyll serve

# 3. Check in browser
# Open http://localhost:4000

# 4. Commit and push
git add .
git commit -m "Update: describe changes"
git push origin master

# 5. Wait for GitHub Actions to deploy
# Check: github.com/MrEleden/mreleden.github.io/actions

# 6. Visit live site
# https://mreleden.github.io
```

## 🐛 Quick Fixes

### Site not updating?
```powershell
# Clear Jekyll cache
bundle exec jekyll clean
bundle exec jekyll serve

# Hard refresh browser
Ctrl + Shift + R (Windows)
Cmd + Shift + R (Mac)
```

### Port already in use?
```powershell
# Use different port
bundle exec jekyll serve --port 4001
```

### Ruby/Bundler issues?
```powershell
# Update bundler
gem update bundler

# Reinstall dependencies
bundle install
```

## 📊 Analytics (Optional)

Add to `_config.yml`:
```yaml
google_analytics: UA-XXXXXXXXX-X
```

## 🔍 SEO Tips

- Use descriptive titles
- Add meta descriptions
- Use proper heading hierarchy (H1 → H2 → H3)
- Add alt text to images
- Use descriptive URLs
- Add keywords naturally

## 📱 Testing Checklist

- [ ] Test on Chrome
- [ ] Test on Firefox
- [ ] Test on mobile device
- [ ] Check all internal links
- [ ] Check all external links
- [ ] Verify images load
- [ ] Check responsive design
- [ ] Test navigation
- [ ] Proofread content
- [ ] Check spelling and grammar

## 🎨 Customization Tips

### Change colors
Edit `assets/css/style.scss`:
```scss
// Primary color
$primary-color: #267CB9;

// Links
a { color: $primary-color; }
```

### Add custom section
```markdown
## 🎯 Custom Section

Your content here
```

### Modify layout
Create `_layouts/default.html` to override theme layout

## 📞 Need Help?

1. Check `SETUP_GUIDE.md` for detailed instructions
2. Check `README.md` for documentation
3. View Jekyll docs: https://jekyllrb.com
4. GitHub Pages docs: https://pages.github.com
5. Minimal theme repo: https://github.com/pages-themes/minimal

## 🔑 Key Files to Remember

| File | Purpose |
|------|---------|
| `_config.yml` | Site-wide settings |
| `index.md` | Home page content |
| `assets/css/style.scss` | Custom styles |
| `Gemfile` | Ruby dependencies |
| `.gitignore` | Files to ignore in git |

## ⚡ Pro Tips

1. **Commit often** - Small, frequent commits are better
2. **Test locally first** - Always preview before pushing
3. **Use branches** - For major changes, use a separate branch
4. **Keep it simple** - Don't over-complicate
5. **Update regularly** - Keep content fresh
6. **Backup important files** - Just in case
7. **Use meaningful commit messages** - For future reference

---

**Quick Start**: See `SETUP_GUIDE.md` for step-by-step instructions

**Full Docs**: See `README.md` for complete documentation

**Version**: 1.0 | **Last Updated**: October 2025
