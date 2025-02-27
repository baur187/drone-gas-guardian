
import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRightFromCircle } from 'lucide-react';

const TechnologySection = () => {
  const [activeTab, setActiveTab] = useState(0);
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

  const technologies = [
    {
      name: "Thermal Imaging Technology",
      description: "Advanced thermal cameras detect subtle temperature variations that indicate gas leaks, visualizing invisible threats with precise temperature measurement capabilities.",
      image: "public/lovable-uploads/605631b2-e3fe-4118-a1ae-81191e114c18.png",
      features: [
        "High-sensitivity infrared sensors",
        "Temperature differential mapping",
        "Night and day operation capability",
        "Weather-resistant design"
      ]
    },
    {
      name: "Long-Range Drones",
      description: "Our custom-engineered drones provide extended flight time and superior stability for thorough pipeline inspections across vast distances and challenging terrain.",
      image: "public/lovable-uploads/f152a040-8f5f-4786-ae0f-8f46c78ef2ab.png",
      features: [
        "6+ hour flight endurance",
        "Weather-resistant operation",
        "Real-time data transmission",
        "Automated flight paths"
      ]
    },
    {
      name: "Methane-Specific Sensors",
      description: "Specialized gas sensors designed to detect methane and other hydrocarbon gases at parts-per-million concentrations, ensuring early leak detection.",
      image: "public/lovable-uploads/064dbefc-a8a4-4d8e-90f8-86aa18d733c4.png",
      features: [
        "High-precision methane detection",
        "Multi-gas monitoring capabilities",
        "Instant concentration readings",
        "Integrated GPS mapping of detections"
      ]
    },
    {
      name: "Data Analytics Platform",
      description: "Proprietary software platform that processes inspection data to generate comprehensive reports, identify patterns, and predict potential failure points.",
      image: "public/lovable-uploads/e9d7cc28-b31e-442f-bccd-7f278efc61c4.png",
      features: [
        "AI-powered anomaly detection",
        "Predictive maintenance insights",
        "Interactive 3D visualization",
        "Historical comparison analysis"
      ]
    }
  ];

  return (
    <section id="technology" ref={sectionRef} className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'reveal-animation' : 'opacity-0'}`}>
          <div className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800 mb-4">
            Cutting-Edge Solutions
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Our Advanced Drone Technology Platform
          </h2>
          <p className="text-lg text-gray-600">
            Combining state-of-the-art hardware with intelligent software to deliver the most reliable gas leak detection system in the industry.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="md:w-1/3 bg-gray-50 p-6">
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <button
                    key={index}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 ${
                      activeTab === index
                        ? 'bg-brand-50 border-l-4 border-brand-500 text-brand-800'
                        : 'hover:bg-gray-100'
                    }`}
                    onClick={() => setActiveTab(index)}
                  >
                    <div className="font-medium">{tech.name}</div>
                  </button>
                ))}
              </div>
            </div>
            <div className="md:w-2/3 p-6">
              <div className="flex flex-col h-full">
                <div className="flex flex-col md:flex-row md:items-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 md:mb-0 md:mr-4">
                    {technologies[activeTab].name}
                  </h3>
                  <button className="inline-flex items-center text-brand-600 font-medium">
                    Learn more
                    <ArrowUpRightFromCircle size={16} className="ml-1" />
                  </button>
                </div>

                <div className="flex flex-col md:flex-row flex-grow gap-6">
                  <div className="md:w-1/2">
                    <p className="text-gray-600 mb-4">
                      {technologies[activeTab].description}
                    </p>
                    <div className="mt-4">
                      <h4 className="font-medium text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-2">
                        {technologies[activeTab].features.map((feature, index) => (
                          <li key={index} className="flex items-start">
                            <span className="text-brand-500 mr-2">•</span>
                            <span className="text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="md:w-1/2 mt-4 md:mt-0">
                    <div className="relative h-64 overflow-hidden rounded-lg bg-gray-100">
                      <div className="relative h-full w-full overflow-hidden">
                        <div className="scanner-line"></div>
                        <img
                          src={technologies[activeTab].image}
                          alt={technologies[activeTab].name}
                          className="w-full h-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
