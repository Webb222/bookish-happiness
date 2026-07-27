import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Banknote, Car, ThumbsUp, Truck } from 'lucide-react';

export function Features() {
  const features = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "100% Certified Papers",
      desc: "Every car we sell comes with fully verified Nigerian customs duty papers. No stories, no hassle."
    },
    {
      icon: <ThumbsUp className="w-8 h-8" />,
      title: "Accident-Free Guarantee",
      desc: "Our Tokunbo and Brand New vehicles are thoroughly inspected. We strictly reject salvaged or flooded cars."
    },
    {
      icon: <Banknote className="w-8 h-8" />,
      title: "Fair & Transparent Pricing",
      desc: "We offer the most competitive prices in Nigeria. What you see is what you pay—no hidden agency fees."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Test Drive Available",
      desc: "Visit our Ekiti State showroom to inspect your dream car physically and take it for a spin before making a decision."
    },
    {
      icon: <Truck className="w-8 h-8" />,
      title: "Nationwide Delivery",
      desc: "We deliver to all 36 states and FCT. Your car comes to you, fully documented."
    }
  ];

  return (
    <section id="about" className="py-20 sm:py-32 px-4 sm:px-6 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-accent/10 rounded-bl-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/10 rounded-tr-full blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-6 uppercase tracking-tight">Why Choose Eclatamania?</h2>
          <p className="text-lg sm:text-xl text-foreground/80 font-medium">
            Buying a car in Nigeria shouldn't be stressful. We've built a reputation based on trust, quality, and complete transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-muted/30 border-2 border-border p-8 sm:p-10 rounded-3xl hover:border-accent hover:bg-muted transition-all duration-300 shadow-sm hover:shadow-xl ${i === features.length - 1 ? 'lg:col-start-2' : ''}`}
            >
              <div className="w-16 h-16 bg-primary text-accent rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-primary/20">
                {feat.icon}
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-4 font-heading uppercase">{feat.title}</h3>
              <p className="text-foreground/70 leading-relaxed font-medium">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
