/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0B0B0C',
        surface: '#111114',
        border: '#1F2124',
        'text-primary': '#F8FAFC',
        'text-secondary': '#C7CBD1',
        accent: 'linear-gradient(135deg, #ffffff 0%, #e5e7eb 100%)',
        'accent-hover': 'linear-gradient(135deg, #f9fafb 0%, #d1d5db 100%)',
        'accent-focus': 'linear-gradient(135deg, #ffffff 0%, #9ca3af 100%)',
        success: '#22C55E',
        warning: '#F59E0B',
        error: '#EF4444',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
        heading: ['Cooper Light BT', 'Cooper Light', 'Cooper Lt BT', 'Cooper Black', 'Georgia', 'serif'],
      },
      fontSize: {
        'xs': '0.75rem',
        'sm': '0.875rem',
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
      },
      fontWeight: {
        normal: 400,
        semibold: 600,
        bold: 700,
      },
      lineHeight: {
        tight: 1.2,
        normal: 1.5,
        relaxed: 1.75,
      },
      letterSpacing: {
        tight: '-0.025em',
        normal: '0',
        wide: '0.025em',
      },
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
        '16': '4rem',
        '24': '6rem',
        '32': '8rem',
      },
      borderRadius: {
        'card': '12px',
        'input': '8px',
        'pill': '9999px',
      },
      boxShadow: {
        'sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      transitionDuration: {
        'fast': '150ms',
        'normal': '250ms',
        'slow': '350ms',
      },
      maxWidth: {
        'container': '1200px',
      },
    },
  },
  plugins: [],
}