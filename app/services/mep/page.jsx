import Divider from '@/components/Divider'
import CMShero from '@/components/services/construction/CMShero'
import MEPServices from '@/components/services/MEP/MEPServices'
import React from 'react'



const page = () => {
  return (
    <div>
        
        <CMShero title='MEP' subtitle="We provide top-tier MEP engineering solutions (HVAC, refrigeration, electrical, plumbing, firefighting) to government and private clients, prioritizing quality, innovation, and customer satisfaction. Our work meets the highest international and Saudi standards.">
        Your Vision, <br/> Our Expertise
            </CMShero>
            <Divider/>
<MEPServices/>

    </div>
  )
}

export default page