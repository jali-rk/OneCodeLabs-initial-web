
import React from 'react';

const products = [
  {
    tag: 'FinTech',
    tagColor: 'text-burlywood bg-burlywood/10 border-burlywood/20',
    title: 'Nexus Analytics',
    description: 'Real-time market prediction engine powered by scalable neural networks.',
    image: 'https://picsum.photos/seed/nexus/800/1000',
  },
  {
    tag: 'Infrastructure',
    tagColor: 'text-primary bg-primary/10 border-primary/20',
    title: 'CloudPulse OS',
    description: 'Automated server orchestration for distributed multi-cloud environments.',
    image: 'https://picsum.photos/seed/cloudpulse/800/1000',
  },
  {
    tag: 'Enterprise',
    tagColor: 'text-burlywood bg-burlywood/10 border-burlywood/20',
    title: 'SyncFlow ERP',
    description: 'Unified business management system for global enterprise operations.',
    image: 'https://picsum.photos/seed/syncflow/800/1000',
  },
];

const Products: React.FC = () => {
  return (
    <section className="py-24 bg-egyptian/5" id="products">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Innovation Showcase</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Proprietary Platforms</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="group relative aspect-[4/5] rounded-3xl overflow-hidden bg-cetacean border border-white/5">
              <img 
                alt={product.title} 
                className="w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-1000" 
                src={product.image} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cetacean via-cetacean/60 to-transparent p-8 flex flex-col justify-end">
                <div className={`${product.tagColor} px-3 py-1 rounded-full text-[10px] font-bold uppercase w-fit mb-4 border`}>
                  {product.tag}
                </div>
                <h4 className="text-2xl font-bold text-white mb-2">{product.title}</h4>
                <p className="text-pearl/70 text-sm mb-6 line-clamp-2">{product.description}</p>
                <button className="flex items-center gap-2 text-primary font-bold group-hover:gap-4 transition-all">
                  Learn More <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
