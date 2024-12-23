import React from 'react'
import { FaEye } from 'react-icons/fa'
import { useTranslations,useLocale } from "next-intl";


const AboutVision = () => {
  const locale = useLocale()

  const t = useTranslations("AboutPage.AboutVisions");

  return (
    <div dir={locale=='ar'?'rtl':"lte"} className="py-8 sm:py-12 md:py-32 px-4 sm:px-6 md:px-8 container max-w-screen-xl mx-auto">
      <div className="mb-6 sm:mb-8 text-gray-800 md:mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center flex items-center justify-center">
        {t('vision')}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-4 sm:p-6 bg-darkwall rounded-lg shadow-md">
          <p className={` text-base text-gray-800 sm:text-lg md:text-xl leading-relaxed`}>
          {t('paragraph1')}
          </p>
        </div>
        <div className="p-4 sm:p-6 bg-darkwall rounded-lg shadow-md">
          <p className="text-base text-gray-800 sm:text-lg md:text-xl leading-relaxed">
          {t('paragraph2')}
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutVision