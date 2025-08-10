import React, { createContext, useState, useContext, ReactNode } from 'react';

type FormState = 'idle' | 'loading' | 'success' | 'error';

interface NewsletterContextType {
  email: string;
  setEmail: (email: string) => void;
  consent: boolean;
  setConsent: (consent: boolean) => void;
  formState: FormState;
  setFormState: (state: FormState) => void;
  errorMessage: string;
  setErrorMessage: (message: string) => void;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  isValidEmail: (email: string) => boolean;
}

const NewsletterContext = createContext<NewsletterContextType | undefined>(undefined);

export const useNewsletter = () => {
  const context = useContext(NewsletterContext);
  if (context === undefined) {
    throw new Error('useNewsletter must be used within a NewsletterProvider');
  }
  return context;
};

interface NewsletterProviderProps {
  children: ReactNode;
}

export const NewsletterProvider: React.FC<NewsletterProviderProps> = ({ children }) => {
  const [email, setEmail] = useState('');
  const [consent, setConsent] = useState(false);
  const [formState, setFormState] = useState<FormState>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  // Validate email format
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Extract UTM parameters from URL
  const getUtmParams = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return {
      utm_source: urlParams.get('utm_source') || '',
      utm_medium: urlParams.get('utm_medium') || '',
      utm_campaign: urlParams.get('utm_campaign') || '',
      utm_content: urlParams.get('utm_content') || '',
      utm_term: urlParams.get('utm_term') || ''
    };
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Track form submission attempt
    window.dispatchEvent(new CustomEvent('track', { 
      detail: { event: 'Newsletter_Submit', properties: { email } }
    }));

    // Validate email and consent
    if (!isValidEmail(email)) {
      setErrorMessage('Please enter a valid email address');
      setFormState('error');
      return;
    }

    if (!consent) {
      setErrorMessage('Please agree to the terms and privacy policy');
      setFormState('error');
      return;
    }

    setFormState('loading');
    setErrorMessage('');

    try {
      // In a real implementation, this would be an actual API endpoint
      // const response = await fetch('https://api.example.com/newsletter/subscribe', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({
      //     email,
      //     consent,
      //     ...getUtmParams(),
      //     timestamp: new Date().toISOString()
      //   })
      // });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Simulate successful response
      // if (response.ok) {
      setFormState('success');
      
      // Track successful subscription
      window.dispatchEvent(new CustomEvent('track', { 
        detail: { event: 'Newsletter_Success', properties: { email } }
      }));
      // } else {
      //   throw new Error('Subscription failed');
      // }
    } catch (error) {
      setFormState('error');
      setErrorMessage('Something went wrong. Please try again later.');
      
      // Track error
      window.dispatchEvent(new CustomEvent('track', { 
        detail: { event: 'Newsletter_Error', properties: { email, error: errorMessage } }
      }));
    }
  };

  const value = {
    email,
    setEmail,
    consent,
    setConsent,
    formState,
    setFormState,
    errorMessage,
    setErrorMessage,
    handleSubmit,
    isValidEmail
  };

  return (
    <NewsletterContext.Provider value={value}>
      {children}
    </NewsletterContext.Provider>
  );
};