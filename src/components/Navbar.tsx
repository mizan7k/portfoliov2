import { motion } from 'motion/react';
import { Menu, X, Github, Facebook } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Journey', href: '#journey' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Work', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-brand-black/80 backdrop-blur-md py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-display font-black tracking-tighter"
        >
          MIZANUR<span className="text-brand-orange">RAHMAN</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-sm font-mono uppercase tracking-widest hover:text-brand-orange transition-colors"
            >
              {link.name}
            </motion.a>
          ))}
          <div className="flex items-center gap-4 ml-4">
            <a href="https://github.com/mizan7k" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 cursor-pointer hover:text-brand-orange transition-colors" />
            </a>
            <a href="https://www.facebook.com/Mizan7k" target="_blank" rel="noopener noreferrer">
              <Facebook className="w-5 h-5 cursor-pointer hover:text-brand-orange transition-colors" />
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: '100vh', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden absolute top-0 left-0 w-full bg-brand-black overflow-hidden flex flex-col items-center justify-center gap-8 z-40"
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-4xl font-display font-bold hover:text-brand-orange transition-colors"
          >
            {link.name}
          </a>
        ))}
        <div className="flex gap-6 mt-8">
          <Github className="w-8 h-8" />
          <Facebook className="w-8 h-8" />
        </div>
      </motion.div>
    </nav>
  );
}
