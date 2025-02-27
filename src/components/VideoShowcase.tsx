
import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause, Maximize2 } from 'lucide-react';

const VideoShowcase = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
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

  // Sample image for placeholder - in a real implementation this would be a video
  const videoPlaceholder = "public/lovable-uploads/98d84f8a-70a7-4a75-a8a2-93b76a99e0aa.png";

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const updateProgress = () => {
    if (videoRef.current) {
      const value = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(value);
    }
  };

  const enterFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <section ref={sectionRef} className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className={`max-w-3xl mx-auto text-center mb-16 ${isVisible ? 'reveal-animation' : 'opacity-0'}`}>
          <div className="inline-block rounded-full bg-brand-800 bg-opacity-30 px-3 py-1 text-sm font-medium text-brand-300 mb-4">
            See It In Action
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
            Watch Our Drone Technology in Operation
          </h2>
          <p className="text-lg text-gray-300">
            Experience the precision and efficiency of our advanced gas leak detection system in real-world scenarios.
          </p>
        </div>

        <div className={`relative max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="aspect-w-16 aspect-h-9 relative">
            {/* In a real implementation, this would be a video element */}
            <img 
              src={videoPlaceholder} 
              alt="Drone gas detection demonstration"
              className="w-full h-full object-cover"
              ref={videoRef as any}
            />
            
            {/* Video controls overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center group">
              <button 
                onClick={togglePlay}
                className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transition-transform duration-300 transform group-hover:scale-110"
              >
                {isPlaying ? 
                  <Pause className="w-7 h-7 text-white" /> : 
                  <Play className="w-7 h-7 text-white ml-1" />
                }
              </button>
            </div>
            
            {/* Bottom controls */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <div className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <div className="h-1 bg-white/30 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-brand-500" 
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
                <button 
                  onClick={enterFullscreen}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <Maximize2 size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          {[
            { title: "Thermal Imaging", img: "public/lovable-uploads/322a28c7-2f84-49b4-b3b3-03acca626766.png" },
            { title: "Pipeline Inspection", img: "public/lovable-uploads/50cedc00-5299-4c56-9407-336944e913b0.png" },
            { title: "Data Analysis", img: "public/lovable-uploads/17bf4f08-a5a7-4cae-88f1-9e737fe9e80c.png" },
            { title: "Emergency Response", img: "public/lovable-uploads/604bca50-2d5c-4ac3-b207-d7a0cadf0c59.png" }
          ].map((item, index) => (
            <div key={index} className="relative overflow-hidden rounded-lg cursor-pointer group">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-4">
                  <h3 className="text-white font-medium">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;
