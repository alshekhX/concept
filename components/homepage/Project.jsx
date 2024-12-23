import React from 'react'
import { DivAnimate } from '../animation/DivAnimate'
import {useTranslations} from 'next-intl'


const Project = ({title, des, children, imgSrc}) => {
  const t = useTranslations('HomePage.ProjectSection')
  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 items-center'> 
        <div className='flex flex-col'>
          <h1 className='text-2xl sm:text-3xl mb-5 underline opacity-90'>{title}</h1>
          <h1 className='mb-10'>{children}</h1>
          <p className='md:text-xl text-lg text-justify md:mb-0 mb-5 w-5/6 opacity-85'>
            <span className='font-semibold'>{ `${t('aboutProject')}: `} </span> 
            {des}
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <DivAnimate 
            viewport={{amount:0.5}} 
            className="w-full max-w-[500px]"
            initial={{opacity:0, x:20}} 
            transition={{delay:0.4, duration: .6}} 
            whileInView={{opacity:1, x:0}}
          >
            <img 
              className='w-full h-auto object-cover rounded-lg shadow-md' 
              src={imgSrc} 
              alt={`${title} project`}
            />
          </DivAnimate>
        </div>
      </div>
    </div>
  )
}

export default Project