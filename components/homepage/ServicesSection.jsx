import React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import DividerTitle from "./DividerTitle";
import HomeSubtitle from "./HomeSubtitle";
import ServicesCard from "./ServicesCard";
import { AirVent, Construction, Building, BoxesIcon } from "lucide-react";
import Air from "@/assets/images/services/air.jpg";
import Box from "@/assets/images/services/box.jpg";
import Build from "@/assets/images/services/build.jpg";
import Roads from "@/assets/images/services/roads.jpg";
import Link from "next/link";

const ServicesSection = () => {
  return (
    <div className="  bg-zainb  py-20 md:py-32  ">
      <div className="container px-4  mx-auto flex flex-col">
        <DividerTitle
          title="Our Services"
          dividerWidth={"120px"}
          textColor="text-black"
          dividerColor="bg-black opacity-85"
        />
        <HomeSubtitle
          title="We offer Quality craftsmanship, reliable solutions, and exceptional service."
          style=""
        />

        <div className="lg:flex lg:flex-row md:grid md:grid-cols-2 flex-col   justify-items-center w-w-full justify-center  ">
        
        <Link href='/services/construction'>  <ServicesCard
            imageSrc={Build.src}
            title=" Construction and Finishing Contracting"
            description="Providing comprehensive engineering design services, efficient project management, and specialized technical consultations to deliver innovative and sustainable engineering solutions for all building types and projects."
          >
            <Building className="mr-2 pt-1  h-full align-middle items-center size-6" />
          </ServicesCard></Link>
          <Link href='/services/mep'>
          <ServicesCard
            imageSrc={Air.src}
            title="MEP Services"
            description="We provide top-tier MEP services including HVAC, refrigeration, electrical, plumbing, and firefighting systems for government and private clients. Our commitment to quality and innovation ensures efficient, reliable solutions that meet international and Saudi standards."
          >
            <AirVent className="mr-2 pt-1  size-6" />
          </ServicesCard>
          </Link>
          <Link href='/services/supplychain'>
          <ServicesCard
            imageSrc={Box.src}
            title="General Supply Services"
            description="Providing a comprehensive range of building materials, industrial equipment, and daily consumables to meet diverse construction and operational needs."
          >
            <BoxesIcon className="mr-2 pt-1  size-6" />
          </ServicesCard>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
