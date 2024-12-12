import React from 'react'
import HeroImage from "@/assets/images/hero.jpg"
import HeroImage2 from "@/assets/images/hero2.jpg"
import HeroImage3 from "@/assets/images/hero3.jpg"
import HeroImage4 from "@/assets/images/hero4.jpg"


import HeroSlide from './HeroSlide'
import Image from 'next/image'
import { AnimateH1 } from '../animation/H1Animate'
import { AnimateH2 } from '../animation/H2Animate'


const HomeHero = () => {

const imagesList=[
  HeroImage.src,
  HeroImage2.src,
  HeroImage3.src,
  HeroImage4.src



  


]



  return (
    <div className="grid text-wall md:grid-cols-2 grid-cols-1 relative">
        <div className=" absolute inset-0 z-20 container mx-auto ">
      <div className=' mx-auto flex flex-col h-full  justify-center  px-4 py-10 '>
       <AnimateH1 initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}   transition={{ delay: 0,duration:.3}}  className="  z-10 md:text-6xl xl:text-8xl text-6xl mb-4 font-bold text-white">Concept</AnimateH1>
      <AnimateH2  initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}   transition={{ delay: .3,duration:.3}}  className="  md:w-2/5 w-5/6 z-10 xl:text-3xl sm:text-2xl text-xl  text-white">Building the Future, One Project at a Time.
        Emphasizing Commitment to Saudi Arabia's Vision</AnimateH2>
    </div>


      </div>


    <div className="relative md:flex hidden  " style={{ backgroundImage: `url(${HeroImage.src})`, backgroundPosition: 'bottom' }}>
      <div className=" absolute inset-0 z-0 bg-darkBlue opacity-90 "></div>
    

      <div className=' mx-auto flex flex-col justify-center  items-center px-10 py-10 '>
      
    </div></div>
    <div className='relative'>
    <div className=" absolute inset-0 z-10  bg-darkBlue opacity-85 md:opacity-0 md:z-0 "></div>

<HeroSlide slides={imagesList}/>    </div>
  </div>
  )
}

export default HomeHero