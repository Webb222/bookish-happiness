import React from 'react';
import { MessageCircle, MapPin, Users } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 bg-muted relative">
      <div className="absolute inset-0 nigerian-pattern mix-blend-multiply opacity-20" />
      
      <div className="max-w-6xl mx-auto bg-primary text-primary-foreground rounded-3xl sm:rounded-[3rem] p-8 sm:p-12 md:p-20 relative overflow-hidden shadow-2xl border-4 border-primary/20 outline outline-8 outline-primary/5">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-[120px] translate-x-1/3 -translate-y-1/3 opacity-30" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFFBF0] rounded-full blur-[120px] -translate-x-1/3 translate-y-1/3 opacity-10" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          <div className="lg:w-2/3 w-full text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-accent/20 text-accent px-4 py-2 rounded-full font-bold text-sm mb-6 border border-accent/30 uppercase tracking-widest shadow-sm">
              <Users className="w-4 h-4" />
              <span>Over 500 Nigerians served — be the next!</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold mb-6 leading-[1.1] uppercase font-heading">
              Ready to drive your new car home?
            </h2>
            
            <p className="text-lg sm:text-xl text-primary-foreground/90 mb-10 max-w-2xl mx-auto lg:mx-0 font-medium leading-relaxed">
              Skip the long negotiations. Send us a message on WhatsApp right now to check availability, request more pictures, or schedule a physical inspection.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <a 
                href="https://wa.me/2347060747265" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-accent text-accent-foreground px-8 sm:px-10 py-5 rounded-2xl font-bold text-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/20 pulse-animation uppercase tracking-wide font-heading"
              >
                <MessageCircle className="w-6 h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/3 w-full bg-background/10 backdrop-blur-md border-2 border-background/20 p-8 sm:p-10 rounded-3xl text-center shadow-xl">
            <div className="w-16 h-16 bg-accent text-accent-foreground rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-accent/20">
              <MapPin className="w-8 h-8" />
            </div>
            <h3 className="font-bold text-2xl mb-3 font-heading uppercase">Visit Our Lot</h3>
            <p className="text-primary-foreground/90 text-lg font-medium mb-2">
              Ekiti State, Nigeria
            </p>
            <p className="text-accent font-bold uppercase tracking-wider text-sm mb-6">
              Nationwide Delivery Available
            </p>
            <div className="pt-6 border-t-2 border-background/20">
              <p className="font-bold uppercase tracking-wider text-sm opacity-90">Open Mon-Sat: 8am - 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
