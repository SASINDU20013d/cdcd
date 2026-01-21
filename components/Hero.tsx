
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden flex flex-col md:flex-row">
      {/* Left Panel: Urban */}
      <div className="relative h-1/2 md:h-full md:w-1/2 group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80&w=1000" 
          alt="Grey sneaker on concrete city street" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
        <div className="absolute bottom-12 left-12 text-white z-10 hidden md:block">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold opacity-80">Design for Concrete</span>
          <h2 className="text-4xl font-serif mt-2">Urban Rhythm</h2>
        </div>
      </div>

      {/* Right Panel: Hiking */}
      <div className="relative h-1/2 md:h-full md:w-1/2 group overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&q=80&w=1000" 
          alt="Muddy hiking boot on green mountain trail" 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
        <div className="absolute bottom-12 right-12 text-white text-right z-10 hidden md:block">
          <span className="text-xs uppercase tracking-[0.3em] font-semibold opacity-80">Engineered for Earth</span>
          <h2 className="text-4xl font-serif mt-2">Mountain Peak</h2>
        </div>
      </div>

      {/* Center Overlay Content */}
      <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
        <div className="text-center px-4 max-w-lg pointer-events-auto">
          <div className="bg-white/80 backdrop-blur-sm p-10 md:p-16 rounded-sm shadow-2xl border border-white/40">
            <h1 className="text-4xl md:text-5xl font-serif text-[#1a1a1a] mb-6 leading-tight">
              One Stride.<br/>Zero Footprint.
            </h1>
            <p className="text-gray-600 mb-8 text-sm md:text-base leading-relaxed font-light">
              Crafted with circularity in mind. High-performance sneakers that respect the planet, from city blocks to mountain tops.
            </p>
            <button className="bg-white text-[#1a1a1a] border border-[#1a1a1a] px-10 py-4 text-xs font-bold uppercase tracking-[0.2em] hover:bg-[#1a1a1a] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
              Shop Sustainable
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
