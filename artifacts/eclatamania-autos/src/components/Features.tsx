import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Banknote, Car, ThumbsUp } from 'lucide-react';

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
      desc: "We offer the most competitive prices in Lagos. What you see is what you pay—no hidden agency fees."
    },
    {
      icon: <Car className="w-8 h-8" />,
      title: "Test Drive Available",
      desc: "Visit our Ikeja showroom to inspect your dream car physically and take it for a spin before making a decision."
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-foreground mb-6">Why Choose Eclatamania?</h2>
          <p className="text-lg text-foreground/70">
            Buying a car in Nigeria shouldn't be stressful. We've built a reputation based on trust, quality, and complete transparency.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background border border-border p-8 rounded-2xl hover:border-primary/50 transition-colors"
            >
              <div className="w-14 h-14 bg-secondary text-primary rounded-xl flex items-center justify-center mb-6">
                {feat.icon}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">{feat.title}</h3>
              <p className="text-foreground/70 leading-relaxed text-sm">
                {feat.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}