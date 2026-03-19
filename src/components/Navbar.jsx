import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#curriculum', label: 'Curriculum' },
  { href: '#projects', label: 'Projects' },
  { href: '#details', label: 'Details' },
  { href: '#pricing', label: 'Pricing' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0814]/90 backdrop-blur-xl border-b border-white/5 shadow-lg' : 'bg-transparent'}`}>
      <div className="section-container flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 font-display font-bold text-lg">
          <div className="w-8 h-8 flex items-center justify-center">
            <img src="/qdlogo1.png" alt="QD CODEX" className="w-full h-full object-contain" />
          </div>
          <span className="gradient-text">FutureBots</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map(l => (
            <button
              key={l.href}
              onClick={() => handleNav(l.href)}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              {l.label}
            </button>
          ))}
          <a
            href="https://pages.razorpay.com/pl_SSzxZ4cqwYAduD/view"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary !py-2 !px-5 !text-sm"
          >
            Enroll Now
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl text-white/80 hover:text-white hover:bg-white/10 transition-all"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-[#0f0c29]/95 backdrop-blur-2xl border-b border-white/10"
          >
            <nav className="section-container flex flex-col py-4 gap-1">
              {navLinks.map(l => (
                <button
                  key={l.href}
                  onClick={() => handleNav(l.href)}
                  className="w-full text-left px-4 py-3 rounded-xl text-white/80 hover:text-white hover:bg-white/5 font-medium transition-all"
                >
                  {l.label}
                </button>
              ))}
              <div className="pt-2 px-4">
                <a
                  href="https://pages.razorpay.com/pl_SSzxZ4cqwYAduD/view"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full"
                >
                  🚀 Enroll Now
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
