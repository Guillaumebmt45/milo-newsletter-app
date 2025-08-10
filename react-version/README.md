# Milo Newsletter Landing Page (React + Tailwind CSS)

## Overview

This is a modern, responsive landing page for the Milo newsletter, built with React and Tailwind CSS. The page is designed to maximize qualified sign-ups with a dark, minimal, premium aesthetic.

## Features

- **Fully Responsive Design**: Optimized for all screen sizes from mobile to desktop
- **Dark Mode**: Premium dark theme with accent color highlights
- **Newsletter Signup Form**: Complete with validation, success state, and error handling
- **Interactive Components**: Including accordion FAQ, animated counters, and smooth scrolling
- **Accessibility**: Built with WCAG AA compliance in mind
- **Analytics Hooks**: Ready for integration with your analytics platform

## Tech Stack

- **React**: For component-based UI development
- **TypeScript**: For type safety and better developer experience
- **Tailwind CSS**: For utility-first styling
- **Context API**: For state management (newsletter form, analytics)

## Design Tokens

### Colors

- **Background**: #0B0B0C
- **Surface**: #111114
- **Border**: #1F2124
- **Text Primary**: #F8FAFC
- **Text Secondary**: #C7CBD1
- **Accent**: #6366F1
- **Accent Hover**: #5458D9
- **Accent Focus**: #818CF8
- **Success**: #22C55E
- **Warning**: #F59E0B
- **Error**: #EF4444

### Typography

- **Font Family**: Inter
- **Font Sizes**: xs (0.75rem) to 5xl (3rem)
- **Font Weights**: normal (400), semibold (600), bold (700)
- **Line Heights**: tight (1.2), normal (1.5), relaxed (1.75)

## Project Structure

```
src/
├── components/         # UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── SocialProof.tsx
│   ├── Features.tsx
│   ├── Benefits.tsx
│   ├── Testimonial.tsx
│   ├── FAQ.tsx
│   ├── Footer.tsx
│   └── MiloLogo.tsx
├── contexts/          # React contexts
│   ├── NewsletterContext.tsx
│   └── AnalyticsContext.tsx
├── App.tsx            # Main application component
├── index.tsx          # Entry point
└── index.css          # Global styles and Tailwind imports
```

## Newsletter Integration

The newsletter form is set up to work with any API endpoint. To connect it to your backend:

1. Update the API endpoint in `NewsletterContext.tsx`
2. Ensure your API accepts the following payload:
   ```json
   {
     "email": "user@example.com",
     "consent": true,
     "utm_source": "...",
     "utm_medium": "...",
     "utm_campaign": "...",
     "utm_content": "...",
     "utm_term": "...",
     "timestamp": "2023-01-01T12:00:00Z"
   }
   ```

## Analytics Hooks

The following analytics events are tracked:

- `Page_View`: When the page loads
- `Nav_Click`: When a navigation link is clicked
- `Feature_Click`: When a feature card is clicked
- `Benefit_Click`: When a benefit item is clicked
- `FAQ_Click`: When an FAQ item is expanded
- `Newsletter_Submit`: When the form is submitted
- `Newsletter_Success`: When signup is successful
- `Newsletter_Error`: When signup fails
- `Share_Click`: When a social share button is clicked
- `Copy_Referral_Link`: When the referral link is copied
- `Footer_Link_Click`: When a footer link is clicked

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

### Building for Production

```bash
npm run build
# or
yarn build
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.