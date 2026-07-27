import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';
import { Car, Menu, X, Phone } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-accent/20 py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary group">
          <div className="w-10 h-10 sm:w-11 sm:h-11 bg-accent text-accent-foreground rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shrink-0 shadow-md">
            <Car className="w-6 h-6 sm:w-7 sm:h-7" />
          </div>
          <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-foreground uppercase">
            Eclatamania <span className="text-primary">Autos</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-bold text-foreground/80 font-heading tracking-wide uppercase text-sm">
          <a href="#home" className="hover:text-accent transition-colors">Home</a>
          <a href="#inventory" className="hover:text-accent transition-colors">Cars</a>
          <a href="#about" className="hover:text-accent transition-colors">About Us</a>
          <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://wa.me/2347060747265" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20 border border-primary-border"
          >
            <Phone className="w-4 h-4 text-accent" />
            <span>+234 706 074 7265</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7 text-primary" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-t border-accent/20 shadow-xl py-4 px-6 flex flex-col gap-4 font-heading text-lg uppercase font-bold tracking-wide">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="py-2 text-foreground/90 hover:text-accent">Home</a>
          <a href="#inventory" onClick={() => setMobileMenuOpen(false)} className="py-2 text-foreground/90 hover:text-accent">Cars</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="py-2 text-foreground/90 hover:text-accent">About Us</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="py-2 text-foreground/90 hover:text-accent">Contact</a>
          <a 
            href="https://wa.me/2347060747265" 
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-5 py-4 rounded-lg mt-2 border border-primary-border shadow-lg"
          >
            <Phone className="w-5 h-5 text-accent" />
            <span>+234 706 074 7265</span>
          </a>
        </div>
      )}
    </nav>
  );
}
