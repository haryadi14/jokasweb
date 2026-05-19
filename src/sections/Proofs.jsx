import React from 'react';
import { motion } from 'framer-motion';
import { proofs } from '../data/proofs';
import { CheckCircle2 } from 'lucide-react';

const Proofs = () => {
  // Kita duplikasi array agar transisi loop tidak terputus
  const duplicatedProofs = [...proofs, ...proofs];

  return (
    <section className="py-24 bg-dark overflow-hidden">
      <div className="container mx-auto px-6 mb-16">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6" data-aos="fade-up">
          <div>
            <h2 className="text-primary-500 text-sm font-black uppercase tracking-[0.3em] mb-4">Transparansi</h2>
            <h3 className="text-4xl font-black text-white leading-tight">Bukti Nyata <br/> Pengerjaan & Pembayaran</h3>
          </div>
          <div className="flex gap-4 text-white/50 text-xs font-bold pb-2">
            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> 1000+ Transaksi</span>
            <span className="flex items-center gap-2"><CheckCircle2 size={14} className="text-green-500" /> Amanah & Terpercaya</span>
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex">
        <motion.div 
          className="flex gap-6"
          animate={{
            x: [0, -1035], // Sesuaikan angka ini dengan lebar total item
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{ width: "fit-content" }}
        >
          {duplicatedProofs.map((item, index) => (
            <div 
              key={index}
              className="w-64 md:w-80 flex-shrink-0 group cursor-pointer"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-white/5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:border-primary-500/50">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Overlay Label */}
                <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-dark to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-black bg-primary-600 text-white px-3 py-1 rounded-full uppercase tracking-widest">
                    {item.category}
                  </span>
                  <p className="text-white font-bold mt-2">{item.title}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="container mx-auto px-6 mt-16 text-center">
         <p className="text-white/20 text-sm font-medium">Geser untuk melihat bukti lainnya atau hubungi kami untuk konsultasi langsung.</p>
      </div>
    </section>
  );
};

export default Proofs;