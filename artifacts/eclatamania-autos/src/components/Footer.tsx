import React from 'react';
import { Car, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-16 sm:pt-24 pb-10 sm:pb-12 px-4 sm:px-6 border-t-8 border-accent relative overflow-hidden">
      <div className="absolute inset-0 nigerian-pattern mix-blend-screen opacity-10" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 sm:gap-16 mb-16 relative z-10">
        
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-3 mb-8 group">
            <div className="w-12 h-12 bg-accent text-accent-foreground rounded-xl flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg">
              <Car className="w-7 h-7" />
            </div>
            <span className="font-heading font-extrabold text-3xl tracking-tight text-white uppercase">
              Eclatamania <span className="text-accent block text-lg">Autos</span>
            </span>
          </Link>
          <p className="text-background/70 leading-relaxed mb-8 font-medium text-lg">
            Ekiti-based. Nigeria-trusted. Your reliable dealer for Brand New, Tokunbo, and Nigerian Used vehicles.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all text-white shadow-sm hover:shadow-lg">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-12 h-12 bg-background/10 rounded-xl flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-all text-white shadow-sm hover:shadow-lg">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-xl mb-8 text-white uppercase tracking-wider">Quick Links</h4>
          <ul className="space-y-5 text-background/70 font-medium">
            <li><a href="#home" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Home</a></li>
            <li><a href="#inventory" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Our Inventory</a></li>
            <li><a href="#about" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Why Choose Us</a></li>
            <li><a href="#" className="hover:text-accent transition-colors flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-accent"></span> Financing Options</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-heading font-bold text-xl mb-8 text-white uppercase tracking-wider">Contact Us</h4>
          <ul className="space-y-6 text-background/70 font-medium">
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-accent shrink-0 mt-0.5" />
              <span>Ekiti State, Nigeria<br /><span className="text-accent font-bold mt-1 block uppercase text-sm tracking-wider">Serving all 36 states + FCT</span></span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-accent shrink-0" />
              <a href="https://wa.me/2347060747265" className="hover:text-accent transition-colors text-lg font-bold text-white">+234 706 074 7265</a>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-accent shrink-0" />
              <span className="text-lg">eclatamania@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-xl mb-8 text-white uppercase tracking-wider">Business Hours</h4>
          <ul className="space-y-4 text-background/70 font-medium">
            <li className="flex justify-between border-b border-white/10 pb-3">
              <span>Monday - Friday</span>
              <span className="text-white font-bold">8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-3">
              <span>Saturday</span>
              <span className="text-white font-bold">9:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between pb-3">
              <span>Sunday</span>
              <span className="text-accent font-bold uppercase tracking-wider text-sm self-center">Closed</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-background/50 font-medium relative z-10">
        <p>© {new Date().getFullYear()} Eclatamania Autos Nigeria. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
