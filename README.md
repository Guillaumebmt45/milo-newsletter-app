# Milo Newsletter Landing Page

## Overview

This is a responsive, single-page newsletter landing page for Milo, designed to maximize qualified sign-ups. The design follows a dark, minimal, premium aesthetic that is 100% responsive across all devices.

## Features

- **Modern Design**: Dark theme with premium aesthetics
- **Fully Responsive**: Works on all devices from mobile to desktop
- **Performance Optimized**: Fast loading with minimal dependencies
- **Accessibility**: WCAG AA+ compliant with proper focus states and semantic HTML
- **Newsletter Integration**: Ready for integration with any email service provider
- **SEO Optimized**: Proper meta tags and structured data

## Design Tokens

### Colors
- Background: `#0B0B0C`
- Surface: `#111114`
- Border: `#1F2124`
- Text Primary: `#F8FAFC`
- Text Secondary: `#C7CBD1`
- Accent/CTA: `#6366F1` (hover: `#5458D9`, focus ring: `#818CF8`)
- Success: `#22C55E`
- Warning: `#F59E0B`
- Error: `#EF4444`

### Typography
- Font: Inter (with system fallbacks)
- Weights: 400/600/700

### Components
- Buttons (primary, secondary, text)
- Form elements (inputs, checkboxes)
- Cards
- Accordions
- Testimonials

## Project Structure

```
/
├── react-version/      # React application
│   ├── src/           # Source code
│   ├── public/        # Public assets
│   ├── package.json   # Dependencies
│   └── craco.config.js # Build configuration
├── assets/            # Static assets
│   ├── milo-logo.svg  # Logo
│   ├── favicon.svg    # Favicon
│   └── milo-og-image.svg # Open Graph image
└── vercel.json        # Deployment configuration
```

## Newsletter Integration

The form is set up to work with any newsletter service. To integrate:

1. Replace the commented API endpoint in `script.js` with your actual endpoint
2. Adjust the payload format if needed
3. Handle the response according to your API's specifications

Example endpoint: `/api/subscribe`

Payload format:
```json
{
  "email": "user@example.com",
  "consent": true,
  "referrer": "https://referrer.com",
  "utm": {
    "utm_source": "source",
    "utm_medium": "medium",
    "utm_campaign": "campaign"
  }
}
```

## Analytics

The page includes hooks for analytics tracking:
- `Newsletter_Submit`: When a user submits the form
- `Newsletter_Success`: When subscription is successful
- `Newsletter_Error`: When an error occurs

## Browser Support

Supports all modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## Getting Started

1. Clone or download this repository
2. Open `index.html` in your browser to view the page
3. Customize content and styling as needed
4. Deploy to your hosting provider

## Customization

- Update the content in `index.html`
- Modify colors and styling in `styles.css`
- Adjust form handling in `script.js`
- Replace logo and images in the `assets` folder

## License

This project is available for your use. Please replace all placeholder content with your actual content before deploying to production.