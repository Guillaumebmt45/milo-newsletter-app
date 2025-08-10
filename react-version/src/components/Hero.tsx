import React from 'react';
import { useNewsletter } from '../contexts/NewsletterContext';
import { useAnalytics } from '../contexts/AnalyticsContext';

const Hero: React.FC = () => {
  const { 
    email, 
    setEmail, 
    consent, 
    setConsent, 
    formState, 
    errorMessage, 
    handleSubmit 
  } = useNewsletter();
  const { trackEvent } = useAnalytics();

  return (
    <section id="signup" className="pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="container mx-auto max-w-container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-8">
          {/* Hero Content */}
          <div className="md:w-1/2 animate-on-scroll">
            <h1 className="font-heading text-4xl md:text-5xl font-bold leading-tight mb-4">
              Stay ahead with the <span className="text-accent">Milo</span> newsletter
            </h1>
            <p className="text-text-secondary text-lg md:text-xl mb-8">
              Join thousands of professionals getting weekly insights on productivity, technology, and personal growth.
            </p>
            <div className="hidden md:block">
              <div className="flex items-center space-x-2 mb-6">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Free weekly newsletter</span>
              </div>
              <div className="flex items-center space-x-2 mb-6">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Exclusive content and resources</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Unsubscribe anytime</span>
              </div>
            </div>
          </div>

          {/* Newsletter Form */}
          <div className="md:w-1/2 animate-on-scroll">
            <div className="bg-surface border border-border rounded-card p-6 md:p-8">
              {formState === 'success' ? (
                <div className="text-center py-8">
                  <svg className="w-16 h-16 text-success mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <h3 className="font-heading text-2xl font-bold mb-2">You're in!</h3>
                  <p className="text-text-secondary mb-6">Check your inbox to confirm your subscription.</p>
                  <div className="mb-6">
                    <p className="text-sm text-text-secondary mb-2">Share with friends:</p>
                    <div className="flex justify-center space-x-4">
                      <button 
                        className="text-text-secondary hover:text-accent transition-colors"
                        onClick={() => trackEvent('Share_Click', { platform: 'twitter' })}
                        aria-label="Share on Twitter"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </button>
                      <button 
                        className="text-text-secondary hover:text-accent transition-colors"
                        onClick={() => trackEvent('Share_Click', { platform: 'facebook' })}
                        aria-label="Share on Facebook"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </button>
                      <button 
                        className="text-text-secondary hover:text-accent transition-colors"
                        onClick={() => trackEvent('Share_Click', { platform: 'linkedin' })}
                        aria-label="Share on LinkedIn"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className="bg-background/20 rounded-input p-4 flex items-center justify-between">
                    <span className="text-sm truncate">https://milo.com/refer?id=12345</span>
                    <button 
                      className="text-accent hover:text-accent-hover ml-2 flex-shrink-0"
                      onClick={() => {
                        navigator.clipboard.writeText('https://milo.com/refer?id=12345');
                        trackEvent('Copy_Referral_Link');
                      }}
                    >
                      Copy
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="font-heading text-2xl font-bold mb-2">Join the newsletter</h2>
                  <p className="text-text-secondary mb-6">Get the latest insights delivered to your inbox.</p>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-semibold mb-2">Email address</label>
                      <input 
                        type="email" 
                        id="email" 
                        className="form-input" 
                        placeholder="you@example.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        disabled={formState === 'loading'}
                        aria-describedby={errorMessage ? 'email-error' : undefined}
                      />
                      {errorMessage && (
                        <p id="email-error" className="mt-2 text-error text-sm">{errorMessage}</p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label className="flex items-start">
                        <input 
                          type="checkbox" 
                          className="mt-1 mr-2" 
                          checked={consent}
                          onChange={(e) => setConsent(e.target.checked)}
                          disabled={formState === 'loading'}
                        />
                        <span className="text-sm text-text-secondary">
                          I agree to receive emails and accept the <a href="#" className="text-accent hover:underline">Terms of Service</a> and <a href="#" className="text-accent hover:underline">Privacy Policy</a>.
                        </span>
                      </label>
                    </div>
                    
                    <button 
                      type="submit" 
                      className="btn btn-primary w-full relative"
                      disabled={formState === 'loading'}
                    >
                      {formState === 'loading' ? (
                        <>
                          <span className="opacity-0">Subscribe</span>
                          <svg className="animate-spin h-5 w-5 absolute" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                        </>
                      ) : (
                        'Subscribe'
                      )}
                    </button>
                    
                    <div className="mt-4 text-center text-sm text-text-secondary">
                      <p>No spam. Unsubscribe anytime.</p>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Mobile Benefits */}
        <div className="md:hidden mt-12">
          <div className="flex items-center space-x-2 mb-4">
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span>Free weekly newsletter</span>
          </div>
          <div className="flex items-center space-x-2 mb-4">
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span>Exclusive content and resources</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-success" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
            </svg>
            <span>Unsubscribe anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;