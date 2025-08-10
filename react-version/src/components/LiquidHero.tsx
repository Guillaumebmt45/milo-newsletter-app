import React, { useState } from 'react';
import MiloLogo from './MiloLogo';
import { AnimatedListDemo } from './AnimatedListDemo';
import { Meteors } from './magicui/meteors';
import { AnimatedSubscribeButtonControlledDemo } from './AnimatedSubscribeButtonDemo';

const LiquidHero: React.FC = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (emailError) {
      setEmailError('');
    }
  };

  const handleSubscribeClick = () => {
    if (!email.trim()) {
      setEmailError('Entrez votre email avant l\'inscription');
      return false;
    }
    if (!isValidEmail(email)) {
      setEmailError('Format d\'email invalide');
      return false;
    }
    setEmailError('');
    return true;
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black px-4 sm:px-6 pt-16 sm:pt-20">

      
      {/* Meteors Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Meteors number={30} />
      </div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="p-3 sm:p-4 rounded-xl sm:rounded-2xl backdrop-blur-xl bg-white/5 border border-white/10">
            <MiloLogo className="h-8 sm:h-10 md:h-12 w-auto" />
          </div>
        </div>
        
        {/* Main Heading */}
        <h1 className="font-heading text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white mb-4 sm:mb-6 leading-tight max-w-3xl mx-auto px-2">
          Gagne jusqu'à 4 heures<br className="hidden sm:block"/>par jour avec <span className="italic font-bold">milo</span>
        </h1>
        
        {/* Subheading */}
        <p className="text-base sm:text-lg text-white/60 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-2">
          Email, WhatsApp, IG DM, devis & factures. Tu lui parles → il agit
        </p>
        
        {/* Newsletter Signup */}
        <div className="w-full max-w-md mx-auto mb-12 sm:mb-16 px-2">
          <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4">
            <div className="flex flex-col gap-3">
              <div className="flex-1">
                <input 
                  type="email" 
                  placeholder="Ton email" 
                  value={email}
                  onChange={handleEmailChange}
                  className={`w-full px-4 py-3 bg-black/50 border rounded-xl text-white placeholder-white/60 focus:outline-none transition-colors ${
                    emailError ? 'border-red-500 focus:border-red-400' : 'border-white/20 focus:border-white/40'
                  }`}
                />
                {emailError && (
                  <p className="text-red-400 text-sm mt-1">{emailError}</p>
                )}
              </div>
              <AnimatedSubscribeButtonControlledDemo onSubscribeClick={handleSubscribeClick} />
            </div>
            <p className="text-white/50 text-xs sm:text-sm mt-3 text-center">
              Rejoins 10,000+ utilisateurs qui gagnent du temps chaque jour
            </p>
          </div>
        </div>
        
        {/* Milo Activities */}
        <div className="relative max-w-2xl mx-auto mt-12 sm:mt-16 px-2">
          <div className="p-4 sm:p-6">
            <h3 className="text-white text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center">Activités récentes de Milo</h3>
            <AnimatedListDemo className="h-[400px] sm:h-[500px]" />
          </div>
        </div>
      </div>

    </section>
  );
};

export default LiquidHero;