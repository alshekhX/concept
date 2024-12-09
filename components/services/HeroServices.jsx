import React from 'react'
import { AnimateH1 } from '../animation/H1Animate'
import { AnimateH2 } from '../animation/H2Animate'

const HeroServices = () => {


  return (
    <div> <div className="grid text-wall  grid-cols-1 relative">
    <div className=" absolute inset-0 z-20 container mx-auto ">
  <div className=' mx-auto flex flex-col h-full  justify-center  px-4 py-10 '>
   <AnimateH1 initial={{ opacity: 0, y: 10 }}
  whileInView={{ opacity: 1, y: 0 }}   transition={{ delay: 0,duration:.3}}  className="  z-10 md:text-6xl xl:text-8xl text-7xl mb-4 font-bold text-white">Services</AnimateH1>
  <AnimateH2  initial={{ opacity: 0, y: -20 }}
  whileInView={{ opacity: 1, y: 0 }}   transition={{ delay: .3,duration:.3}}  className="  md:w-2/5 w-4/5 z-10 xl:text-3xl md:text-2xl text-2xl  text-white">We're your one-stop solution for all your MEP construction and supply chain requirements</AnimateH2>
</div>
  </div>
<div className='relative'>
<div className=" absolute inset-0 z-10  bg-darkBlue opacity-95   "></div>
<img className=' hero-container   w-full' src='https://www.letsbuild.com/wp-content/uploads/2023/07/resource-bim-the-importance-of-bim-in-the-lighting-industry.jpg' ></img> </div>
 </div>
  </div>
  )
}


export default HeroServices