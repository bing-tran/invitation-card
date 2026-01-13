# Wedding Invitation Card

A beautiful, responsive wedding invitation card built as a static website that can be easily deployed to any static hosting service.

## Features

- ✨ Elegant and modern design
- 📱 Fully responsive (mobile-friendly)
- 🎨 Beautiful typography using Google Fonts
- 🚀 Ready for static hosting deployment
- 💻 No build process required - pure HTML/CSS

## Project Structure

```
invitation-card/
├── index.html              # Main HTML file
├── assets/
│   ├── images/            # Wedding photos
│   └── css/               # Stylesheets (if needed)
├── README.md              # This file
└── .gitignore            # Git ignore file
```

## Customization

### Update Wedding Details

Edit `index.html` and modify the following sections:

1. **Names**: Update the names in the `.names` section (around line 136-140)
2. **Date & Time**: Update the date and time in the `.date` section (around line 142-145)
3. **Location**: Update the venue details in the `.location` section (around line 147-150)
4. **Image**: Replace `./assets/images/1.jpeg` with your wedding photo path

### Change the Image

1. Place your wedding photo in the `assets/images/` directory
2. Update the `src` attribute in the `<img>` tag (around line 126)

## Deployment

This static website can be deployed to various platforms:

### Netlify

1. Push your code to GitHub
2. Go to [Netlify](https://www.netlify.com/)
3. Click "New site from Git"
4. Select your repository
5. Build command: (leave empty)
6. Publish directory: `/` (root)
7. Deploy!

**Or use Netlify CLI:**
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com/)
3. Import your repository
4. Framework Preset: Other
5. Deploy!

**Or use Vercel CLI:**
```bash
npm install -g vercel
vercel --prod
```

### GitHub Pages

1. Push your code to GitHub
2. Go to repository Settings → Pages
3. Select branch (usually `main` or `master`)
4. Select folder: `/ (root)`
5. Save and your site will be available at `https://username.github.io/repository-name`

### Other Static Hosts

You can also deploy to:
- **Surge.sh**: `surge ./`
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3 + CloudFront**: Upload files to S3 bucket
- **Any web server**: Just upload the files via FTP/SFTP

## Local Development

Simply open `index.html` in your web browser, or use a local server:

```bash
# Using Python
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is open source and available for personal use.

## Credits

- Fonts: [Google Fonts](https://fonts.google.com/) - Playfair Display & Great Vibes

