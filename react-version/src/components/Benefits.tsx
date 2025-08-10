import React from 'react';
import { useAnalytics } from '../contexts/AnalyticsContext';

const Benefits: React.FC = () => {
  const { trackEvent } = useAnalytics();

  const benefits = [
    {
      id: 'stay-informed',
      title: 'Stay Informed',
      description: 'Get the latest industry news and trends delivered directly to your inbox, saving you hours of research time.'
    },
    {
      id: 'gain-insights',
      title: 'Gain Valuable Insights',
      description: 'Access expert analysis and commentary that helps you understand complex topics and make better decisions.'
    },
    {
      id: 'discover-opportunities',
      title: 'Discover New Opportunities',
      description: 'Learn about emerging trends, tools, and strategies before they become mainstream, giving you a competitive edge.'
    },
    {
      id: 'boost-productivity',
      title: 'Boost Your Productivity',
      description: 'Get practical tips, tools, and frameworks that you can implement immediately to improve your workflow.'
    },
    {
      id: 'connect-network',
      title: 'Connect with a Network',
      description: 'Join a community of like-minded professionals and expand your network with valuable connections.'
    },
    {
      id: 'continuous-learning',
      title: 'Continuous Learning',
      description: 'Invest in your personal and professional growth with curated content that keeps you learning and evolving.'
    }
  ];

  return (
    <section id="benefits" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto max-w-container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What You Get</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Subscribe to Milo and unlock a wealth of benefits that will help you stay ahead in your field.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={benefit.id} 
              className="flex animate-on-scroll"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => trackEvent('Benefit_Click', { benefit: benefit.id })}
            >
              <div className="mr-4 flex-shrink-0">
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent bg-opacity-20 text-accent">
                  <span className="font-bold">{index + 1}</span>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                <p className="text-text-secondary">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <a 
            href="#signup" 
            className="btn btn-primary"
            onClick={() => trackEvent('CTA_Click', { location: 'benefits' })}
          >
            Subscribe Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default Benefits;