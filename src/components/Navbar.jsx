import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
  { name: 'Layanan Kami', href: '#services' },
  { name: 'Testimonials', href: '#testimonials' }, // Ganti Portfolio ke Testimonials
  { name: 'Kontak', href: '#contact' },
];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-black text-primary-600 tracking-tighter italic">
          {siteConfig.name}.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="font-bold text-dark hover:text-primary-600 transition-colors uppercase text-xs tracking-widest">
              {link.name}
            </a>
          ))}
          <a href={`https://wa.me/${siteConfig.whatsapp}`} className="bg-dark text-white px-6 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform">
            Hubungi Kami!
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white border-t p-6 flex flex-col gap-4 md:hidden animate-in slide-in-from-top-2">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-lg font-bold text-dark">
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;