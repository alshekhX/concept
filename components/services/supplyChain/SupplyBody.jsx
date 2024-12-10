import React from "react";
import Image from "next/image";
import Divider from "@/components/Divider";
import Trucks from '@/assets/images/services/trucks.jpg'
import Proman from '@/assets/images/services/proman.jpg'

import Ceo1 from '@/assets/images/services/ceo1.jpg'
import Ceo2 from '@/assets/images/services/ceo2.jpg'
import Ceo3 from '@/assets/images/services/ceo3.jpg'
import Ceo4 from '@/assets/images/services/ceo4.jpg'



const SupplyChainServices = () => {
  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 container mx-auto max-w-7xl">
      <h1 className="text-4xl  underline sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 text-center">
        Supply Chain Services
      </h1>

      <div className="grid grid-cols-1 bg-darkwall rounded-lg gap-6 sm:gap-8 md:grid-cols-2 mb-12 sm:mb-16">
        <div className="p-6 sm:p-10">
          <p className="text-lg sm:text-xl md:text-2xl text-justify">
            At Concept, we are committed to providing world-class supply chain
            solutions, working with the largest and most reputable suppliers, both
            locally and globally. Our competitive pricing and dedication to
            meeting international standards ensure that we deliver the highest
            quality materials and services for every project.
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <p className="text-lg sm:text-xl md:text-2xl text-justify">
            We align with the market requirements, particularly focusing on the 
            needs of the Saudi market, while adhering to global best practices. 
            Looking ahead, we aspire to develop our own branded services across 
            all aspects of supply chain management, creating a distinct identity 
            that reflects our commitment to quality, innovation, and sustainability 
            in the construction industry.
          </p>
        </div>
      </div>
      
      <Divider />

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 text-center">
        Our Services
      </h2>

      <div className="grid grid-cols-1 mb-12 sm:mb-16 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-darkwall flex flex-col h-full p-6 sm:p-10 rounded-lg">
          <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold text-center md:text-left">
            Procurement Management
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-justify mb-6">
            We source a wide range of premium construction materials from
            trusted suppliers across the globe, ensuring that our projects are
            supported by the best resources available. From raw materials to
            specialized finishes, our procurement process is designed to meet
            both global industry standards and the specific needs of the Saudi
            market. Our strategic partnerships with leading suppliers allow us
            to offer competitive prices while maintaining a commitment to
            quality.
          </p>
          <div className="w-full  mt-auto  aspect-video mb-4">
            <Image 
src={Proman}
              alt="Procurement Management"
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-darkwall p-6 sm:p-10 rounded-lg">
          <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold text-center md:text-left">
            Logistics and Transportation Services
          </h3>
          <p className="text-base sm:text-lg md:text-xl text-justify mb-6">
            We manage the entire transportation process to ensure that all
            materials are delivered efficiently and on time. Working with
            top-tier logistics partners, we guarantee that everything from bulk
            construction materials to specialized equipment reaches the job site
            without delays. Our logistics services follow best practices,
            optimizing the flow of goods and ensuring that materials are
            available when needed, which helps us avoid any disruptions to
            project timelines. Both of these services are built around our
            commitment to sustainability, in line with Saudi Arabia's Vision
            2030. We integrate eco-friendly practices and ensure that our supply
            chain solutions minimize environmental impact while maximizing
            efficiency and cost-effectiveness.
          </p>
          <div className="w-full aspect-video mb-4">
            <Image 
                src={Trucks}  
            alt="Logistics and Transportation Services"
              className="rounded-lg mt-auto w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <Divider />

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 text-center">
        CEO's Visit to China
      </h2>

      <div className="grid grid-cols-1 bg-darkwall rounded-lg gap-6 sm:gap-8 md:grid-cols-2 mb-12">
        <div className="p-6 sm:p-10">
          <p className="text-base sm:text-lg md:text-xl text-justify mb-6">
            During a recent visit to a leading air conditioning manufacturing facility 
            in China, the CEO of Concept Future gained profound insights into cutting-edge 
            technological innovations. Through direct interactions with specialized 
            engineers, he explored advanced production techniques and the latest 
            developments in air conditioning manufacturing.
          </p>

          <div className="grid mr-auto h-full grid-cols-2 gap-4">
            <div className="  w-full aspect-square">
            <Image 
src={Ceo1}                alt="CEO Visit Image  1"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square">
            <Image 
            src={Ceo2} 
                alt="CEO Visit Image  2"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="p-6 sm:p-10">
          <p className="text-base sm:text-lg md:text-xl text-justify mb-6">
            The visit offered a comprehensive understanding of the facility's 
            sophisticated production processes and collaborative approach. This 
            meaningful exchange has strengthened strategic partnerships between 
            the two companies and will drive future technological advancements 
            in the industry.
          </p>
          <div className="grid grid-cols-2 h-full mt-auto gap-4">
            <div className="w-full  aspect-square">
            <Image 
src={Ceo3}                 alt="CEO Visit Image  3"
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square">
              <Image 
src={Ceo4}                 className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainServices;