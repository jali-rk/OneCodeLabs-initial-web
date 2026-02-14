
import React from 'react';

const services = [
  {
    icon: 'architecture',
    title: 'Architecture',
    description: 'Designing robust foundations for explosive growth and enterprise-grade reliability.',
  },
  {
    icon: 'cloud_done',
    title: 'Cloud & DevOps',
    description: 'Automated infrastructure with seamless CI/CD pipelines for modern deployment cycles.',
  },
  {
    icon: 'developer_mode_tv',
    title: 'Product Engineering',
    description: 'User-centric builds that combine aesthetic excellence with high-performance code.',
  },
  {
    icon: 'settings_suggest',
    title: 'Platform Operations',
    description: 'Reliable 24/7 management to ensure your platform never sleeps and stays healthy.',
  },
];

const Services: React.FC = () => {
  return (
    <section className="py-24 bg-cetacean relative" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <h2 className="text-sm font-bold text-burlywood uppercase tracking-[0.2em] mb-4">Core Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Services</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <span className="material-symbols-outlined text-4xl text-primary transition-transform duration-300 group-hover:scale-110">
                  {service.icon}
                </span>
              </div>
              <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
              <p className="text-lavender/60 leading-relaxed text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
