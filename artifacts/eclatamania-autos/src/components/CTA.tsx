import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';

export function CTA() {
  return (
    <section className="py-14 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto bg-primary text-primary-foreground rounded-2xl sm:rounded-3xl p-6 sm:p-10 md:p-16 relative overflow-hidden shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/20 rounded-full blur-[80px] -translate-x-1/2 translate-y-1/2" />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-10">
          <div className="md:w-2/3 w-full">
            <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-4 sm:mb-6 leading-tight">
              Ready to drive your new car home?
            </h2>
            <p className="text-base sm:text-lg text-primary-foreground/80 mb-6 sm:mb-8 max-w-xl">
              Skip the long negotiations. Send us a message on WhatsApp right now to check availability, request more pictures, or schedule a physical inspection.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/2348001234567" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-[#20bd5a] transition-colors shadow-lg"
              >
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="md:w-1/3 w-full bg-white/10 backdrop-blur-sm border border-white/20 p-5 sm:p-6 rounded-2xl text-center">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="font-bold text-lg sm:text-xl mb-2">Visit Our Lot</h3>
            <p className="text-primary-foreground/80 text-sm">
              Allen Avenue, Ikeja<br />
              Lagos, Nigeria
            </p>
            <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-white/20 text-sm">
              <p className="font-semibold">Open Mon-Sat: 8am - 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}