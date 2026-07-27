import React from 'react';
import { Car, MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';
import { Link } from 'wouter';

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-12 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 border-t-4 border-primary">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 mb-10 sm:mb-16">
        
        <div className="lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-primary text-white rounded-lg flex items-center justify-center">
              <Car className="w-6 h-6" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-white">
              Eclatamania <span className="text-primary">Autos</span>
            </span>
          </Link>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Your trusted dealer for Brand New, Tokunbo, and Nigerian Used vehicles. Based in Ekiti State — delivering nationwide.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-white">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors text-white">
              <Facebook className="w-5 h-5" />
            </a>
          </div>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
            <li><a href="#inventory" className="hover:text-primary transition-colors">Our Inventory</a></li>
            <li><a href="#about" className="hover:text-primary transition-colors">Why Choose Us</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Financing Options</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Contact Us</h4>
          <ul className="space-y-4 text-muted-foreground">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
              <span>Ekiti State, Nigeria<br /><span className="text-primary font-semibold">Nationwide Delivery Available</span></span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-primary shrink-0" />
              <a href="https://wa.me/2347060747265" className="hover:text-primary transition-colors">+234 706 074 7265</a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-primary shrink-0" />
              <span>eclatamania@gmail.com</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold text-lg mb-6 text-white">Business Hours</h4>
          <ul className="space-y-3 text-muted-foreground">
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Monday - Friday</span>
              <span className="text-white">8:00 AM - 6:00 PM</span>
            </li>
            <li className="flex justify-between border-b border-white/10 pb-2">
              <span>Saturday</span>
              <span className="text-white">9:00 AM - 5:00 PM</span>
            </li>
            <li className="flex justify-between pb-2">
              <span>Sunday</span>
              <span className="text-primary font-semibold">Closed</span>
            </li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Eclatamania Autos Nigeria. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}