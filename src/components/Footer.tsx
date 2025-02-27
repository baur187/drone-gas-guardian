
import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="font-display text-xl font-bold mb-6">DroneGas Guardian</h3>
            <p className="text-gray-400 mb-6">
              Leading the industry in advanced drone-based gas leak detection and infrastructure monitoring solutions.
            </p>
            <div className="flex space-x-4">
              {["LinkedIn", "Twitter", "YouTube"].map((platform, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="text-gray-400 hover:text-brand-400 transition-colors"
                >
                  {platform}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {[
                "Pipeline Inspection",
                "Thermal Imaging",
                "Gas Leak Detection",
                "Emergency Response",
                "Data Analysis",
                "Compliance Monitoring"
              ].map((service, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              {[
                "About Us",
                "Leadership",
                "Careers",
                "News & Press",
                "Case Studies",
                "Partner Program"
              ].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Resources</h4>
            <ul className="space-y-4">
              {[
                "Industry Reports",
                "Whitepapers",
                "Webinars",
                "Technical Documentation",
                "Blog"
              ].map((resource, index) => (
                <li key={index} className="flex items-center">
                  <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center">
                    <span>{resource}</span>
                    <ArrowUpRight size={14} className="ml-1" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} DroneGas Guardian. All rights reserved.
          </div>
          <div className="flex space-x-6">
            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookie Policy",
              "Sitemap"
            ].map((item, index) => (
              <a 
                key={index}
                href="#" 
                className="text-gray-500 hover:text-gray-300 text-sm transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
