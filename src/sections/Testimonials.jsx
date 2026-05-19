import React from 'react';
import { testimonials } from '../data/testimonials';
import { Star, Quote } from 'lucide-react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em] mb-4">
            Testimonial
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
            Apa Kata Mereka?
          </h3>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto font-medium">
            Lebih dari 500+ pelanggan puas dengan layanan cepat dan berkualitas dari Jokas.
          </p>
        </div>

        {/* Masonry-like Grid */}
        <div className="columns-1 md:grid-cols-2 lg:grid-cols-3 gap-8 space-y-8 lg:columns-3">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="break-inside-avoid bg-slate-50 p-8 rounded-[2rem] border border-slate-100 hover:shadow-2xl hover:shadow-primary-100 transition-all duration-500 group relative"
            >
              <div className="absolute top-6 right-8 text-primary-100 group-hover:text-primary-200 transition-colors">
                <Quote size={40} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(item.stars)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-slate-600 leading-relaxed mb-8 relative z-10 italic">
                "{item.text}"
              </p>

              <div className="flex items-center gap-4 border-t border-slate-200 pt-6">
                <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white font-black text-lg">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-dark text-sm">{item.name}</h4>
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400 text-[10px] font-bold uppercase">{item.role}</span>
                    <span className={`text-[8px] font-black px-2 py-0.5 rounded-full uppercase ${
                      item.category === 'Academic' ? 'bg-green-100 text-green-600' : 'bg-blue-100 text-blue-600'
                    }`}>
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;