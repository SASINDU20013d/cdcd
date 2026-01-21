
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-2 md:col-span-1">
          <h3 className="text-2xl font-serif font-bold mb-6 text-[#1a1a1a]">EcoStride</h3>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Join us on our journey to carbon-negative footwear. Designed in Copenhagen, built for the world.
          </p>
        </div>
        
        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-[#1a1a1a]">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#8DA399] transition-colors">Men's Collection</a></li>
            <li><a href="#" className="hover:text-[#8DA399] transition-colors">Women's Collection</a></li>
            <li><a href="#" className="hover:text-[#8DA399] transition-colors">Sustainable Care</a></li>
            <li><a href="#" className="hover:text-[#8DA399] transition-colors">Impact Report</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-[#1a1a1a]">Company</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="#" className="hover:text-[#8DA399] transition-colors">Our Mission</a></li>
            <li><a href="#" className="hover:text-[#8DA399] transition-colors">Carbon Policy</a></li>
            <li><a href="#" className="hover:text-[#8DA399] transition-colors">Store Locator</a></li>
            <li><a href="#" className="hover:text-[#8DA399] transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-[#1a1a1a]">Subscribe</h4>
          <p className="text-xs text-gray-400 mb-4">Stay updated on new drops and climate news.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-gray-50 border-b border-gray-300 py-2 text-xs w-full focus:outline-none focus:border-[#8DA399] transition-colors"
            />
            <button className="ml-4 text-xs font-bold uppercase tracking-widest text-[#1a1a1a] hover:text-[#8DA399]">
              Join
            </button>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-gray-50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-[10px] text-gray-400 uppercase tracking-widest">
          &copy; {new Date().getFullYear()} EcoStride Footwear Ltd. All rights reserved.
        </p>
        <div className="flex gap-8 text-[10px] text-gray-400 uppercase tracking-widest">
          <a href="#" className="hover:text-gray-600 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-600 transition-colors">Sustainability Disclosure</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
