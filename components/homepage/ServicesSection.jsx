import React from "react";

import {useTranslations} from 'next-intl'
import DividerTitle from "./DividerTitle";
import HomeSubtitle from "./HomeSubtitle";
import ServicesCard from "./ServicesCard";
import { AirVent, Construction, Building, BoxesIcon } from "lucide-react";
import Air from "@/assets/images/services/air.jpg";
import Box from "@/assets/images/services/box.jpg";
import Build from "@/assets/images/services/build.jpg";
import Link from "next/link";

const ServicesSection = () => {
  const t = useTranslations('HomePage.ServicesSection');

  return (
    <div className="  bg-zainb  py-20 md:py-32  ">
      <div className="container px-4  mx-auto flex flex-col">
        <DividerTitle
          title={t('sectionTitle')}
          dividerWidth={"120px"}
          textColor="text-black"
          dividerColor="bg-black opacity-85"
        />
        <HomeSubtitle
          title={t('sectionSubtitle')}
          style=""
        />

        <div className="lg:flex lg:flex-row md:grid md:grid-cols-2  flex-col   justify-items-center w-w-full justify-center  ">
        
        <Link href='/services/construction' className=" ">  <ServicesCard
            imageSrc={Build.src}
            title={t('services.0.title')}
            description={t('services.0.description')}
          >
            <Building className="mx-2 pt-1  h-full align-middle items-center size-6" />
          </ServicesCard></Link>
          <Link href='/services/mep'>
          <ServicesCard
            imageSrc={Air.src}
            title={t('services.1.title')}
            description={t('services.1.description')}
          >
            <AirVent className="mx-2 pt-1  size-6" />
          </ServicesCard>
          </Link>
          <Link href='/services/construction'>
          <ServicesCard
            imageSrc={Box.src}
            title={t('services.2.title')}
            description={t('services.2.description')}
          >
            <BoxesIcon className="mx-2 pt-1  size-6" />
          </ServicesCard>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
