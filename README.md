# ML & Data Science Portfolio

A professional portfolio website for showcasing Machine Learning and Data Science projects, built with Jekyll and the Minimal theme for GitHub Pages.

🌐 **Live Site**: [https://mreleden.github.io](https://mreleden.github.io)

## 📋 Overview

This portfolio showcases my expertise in:
- Machine Learning & Deep Learning
- Data Science & Analytics
- Natural Language Processing
- Computer Vision
- MLOps & Model Deployment

## 🚀 Quick Start

### Local Development

1. **Clone the repository**
   ```bash
   git clone https://github.com/MrEleden/mreleden.github.io.git
   cd mreleden.github.io
   ```

2. **Install Jekyll and dependencies**
   ```bash
   # Install Ruby (if not already installed)
   # On Windows, use RubyInstaller: https://rubyinstaller.org/
   
   # Install Bundler
   gem install bundler
   
   # Install dependencies
   bundle install
   ```

3. **Run the site locally**
   ```bash
   bundle exec jekyll serve
   ```

4. **View in browser**
   Open [http://localhost:4000](http://localhost:4000)

## 📁 Project Structure

```
mreleden.github.io/
├── _config.yml           # Site configuration
├── index.md              # Home page
├── projects.md           # Projects showcase
├── about.md              # About me page
├── assets/
│   ├── css/
│   │   └── style.scss    # Custom styles
│   └── img/
│       └── profile.jpg   # Profile picture (add your own)
├── README.md             # This file
└── Gemfile               # Ruby dependencies (optional for local dev)
```

## ✏️ Customization Guide

### 1. Update Site Configuration

Edit `_config.yml`:
```yaml
title: Your Name - ML Portfolio
description: Your tagline
author: Your Name
github_username: yourusername
linkedin_username: your-linkedin
email: your.email@example.com
```

### 2. Add Your Profile Picture

- Add your photo to `assets/img/profile.jpg`
- Update the `logo` path in `_config.yml`

### 3. Customize Content

**Home Page** (`index.md`):
- Update your introduction
- List your core competencies
- Highlight featured projects
- Update contact information

**Projects Page** (`projects.md`):
- Add your actual projects
- Include GitHub repository links
- Add project demos and case studies
- Update technical stack details

**About Page** (`about.md`):
- Update education details
- Add work experience
- List certifications
- Update publications and achievements

### 4. Modify Styling

Edit `assets/css/style.scss` to customize:
- Colors and theme
- Fonts and typography
- Layout and spacing
- Component styles

## 🎨 Theme Information

This portfolio uses the **Minimal** theme for GitHub Pages:
- **Repository**: [pages-themes/minimal](https://github.com/pages-themes/minimal)
- **Preview**: [Theme Demo](http://pages-themes.github.io/minimal)
- **License**: CC0 1.0 Universal

## 📝 Adding New Content

### Add a New Page

1. Create a new `.md` file (e.g., `blog.md`)
2. Add front matter:
   ```yaml
   ---
   layout: default
   title: Blog
   ---
   ```
3. Write your content in Markdown
4. Link to it from other pages

### Add Blog Posts (Optional)

Create a `_posts` directory and add posts:
```
_posts/
└── 2025-10-15-my-first-post.md
```

Front matter for posts:
```yaml
---
layout: post
title: "My First Post"
date: 2025-10-15
categories: [machine-learning, tutorial]
---
```

## 🔧 Advanced Features

### Google Analytics

Add to `_config.yml`:
```yaml
google_analytics: UA-XXXXXXXXX-X
```

### Custom Domain

1. Add a `CNAME` file with your domain:
   ```
   yourdomain.com
   ```
2. Configure DNS settings with your domain provider

### SEO Optimization

The site uses `jekyll-seo-tag` plugin. Optimize by:
- Adding descriptive titles and descriptions
- Using proper heading hierarchy
- Adding alt text to images
- Creating a sitemap (automatic with jekyll-seo-tag)

## 🚀 Deployment

### Deploy to GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial portfolio setup"
   git push origin master
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Navigate to Pages section
   - Select `master` branch as source
   - Save and wait for deployment

3. **Access your site**
   - Visit `https://yourusername.github.io`

### Automatic Deployment

GitHub Pages automatically rebuilds your site when you push changes to the master branch.

## 📦 Dependencies

Required for local development:

```ruby
# Gemfile (optional, for local testing)
source "https://rubygems.org"

gem "github-pages", group: :jekyll_plugins
gem "jekyll-remote-theme"
gem "jekyll-seo-tag"
```

## 🛠️ Troubleshooting

### Common Issues

**Issue**: Site not building on GitHub Pages
- Check `_config.yml` syntax
- Ensure all required files are present
- Check GitHub Actions for build errors

**Issue**: Theme not loading
- Verify `remote_theme` in `_config.yml`
- Check plugin configuration
- Clear browser cache

**Issue**: Local preview not working
- Ensure Ruby and Bundler are installed
- Run `bundle install`
- Check for port conflicts (default: 4000)

### Helpful Commands

```bash
# Update dependencies
bundle update

# Clean build files
bundle exec jekyll clean

# Build site without serving
bundle exec jekyll build

# Serve with live reload
bundle exec jekyll serve --livereload
```

## 📚 Resources

- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Markdown Guide](https://www.markdownguide.org/)
- [Minimal Theme Docs](https://github.com/pages-themes/minimal)

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Fork for your own use
- Submit issues for bugs
- Suggest improvements

## 📄 License

- **Portfolio Content**: © [Your Name] - All Rights Reserved
- **Minimal Theme**: CC0 1.0 Universal (Public Domain)
- **Code/Structure**: Feel free to use as template

## 📧 Contact

- **Email**: your.email@example.com
- **GitHub**: [@MrEleden](https://github.com/MrEleden)
- **LinkedIn**: [Your Profile](https://linkedin.com/in/yourprofile)

---

**Last Updated**: October 2025

Built with ❤️ using Jekyll and GitHub Pages
