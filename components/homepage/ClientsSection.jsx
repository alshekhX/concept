import React from 'react'
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
 const logos=[

    {
        src:comp1.src,
        alt:""
    }, {
        src:comp2.src,
        alt:""
    }, 
    {
        src:comp3.src,
        alt:""
    },  {
        src:comp4.src,
        alt:""
    }, {
        src:comp5.src,
        alt:""
    }, 
    {
        src:comp6.src,
        alt:""
    }, 
    {
        src:comp7.src,
        alt:""
    }, 
    {
        src:comp8.src,
        alt:""
    }, 
    
 ]


  return (
    
        <div className=' container mx-auto px-4 py-20 md:py-32 flex flex-col'>
        <DividerTitle title='Our Clients'  dividerWidth={'120px'} textColor='text-black' dividerColor='bg-black opacity-85'/>
        <HomeSubtitle title='Dedicated to exceeding expectations.' style=''/>

            <div className='container mx-auto'>
    
    <LogoSlider  logos={logos}/>
    </div>
    
        </div>
       )
}

export default ClientsSection