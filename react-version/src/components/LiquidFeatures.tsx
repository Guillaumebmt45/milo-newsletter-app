import React from 'react';

const LiquidFeatures: React.FC = () => {
  const features = [
    {
      title: 'IA Conversationnelle',
      description: 'Parle à Milo comme à un assistant personnel. Il comprend le contexte et s\'adapte à ton style de travail.',
      icon: '🤖',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Automatisation Intelligente',
      description: 'Milo apprend de tes habitudes et automatise progressivement tes tâches répétitives.',
      icon: '⚡',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Intégrations Natives',
      description: 'Connecte-toi en un clic à plus de 50 applications que tu utilises déjà au quotidien.',
      icon: '🔗',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Sécurité Avancée',
      description: 'Tes données sont chiffrées de bout en bout. Milo respecte ta vie privée et la confidentialité.',
      icon: '🔒',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            Fonctionnalités
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Des capacités avancées pour automatiser ton quotidien
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">
                {feature.icon}
              </div>
              
              {/* Content */}
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                {feature.title}
              </h3>
              
              <p className="text-white/60 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LiquidFeatures;