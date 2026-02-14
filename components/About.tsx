
import React from 'react';
import logoIcon from '../public/assets/Burlywood_icon.png';

const About: React.FC = () => {
  return (
    <section className="py-24 bg-egyptian/10" id="about">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-10">
          <div>
            <h2 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-4">Our Identity</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6 leading-tight">Global Impact through Precision</h3>
            <p className="text-lavender/70 leading-relaxed text-lg italic">
              "At OneCodeLabs, we don't just write code; we architect the digital future. Our mission is to bridge the gap between complex ideas and scalable reality."
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-burlywood font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">visibility</span> Vision
              </h4>
              <p className="text-lavender/60 text-sm leading-relaxed">Global leader in building impactful technology that defines market trends.</p>
            </div>
            <div className="p-4 rounded-xl bg-white/5 border border-white/10">
              <h4 className="text-burlywood font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">rocket_launch</span> Mission
              </h4>
              <p className="text-lavender/60 text-sm leading-relaxed">Design, build, and operate scalable, reliable software platforms globally.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4 pt-6">
            <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary shadow-lg shadow-primary/20 bg-white">
              <img 
                alt="Founder portrait" 
                src="https://picsum.photos/seed/founder/200/200" 
              />
            </div>
            <div>
              <p className="text-white font-bold text-lg leading-none uppercase">W Kumarasiri</p>
              <p className="text-pearl/50 text-[10px] uppercase tracking-[0.2em] mt-1">Founder & CEO</p>
            </div>
          </div>
        </div>
        
        <div className="relative group">
          <div className="absolute -inset-4 bg-gradient-to-tr from-primary to-burlywood opacity-20 blur-2xl group-hover:opacity-30 transition-opacity duration-500"></div>
          <div className="relative bg-cetacean rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
            <div className="bg-gradient-to-b from-white/10 to-transparent p-10 md:p-14 space-y-10">
              <div className="flex gap-5 group/item">
                <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center p-1 transition-colors group-hover/item:bg-primary/20">
                  <img src={logoIcon} alt="OneCodeLabs" className="w-full h-full" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Integrated Ecosystems</h4>
                  <p className="text-lavender/50 text-sm leading-relaxed">Every line of code is part of a larger, interconnected strategy powered by OneCode.</p>
                </div>
              </div>
              
              <div className="flex gap-5 group/item">
                <div className="w-12 h-12 flex-shrink-0 bg-burlywood/10 rounded-lg flex items-center justify-center text-burlywood transition-colors group-hover/item:bg-burlywood/20">
                  <span className="material-symbols-outlined text-3xl">security</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Uncompromising Security</h4>
                  <p className="text-lavender/50 text-sm leading-relaxed">Built-in threat detection and enterprise-level encryption at core.</p>
                </div>
              </div>
              
              <div className="flex gap-5 group/item">
                <div className="w-12 h-12 flex-shrink-0 bg-primary/10 rounded-lg flex items-center justify-center text-primary transition-colors group-hover/item:bg-primary/20">
                  <span className="material-symbols-outlined text-3xl">speed</span>
                </div>
                <div>
                  <h4 className="text-white font-bold text-xl mb-2">Infinite Scalability</h4>
                  <p className="text-lavender/50 text-sm leading-relaxed">Architectures that grow with your user base without friction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
