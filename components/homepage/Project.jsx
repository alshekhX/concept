import React from 'react'
import { DivAnimate } from '../animation/DivAnimate'

const Project = ({title,des, subtitle, imgSrc}) => {
  return (
    <div>
    <div className=' grid grid-cols-1 md:grid-cols-2 '> 
    <div className=' flex  flex-col '>
      <h1 className='text-3xl mb-5 '>  {title}</h1>
      <h1 className='text-xl mb-10  text-balance opacity-90'>  {subtitle} </h1>


      <p className='md:text-xl  text-lg text-justify md:mb-0 mb-5  w-5/6 opacity-85'>  {des}</p>



    </div>
    <div>
    <DivAnimate viewport={{amount:0.5}} className=" " initial={{opacity:0,  x:20}} transition={{delay:0.4, duration: .6}} whileInView={{opacity:1, x:0, }}>

      <img  className=' ' src={imgSrc}/>
    
    </DivAnimate>
    </div>
</div>
</div>
  )
}

export default Project