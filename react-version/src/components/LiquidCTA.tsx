import React from 'react';

const LiquidCTA: React.FC = () => {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-white/5 border border-white/10 mb-8">
          <span className="text-white font-semibold">Essai gratuit</span>
        </div>
        
        {/* Main Heading */}
        <h2 className="font-heading text-5xl md:text-7xl font-bold text-white mb-6">
          Commence maintenant
        </h2>
        
        {/* Description */}
        <p className="text-xl text-white/50 mb-12 max-w-2xl mx-auto">
          Rejoins des milliers d'utilisateurs qui automatisent leur quotidien.
        </p>
          
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="px-8 py-4 bg-white text-black rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105">
            Commencer gratuitement
          </button>
          
          <button className="px-8 py-4 backdrop-blur-xl bg-white/5 border border-white/20 rounded-2xl text-white font-semibold text-lg transition-all duration-300 hover:bg-white/10 hover:scale-105">
            Voir la démo
          </button>
        </div>
          
        {/* Features List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="flex items-center justify-center text-white/50">
            <div className="w-1.5 h-1.5 bg-white/30 rounded-full mr-3"></div>
            <span className="text-sm">Aucune carte de crédit requise</span>
          </div>
          <div className="flex items-center justify-center text-white/50">
            <div className="w-1.5 h-1.5 bg-white/30 rounded-full mr-3"></div>
            <span className="text-sm">Configuration en 2 minutes</span>
          </div>
          <div className="flex items-center justify-center text-white/50">
            <div className="w-1.5 h-1.5 bg-white/30 rounded-full mr-3"></div>
            <span className="text-sm">Support 24/7 inclus</span>
          </div>
        </div>
        
        {/* Bottom Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-2xl font-bold text-white mb-2">14 jours</div>
            <div className="text-white/50 text-sm">Essai gratuit</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-2xl font-bold text-white mb-2">0€</div>
            <div className="text-white/50 text-sm">Pour commencer</div>
          </div>
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6">
            <div className="text-2xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/50 text-sm">Support client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiquidCTA;