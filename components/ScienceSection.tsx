
import React from 'react';

const ScienceSection: React.FC = () => {
  return (
    <section className="bg-[#8DA399] text-white py-24 mt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="relative z-10 rounded-sm overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1558444479-c8498094914a?auto=format&fit=crop&q=80&w=800" 
              alt="Close up of sustainable materials" 
              className="w-full h-auto"
            />
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 border-t border-l border-white/20" />
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border-b border-r border-white/20" />
        </div>

        <div className="max-w-lg">
          <span className="text-white/70 text-xs uppercase tracking-[0.4em] font-bold">The Innovation</span>
          <h2 className="text-4xl md:text-5xl font-serif mt-4 mb-8 leading-tight">Biomimicry & Circular Engineering</h2>
          <div className="space-y-6 text-white/90 font-light leading-relaxed">
            <p>
              We don't just make shoes; we harvest them. Our patented <span className="font-bold text-white italic">Bloom-Foam™</span> midsole is derived from invasive algae growth, helping clean freshwater ecosystems while providing superior cushioning.
            </p>
            <p>
              Every EcoStride component is designed for the afterlife. Once your strides are done, return them to us. We disassemble and repurpose 98% of the materials into new performance gear.
            </p>
          </div>
          <button className="mt-10 border border-white text-white px-8 py-3 text-xs font-bold uppercase tracking-widest hover:bg-white hover:text-[#8DA399] transition-all transform hover:scale-105">
            Read Our Science Report
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScienceSection;
