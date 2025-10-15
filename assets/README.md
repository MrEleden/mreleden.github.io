# Assets Directory

This directory contains static assets for the portfolio website.

## Directory Structure

```
assets/
├── css/
│   └── style.scss          # Custom styles
├── img/                    # Images
│   ├── profile.jpg         # Your profile picture
│   ├── projects/           # Project screenshots
│   └── blog/               # Blog post images
└── files/                  # Downloadable files
    └── resume.pdf          # Your resume
```

## Adding Images

### Profile Picture
Add your profile picture as `assets/img/profile.jpg`:
- Recommended size: 400x400 pixels
- Format: JPG or PNG
- Should be a professional headshot

### Project Images
Add project screenshots to `assets/img/projects/`:
- Use descriptive filenames (e.g., `predictive-maintenance-dashboard.png`)
- Optimize images for web (compress to reduce file size)
- Recommended max width: 1200px

### Blog Images
Add blog post images to `assets/img/blog/`:
- Name them based on the post date and topic
- Example: `2025-10-15-ml-intro.png`

## Using Images in Markdown

```markdown
<!-- Profile image (referenced in _config.yml) -->
logo: /assets/img/profile.jpg

<!-- In markdown files -->
![Alt text](/assets/img/projects/my-project.png)

<!-- With link -->
[![Project Screenshot](/assets/img/projects/dashboard.png)](./projects.html)
```

## Adding Other Files

### Resume/CV
Add your resume as `assets/files/resume.pdf` and link from the about page:
```markdown
[Download Resume](/assets/files/resume.pdf)
```

## Image Optimization Tips

1. **Compress images** using tools like:
   - TinyPNG (https://tinypng.com/)
   - ImageOptim (Mac)
   - Squoosh (https://squoosh.app/)

2. **Use appropriate formats**:
   - JPG for photos
   - PNG for graphics with transparency
   - SVG for logos and icons

3. **Responsive images**:
   - The theme automatically makes images responsive
   - Max-width: 100% is applied by default

## Important Notes

- Don't commit very large files (keep under 1MB per image if possible)
- GitHub has repository size limits
- Consider using external hosting for large media files
- Add image alt text for accessibility

## Placeholder Images

Until you add your own images, you can use:
- [Unsplash](https://unsplash.com/) - Free high-quality photos
- [Placeholder.com](https://placeholder.com/) - Placeholder images
- [Lorem Picsum](https://picsum.photos/) - Random placeholder images

Example:
```markdown
![Placeholder](https://via.placeholder.com/400x300)
```
