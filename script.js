document.addEventListener('DOMContentLoaded', () => {
  // Update current year in footer
  const currentYearElement = document.getElementById('current-year');
  if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
  }

  // Mobile menu toggle
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navList = document.querySelector('.nav-list');

  if (mobileMenuToggle && navList) {
    mobileMenuToggle.addEventListener('click', () => {
      navList.classList.toggle('active');
      
      // Toggle aria-expanded attribute
      const isExpanded = navList.classList.contains('active');
      mobileMenuToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (navList && navList.classList.contains('active')) {
        navList.classList.remove('active');
        if (mobileMenuToggle) {
          mobileMenuToggle.setAttribute('aria-expanded', 'false');
        }
      }
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        const headerHeight = document.querySelector('.header').offsetHeight;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // Accordion functionality
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const isExpanded = header.getAttribute('aria-expanded') === 'true';
      const contentId = header.getAttribute('aria-controls');
      const content = document.getElementById(contentId);
      
      // Toggle current accordion
      header.setAttribute('aria-expanded', !isExpanded);
      content.setAttribute('aria-hidden', isExpanded);
      
      // Optional: Close other accordions
      if (!isExpanded) {
        accordionHeaders.forEach(otherHeader => {
          if (otherHeader !== header) {
            const otherContentId = otherHeader.getAttribute('aria-controls');
            const otherContent = document.getElementById(otherContentId);
            
            otherHeader.setAttribute('aria-expanded', 'false');
            otherContent.setAttribute('aria-hidden', 'true');
          }
        });
      }
    });
  });

  // Newsletter form validation and submission
  const newsletterForm = document.getElementById('newsletter-form');
  const emailInput = document.getElementById('email');
  const consentCheckbox = document.getElementById('consent');
  const emailError = document.getElementById('email-error');
  const consentError = document.getElementById('consent-error');
  const submitButton = newsletterForm.querySelector('button[type="submit"]');
  const buttonText = submitButton.querySelector('.btn-text');
  const buttonLoading = submitButton.querySelector('.btn-loading');
  const successMessage = document.getElementById('success-message');
  
  // Email validation function
  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Real-time email validation
  if (emailInput) {
    emailInput.addEventListener('input', () => {
      if (emailInput.value.trim() === '') {
        emailInput.classList.remove('is-invalid');
        emailError.textContent = '';
      } else if (!isValidEmail(emailInput.value)) {
        emailInput.classList.add('is-invalid');
        emailError.textContent = 'Invalid address — check the format.';
      } else {
        emailInput.classList.remove('is-invalid');
        emailError.textContent = '';
      }
    });
  }
  
  // Form submission
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Reset error messages
      emailError.textContent = '';
      consentError.textContent = '';
      
      // Validate email
      if (emailInput.value.trim() === '') {
        emailError.textContent = 'Please enter your email address.';
        emailInput.focus();
        return;
      } else if (!isValidEmail(emailInput.value)) {
        emailError.textContent = 'Invalid address — check the format.';
        emailInput.focus();
        return;
      }
      
      // Validate consent
      if (!consentCheckbox.checked) {
        consentError.textContent = 'Please check the consent box to continue.';
        consentCheckbox.focus();
        return;
      }
      
      // Show loading state
      buttonText.classList.add('hidden');
      buttonLoading.classList.remove('hidden');
      submitButton.disabled = true;
      
      // Track form submission event
      if (typeof window.analytics !== 'undefined') {
        window.analytics.track('Newsletter_Submit', {
          email: emailInput.value,
          consent: true,
          referrer: document.referrer,
          utm: getUTMParams()
        });
      }
      
      try {
        // Simulate API call (replace with actual API endpoint)
        // const response = await fetch('/api/subscribe', {
        //   method: 'POST',
        //   headers: {
        //     'Content-Type': 'application/json'
        //   },
        //   body: JSON.stringify({
        //     email: emailInput.value,
        //     consent: true,
        //     referrer: document.referrer,
        //     utm: getUTMParams()
        //   })
        // });
        
        // Simulate successful response
        // const data = await response.json();
        
        // For demo purposes, we'll simulate a successful API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        const status = 200; // Simulate HTTP status
        
        // Handle different response statuses
        if (status === 200) {
          // Success
          if (typeof window.analytics !== 'undefined') {
            window.analytics.track('Newsletter_Success', {
              email: emailInput.value
            });
          }
          
          // Show success message
          newsletterForm.reset();
          successMessage.classList.remove('hidden');
          
          // Setup referral link copy functionality
          setupReferralCopy();
          
        } else if (status === 409) {
          // Already subscribed
          emailError.textContent = 'This email is already subscribed.';
          emailInput.focus();
          
          if (typeof window.analytics !== 'undefined') {
            window.analytics.track('Newsletter_Error', {
              error: 'already_subscribed'
            });
          }
          
        } else if (status === 422) {
          // Invalid email
          emailError.textContent = 'Invalid address — please check the format.';
          emailInput.focus();
          
          if (typeof window.analytics !== 'undefined') {
            window.analytics.track('Newsletter_Error', {
              error: 'invalid_email'
            });
          }
          
        } else {
          // Other error
          throw new Error('Subscription failed');
        }
        
      } catch (error) {
        console.error('Error:', error);
        emailError.textContent = 'Something went wrong. Please try again later.';
        
        if (typeof window.analytics !== 'undefined') {
          window.analytics.track('Newsletter_Error', {
            error: 'server_error'
          });
        }
      } finally {
        // Reset button state
        buttonText.classList.remove('hidden');
        buttonLoading.classList.add('hidden');
        submitButton.disabled = false;
      }
    });
  }
  
  // Setup referral link copy functionality
  function setupReferralCopy() {
    const copyButton = document.getElementById('copy-link');
    const referralLink = document.getElementById('referral-link');
    
    if (copyButton && referralLink) {
      copyButton.addEventListener('click', () => {
        referralLink.select();
        document.execCommand('copy');
        
        // Show copied state
        const originalText = copyButton.textContent;
        copyButton.textContent = 'Copied!';
        copyButton.classList.add('btn-success');
        
        // Reset after 2 seconds
        setTimeout(() => {
          copyButton.textContent = originalText;
          copyButton.classList.remove('btn-success');
        }, 2000);
      });
    }
  }
  
  // Helper function to get UTM parameters from URL
  function getUTMParams() {
    const utmParams = {};
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach(param => {
      if (urlParams.has(param)) {
        utmParams[param] = urlParams.get(param);
      }
    });
    
    return utmParams;
  }
  
  // Add subtle animations on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .benefit-item, .testimonial-card, .accordion-item');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementPosition < windowHeight * 0.9) {
        element.classList.add('fade-in');
      }
    });
  };
  
  // Add fade-in class to elements
  document.querySelectorAll('.feature-card, .benefit-item, .testimonial-card, .accordion-item').forEach(element => {
    element.classList.add('animate-on-scroll');
  });
  
  // Initial check and add scroll listener
  animateOnScroll();
  window.addEventListener('scroll', animateOnScroll);
  
  // Optional: Animate subscriber count
  const subscriberCount = document.querySelector('.subscriber-count .badge');
  if (subscriberCount) {
    const targetCount = parseInt(subscriberCount.textContent.replace(/[^0-9]/g, ''), 10);
    let currentCount = 0;
    const duration = 2000; // 2 seconds
    const interval = 50; // Update every 50ms
    const increment = Math.ceil(targetCount / (duration / interval));
    
    const counterAnimation = setInterval(() => {
      currentCount += increment;
      if (currentCount >= targetCount) {
        currentCount = targetCount;
        clearInterval(counterAnimation);
      }
      subscriberCount.textContent = `${currentCount.toLocaleString()}+ subscribers`;
    }, interval);
  }
});

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  .animate-on-scroll {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.5s ease-out, transform 0.5s ease-out;
  }
  
  .fade-in {
    opacity: 1;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);