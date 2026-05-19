import React from 'react';
import { Button } from '../components/Button';
import { siteConfig } from '../data/siteConfig';
// Ganti Instagram dengan Camera
import { Mail, MessageCircle, Camera } from 'lucide-react'; 
import { SiInstagram } from '@icons-pack/react-simple-icons';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="bg-primary-900 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-600/20 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tighter">
              Punya Tugas atau Project <br/> Yang Menumpuk?
            </h2>
            <p className="text-primary-100 mb-12 max-w-2xl mx-auto text-lg">
              Jangan biarkan deadline merusak waktu istirahat Anda. Serahkan pada ahlinya di Jokas.
            </p>
            
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <Button href={`https://wa.me/${siteConfig.whatsapp}`} className="bg-blue text-primary-900 hover:bg-primary-50 font-bold">
                <MessageCircle size={20} /> Chat via WhatsApp
              </Button>
              <div className="flex items-center justify-center gap-6 text-white pt-4 md:pt-0">
                {/* Gunakan Camera sebagai pengganti Instagram */}
                <a href={siteConfig.socials.instagram} className="hover:text-primary-400 transition-colors">
                   <SiInstagram size={24} />
                </a>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-primary-400 transition-colors">
                  <Mail size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;