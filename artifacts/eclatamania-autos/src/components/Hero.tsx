import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, MapPin } from 'lucide-react';
import heroBg from '@/assets/cars/hero-showroom.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[95vh] flex items-center pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Premium Car Showroom" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/50" />
        <div className="absolute inset-0 nigerian-pattern mix-blend-multiply opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-accent/20 text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm mb-5 sm:mb-6 border border-accent/40 shadow-sm uppercase tracking-wide">
              <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
              <span>Based in Ekiti State — We Deliver Nationwide</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-4 sm:mb-6 uppercase">
              Drive your <span className="text-primary relative inline-block">dream car<div className="absolute -bottom-2 left-0 w-full h-2 bg-accent opacity-50"></div></span> today.
            </h1>
            
            <p className="text-lg sm:text-2xl text-foreground/80 mb-4 font-heading font-medium tracking-wide text-primary">
              No wahala, just good cars.
            </p>
            
            <p className="text-base sm:text-xl text-foreground/70 mb-8 sm:mb-10 leading-relaxed max-w-xl">
              Your reliable plug for Brand New, Tokunbo, and Nigerian Used cars. We deliver to all 36 states. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
              <a 
                href="#inventory" 
                className="inline-flex items-center justify-center bg-primary text-primary-foreground px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-primary/90 transition-all shadow-xl shadow-primary/30 group uppercase tracking-wide font-heading"
              >
                View Inventory 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform text-accent" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-background text-foreground border-2 border-primary px-6 sm:px-8 py-4 sm:py-5 rounded-xl font-bold text-base sm:text-lg hover:bg-primary/5 transition-all uppercase tracking-wide font-heading shadow-md"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-10 sm:mt-14 flex flex-wrap items-center gap-4 sm:gap-8 text-sm sm:text-base font-bold text-foreground/80 font-heading uppercase tracking-wider">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                <span>Verified Papers</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-6 h-6 text-accent shrink-0" />
                <span>Accident-Free</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
