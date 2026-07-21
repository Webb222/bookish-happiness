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
          ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' 
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-primary group">
          <div className="w-9 h-9 sm:w-10 sm:h-10 bg-primary text-white rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shrink-0">
            <Car className="w-5 h-5 sm:w-6 sm:h-6" />
          </div>
          <span className="font-bold text-lg sm:text-2xl tracking-tight text-foreground">
            Eclatamania <span className="text-primary">Autos</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 font-semibold text-foreground/80">
          <a href="#home" className="hover:text-primary transition-colors">Home</a>
          <a href="#inventory" className="hover:text-primary transition-colors">Cars</a>
          <a href="#about" className="hover:text-primary transition-colors">About Us</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a 
            href="https://wa.me/2348001234567" 
            target="_blank" 
            rel="noreferrer"
            className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg font-bold hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20"
          >
            <Phone className="w-4 h-4" />
            <span>+234 800 123 4567</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg py-4 px-6 flex flex-col gap-4">
          <a href="#home" onClick={() => setMobileMenuOpen(false)} className="font-semibold py-2">Home</a>
          <a href="#inventory" onClick={() => setMobileMenuOpen(false)} className="font-semibold py-2">Cars</a>
          <a href="#about" onClick={() => setMobileMenuOpen(false)} className="font-semibold py-2">About Us</a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="font-semibold py-2">Contact</a>
          <a 
            href="https://wa.me/2348001234567" 
            className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-3 rounded-lg font-bold mt-2"
          >
            <Phone className="w-4 h-4" />
            <span>+234 800 123 4567</span>
          </a>
        </div>
      )}
    </nav>
  );
}