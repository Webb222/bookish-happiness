import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import heroBg from '@assets/generated_images/hero-showroom.jpg';

export function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center pt-28 pb-16 md:pt-40 md:pb-32 overflow-hidden bg-background">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Premium Car Showroom in Lagos" 
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/30" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 w-full">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white text-primary px-3 py-1.5 sm:px-4 sm:py-2 rounded-full font-bold text-xs sm:text-sm mb-5 sm:mb-6 border border-border shadow-sm">
              <Star className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-primary" />
              <span>#1 Trusted Dealership in Lagos</span>
            </div>
            
            <h1 className="text-3xl sm:text-5xl md:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-4 sm:mb-6">
              Drive your <span className="text-primary">dream car</span> today.
            </h1>
            
            <p className="text-base sm:text-xl text-foreground/70 mb-6 sm:mb-8 leading-relaxed">
              Premium quality. Honest prices. We are your most reliable plug for Brand New, Tokunbo, and Nigerian Used vehicles. 
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a 
                href="#inventory" 
                className="inline-flex items-center justify-center bg-primary text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 group"
              >
                View Inventory 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-white text-foreground border border-border px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-muted transition-all"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-6 text-sm font-semibold text-foreground/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span>Verified Papers</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
                <span>Accident-Free</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}