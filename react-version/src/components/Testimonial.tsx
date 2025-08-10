import React from 'react';

const Testimonial: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 md:py-24">
      <div className="container mx-auto max-w-container px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">What Our Subscribers Say</h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Join thousands of professionals who trust Milo for their weekly insights.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-surface border border-border rounded-card p-6 animate-on-scroll">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
                S
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Sarah Johnson</h4>
                <p className="text-text-secondary text-sm">Product Manager</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              "Milo's newsletter has become an essential part of my weekly routine. The insights are always relevant, and I've implemented several strategies that have significantly improved my team's productivity."
            </p>
            <p className="text-accent font-semibold">Subscriber for 2+ years</p>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-surface border border-border rounded-card p-6 animate-on-scroll" style={{ animationDelay: '150ms' }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
                M
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Michael Chen</h4>
                <p className="text-text-secondary text-sm">Software Engineer</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              "What sets Milo apart is the quality of content. Each issue contains actionable advice that I can apply immediately. The exclusive resources have saved me countless hours of research."
            </p>
            <p className="text-accent font-semibold">Subscriber for 1+ year</p>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-surface border border-border rounded-card p-6 animate-on-scroll" style={{ animationDelay: '300ms' }}>
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-xl">
                A
              </div>
              <div className="ml-4">
                <h4 className="font-semibold">Aisha Patel</h4>
                <p className="text-text-secondary text-sm">Marketing Director</p>
              </div>
            </div>
            <div className="mb-4">
              <div className="flex text-accent">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-text-secondary mb-4">
              "I've subscribed to many newsletters over the years, but Milo consistently delivers the highest value. The curated insights have helped me stay ahead of industry trends and make more informed decisions."
            </p>
            <p className="text-accent font-semibold">Subscriber for 3+ years</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;