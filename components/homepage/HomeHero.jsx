import React from 'react'
import HeroImage from "@/assets/images/hero.jpg"
import HeroImage2 from "@/assets/images/hero2.jpg"
import HeroImage3 from "@/assets/images/hero3.jpg"

import HeroSlide from './HeroSlide'
import Image from 'next/image'


const HomeHero = () => {

const imagesList=[
  HeroImage.src,
  HeroImage2.src,
  HeroImage3.src,



  


]

  return (
    <div className="grid text-wall md:grid-cols-2 grid-cols-1 relative">
        <div className=" absolute inset-0 z-20 container mx-auto ">
      <div className=' mx-auto flex flex-col h-full  justify-center  px-4 py-10 '>
       <h1  className="  z-10 text-6xl lg:text-8xl mb-4 font-bold text-white">Concept</h1>
      <div className="  w-2/5 z-10 lg:text-3xl text-xl  leading-6   text-white">Building the Future, One Project at a Time.
        Emphasizing Commitment to Saudi Arabia's Vision</div>
    </div>


      </div>


    <div className="relative  " style={{ backgroundImage: `url(${HeroImage.src})`, backgroundPosition: 'bottom' }}>
      <div className=" absolute inset-0 z-0 bg-darkBlue opacity-90 "></div>
    

      <div className=' mx-auto flex flex-col justify-center  items-center px-10 py-10 '>
      
    </div></div>
    <div>
<HeroSlide slides={imagesList}/>    </div>
  </div>
  )
}

export default HomeHero