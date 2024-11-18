import React from 'react'
import HomeSubtitle from './HomeSubtitle'
import DividerTitle from './DividerTitle'
const WhoUs = () => {
  return (
    <div className=' container mx-auto px-6 sm:px-4 py-20 md:py-32 flex flex-col'>
       <DividerTitle title='Who Are We' dividerWidth={'120px'} textColor='text-black' dividerColor='bg-black opacity-85'/>
<HomeSubtitle title='Your Local Partner, Global Standards'/>
<p className=' text-lg sm:text-xl text-justify md:text-2xl mb-6   text-black opacity-90 w-5/6 sm:w-3/4'> We specialize in construction and finishing contracting, 
road works, air conditioning (supply, implementation, 
maintenance), and general supplies. With extensive 
experience and a solid reputation, we are a trusted partner 
in delivering high-quality products and services</p>
<p className=' text-lg sm:text-xl text-justify md:text-2xl mb-4   text-black opacity-90 w-5/6 sm:w-3/4'> We strive to be our clients' top choice by consistently delivering exceptional products and services that exceed their expectations. We foster long-term relationships through innovative solutions and exceptional value.</p>




    </div>
  )
}

export default WhoUs