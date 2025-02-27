
import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Zap, Scan, Shield, MapPin, BarChart3 } from 'lucide-react';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Scan size={24} className="text-brand-500" />,
    title: "Thermal Imaging Detection",
    description: "State-of-the-art thermal imaging cameras identify temperature variations to detect gas leaks even in challenging environments.",
  },
  {
    icon: <MapPin size={24} className="text-brand-500" />,
    title: "Pipeline Inspection",
    description: "Comprehensive aerial inspections of oil and gas pipelines to identify vulnerabilities and prevent costly failures.",
  },
  {
    icon: <Shield size={24} className="text-brand-500" />,
    title: "Preventive Monitoring",
    description: "Regular monitoring schedules to catch potential issues before they escalate into hazardous situations.",
  },
  {
    icon: <Zap size={24} className="text-brand-500" />,
    title: "Emergency Response",
    description: "Rapid deployment of drones to assess situations during emergencies and direct response teams efficiently.",
  },
  {
    icon: <BarChart3 size={24} className="text-brand-500" />,
    title: "Data Analysis",
    description: "Advanced analytics and reporting to track infrastructure health and identify patterns for predictive maintenance.",
  },
  {
    icon: <CheckCircle2 size={24} className="text-brand-500" />,
    title: "Compliance Verification",
    description: "Documentation and verification services to ensure regulatory compliance and industry standards.",
  },
];

const ServicesSection = () => {
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

  return (
    <section id="services" ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'reveal-animation' : 'opacity-0'}`}>
          <div className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800 mb-4">
            Our Capabilities
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Comprehensive Drone-Based Gas Detection Services
          </h2>
          <p className="text-lg text-gray-600">
            Our integrated approach combines advanced drone technology with specialized sensors and expert analysis to provide reliable gas leak detection and monitoring solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`bg-white border border-gray-100 rounded-lg p-6 transition-all duration-300 hover:shadow-lg hover:border-brand-200 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="rounded-full w-12 h-12 flex items-center justify-center bg-brand-50 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
