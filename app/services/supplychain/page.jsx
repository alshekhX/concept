import Divider from '@/components/Divider'
import CMShero from '@/components/services/construction/CMShero'
import SupplyChainBody from '@/components/services/supplyChain/SupplyBody'
import React from 'react'

const SupplyChain = () => {
  return (
    <div>
<CMShero title='supply chain' subtitle='At Concept, we are committed to providing world-class supply chain
 solutions, working with the largest and most reputable suppliers, both
 locally and globally.'>
Beyond Boundaries,<br/> Beyond Expectations    </CMShero>
<Divider/>

<div className=''>
<SupplyChainBody/>

</div>

    </div>
  )
}

export default SupplyChain