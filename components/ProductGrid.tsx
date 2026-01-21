
import React from 'react';
import { Product } from '../types';

interface ProductGridProps {
  category: 'Urban' | 'Hiking';
  title: string;
}

const ProductGrid: React.FC<ProductGridProps> = ({ category, title }) => {
  const products: Product[] = [
    {
      id: '1',
      name: category === 'Urban' ? 'Stratus V1' : 'Summit Elite',
      category,
      price: category === 'Urban' ? 145 : 195,
      image: category === 'Urban' 
        ? 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=600'
        : 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600',
      description: 'Ultra-breathable recycled mesh upper.',
      isNew: true
    },
    {
      id: '2',
      name: category === 'Urban' ? 'Drift Minimal' : 'Terra Grip',
      category,
      price: category === 'Urban' ? 120 : 175,
      image: category === 'Urban' 
        ? 'https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=600'
        : 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=600',
      description: 'Sustainably harvested rubber soles.'
    },
    {
      id: '3',
      name: category === 'Urban' ? 'Civic All-Day' : 'Alpine Shield',
      category,
      price: category === 'Urban' ? 160 : 210,
      image: category === 'Urban' 
        ? 'https://images.unsplash.com/photo-1560769629-975ec94e6a86?auto=format&fit=crop&q=80&w=600'
        : 'https://images.unsplash.com/photo-1620138546344-7b2c0b05130d?auto=format&fit=crop&q=80&w=600',
      description: 'PFC-free water resistance coating.'
    },
    {
      id: '4',
      name: category === 'Urban' ? 'Mono Low' : 'Ascent Peak',
      category,
      price: category === 'Urban' ? 135 : 185,
      image: category === 'Urban' 
        ? 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=600'
        : 'https://images.unsplash.com/photo-1603808033192-082d6919d3e1?auto=format&fit=crop&q=80&w=600',
      description: 'Zero-waste production process.'
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <div className="flex justify-between items-end mb-10">
        <div>
          <span className="text-[#8DA399] text-xs uppercase tracking-[0.3em] font-bold">Collections</span>
          <h2 className="text-3xl font-serif mt-2">{title}</h2>
        </div>
        <button className="text-sm font-semibold border-b-2 border-[#1a1a1a] pb-1 hover:text-[#8DA399] hover:border-[#8DA399] transition-all">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
        {products.map((product) => (
          <div key={product.id} className="group">
            <div className="relative aspect-[4/5] bg-[#F7F7F7] overflow-hidden rounded-sm mb-4">
              {product.isNew && (
                <div className="absolute top-4 left-4 z-10 bg-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-[#1a1a1a] shadow-sm">
                  New Arrival
                </div>
              )}
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <button className="w-full bg-[#1a1a1a] text-white py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#8DA399] transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
            <div>
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-medium text-lg text-[#1a1a1a]">{product.name}</h3>
                <span className="text-gray-500 font-medium">${product.price}</span>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed uppercase tracking-widest">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
