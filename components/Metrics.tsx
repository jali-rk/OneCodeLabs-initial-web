
import React from 'react';

const Metrics: React.FC = () => {
  const items = [
    { label: 'Scalable Systems', value: '99.9%', color: 'text-burlywood' },
    { label: 'Cloud-Native', value: 'Cloud', color: 'text-primary' },
    { label: 'Security-Minded', value: 'Zero', color: 'text-burlywood' },
    { label: 'Fast Delivery', value: '2.5x', color: 'text-primary' },
  ];

  return (
    <div className="border-y border-white/5 bg-cetacean/50 py-12 relative z-20 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        {items.map((item, idx) => (
          <div key={idx} className={`flex flex-col items-center text-center ${idx !== 0 ? 'md:border-l border-white/5' : ''}`}>
            <span className={`${item.color} font-black text-3xl md:text-4xl mb-1`}>{item.value}</span>
            <p className="text-pearl/60 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em]">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Metrics;
