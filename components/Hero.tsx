
import React from 'react';

const RotatingRingLogo: React.FC = () => {
  const dots = 32;
  const radiusX = 28; // Horizontal radius
  const radiusY = 14; // Vertical radius (much smaller for stronger 3D effect)
  
  return (
    <div className="relative w-20 h-20 mb-6" style={{ transform: 'rotate(25deg)' }}>
      <svg viewBox="0 0 60 60" className="w-full h-full" style={{ animation: 'spin 6s linear infinite' }}>
        {Array.from({ length: dots }).map((_, i) => {
          const angle = (i / dots) * Math.PI * 2;
          const x = 30 + Math.cos(angle) * radiusX;
          const y = 30 + Math.sin(angle) * radiusY;
          
          // Enhanced 3D depth - front dots are larger and brighter
          const depthFactor = Math.sin(angle + Math.PI / 2); // +1 at top (front), -1 at bottom (back)
          const baseSize = 1.2;
          const size = baseSize + depthFactor * 1.2; // Size varies from 0 to 2.4
          const opacity = Math.max(0.2, 0.5 + (depthFactor * 0.5)); // 0.2 to 1.0
          
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={Math.max(0.3, size)}
              fill="#D8BF79"
              opacity={opacity}
              style={{
                filter: depthFactor > 0 
                  ? `drop-shadow(0 0 ${2 + depthFactor * 3}px rgba(216,191,121,0.8))` 
                  : 'none'
              }}
            />
          );
        })}
      </svg>
      <div className="absolute inset-0 blur-2xl bg-burlywood/30 rounded-full -z-10 animate-pulse" style={{ animationDuration: '3s' }}></div>
    </div>
  );
};

const Hero: React.FC = () => {
  // Physics-based smooth scrolling with easing
  const smoothScrollTo = (targetId: string) => {
    const target = document.getElementById(targetId);
    if (!target) return;

    const startPosition = window.pageYOffset;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - 80; // 80px offset for navbar
    const distance = targetPosition - startPosition;
    const duration = 1200; // milliseconds
    let start: number | null = null;

    // Easing function for physics-based motion (easeInOutQuart)
    const easeInOutQuart = (t: number): number => {
      return t < 0.5 
        ? 8 * t * t * t * t 
        : 1 - Math.pow(-2 * t + 2, 4) / 2;
    };

    const animation = (currentTime: number) => {
      if (start === null) start = currentTime;
      const timeElapsed = currentTime - start;
      const progress = Math.min(timeElapsed / duration, 1);
      const ease = easeInOutQuart(progress);
      
      window.scrollTo(0, startPosition + distance * ease);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    requestAnimationFrame(animation);
  };

  const handleScrollClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    smoothScrollTo(targetId);
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden hero-gradient">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-20">
        <div className="space-y-8 animate-in fade-in slide-in-from-left duration-1000">
          <RotatingRingLogo />
          
          <h1 className="text-6xl md:text-8xl font-black text-white leading-[1.1] tracking-tight">
            From Ideas <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-aero">to Impact</span>
          </h1>
          
          <p className="text-lg md:text-xl text-lavender/80 max-w-lg leading-relaxed font-light">
            Design, build, and operate scalable, reliable software platforms with our global expertise in impactful technology.
          </p>
          
          <div className="flex flex-wrap gap-4 pt-4">
            <a href="#contact" onClick={(e) => handleScrollClick(e, 'contact')} className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all shadow-2xl shadow-primary/30 transform hover:-translate-y-1 inline-block cursor-pointer">
              Start a Project
            </a>
            <a href="#products" onClick={(e) => handleScrollClick(e, 'products')} className="bg-white/5 hover:bg-white/10 border border-white/10 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all backdrop-blur-md inline-block cursor-pointer">
              See Our Work
            </a>
          </div>
        </div>
        
        <div className="relative hidden lg:flex items-center justify-center animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative z-10">
            <img 
              src="/assets/Burlywood_icon.png" 
              alt="OneCodeLabs" 
              className="w-96 h-96 object-contain drop-shadow-[0_0_40px_rgba(216,191,121,0.5)] hover:drop-shadow-[0_0_60px_rgba(216,191,121,0.7)] transition-all duration-500 hover:scale-110" 
            />
          </div>
          
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-burlywood/10 rounded-full blur-[100px] -z-10"></div>
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -z-10"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
