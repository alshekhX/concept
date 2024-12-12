import React from 'react';
import HomeSubtitle from './HomeSubtitle';
import DividerTitle from './DividerTitle';
import Show1 from '@/assets/images/show1.jpg';
import Show2 from '@/assets/images/show2.jpg';
import Show3 from '@/assets/images/show3.jpg';
import Show4 from '@/assets/images/show4.jpg';
import Image from 'next/image';


const WhoUs = () => {
  return (
    <div className="container mx-auto px-6 sm:px-4 py-20 md:py-32 flex flex-col">
      <DividerTitle 
        title="Who Are We" 
        dividerWidth={'120px'} 
        textColor="text-black" 
        dividerColor="bg-black opacity-85" 
      />
      <HomeSubtitle title="Your Local Partner, Global Standards" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-10">
        {/* Text Section */}
        <div className="flex flex-col justify-center">
          <p className="text-lg lg:w-4/5 md:pr-10 italic   border-l-4 border-darkBlue pl-4 sm:text-xl md:text-2xl text-justify text-black opacity-90 leading-relaxed">
            We specialize in construction and finishing contracting,  MEP services (supply, implementation, maintenance), and general supplies. With extensive experience and a solid reputation, we are a trusted partner in delivering high-quality products and services.
          </p>
        </div>

        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Image
              src={Show1}
              alt="Mep services"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <Image
              src={Show2}
              alt="Electrical services"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-col gap-4">
            <Image
              src={Show3}
              alt="Electrical services"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <Image
              src={Show4}
              alt="Mep services"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoUs;