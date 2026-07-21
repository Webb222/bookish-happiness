import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Car, Heart, Sparkles, MapPin, Phone, ArrowRight, ShieldCheck, Smile, Star, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

import heroImg from '@assets/generated_images/hero-car.jpg';
import carYellow from '@assets/generated_images/car-yellow.jpg';
import carMint from '@assets/generated_images/car-mint.jpg';
import carWhite from '@assets/generated_images/car-white.jpg';

const CARS = [
  {
    id: 1,
    name: '2021 Sunny Hatchback',
    price: '$14,500',
    miles: '32k miles',
    image: carYellow,
    color: 'bg-accent',
  },
  {
    id: 2,
    name: '2019 Mint Cruiser',
    price: '$18,200',
    miles: '45k miles',
    image: carMint,
    color: 'bg-secondary',
  },
  {
    id: 3,
    name: '2022 Pristine Sedan',
    price: '$16,900',
    miles: '21k miles',
    image: carWhite,
    color: 'bg-muted',
  }
];

export default function Home() {
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 100]);

  return (
    <div className="relative min-h-screen overflow-hidden selection:bg-primary selection:text-primary-foreground">
      <div className="noise-overlay" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center rotate-[-10deg] group-hover:rotate-0 transition-transform duration-300">
              <Car className="w-6 h-6" />
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">Eclatamania</span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#inventory" className="hover:text-primary transition-colors">Cars</a>
            <a href="#about" className="hover:text-primary transition-colors">Our Vibe</a>
            <a href="#contact" className="hover:text-primary transition-colors">Find Us</a>
          </div>
          <button className="bg-foreground text-background px-6 py-2.5 rounded-full font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300">
            Let's Chat
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full font-medium mb-6">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>No suits, just good cars.</span>
              </div>
              <h1 className="font-display text-5xl md:text-7xl font-extrabold leading-[1.05] tracking-tight mb-6 text-balance">
                Find a ride you <span className="text-primary italic">actually</span> love.
              </h1>
              <p className="text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
                We're your friendly neighborhood car matchmakers. Honest prices, zero pressure, and good vibes only. Let's get you on the road.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="#inventory" className="inline-flex items-center justify-center bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300 shadow-lg shadow-primary/25">
                  See Our Cars <ArrowRight className="ml-2 w-5 h-5" />
                </a>
                <a href="#about" className="inline-flex items-center justify-center bg-card text-foreground border-2 border-border px-8 py-4 rounded-full font-bold text-lg hover:border-primary hover:text-primary transition-colors duration-300">
                  Our Story
                </a>
              </div>
            </motion.div>

            <motion.div 
              style={{ y: heroY }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden relative shadow-2xl">
                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
                <img 
                  src={heroImg} 
                  alt="A cute tangerine car parked on a sunny street" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100%25" height="100%25"%3E%3Crect width="100%25" height="100%25" fill="%23FF6B35"/%3E%3C/svg%3E';
                  }}
                />
              </div>
              
              {/* Floating Badge */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, type: "spring" }}
                className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 bg-background p-6 rounded-3xl shadow-xl border border-border/50 max-w-[200px]"
              >
                <div className="flex gap-1 mb-2 text-accent">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
                </div>
                <p className="font-display font-bold text-lg leading-tight">"They made buying a car actually fun!"</p>
                <p className="text-sm text-muted-foreground mt-2">— Sarah M.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Marquee */}
      <div className="bg-foreground text-background py-6 overflow-hidden flex whitespace-nowrap border-y-4 border-primary">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          className="flex items-center font-display font-bold text-2xl uppercase tracking-wider"
        >
          <span className="mx-8">Honest Prices</span>
          <span className="text-primary">✦</span>
          <span className="mx-8">Zero Pressure</span>
          <span className="text-primary">✦</span>
          <span className="mx-8">Friendly Faces</span>
          <span className="text-primary">✦</span>
          <span className="mx-8">Quality Rides</span>
          <span className="text-primary">✦</span>
          <span className="mx-8">Honest Prices</span>
          <span className="text-primary">✦</span>
          <span className="mx-8">Zero Pressure</span>
          <span className="text-primary">✦</span>
          <span className="mx-8">Friendly Faces</span>
          <span className="text-primary">✦</span>
          <span className="mx-8">Quality Rides</span>
          <span className="text-primary">✦</span>
        </motion.div>
      </div>

      {/* Inventory Section */}
      <section id="inventory" className="py-24 px-6 bg-card">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Fresh on the lot.</h2>
              <p className="text-muted-foreground text-lg max-w-xl">Handpicked, fully inspected, and ready for their next adventure. Here's what we're excited about this week.</p>
            </div>
            <button className="flex items-center font-bold text-primary hover:text-foreground transition-colors group">
              View all inventory 
              <ChevronRight className="ml-1 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CARS.map((car, i) => (
              <motion.div 
                key={car.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex flex-col bg-background rounded-[2rem] overflow-hidden border border-border hover:shadow-xl hover:border-primary/50 transition-all duration-300"
              >
                <div className={`aspect-[4/3] p-4 ${car.color} relative overflow-hidden`}>
                  <img 
                    src={car.image} 
                    alt={car.name}
                    className="w-full h-full object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute top-6 right-6 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1 shadow-sm">
                    <Heart className="w-4 h-4 text-primary" /> Love this
                  </div>
                </div>
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-bold mb-2">{car.name}</h3>
                    <div className="flex items-center gap-4 text-sm font-medium text-muted-foreground mb-6">
                      <span className="flex items-center gap-1"><Car className="w-4 h-4" /> Automatic</span>
                      <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {car.miles}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-6 mt-auto">
                    <span className="text-3xl font-display font-bold text-primary">{car.price}</span>
                    <button className="bg-foreground text-background w-12 h-12 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="py-24 px-6 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">Car buying, without the headache.</h2>
            <p className="text-lg text-muted-foreground">We started Eclatamania because we hated how normal car dealerships felt. So we built the opposite.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card p-8 rounded-[2rem] text-center shadow-sm border border-border hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Smile className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">No Commission Breath</h3>
              <p className="text-muted-foreground leading-relaxed">Our team isn't paid on commission. We're just here to help you find a car that fits your life, not hit a sales quota.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card p-8 rounded-[2rem] text-center shadow-sm border border-border hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-accent/20 text-accent rounded-full flex items-center justify-center mx-auto mb-6">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Inspected & Loved</h3>
              <p className="text-muted-foreground leading-relaxed">Every car goes through a massive 150-point check. If we wouldn't let our mom drive it, we won't sell it to you.</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card p-8 rounded-[2rem] text-center shadow-sm border border-border hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-secondary text-secondary-foreground rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4">Good Vibes Only</h3>
              <p className="text-muted-foreground leading-relaxed">We play good music, serve decent coffee, and treat you like a neighbor. Because that's exactly what you are.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-foreground text-background rounded-[3rem] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-50 translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-50 -translate-x-1/2 translate-y-1/2" />
          
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h2 className="font-display text-4xl md:text-6xl font-bold mb-6">Ready for a test drive?</h2>
            <p className="text-xl text-background/80 mb-10">Swing by the lot. No appointment necessary. Just come say hi and kick some tires.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-primary text-primary-foreground px-8 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300">
                View Inventory
              </button>
              <button className="bg-background/10 backdrop-blur-md border border-background/20 text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-background/20 transition-colors duration-300 flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" /> (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card border-t border-border pt-20 pb-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                <Car className="w-5 h-5" />
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">Eclatamania</span>
            </Link>
            <p className="text-muted-foreground max-w-sm text-balance">
              The neighborhood car lot where good cars meet good people. Come for the cars, stay for the coffee.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 font-display">Visit Us</h4>
            <address className="not-italic text-muted-foreground flex flex-col gap-2">
              <span className="flex items-start gap-2">
                <MapPin className="w-5 h-5 shrink-0 text-primary mt-0.5" />
                <span>123 Sunshine Blvd.<br/>Sunnydale, CA 90210</span>
              </span>
            </address>
          </div>
          
          <div>
            <h4 className="font-bold mb-6 font-display">Hours</h4>
            <ul className="text-muted-foreground space-y-2">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>9am - 7pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>10am - 6pm</span></li>
              <li className="flex justify-between"><span>Sunday</span> <span>Closed (Riding)</span></li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Eclatamania Autos. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}