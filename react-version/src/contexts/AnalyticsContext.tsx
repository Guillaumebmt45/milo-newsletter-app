import React, { createContext, useContext, useEffect, ReactNode } from 'react';

interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
}

interface AnalyticsContextType {
  trackEvent: (event: string, properties?: Record<string, any>) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  // Track event function
  const trackEvent = (event: string, properties?: Record<string, any>) => {
    console.log(`[Analytics] ${event}`, properties);
    
    // In a real implementation, this would send data to an analytics service
    // Example: 
    // if (window.gtag) {
    //   window.gtag('event', event, properties);
    // }
    // if (window.mixpanel) {
    //   window.mixpanel.track(event, properties);
    // }
  };

  useEffect(() => {
    // Listen for custom track events
    const handleTrackEvent = (e: Event) => {
      const customEvent = e as CustomEvent<AnalyticsEvent>;
      if (customEvent.detail) {
        trackEvent(customEvent.detail.event, customEvent.detail.properties);
      }
    };

    window.addEventListener('track', handleTrackEvent as EventListener);

    // Track page view on initial load
    trackEvent('Page_View', {
      path: window.location.pathname,
      referrer: document.referrer,
      title: document.title
    });

    return () => {
      window.removeEventListener('track', handleTrackEvent as EventListener);
    };
  }, []);

  return (
    <AnalyticsContext.Provider value={{ trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
};