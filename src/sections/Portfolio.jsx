import React, { useState } from 'react';
import { portfolio } from '../data/portfolio';
import { motion, AnimatePresence } from 'framer-motion';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');
  const categories = ['All', 'Academic', 'Digital'];

  const filteredItems = filter === 'All' 
    ? portfolio 
    : portfolio.filter(item => item.category === filter);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em] mb-4">Hasil Testimonial Customer</h2>
          <h3 className="text-4xl font-black text-dark">Portfolio Terbaru</h3>
        </div>

        {/* Filter Buttons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap" data-aos="fade-up">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all ${
                filter === cat ? 'bg-primary-600 text-white' : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Portfolio */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={item.id}
                className="group relative rounded-[2rem] overflow-hidden shadow-lg h-80"
              >
                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/20 to-transparent flex flex-col justify-end p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span className="text-primary-500 text-xs font-black uppercase mb-2">{item.category}</span>
                  <h4 className="text-white text-xl font-bold">{item.title}</h4>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;