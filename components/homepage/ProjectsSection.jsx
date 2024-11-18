import React from 'react'
import Image from 'next/image'
import DividerTitle from './DividerTitle'
import HomeSubtitle from './HomeSubtitle'
import Project from './Project'
import Tubuk from '@/assets/images/projects/tubuk.jpg'
import Madina from '@/assets/images/projects/madinak.jpg'
import Musta from '@/assets/images/projects/musta.jpg'



const ProjectSection = () => {
  return (
    <div className='text-black px-4 '>
    <div className='  container mx-auto   py-20 md:py-32 flex flex-col'>
   
    <DividerTitle title='Projects'  dividerWidth={'80px'} textColor='text-black' dividerColor='bg-black opacity-85'/>
    <HomeSubtitle title='Expert solutions for every project.' style=''/>
   
<Project title='Tubuk Housing Project'
imgSrc={Tubuk.src}
des='The Tabuk Valley project embodies the concepts of 
exemplary housing and modern living with global 
standards of luxury, designed to be model and 
sustainable. Located within the urban scope, Tabuk 
Valley stands out with its proximity to key city 
arteries'/>


    <div className="divider my-12 md:my-24"></div>


    <Project title='Madinag Housing (Ard Alnaql)'
imgSrc={Madina.src}
des='The Tabuk Valley project embodies the concepts of 
exemplary housing and modern living with global 
standards of luxury, designed to be model and 
sustainable. Located within the urban scope, Tabuk 
Valley stands out with its proximity to key city 
arteries'/>

<div className="divider my-24"></div>

<Project title='Establishing the Barq Al Mustaqbal
 Headquarters'
 imgSrc={Musta.src}
 des='The Tabuk Valley project embodies the concepts of 
exemplary housing and modern living with global 
standards of luxury, designed to be model and 
sustainable. Located within the urban scope, Tabuk 
Valley stands out with its proximity to key city 
arteries'/>



    








</div>
</div>
  )
}

export default ProjectSection