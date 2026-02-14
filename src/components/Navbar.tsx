
import React from 'react';
import logoIcon from '../assets/Burlywood_icon.png';

const Navbar: React.FC = () => {
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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    if (targetId === 'home') {
      smoothScrollTo('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      smoothScrollTo(targetId);
    }
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src={logoIcon} alt="OneCodeLabs" className="w-10 h-10 drop-shadow-[0_0_8px_rgba(216,191,121,0.4)]" />
          <h1 className="text-xl font-black tracking-tighter text-white uppercase pt-1">OneCodeLabs</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90 cursor-pointer" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90 cursor-pointer" onClick={(e) => handleNavClick(e, 'products')}>Products</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90 cursor-pointer" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90 cursor-pointer" onClick={(e) => handleNavClick(e, 'ai-consultant')}>AI Consultant</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90 cursor-pointer" onClick={(e) => handleNavClick(e, 'about')}>About</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90 cursor-pointer" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
        </div>
        
        <button onClick={(e) => handleNavClick(e as any, 'contact')} className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
          Talk to Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
