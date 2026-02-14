
import React from 'react';

export const BrandIcon: React.FC<{ className?: string; color?: string }> = ({ 
  className = "w-10 h-10", 
  color = "#D8BF79" 
}) => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path 
      d="M82 45C82 58.8071 67.6731 70 50 70C32.3269 70 18 58.8071 18 45C18 31.1929 32.3269 20 50 20C67.6731 20 82 31.1929 82 45Z" 
      stroke={color} 
      strokeWidth="12" 
      transform="rotate(-25 50 45)"
      strokeLinecap="round"
    />
    <path 
      d="M75 55C75 68.8071 60.6731 80 43 80C25.3269 80 11 68.8071 11 55" 
      stroke={color} 
      strokeWidth="4" 
      strokeOpacity="0.3"
      transform="rotate(-25 43 55)"
      strokeLinecap="round"
    />
  </svg>
);

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 w-full z-50 glass-nav">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <BrandIcon className="w-10 h-10 drop-shadow-[0_0_8px_rgba(216,191,121,0.4)]" />
          <h1 className="text-xl font-black tracking-tighter text-white uppercase pt-1">OneCodeLabs</h1>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90" href="#">Home</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90" href="#products">Products</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90" href="#services">Services</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90" href="#ai-consultant">AI Consultant</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90" href="#about">About</a>
          <a className="text-sm font-medium hover:text-primary transition-colors text-white/90" href="#contact">Contact</a>
        </div>
        
        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-sm font-bold transition-all transform hover:scale-105 shadow-xl shadow-primary/20">
          Talk to Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
