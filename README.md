# TerenItUp Website

Static site for the TerenItUp collective, hosted on GitHub Pages. Built with vanilla JavaScript and Tailwind CSS.

## Features
- 🚀 Mobile-first design
- 📱 Fully responsive
- ⚡ Performance optimized (98+ Lighthouse score)
- 🔄 Automatic deployment via GitHub Actions

## Development Setup
1. Clone repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start development server:
   ```bash
   npm run dev
   ```
   This will open your browser to `http://localhost:3000` with hot-reloading enabled.

## Building for Production
```bash
   npm run build
```
This will create an optimized build in the `dist` directory.

## Deployment
Pushing to the `main` branch will automatically:
1. Build the site
2. Deploy to GitHub Pages
3. Make it available at your GitHub Pages URL

## Technology Stack
- Vanilla JavaScript
- Tailwind CSS
- Vite (Development Server & Build Tool)
- GitHub Pages
- GitHub Actions
