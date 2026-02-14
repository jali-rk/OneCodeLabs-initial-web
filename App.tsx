
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Services from './components/Services';
import Products from './components/Products';
import Process from './components/Process';
import AIConsultant from './components/AIConsultant';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
