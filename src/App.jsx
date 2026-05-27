import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { HelmetProvider, Helmet } from 'react-helmet-async';

// Components & Sections
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services';
import Testimonials from './sections/Testimonials'; // Ganti Portfolio ke Testimonials
import Proofs from './sections/Proofs'; // Import ini

import FAQ from './sections/FAQ';
import Contact from './sections/Contact';
import { siteConfig } from './data/siteConfig';
import ChatAI from './components/ChatAI'; // Import ini

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-cubic' });
  }, []);

  return (
    <HelmetProvider>
      <div className="font-sans antialiased text-dark selection:bg-primary-500 selection:text-white">
        <Helmet>
          <title>{siteConfig.metaTitle}</title>
        </Helmet>

        <Navbar />
        
        <main>
          <Hero />
          <Services />
          <Testimonials /> {/* Panggil di sini */}
          <Proofs /> {/* Panggil di sini */}

          <FAQ />
          <Contact />
        </main>
<ChatAI />
        <footer className="bg-slate-900 py-12 text-center border-t border-white/5">
            <p className="text-white/30 text-[10px] font-black uppercase tracking-[0.4em]">
              © {new Date().getFullYear()} {siteConfig.name}. All Rights Reserved.
            </p>
        </footer>

        {/* Floating WA */}
        <a 
          href={`https://wa.me/${siteConfig.whatsapp}`}
          target="_blank"
          rel="noreferrer"
          className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 active:scale-90 transition-all animate-subtle-float"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" className="w-7 h-7" alt="WA" />
        </a>
      </div>
    </HelmetProvider>
  );
}

export default App;