
import React from 'react';
import { LeafIcon, TruckIcon } from '../constants';

const FeaturesBar: React.FC = () => {
  return (
    <section className="bg-white border-b border-gray-100 py-10">
      <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-12 md:gap-24">
        <div className="flex items-center gap-3 text-gray-500">
          <div className="p-2 bg-[#8DA399]/10 rounded-full text-[#8DA399]">
            <LeafIcon />
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold">100% Vegan</span>
        </div>
        
        <div className="flex items-center gap-3 text-gray-500">
          <div className="p-2 bg-[#8DA399]/10 rounded-full text-[#8DA399]">
            <TruckIcon />
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold">Free Shipping</span>
        </div>

        <div className="flex items-center gap-3 text-gray-500">
          <div className="p-2 bg-[#8DA399]/10 rounded-full text-[#8DA399]">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M3 21v-5h5"/></svg>
          </div>
          <span className="text-xs uppercase tracking-widest font-semibold">Recyclable Design</span>
        </div>
      </div>
    </section>
  );
};

export default FeaturesBar;
