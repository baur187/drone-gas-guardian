
import React, { useEffect, useRef, useState } from 'react';
import { DollarSign, ShieldCheck, Clock, TrendingUp, Leaf, Award } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
  stat?: string;
  detail?: string;
}

const benefits: Benefit[] = [
  {
    icon: <DollarSign size={32} className="text-brand-500" />,
    title: "Cost Reduction",
    description: "Significantly reduce inspection costs and minimize revenue loss from undetected leaks.",
    stat: "60%",
    detail: "reduction in inspection costs"
  },
  {
    icon: <ShieldCheck size={32} className="text-brand-500" />,
    title: "Enhanced Safety",
    description: "Detect hazardous leaks early to prevent accidents and protect personnel and communities.",
    stat: "85%",
    detail: "earlier leak detection"
  },
  {
    icon: <Clock size={32} className="text-brand-500" />,
    title: "Time Efficiency",
    description: "Complete inspections faster than traditional methods with greater accuracy and coverage.",
    stat: "4x",
    detail: "faster inspection time"
  },
  {
    icon: <TrendingUp size={32} className="text-brand-500" />,
    title: "Performance Insights",
    description: "Gain valuable data-driven insights into infrastructure condition and operational efficiency.",
    stat: "100%",
    detail: "digital documentation"
  },
  {
    icon: <Leaf size={32} className="text-brand-500" />,
    title: "Environmental Impact",
    description: "Reduce methane emissions by identifying and fixing leaks promptly, supporting sustainability goals.",
    stat: "75%",
    detail: "reduction in emissions"
  },
  {
    icon: <Award size={32} className="text-brand-500" />,
    title: "Regulatory Compliance",
    description: "Ensure compliance with industry regulations and environmental protection standards.",
    stat: "100%",
    detail: "compliance rate"
  }
];

const BenefitsSection = () => {
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
    <section id="benefits" ref={sectionRef} className="py-20 bg-brand-50">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'reveal-animation' : 'opacity-0'}`}>
          <div className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800 mb-4">
            Proven Results
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Why Choose Drone-Based Gas Leak Detection
          </h2>
          <p className="text-lg text-gray-600">
            Our innovative approach delivers measurable improvements in safety, efficiency, and cost-effectiveness for oil and gas infrastructure management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl p-6 shadow-sm transition-all duration-300 hover:shadow-md transform hover:-translate-y-1 ${
                isVisible ? 'animate-fade-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${0.1 + index * 0.1}s` }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-4">{benefit.icon}</div>
                
                {benefit.stat && (
                  <div className="flex items-baseline mb-3">
                    <span className="text-3xl font-bold text-brand-700">{benefit.stat}</span>
                    <span className="ml-1 text-sm text-gray-500">{benefit.detail}</span>
                  </div>
                )}
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
