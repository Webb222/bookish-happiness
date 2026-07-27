import React from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, CheckCircle, Search, Tag } from 'lucide-react';

import carLexus from '@assets/cars/car-lexus.jpg';
import carCamry from '@assets/cars/car-camry.jpg';
import carGle from '@assets/cars/car-gle.jpg';
import carAccord from '@assets/cars/car-accord.jpg';
import carHighlander from '@assets/cars/car-highlander.jpg';
import carRangeRover from '@assets/cars/car-rangerover.jpg';
import carCorolla from '@assets/cars/car-corolla.jpg';
import carLandCruiser from '@assets/cars/car-landcruiser.jpg';

const CARS = [
  {
    id: 1,
    name: '2021 Mercedes Benz GLE 450',
    condition: 'Brand New',
    miles: '500 miles',
    price: '₦ 85,000,000',
    image: carGle
  },
  {
    id: 2,
    name: '2020 Lexus RX 350',
    condition: 'Tokunbo',
    miles: '42,000 miles',
    price: '₦ 35,500,000',
    image: carLexus
  },
  {
    id: 3,
    name: '2018 Toyota Camry XSE',
    condition: 'Tokunbo',
    miles: '51,000 miles',
    price: '₦ 14,200,000',
    image: carCamry
  },
  {
    id: 4,
    name: '2022 Toyota Land Cruiser',
    condition: 'Brand New',
    miles: '150 miles',
    price: '₦ 120,000,000',
    image: carLandCruiser
  },
  {
    id: 5,
    name: '2019 Toyota Highlander',
    condition: 'Tokunbo',
    miles: '38,000 miles',
    price: '₦ 24,000,000',
    image: carHighlander
  },
  {
    id: 6,
    name: '2017 Range Rover Sport',
    condition: 'Tokunbo',
    miles: '45,000 miles',
    price: '₦ 32,500,000',
    image: carRangeRover
  },
  {
    id: 7,
    name: '2015 Honda Accord Sport',
    condition: 'Nigerian Used',
    miles: '89,000 miles',
    price: '₦ 5,800,000',
    image: carAccord
  },
  {
    id: 8,
    name: '2014 Toyota Corolla LE',
    condition: 'Nigerian Used',
    miles: '110,000 miles',
    price: '₦ 4,500,000',
    image: carCorolla
  }
];

export function Inventory() {
  const getConditionStyle = (condition: string) => {
    switch (condition) {
      case 'Brand New': return 'bg-primary text-primary-foreground border-primary';
      case 'Tokunbo': return 'bg-accent text-accent-foreground border-accent';
      case 'Nigerian Used': return 'bg-[#FDE68A] text-[#78350F] border-[#FCD34D]';
      default: return 'bg-secondary text-secondary-foreground border-secondary';
    }
  };

  return (
    <section id="inventory" className="py-16 sm:py-24 px-4 sm:px-6 bg-muted relative border-y border-accent/20">
      <div className="absolute inset-0 nigerian-pattern mix-blend-multiply opacity-20" />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 sm:mb-16 gap-6 sm:gap-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight uppercase">Available Vehicles</h2>
            <p className="text-foreground/80 text-lg sm:text-xl max-w-2xl font-medium">
              From pristine Tokunbo imports to verified Nigerian used options. Browse our carefully curated fleet.
            </p>
          </div>
          <div className="relative w-full md:w-80">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-primary" />
            <input 
              type="text" 
              placeholder="Search make or model..." 
              className="pl-12 pr-4 py-4 rounded-xl border-2 border-accent/30 bg-background w-full focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium text-foreground placeholder:text-foreground/40 shadow-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {CARS.map((car, i) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background rounded-2xl overflow-hidden border-2 border-border shadow-md hover:shadow-2xl hover:border-accent/50 transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className={`absolute top-4 right-4 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest border shadow-sm ${getConditionStyle(car.condition)}`}>
                  {car.condition}
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-foreground mb-4 leading-tight font-heading">{car.name}</h3>
                
                <div className="flex flex-col gap-3 text-sm text-foreground/70 mb-8 font-medium">
                  <span className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary" /> Verified Condition
                  </span>
                  <span className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" /> {car.miles}
                  </span>
                </div>
                
                <div className="mt-auto pt-5 border-t-2 border-muted">
                  <div className="mb-4">
                    <div className="text-3xl font-extrabold text-primary font-heading tracking-tight">
                      {car.price}
                    </div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 px-2 py-1 rounded mt-1">
                      <Tag className="w-3 h-3" /> Ekiti Price
                    </div>
                  </div>
                  <a 
                    href={`https://wa.me/2347060747265?text=Hi Eclatamania Autos, I am interested in the ${car.name} listed for ${car.price}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center bg-foreground text-background py-3.5 rounded-xl font-bold hover:bg-primary transition-colors uppercase tracking-wide text-sm shadow-md"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="bg-background border-2 border-primary text-primary px-10 py-4 rounded-xl font-bold hover:bg-primary hover:text-primary-foreground transition-all uppercase tracking-widest shadow-sm hover:shadow-lg font-heading">
            Load More Vehicles
          </button>
        </div>
      </div>
    </section>
  );
}
