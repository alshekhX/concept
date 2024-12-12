'use client';
import Ven from '@/assets/images/services/ven.jpg'
import Plumb from '@/assets/images/services/plum.jpg'
import Mep from '@/assets/images/services/mep.jpg'
import Elect from '@/assets/images/services/elec.jpg'
import Fire from '@/assets/images/services/fire.jpg'

import React from 'react';
import { 
  Wind, 
  Snowflake, 
  Flame, 
  Zap, 
  Droplet, 
  Thermometer,
  CloudSun,
  Shield,
  Bell,
  Waves,
  PanelTop
} from 'lucide-react';
import { motion } from "framer-motion";
import Image from 'next/image';


// Define service categories with their corresponding subclassification icons
const serviceCategories = [
  {
    category: 'MEP Services',
    services: [
      { name: 'HVAC Variable Refrigeration Regulator (VRF)', icon: Thermometer, },
      { name: 'Combined Air Conditioning', icon: Wind, },
      { name: 'Multi-stage Desert Air Conditioning System (AIR20)', icon: CloudSun, },
      { name: 'Concealed Air Conditioning System', icon: PanelTop,}
    ],
    image:Mep
  },
  {
    category: 'Ventilation',
    services: [
      { name: 'Ventilation Solutions', icon: Snowflake, },
      { name: 'Supply, Installation and Maintenance of Air Conditioning and Ventilation Systems', icon: Waves, }
    ],
    image: Ven
  },
  {
    category: 'Firefighting Systems',
    services: [
      { name: 'Firefighting systems', icon: Flame,},
      { name: 'Firealarm supply and apply', icon: Bell, }
    ],
    image: Fire
  },
  {
    category: 'Electrical Works',
    services: [
      { name: 'Electrices works', icon: Zap, }
    ],
    image: Elect
  },
  {
    category: 'Plumbing Systems',
    services: [
      { name: 'Plumping System Maintenance', icon: Droplet},
      { name: 'Installation', icon: Shield,  }
    ],
    image: Plumb
  }
];

const ServicesGrid = () => {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 container mx-auto max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex pb-12 sm:pb-16 items-center justify-center"
      >
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 border-b-4 border-black pb-2 sm:pb-3 tracking-wide text-center">
          Applications
        </h1>
      </motion.div>

      <div className="space-y-12 sm:space-y-16">
        {serviceCategories.map((category, index) => (
          <div 
            key={index} 
            className="bg-darkwall rounded-lg p-6 border border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-8 items-center"
          >
            <div className="order-2 md:order-1">
              <h2 className="text-3xl sm:text-4xl font-semibold mb-8 sm:mb-12 text-gray-800 text-center md:text-left">
                {category.category}
              </h2>
              <ul className="space-y-4">
                {category.services.map((service, serviceIndex) => (
                  <li 
                    key={serviceIndex} 
                    className="flex items-center space-x-4 justify-center md:justify-start"
                  >
                    <div className="w-12 sm:w-16 h-12 sm:h-16 rounded-full border-2 border-gray-200 flex items-center justify-center">
                      <service.icon className="w-6 sm:w-8 h-6 sm:h-8 text-gray-700" />
                    </div>
                    <span className="text-gray-700 text-lg sm:text-xl flex-1 text-center md:text-left">
                      {service.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="order-1 md:order-2 w-full aspect-video md:aspect-auto">
              <div className="relative w-full h-full">
                <img 
                
                
                  src={category.image.src} 
                  alt={`${category.category} services`}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServicesGrid;