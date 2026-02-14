
import React from 'react';
import logoIcon from '../public/assets/Burlywood_icon.png';

const Footer: React.FC = () => {
  return (
    <footer className="pt-12 pb-12 bg-cetacean border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-3 opacity-80 hover:opacity-100 transition-all cursor-pointer group">
          <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full p-1 group-hover:scale-110 transition-transform shadow-inner">
            <img src={logoIcon} alt="OneCodeLabs" className="w-full h-full" />
          </div>
          <h2 className="text-lg font-bold tracking-tighter text-white uppercase">OneCodeLabs</h2>
        </div>
        
        <p className="text-lavender/40 text-sm font-medium">
          © {new Date().getFullYear()} OneCodeLabs (PVT) LTD. All rights reserved.
        </p>
        
        <div className="flex gap-8 text-xs font-bold uppercase tracking-[0.2em] text-lavender/40">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
