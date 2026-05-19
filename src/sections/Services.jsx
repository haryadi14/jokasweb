import React from 'react';
import { services } from '../data/services';

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em] mb-4">
            Layanan Kami
          </h2>
          <h3 className="text-4xl md:text-5xl font-black text-dark tracking-tight">
            Solusi Digital Terpadu
          </h3>
          <div className="w-20 h-1.5 bg-primary-600 mx-auto mt-6 rounded-full"></div>
        </div>

        {/* Grid Services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <div 
              key={item.id} 
              data-aos="fade-up" 
              data-aos-delay={index * 100}
              className="p-8 bg-white rounded-[2.5rem] border border-slate-100 hover:border-primary-600 transition-all duration-500 group shadow-sm hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 mb-8 group-hover:bg-primary-600 group-hover:text-white group-hover:rotate-6 transition-all duration-300">
                <item.icon size={32} strokeWidth={2.5} />
              </div>
              
              <h4 className="text-xl font-bold text-dark mb-4 group-hover:text-primary-600 transition-colors">
                {item.title}
              </h4>
              
              <p className="text-slate-500 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// INI YANG PALING PENTING: Export default agar tidak error lagi
export default Services;