import React from 'react'
import AboutHero from '@/components/about/AboutHero'
import AboutVision from '@/components/about/AboutVision'
import AboutValues from '@/components/about/AboutValues'
import AboutGoals from '@/components/about/AboutGoals'


const AboutPage = () => {
  return (
    <div>

<AboutHero/>

<AboutVision/>
<div className="divider mx-auto container my-12 md:my-24"></div>

<AboutValues/>
<div className="divider mx-auto container my-12 md:my-24"></div>

<AboutGoals/>
    </div>
  )
}

export default AboutPage