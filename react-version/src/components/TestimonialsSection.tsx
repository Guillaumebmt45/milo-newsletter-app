import React from 'react';

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  timeSaved: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: 'Sarah Martinez',
      role: 'Directrice Marketing',
      company: 'TechCorp',
      avatar: '👩‍💼',
      quote: 'Milo a révolutionné ma gestion d\'emails. Je gagne vraiment 3 heures par jour, c\'est incroyable !',
      timeSaved: '3h 15min'
    },
    {
      name: 'Thomas Dubois',
      role: 'Entrepreneur',
      company: 'StartupLab',
      avatar: '👨‍💻',
      quote: 'L\'intégration avec Notion et Slack est parfaite. Milo comprend exactement ce dont j\'ai besoin.',
      timeSaved: '2h 45min'
    },
    {
      name: 'Marie Chen',
      role: 'Chef de Projet',
      company: 'InnovCorp',
      avatar: '👩‍🎨',
      quote: 'Enfin un assistant IA qui tient ses promesses. Mon équipe est plus productive que jamais.',
      timeSaved: '3h 30min'
    }
  ];

  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="font-heading text-5xl md:text-6xl font-bold text-white mb-6">
            Témoignages
          </h2>
          <p className="text-xl text-white/50 max-w-2xl mx-auto">
            Ce que disent nos utilisateurs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="group relative backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              <p className="text-white/60 leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-white text-sm">{testimonial.name}</div>
                  <div className="text-white/40 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-3xl font-bold text-white mb-2">10k+</div>
            <div className="text-white/50 text-sm">Utilisateurs actifs</div>
          </div>
          <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-white/50 text-sm">Note moyenne</div>
          </div>
          <div className="text-center backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-8">
            <div className="text-3xl font-bold text-white mb-2">99%</div>
            <div className="text-white/50 text-sm">Satisfaction client</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;