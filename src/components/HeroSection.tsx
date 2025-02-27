import React, { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
const HeroSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (sectionRef.current) {
        sectionRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToNextSection = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" ref={sectionRef} className="hero-section relative h-screen flex items-center justify-center bg-cover bg-center" style={{
    backgroundImage: 'url(public/lovable-uploads/6c7d0918-87be-4f0d-87c2-f17aabbb3391.png)'
  }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90"></div>
      <div className="container mx-auto px-4 z-10 reveal-animation">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800 mb-6">
            Industry-Leading Technology
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight text-red-900 text-center">
            Advanced Drone Solutions for Gas Leak Detection
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Protecting infrastructure, preventing disasters, and saving lives with cutting-edge aerial inspection technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-brand-600 hover:bg-brand-700 text-white px-8 py-3 rounded-md font-medium transition-colors">
              Schedule a Consultation
            </button>
            <button className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-md font-medium transition-colors">
              View Case Studies
            </button>
          </div>
        </div>
      </div>
      <button onClick={scrollToNextSection} className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white hover:text-brand-400 transition-colors animate-bounce" aria-label="Scroll down">
        <ArrowDown size={24} />
      </button>
    </section>;
};
export default HeroSection;