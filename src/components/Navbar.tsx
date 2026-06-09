
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="font-display text-xl font-bold text-brand-700">
              DroneGas Guardian
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a
                href="#home"
                className="text-gray-800 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Home
              </a>
              <a
                href="#services"
                className="text-gray-800 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Services
              </a>
              <a
                href="#technology"
                className="text-gray-800 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Technology
              </a>
              <a
                href="#benefits"
                className="text-gray-800 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Benefits
              </a>
              <a
                href="#contact"
                className="text-gray-800 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Contact
              </a>
              <Link
                to="/usage"
                className="text-gray-800 hover:text-brand-500 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                Usage Guide
              </Link>
              <Link
                to="/drilling-monitor"
                className="bg-orange-500/20 text-orange-300 border border-orange-500/40 px-3 py-1.5 rounded-md text-sm font-medium hover:bg-orange-500/30 transition-colors flex items-center gap-1.5"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-ping-slow" />
                Live Monitor
              </Link>
              <button className="bg-brand-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-600 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-brand-500 focus:outline-none"
            >
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } md:hidden transition-all duration-300 ease-in-out overflow-hidden bg-white/90 backdrop-blur-md`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a
            href="#home"
            className="text-gray-800 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="text-gray-800 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Services
          </a>
          <a
            href="#technology"
            className="text-gray-800 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Technology
          </a>
          <a
            href="#benefits"
            className="text-gray-800 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Benefits
          </a>
          <a
            href="#contact"
            className="text-gray-800 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <Link
            to="/usage"
            className="text-gray-800 hover:text-brand-500 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Usage Guide
          </Link>
          <Link
            to="/drilling-monitor"
            className="block text-center bg-orange-500/20 text-orange-300 border border-orange-500/40 px-4 py-2 rounded-md text-sm font-medium"
            onClick={() => setIsOpen(false)}
          >
            Live Monitor
          </Link>
          <button className="w-full text-center bg-brand-500 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-brand-600 transition-colors">
            Schedule Demo
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
