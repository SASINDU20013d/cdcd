
import React, { useState, useEffect } from 'react';
import { NAV_ITEMS } from '../constants';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-8">
          <a href="#" className="text-2xl font-serif font-bold tracking-tight text-[#1a1a1a]">
            EcoStride
          </a>
          <div className="hidden md:flex gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-[#8DA399] transition-colors uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-6">
          <button className="text-sm font-medium text-gray-600 hover:text-[#8DA399] transition-colors uppercase tracking-widest">
            Login
          </button>
          <button className="bg-[#1a1a1a] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-tighter hover:bg-[#8DA399] transition-all transform hover:scale-105 active:scale-95">
            Cart (0)
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
