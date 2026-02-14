
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Innovating the Future
          </div>
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tight">
            From Ideas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-aero">to Impact</span>
          </h1>
          
          <p className="text-lg md:text-xl text-lavender/80 max-w-lg leading-relaxed font-light">
            Design, build, and operate scalable, reliable software platforms with our global expertise in impactful technology.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-2xl shadow-primary/30 transform hover:-translate-y-1">
              Start a Project
            </button>
            <button className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-md">
              See Our Work
            </button>
          </div>
        </div>
        
        <div className="relative hidden lg:block animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10 w-full aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50 group">
            <img 
              alt="Cybersecurity and technology interface" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src="https://picsum.photos/seed/tech1/1200/1200" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-primary/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                <span className="material-symbols-outlined text-white text-5xl">lock</span>
              </div>
            </div>
          </div>
          
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-burlywood/10 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
