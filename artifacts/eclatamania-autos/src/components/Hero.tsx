import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Star } from 'lucide-react';
import heroBg from '@assets/generated_images/hero-showroom.jpg';

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-background">
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
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/40" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-full font-bold text-sm mb-6 border border-border shadow-sm">
              <Star className="w-4 h-4 fill-primary" />
              <span>#1 Trusted Dealership in Lagos</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight mb-6 text-balance">
              Drive your <span className="text-primary">dream car</span> today.
            </h1>
            
            <p className="text-xl text-foreground/70 mb-8 leading-relaxed text-balance">
              Premium quality. Honest prices. We are your most reliable plug for Brand New, Tokunbo, and Nigerian Used vehicles. 
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#inventory" 
                className="inline-flex items-center justify-center bg-primary text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-primary/90 transition-all shadow-lg shadow-primary/25 group"
              >
                View Inventory 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center bg-white text-foreground border border-border px-8 py-4 rounded-xl font-bold text-lg hover:bg-muted transition-all"
              >
                Contact Us
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm font-semibold text-foreground/60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Verified Papers</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span>Accident-Free</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}