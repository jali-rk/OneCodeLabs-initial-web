
import React from 'react';

const steps = [
  { id: '01', title: 'Discover', description: 'Requirement gathering & strategic planning.', color: 'border-primary' },
  { id: '02', title: 'Build', description: 'Rapid development with security first mindset.', color: 'border-primary' },
  { id: '03', title: 'Deploy', description: 'Automated scaling & global distribution.', color: 'border-burlywood' },
  { id: '04', title: 'Operate', description: '24/7 maintenance & iterative optimization.', color: 'border-burlywood' },
];

const Process: React.FC = () => {
  return (
    <section className="py-24 bg-cetacean overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-sm font-bold text-burlywood uppercase tracking-[0.2em] mb-4">The Lifecycle</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Our Delivery Process</h3>
        </div>
        
        <div className="relative flex flex-col md:flex-row justify-between items-start md:items-center gap-16 md:gap-4 process-line">
          {steps.map((step, idx) => (
            <div key={idx} className="relative z-10 flex flex-col items-center text-center md:w-1/4 group">
              <div className={`w-16 h-16 rounded-full bg-cetacean border-4 ${step.color} flex items-center justify-center mb-6 shadow-2xl transition-transform duration-300 group-hover:scale-110 z-10`}>
                <span className="text-white font-black text-xl">{step.id}</span>
              </div>
              <h5 className="text-white font-bold text-lg mb-2">{step.title}</h5>
              <p className="text-lavender/50 text-xs px-6 leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
