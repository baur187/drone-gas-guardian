
import React, { useRef, useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight, Info } from 'lucide-react';

interface CaseStudy {
  title: string;
  industry: string;
  description: string;
  image: string;
  results: string[];
}

const caseStudies: CaseStudy[] = [
  {
    title: "Major Pipeline Inspection Project",
    industry: "Oil Transportation",
    description: "Conducted comprehensive inspection of 500km pipeline network, identifying 8 critical leak points that were previously undetected by traditional methods.",
    image: "public/lovable-uploads/f74c7585-8501-428a-b144-d51eb03edd2c.png",
    results: [
      "Prevented potential environmental disaster",
      "Saved client an estimated $2.5M in potential cleanup costs",
      "Completed inspection in 7 days vs. estimated 30 days with traditional methods"
    ]
  },
  {
    title: "Emergency Response After Storm Damage",
    industry: "Natural Gas Distribution",
    description: "Rapidly deployed drones to assess damage to natural gas infrastructure following a category 3 hurricane, enabling prioritized repair strategy.",
    image: "public/lovable-uploads/fe23d25a-37aa-402b-a9da-c090c6ca9e00.png",
    results: [
      "Identified 12 high-risk damage points within 48 hours",
      "Enabled restoration of service 5 days ahead of schedule",
      "Prevented potential gas-related accidents in damaged areas"
    ]
  },
  {
    title: "Routine Monitoring Program Implementation",
    industry: "Petrochemical Manufacturing",
    description: "Established quarterly drone inspection program for a major petrochemical complex to ensure early detection of equipment deterioration and gas leaks.",
    image: "public/lovable-uploads/f8f7c6a6-604d-49d7-a91f-3a0e783a59a4.png",
    results: [
      "70% reduction in unexpected maintenance events",
      "85% decrease in reportable gas release incidents",
      "ROI of 310% in the first year through prevention of production disruptions"
    ]
  }
];

const CaseStudySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const maxIndex = caseStudies.length - 1;

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

  const nextSlide = () => {
    setCurrentIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? maxIndex : currentIndex - 1);
  };

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'reveal-animation' : 'opacity-0'}`}>
          <div className="inline-block rounded-full bg-brand-100 px-3 py-1 text-sm font-medium text-brand-800 mb-4">
            Success Stories
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
            Real-World Impact of Our Technology
          </h2>
          <p className="text-lg text-gray-600">
            See how our drone-based gas leak detection solutions have delivered exceptional results for industry leaders.
          </p>
        </div>

        <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="bg-gray-50 rounded-xl overflow-hidden shadow-md">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 relative">
                <div className="absolute top-4 left-4 z-10 bg-brand-500 text-white text-xs font-bold px-2 py-1 rounded">
                  CASE STUDY
                </div>
                <img 
                  src={caseStudies[currentIndex].image} 
                  alt={caseStudies[currentIndex].title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8">
                <div className="mb-2">
                  <span className="text-sm font-medium text-brand-500">
                    {caseStudies[currentIndex].industry}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {caseStudies[currentIndex].title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {caseStudies[currentIndex].description}
                </p>
                
                <div className="mb-8">
                  <h4 className="flex items-center text-lg font-semibold text-gray-900 mb-3">
                    <Info size={18} className="text-brand-500 mr-2" />
                    Key Results
                  </h4>
                  <ul className="space-y-2">
                    {caseStudies[currentIndex].results.map((result, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-brand-500 mr-2">•</span>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="text-sm text-gray-500">
                    Case Study {currentIndex + 1} of {caseStudies.length}
                  </div>
                  <div className="flex space-x-2">
                    <button 
                      onClick={prevSlide}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Previous case study"
                    >
                      <ArrowLeft size={20} />
                    </button>
                    <button 
                      onClick={nextSlide}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      aria-label="Next case study"
                    >
                      <ArrowRight size={20} />
                    </button>
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

export default CaseStudySection;
