"use client";
import React from "react";
import { motion } from "framer-motion";
import Divider from "@/components/Divider";
import { useTranslations } from 'next-intl';

const ConstructionApp = () => {
  const t = useTranslations('ConstructionPage.Applications');

  const sections = [
    {
      id: "aluminumFormwork",
      image: "https://constrofacilitator.com/wp-content/uploads/2024/04/aluminium-formwork-scaled.webp"
    },
    {
      id: "precastConcrete",
      image: "https://constrofacilitator.com/wp-content/uploads/2020/08/precast-concrete-products.jpg"
    },
    {
      id: "traditionalConcrete",
      image: "https://i.ytimg.com/vi/rr8GUqABgCU/maxresdefault.jpg"
    },
    {
      id: "vinylFlooring",
      image: "https://dam.thdstatic.com/content/production/11bz3P0-EIr9XX5z7elsTA/JOcQViJiDXMu9jGNR3koqg/Original%20file/how-to-install-vinyl-plank-flooring-step-7.jpg"
    }
  ];

  return (
    <div className="py-32 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 border-b-4 border-black pb-3 tracking-wide">
          {t('title')}
        </h1>
      </motion.div>

      {sections.map((section, index) => (
        <React.Fragment key={section.id}>
          {index > 0 && <Divider />}
          <div className="my-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <h2 className="md:text-4xl sm:text-3xl text-2xl font-semibold text-gray-900 mb-6 md:mb-12">
                {t(`sections.${section.id}.title`)}
              </h2>

              <p className="text-gray-700 md:text-2xl text-xl lg:w-4/5 text-justify md:leading-relaxed leading-normal">
                {t(`sections.${section.id}.description`)}
              </p>

              <p className="text-gray-800 md:text-xl text-lg font-semibold lg:w-4/5 italic border-l-4 border-darkBlue pl-4">
                {t(`sections.${section.id}.highlight`)}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={section.image}
                alt={t(`sections.${section.id}.title`)}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default ConstructionApp;