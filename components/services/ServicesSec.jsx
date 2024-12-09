import React from "react";
import { ChevronRight } from "lucide-react";
import Footer from "../Footer";
import ConstructionIMG from '@/assets/images/construction.jpg'
import MepIMG from '@/assets/images/mep.jpg'
import SupplyChainIMG from '@/assets/images/supplychain.jpg'
import Link from "next/link";

const ServiceCard = ({ title, description, imgSrc, learnMore, reversed = false }) => {
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
        alt={title} 
      />
      <div className={`
        flex flex-col 
        ${reversed ? 'md:items-start' : 'md:items-end'} 
        items-center text-center md:text-left
        justify-center space-y-6
      `}>
        <div className="w-full md:w-3/4">
          <h2 className="text-3xl md:text-5xl text-gray-800 font-bold">{title}</h2>
        </div>
        <p className="text-lg md:text-2xl w-full md:w-3/4 text-gray-700 opacity-80">
          {description}
        </p>
        <div className="group text-darkBlue opacity-80 w-full md:w-3/4 cursor-pointer">
          <div className="
            flex items-center justify-center md:justify-start 
            text-base md:text-xl hover:text-blue-600 
            transition-colors duration-300
          ">
            <Link href={learnMore}>
            <span className="mr-2 group-hover:translate-x-1 transition-transform">
              Learn More About Our {title} Services
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
      title: "Construction",
      description: "We deliver comprehensive construction solutions for government and private sector projects. We specialize in high-quality, innovative building services that meet international standards, providing efficient and reliable construction expertise across diverse project types.",
      imgSrc: ConstructionIMG.src,
      reversed: false,
      link:"/services/construction"
    },
    {
      title: "MEP",
      description: "We provide top-tier MEP services including HVAC, refrigeration, electrical, plumbing, and firefighting systems for government and private clients. Our commitment to quality and innovation ensures efficient, reliable solutions that meet international and Saudi standards.",
      imgSrc: MepIMG.src,
      reversed: true,
      link:"/services/mep"

    },
    {
      title: "Supply Chain",
      description: "Concept Future Supply Chain Services optimizes logistics and procurement solutions for businesses. We provide end-to-end supply chain management, leveraging innovative strategies to enhance efficiency, reduce costs, and ensure seamless operations for our clients across various industries.",
      imgSrc: SupplyChainIMG.src,
      reversed: false,
      link:"/services/supplychain"

    }
  ];

  return (
    <div className=" self-end
      px-4 sm:px-6 lg:px-8 
      py-16 md:py-36 
      flex flex-col 
      container 
      mx-auto
    ">


      {services.map((service, index) => (
        <ServiceCard 
          key={index}
          title={service.title}
          description={service.description}
          imgSrc={service.imgSrc}
          reversed={service.reversed}
          learnMore={service.link}
        />
      ))}


    </div>
  );
};

export default ServicesSec;