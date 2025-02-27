
import React, { useEffect, useRef, useState } from 'react';

const ClientLogos = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const clients = [
    {
      name: "Ali & Sons",
      logo: "public/lovable-uploads/47cc99b6-0bd0-4f0d-ad56-5bb5d4e1913b.png"
    },
    {
      name: "CNPC",
      logo: "public/lovable-uploads/ee40ea9c-1ac2-4f7a-a325-7e99e5461bd7.png"
    },
    {
      name: "KMC Engineering",
      logo: "public/lovable-uploads/9d68bb5b-55e7-4976-a141-6671b3b54246.png"
    },
    {
      name: "ADNOC",
      logo: "public/lovable-uploads/51acd8e2-66d7-44e1-ab6d-f59eedf449c9.png"
    },
    {
      name: "PDO",
      logo: "public/lovable-uploads/07f6c6fe-4e84-490b-b346-f609e6620cba.png"
    },
    {
      name: "Lucent Petroleum",
      logo: "public/lovable-uploads/245e5e5b-8cc0-4e18-8538-20d7ea67a9ac.png"
    },
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-12 ${isVisible ? 'reveal-animation' : 'opacity-0'}`}>
          <div className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800 mb-4">
            Trusted By Industry Leaders
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4">
            Our Clients Around the World
          </h2>
          <p className="text-lg text-gray-600">
            Top oil and gas companies choose our drone-based gas leak detection technology
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index}
              className={`flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 transform ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="h-24 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain" 
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
