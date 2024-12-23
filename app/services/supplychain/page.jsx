import Divider from '@/components/Divider'
import CMShero from '@/components/services/construction/CMShero'
import SupplyChainBody from '@/components/services/supplyChain/SupplyBody'
import React from 'react'
import {useTranslations} from 'next-intl'

const SupplyChain = () => {
  const t = useTranslations('SupplyChainPage.Hero')
  return (
    <div>
<CMShero title={t('title')} subtitle={t('subtitle')}>
      {t('heading1')}<br/> {t('heading2')}
</CMShero>
<Divider/>

<div className=''>
<SupplyChainBody/>

</div>

    </div>
  )
}

export default SupplyChain