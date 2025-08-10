import React, { useState, useEffect } from 'react';
import LiquidHero from './components/LiquidHero';
import { NewsletterProvider } from './contexts/NewsletterContext';
import { AnalyticsProvider } from './contexts/AnalyticsContext';

const App: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add animation classes after initial render
    setIsLoaded(true);

    // Setup scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe all elements with animate-on-scroll class
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <AnalyticsProvider>
      <NewsletterProvider>
        <div className={`min-h-screen ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-500`}>
          <main>
            <LiquidHero />
          </main>
        </div>
      </NewsletterProvider>
    </AnalyticsProvider>
  );
};

export default App;