import React, { useState, useEffect } from 'react';
import { useAnalytics } from '../contexts/AnalyticsContext';
import MiloLogo from './MiloLogo';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { trackEvent } = useAnalytics();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle menu toggle
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    trackEvent(isMenuOpen ? 'Menu_Close' : 'Menu_Open');
  };

  // Handle navigation click
  const handleNavClick = (section: string) => {
    trackEvent('Nav_Click', { section });
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-fast py-4 ${isScrolled ? 'bg-background/90 backdrop-blur-md shadow-md' : 'bg-transparent'}`}
    >
      <div className="container mx-auto max-w-container px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a 
          href="#" 
          className="flex items-center" 
          onClick={() => handleNavClick('home')}
        >
          <MiloLogo className="h-10 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            className="text-text-primary hover:text-accent transition-colors" 
            onClick={() => handleNavClick('features')}
          >
            Features
          </a>
          <a 
            href="#benefits" 
            className="text-text-primary hover:text-accent transition-colors" 
            onClick={() => handleNavClick('benefits')}
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            className="text-text-primary hover:text-accent transition-colors" 
            onClick={() => handleNavClick('testimonials')}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="text-text-primary hover:text-accent transition-colors" 
            onClick={() => handleNavClick('faq')}
          >
            FAQ
          </a>
          <a 
            href="#signup" 
            className="btn btn-primary btn-sm" 
            onClick={() => handleNavClick('signup')}
          >
            Sign Up
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden flex items-center" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 right-0 bg-surface border-t border-border transition-all duration-normal overflow-hidden ${isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a 
            href="#features" 
            className="py-2 text-text-primary hover:text-accent transition-colors" 
            onClick={() => handleNavClick('features')}
          >
            Features
          </a>
          <a 
            href="#benefits" 
            className="py-2 text-text-primary hover:text-accent transition-colors" 
            onClick={() => handleNavClick('benefits')}
          >
            Benefits
          </a>
          <a 
            href="#testimonials" 
            className="py-2 text-text-primary hover:text-accent transition-colors" 
            onClick={() => handleNavClick('testimonials')}
          >
            Testimonials
          </a>
          <a 
            href="#faq" 
            className="py-2 text-text-primary hover:text-accent transition-colors" 
            onClick={() => handleNavClick('faq')}
          >
            FAQ
          </a>
          <a 
            href="#signup" 
            className="btn btn-primary w-full text-center" 
            onClick={() => handleNavClick('signup')}
          >
            Sign Up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;