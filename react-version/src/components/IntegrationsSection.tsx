import React from 'react';

const IntegrationsSection: React.FC = () => {
  const integrations = [
    {
      name: 'Gmail',
      description: 'Trie automatiquement tes emails et répond aux messages récurrents',
      timeSaved: '45 min/jour',
      icon: '📧'
    },
    {
      name: 'Notion',
      description: 'Organise tes notes et synchronise tes projets automatiquement',
      timeSaved: '30 min/jour',
      icon: '📝'
    },
    {
      name: 'WhatsApp',
      description: 'Répond aux messages professionnels et programme tes communications',
      timeSaved: '25 min/jour',
      icon: '💬'
    },
    {
      name: 'Slack',
      description: 'Gère tes notifications et automatise les réponses',
      timeSaved: '35 min/jour',
      icon: '💼'
    },
    {
      name: 'Calendar',
      description: 'Planifie intelligemment tes rendez-vous',
      timeSaved: '20 min/jour',
      icon: '📅'
    },
    {
      name: 'Trello',
      description: 'Automatise la création de cartes et le suivi de projets',
      timeSaved: '15 min/jour',
      icon: '📋'
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            Intégrations natives
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Connecte-toi en un clic à tes outils préférés
          </p>
        </div>
        
        {/* Integrations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <div 
              key={integration.name}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className="text-4xl mb-6">
                {integration.icon}
              </div>
              
              {/* Content */}
              <h3 className="font-heading text-2xl font-bold text-white mb-4">
                {integration.name}
              </h3>
              
              <p className="text-white/60 mb-6 leading-relaxed">
                {integration.description}
              </p>
              
              {/* Time Saved */}
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 border border-white/20">
                <span className="text-white font-semibold text-sm">
                  {integration.timeSaved}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Total Time Saved */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center justify-center p-8 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10">
            <div className="text-center">
              <div className="text-5xl font-bold text-white mb-2">3h 10min</div>
              <div className="text-white/60 text-lg">économisées par jour</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;