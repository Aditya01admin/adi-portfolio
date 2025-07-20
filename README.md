# Adi Portfolio - Personal Portfolio Website

A modern, responsive personal portfolio website built with Angular and TailwindCSS.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Modern UI**: Clean, professional design with smooth animations
- **Single Page Application**: Smooth scrolling navigation between sections
- **Interactive Elements**: Hover effects and mobile-friendly navigation
- **Professional Sections**: Header, About, Experience, Projects, Skills, Certifications, Contact

## Sections

### Header
- Personal name and tagline
- LinkedIn and Resume buttons
- Professional profile picture
- Gradient background with modern styling

### About
- Personal introduction with highlighted keywords
- Professional summary and interests

### Experience
- Work experience cards with company logos
- Position details, duration, and descriptions
- Technology tags for each role

### Projects
- Project showcase with descriptions
- Technology stacks used
- Links to view projects

### Skills
- Icon grid displaying technical skills
- Color-coded skill icons with names

### Certifications
- Professional certifications and achievements

### Contact
- Social media links (LinkedIn, GitHub, Twitter)
- Direct email contact
- Professional footer

## Technologies Used

- **Angular 17**: Frontend framework
- **TailwindCSS**: Utility-first CSS framework
- **TypeScript**: Type-safe JavaScript
- **Font Awesome**: Icon library
- **Google Fonts**: Inter font family

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd adi-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:4200`

### Building for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Customization

### Personal Information
Update the following properties in `src/app/app.component.ts`:
- `name`: Your full name
- `firstName`: Your first name
- `tagline`: Your professional tagline
- `email`: Your email address
- `linkedinUrl`: Your LinkedIn profile URL
- `githubUrl`: Your GitHub profile URL
- `twitterUrl`: Your Twitter profile URL
- `resumeUrl`: Link to your resume

### Profile Picture
Replace the placeholder image URL in `profileImage` property with your actual profile picture.

### Experience
Update the `experiences` array with your work history:
- Company name and logo
- Position and duration
- Description and achievements
- Technology tags

### Projects
Update the `projects` array with your portfolio projects:
- Project title and description
- Technologies used
- Project URLs

### Skills
Update the `skills` array with your technical skills:
- Skill names and icons
- Color coding for each skill

### About & Certifications
Update the `aboutDescription` and `certificationsText` with your personal information.

## Deployment

This project can be deployed to various platforms:

- **Netlify**: Connect your GitHub repository for automatic deployments
- **Vercel**: Deploy with zero configuration
- **GitHub Pages**: Use GitHub Actions for deployment
- **AWS S3**: Static website hosting

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

For any questions or suggestions, feel free to reach out:
- Email: aditya@example.com
- LinkedIn: [Aditya Sharma](https://linkedin.com/in/aditya-sharma)
- GitHub: [aditya-sharma](https://github.com/aditya-sharma)
