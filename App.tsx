
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturesBar from './components/FeaturesBar';
import ProductGrid from './components/ProductGrid';
import ScienceSection from './components/ScienceSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col selection:bg-[#8DA399] selection:text-white">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        <FeaturesBar />
        
        <div id="urban" className="pt-20">
          <ProductGrid category="Urban" title="Urban Collection" />
        </div>
        
        <div id="hiking" className="pt-20">
          <ProductGrid category="Hiking" title="Adventure Series" />
        </div>
        
        <div id="science" className="pt-20">
          <ScienceSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
