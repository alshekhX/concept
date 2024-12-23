'use client';
import React from "react";
import Image from "next/image";
import Divider from "@/components/Divider";
import { useTranslations } from 'next-intl';
import Trucks from '@/assets/images/services/trucks.jpg'
import Proman from '@/assets/images/services/proman.jpg'
import Ceo1 from '@/assets/images/services/ceo1.jpg'
import Ceo2 from '@/assets/images/services/ceo2.jpg'
import Ceo3 from '@/assets/images/services/ceo3.jpg'
import Ceo4 from '@/assets/images/services/ceo4.jpg'

const SupplyChainServices = () => {
  const t = useTranslations('SupplyChainPage.Applications');

  return (
    <div className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 container mx-auto max-w-7xl">
      <h1 className="text-4xl underline sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 text-center">
        {t('title')}
      </h1>

      <div className="grid grid-cols-1 bg-darkwall rounded-lg gap-6 sm:gap-8 md:grid-cols-2 mb-12 sm:mb-16">
        <div className="p-6 sm:p-10">
          <p className="text-lg sm:text-xl md:text-2xl text-justify">
            {t('intro.paragraph1')}
          </p>
        </div>
        <div className="p-6 sm:p-10">
          <p className="text-lg sm:text-xl md:text-2xl text-justify">
            {t('intro.paragraph2')}
          </p>
        </div>
      </div>
      
      <Divider />

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 text-center">
        {t('services.title')}
      </h2>

      <div className="grid grid-cols-1 mb-12 sm:mb-16 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="bg-darkwall flex flex-col h-full p-6 sm:p-10 rounded-lg">
          <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold text-center md:text-left">
            {t('services.procurement.title')}
          </h3>
          <p className="text-lg sm:text-lg md:text-xl text-justify mb-6">
            {t('services.procurement.description')}
          </p>
          <div className="w-full mt-auto aspect-video mb-4">
            <Image 
              src={Proman}
              alt={t('services.procurement.title')}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="bg-darkwall p-6 sm:p-10 rounded-lg">
          <h3 className="text-2xl sm:text-3xl mb-4 sm:mb-6 font-bold text-center md:text-left">
            {t('services.logistics.title')}
          </h3>
          <p className="text-lg sm:text-lg md:text-xl text-justify mb-6">
            {t('services.logistics.description')}
          </p>
          <div className="w-full aspect-video mb-4">
            <Image 
              src={Trucks}
              alt={t('services.logistics.title')}
              className="rounded-lg mt-auto w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
      
      <Divider />

      <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8 sm:mb-10 text-center">
        {t('ceoVisit.title')}
      </h2>

      <div className="grid grid-cols-1 bg-darkwall rounded-lg gap-6 sm:gap-8 md:grid-cols-2 mb-12">
        <div className="p-6 sm:p-10">
          <p className="text-lg sm:text-lg md:text-xl text-justify mb-6">
            {t('ceoVisit.paragraph1')}
          </p>

          <div className="grid mr-auto h-full grid-cols-2 gap-4">
            <div className="w-full aspect-square">
              <Image 
                src={Ceo1}
                alt={t('ceoVisit.images.ceo1')}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square">
              <Image 
                src={Ceo2}
                alt={t('ceoVisit.images.ceo2')}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
        <div className="p-6 sm:p-10">
          <p className="text-lg sm:text-lg md:text-xl text-justify mb-6">
            {t('ceoVisit.paragraph2')}
          </p>
          <div className="grid grid-cols-2 h-full mt-auto gap-4">
            <div className="w-full aspect-square">
              <Image 
                src={Ceo3}
                alt={t('ceoVisit.images.ceo3')}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="w-full aspect-square">
              <Image 
                src={Ceo4}
                alt={t('ceoVisit.images.ceo4')}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplyChainServices;