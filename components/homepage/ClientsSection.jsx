import React from 'react'
import { useTranslations, useLocale } from 'next-intl'
import LogoSlider from './LogoSlider'
import DividerTitle from './DividerTitle'
import HomeSubtitle from './HomeSubtitle'
import comp1 from '@/assets/images/logo/42.png'
import comp2 from '@/assets/images/logo/43.png'
import comp3 from '@/assets/images/logo/44.png'
import comp4 from '@/assets/images/logo/45.png'
import comp5 from '@/assets/images/logo/46.png'
import comp6 from '@/assets/images/logo/47.png'
import comp7 from '@/assets/images/logo/48.png'
import comp8 from '@/assets/images/logo/49.png'

const ClientsSection = () => {
  const t = useTranslations('HomePage.ClientsSection')
  const locale = useLocale()

  const logos = [
    {
      src: comp1.src,
      alt: t('logoAltTexts.0')
    }, 
    {
      src: comp2.src,
      alt: t('logoAltTexts.1')
    }, 
    {
      src: comp3.src,
      alt: t('logoAltTexts.2')
    },  
    {
      src: comp4.src,
      alt: t('logoAltTexts.3')
    }, 
    {
      src: comp5.src,
      alt: t('logoAltTexts.4')
    }, 
    {
      src: comp6.src,
      alt: t('logoAltTexts.5')
    }, 
    {
      src: comp7.src,
      alt: t('logoAltTexts.6')
    }, 
    {
      src: comp8.src,
      alt: t('logoAltTexts.7')
    }
  ]

  return (
    <div 
      className={`container mx-auto px-4 py-20 md:py-32 flex flex-col ${locale === 'ar' ? 'rtl' : 'ltr'}`}
     
    >
      <DividerTitle 
        title={t('sectionTitle')} 
        dividerWidth={'120px'} 
        textColor='text-black' 
        dividerColor='bg-black opacity-85'
      />
      <HomeSubtitle 
        title={t('sectionSubtitle')} 
        style=''
      />

      <div className='container mx-auto'>
        <LogoSlider logos={logos} />
      </div>
    </div>
  )
}

export default ClientsSection