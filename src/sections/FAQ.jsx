import React, { useState } from 'react';
import { faqs } from '../data/faq';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const [active, setActive] = useState(null);

  return (
    <section id="faq" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-sm font-black text-primary-600 uppercase tracking-[0.3em] mb-4">FAQ</h2>
          <h3 className="text-4xl font-black text-dark">Pertanyaan Populer</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div key={index} className="bg-white rounded-3xl border border-slate-100 overflow-hidden shadow-sm">
              <button 
                onClick={() => setActive(active === index ? null : index)}
                className="w-full p-6 text-left flex justify-between items-center hover:bg-primary-50 transition-colors"
              >
                <span className="font-bold text-dark pr-4">{item.q}</span>
                {active === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              {active === index && (
                <div className="px-6 pb-6 text-slate-500 text-sm leading-relaxed animate-in fade-in slide-in-from-top-2">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;