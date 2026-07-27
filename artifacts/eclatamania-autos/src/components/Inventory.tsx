import React from 'react';
import { motion } from 'framer-motion';
import { Car, MapPin, CheckCircle, Search } from 'lucide-react';

import carLexus from '@assets/generated_images/car-lexus-rx.jpg';
import carCamry from '@assets/generated_images/car-camry.jpg';
import carGle from '@assets/generated_images/car-gle.jpg';
import carAccord from '@assets/generated_images/car-accord.jpg';
import carHighlander from '@assets/generated_images/car-highlander.jpg';
import carRangeRover from '@assets/generated_images/car-rangerover.jpg';
import carCorolla from '@assets/generated_images/car-corolla.jpg';
import carLandCruiser from '@assets/generated_images/car-landcruiser.jpg';

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
  const getConditionColor = (condition: string) => {
    switch (condition) {
      case 'Brand New': return 'bg-primary text-white';
      case 'Tokunbo': return 'bg-accent text-accent-foreground';
      case 'Nigerian Used': return 'bg-muted-foreground text-white';
      default: return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <section id="inventory" className="py-16 sm:py-24 px-4 sm:px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-foreground mb-3 sm:mb-4 tracking-tight">Available Vehicles</h2>
            <p className="text-foreground/70 text-base sm:text-lg max-w-2xl">
              From pristine Tokunbo imports to verified Nigerian used options. Browse our carefully curated fleet.
            </p>
          </div>
          <div className="relative w-full md:w-auto">
            <Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-foreground/40" />
            <input 
              type="text" 
              placeholder="Search make or model..." 
              className="pl-10 pr-4 py-3 rounded-lg border border-border bg-white w-full md:w-64 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {CARS.map((car, i) => (
            <motion.div 
              key={car.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-300 group flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img 
                  src={car.image} 
                  alt={car.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getConditionColor(car.condition)}`}>
                  {car.condition}
                </div>
              </div>
              
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-foreground mb-3 leading-tight">{car.name}</h3>
                
                <div className="flex flex-col gap-2 text-sm text-foreground/60 mb-6">
                  <span className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-primary" /> Verified Condition
                  </span>
                  <span className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" /> {car.miles}
                  </span>
                </div>
                
                <div className="mt-auto pt-4 border-t border-border">
                  <div className="text-2xl font-extrabold text-primary mb-3">
                    {car.price}
                  </div>
                  <a 
                    href={`https://wa.me/2347060747265?text=Hi Eclatamania Autos, I am interested in the ${car.name} listed for ${car.price}.`}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full text-center bg-foreground text-white py-3 rounded-lg font-bold hover:bg-primary transition-colors"
                  >
                    Inquire on WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <button className="bg-white border-2 border-primary text-primary px-8 py-3 rounded-xl font-bold hover:bg-primary hover:text-white transition-colors">
            Load More Vehicles
          </button>
        </div>
      </div>
    </section>
  );
}