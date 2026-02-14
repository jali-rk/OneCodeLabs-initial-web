
import React, { useState, useEffect } from 'react';
import Navbar from './src/components/Navbar';
import Hero from './src/components/Hero';
import Metrics from './src/components/Metrics';
import Services from './src/components/Services';
import Products from './src/components/Products';
import Process from './src/components/Process';
import AIConsultant from './src/components/AIConsultant';
import About from './src/components/About';
import Contact from './src/components/Contact';
import Footer from './src/components/Footer';

const App: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="relative overflow-x-hidden min-h-screen bg-cetacean">
      <div className="spotlight" />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Services />
        <Products />
        <Process />
        <AIConsultant />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
