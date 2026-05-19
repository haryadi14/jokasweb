import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../components/Button';
import { siteConfig } from '../data/siteConfig';
import { CheckCircle, Zap } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  // Logika Berganti Gambar Otomatis (Setiap 5 detik)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % siteConfig.heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-white pt-20 overflow-hidden">
      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* SISI KIRI: TEKS (Tetap Statis) */}
        <div className="text-left">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <span className="bg-primary-100 text-primary-600 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2">
              <Zap size={14} fill="currentColor" /> Solusi Cepat & Tepat
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-primary-100 text-5xl md:text-7xl font-black text-dark mb-6 leading-tight"
          >
            Selesaikan <span className="text-white-600">Tugas</span> & <span className="text-white-600">Project</span> Anda Sekarang.
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-500 text-lg md:text-xl max-w-lg mb-10 leading-relaxed"
          >
            Jokas membantu mempermudah perjalanan akademismu dan membangun identitas digital bisnismu secara profesional.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button href={`https://wa.me/${siteConfig.whatsapp}`} className="px-10">
              Pesan Jasa Sekarang
            </Button>
            <Button variant="secondary" href="#services">
              Lihat Layanan
            </Button>
          </motion.div>

          <div className="mt-12 flex flex-wrap gap-6 text-slate-400">
            <div className="flex items-center gap-2 font-bold text-xs">
              <CheckCircle size={16} className="text-green-500" /> PENGERJAAN CEPAT
            </div>
            <div className="flex items-center gap-2 font-bold text-xs">
              <CheckCircle size={16} className="text-green-500" /> HARGA PELAJAR
            </div>
            <div className="flex items-center gap-2 font-bold text-xs">
              <CheckCircle size={16} className="text-green-500" /> REVISI TERSEDIA
            </div>
          </div>
        </div>

        {/* SISI KANAN: GAMBAR BERGANTI (DYNAMIC SLIDESHOW) */}
        <div className="hidden lg:block relative h-[750px]">
          <div className="relative w-full h-full">
            {/* Dekorasi Background */}
            <div className="absolute -top-10 -left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-full h-full bg-primary-600/5 rounded-[3rem] rotate-3 translate-x-4 translate-y-4"></div>

            {/* Container Gambar dengan Animasi Transisi */}
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage} // Key unik memaksa Framer Motion untuk re-animate saat index berubah
                src={siteConfig.heroImages[currentImage]}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-white"
                alt={`Slideshow ${currentImage}`}
              />
            </AnimatePresence>

            {/* Indikator Titik (Dots) */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {siteConfig.heroImages.map((_, index) => (
                <div 
                  key={index}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentImage ? "w-8 bg-primary-600" : "w-2 bg-slate-200"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;