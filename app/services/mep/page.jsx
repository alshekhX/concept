import Divider from '@/components/Divider'
import CMShero from '@/components/services/construction/CMShero'
import MEPServices from '@/components/services/MEP/MEPServices'
import React from 'react'
import { useTranslations } from 'next-intl'


const page = () => {
  const t= useTranslations('MepPage.Hero')
  return (
    <div>
        
        
<CMShero title={t('title')} subtitle={t('subtitle')}>
{t('heading1')} <br/> {t('heading2')}
    </CMShero>
    <Divider/>
<MEPServices/>

    </div>
  )
}

export default page
