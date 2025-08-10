import React, { useState } from 'react';
import { useAnalytics } from '../contexts/AnalyticsContext';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  id: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick, id }) => {
  return (
    <div className="border border-border rounded-card mb-4 overflow-hidden animate-on-scroll">
      <button 
        className="accordion-header w-full text-left" 
        onClick={onClick}
        aria-expanded={isOpen}
        aria-controls={`accordion-content-${id}`}
      >
        <span>{question}</span>
        <svg 
          className={`w-5 h-5 transform transition-transform duration-fast ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      <div 
        id={`accordion-content-${id}`}
        className="accordion-content" 
        aria-hidden={!isOpen}
      >
        <div className="p-6 text-text-secondary">
          {answer}
        </div>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const { trackEvent } = useAnalytics();
  const [openItem, setOpenItem] = useState<string | null>('faq-1');

  const faqItems = [
    {
      id: 'faq-1',
      question: 'How often will I receive the newsletter?',
      answer: 'The Milo newsletter is sent out once a week, typically on Tuesday mornings. We respect your inbox and stick to a consistent schedule so you know when to expect our content.'
    },
    {
      id: 'faq-2',
      question: 'What kind of content can I expect?',
      answer: 'Each issue includes a mix of industry news, trend analysis, practical tips, tool recommendations, and exclusive resources. We focus on delivering actionable insights that you can apply immediately to your work and personal development.'
    },
    {
      id: 'faq-3',
      question: 'Is the newsletter free?',
      answer: 'Yes, the standard Milo newsletter is completely free. We also offer a premium tier with additional benefits like in-depth guides, exclusive interviews, and early access to events, but our core weekly newsletter will always remain free.'
    },
    {
      id: 'faq-4',
      question: 'Can I unsubscribe at any time?',
      answer: 'Absolutely. While we hope you\'ll find value in our content, you can unsubscribe with a single click at any time. There\'s an unsubscribe link at the bottom of every email we send.'
    },
    {
      id: 'faq-5',
      question: 'Do you share my email with third parties?',
      answer: 'No. We take your privacy seriously and will never share, sell, or rent your email address or personal information with any third parties. You can review our full privacy policy for more details.'
    },
    {
      id: 'faq-6',
      question: 'Can I share the newsletter content with my team?',
      answer: 'We encourage you to share insights with your immediate team. However, we ask that you don\'t forward the entire newsletter or republish our content without permission. If you\'d like to share with a larger group, please consider our team subscription options.'
    }
  ];

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
    trackEvent('FAQ_Click', { question: id });
  };

  return (
    <section id="faq" className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto max-w-container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4">Frequently Asked Questions</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Have questions about the Milo newsletter? Find answers to common questions below.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={item.id}
              id={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openItem === item.id}
              onClick={() => toggleAccordion(item.id)}
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">Still have questions?</p>
          <a 
            href="mailto:hello@milo.com" 
            className="btn btn-secondary"
            onClick={() => trackEvent('Contact_Click')}
          >
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;