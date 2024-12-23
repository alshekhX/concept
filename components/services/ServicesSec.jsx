import React from "react";
import { ChevronRight } from "lucide-react";
import Footer from "../Footer";
import ConstructionIMG from '@/assets/images/construction.jpg'
import MepIMG from '@/assets/images/mep.jpg'
import SupplyChainIMG from '@/assets/images/supplychain.jpg'
import Link from "next/link";
import { useTranslations } from 'next-intl';

const ServiceCard = ({ serviceKey, imgSrc, learnMore, reversed = false }) => {
  const t = useTranslations('ServicesPage.ServicesSection');

  return (
    <div className={`
      grid gap-8 grid-cols-1 md:grid-cols-2 mb-32 items-center 
      ${reversed ? 'md:grid-flow-col-dense' : ''}
    `}>
      <img 
        className={`
          rounded-lg w-full h-auto max-h-[500px] object-cover shadow-lg 
          transition-transform duration-300 hover:scale-105 
          ${reversed ? 'md:order-last' : ''}
        `} 
        src={imgSrc} 
        alt={t(`items.${serviceKey}.title`)} 
      />
      
      <div className={`
        flex flex-col  
        ${reversed ? 'md:items-start' : 'md:items-end'} 
        items-center text-center md:text-left
        justify-center space-y-6
      `}>
        <div className="w-full md:w-3/4">
          <Link href={learnMore}>
            <h2 className="text-3xl hover:underline md:text-5xl text-gray-800 font-bold">
              {t(`items.${serviceKey}.title`)}
            </h2>
          </Link>
        </div>
        <p className="text-xl md:text-2xl w-full md:w-3/4 text-gray-700 opacity-80">
          {t(`items.${serviceKey}.description`)}
        </p>
        <div className="group text-darkBlue opacity-80 w-full md:w-3/4 cursor-pointer">
          <div className="
            flex items-center justify-center md:justify-start 
            text-base md:text-xl hover:text-blue-600 
            transition-colors duration-300
          ">
            <Link href={learnMore}>
              <span className="mr-2 group-hover:translate-x-1 transition-transform">
                {t('learnMore', { service: t(`items.${serviceKey}.title`) })}
              </span>
            </Link>
            <ChevronRight 
              className="
                text-darkBlue group-hover:translate-x-1 
                group-hover:text-blue-600 
                transition-all duration-300
              " 
              size={20} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const ServicesSec = () => {
  const services = [
    {
      serviceKey: "construction",
      imgSrc: ConstructionIMG.src,
      reversed: false,
      link: "/services/construction"
    },
    {
      serviceKey: "mep",
      imgSrc: MepIMG.src,
      reversed: true,
      link: "/services/mep"
    },
    {
      serviceKey: "supplyChain",
      imgSrc: SupplyChainIMG.src,
      reversed: false,
      link: "/services/supplychain"
    }
  ];

  return (
    <div className="self-end px-4 sm:px-6 lg:px-8 py-16 md:py-36 flex flex-col container mx-auto">
      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          serviceKey={service.serviceKey}
          imgSrc={service.imgSrc}
          reversed={service.reversed}
          learnMore={service.link}
        />
      ))}
    </div>
  );
};

export default ServicesSec;