import React from 'react'
import { AnimateH1 } from '../animation/H1Animate'
import { AnimateH2 } from '../animation/H2Animate'
import BackImage from "@/assets/images/backcontact.jpg";
import Image from 'next/image';




const ContactHero = () => {
    return (
        <div> <div className="grid text-wall  grid-cols-1 relative">
        <div className=" absolute inset-0 z-20 container mx-auto ">
      <div className=' mx-auto flex flex-col h-full  justify-center  px-4 py-10 '>
       <AnimateH1 initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}   transition={{ delay: 0,duration:.3}}  className="   z-10 md:text-6xl xl:text-8xl text-6xl mb-4 font-bold text-white">Contact Us</AnimateH1>
      <AnimateH2  initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}   transition={{ delay: .3,duration:.3}}  className="  md:w-2/5 w-4/5 z-10 xl:text-3xl sm:text-2xl text-xl  text-white">Have a specific inquiry or need assistance? Our dedicated team is ready to provide expert guidance and support. Contact us today to discuss your requirements.</AnimateH2>
    </div>
    
    
      </div>
    
    
    <div className='relative'>
    <div className=" absolute inset-0 z-10  bg-darkBlue opacity-95   "></div>
    
    <Image className=' hero-container   w-full' src={BackImage} /> </div>
    </div></div>
      )
    }

export default ContactHero