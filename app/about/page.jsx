import React from 'react'
import AboutHero from '@/components/about/AboutHero'
import AboutVision from '@/components/about/AboutVision'
import AboutValues from '@/components/about/AboutValues'
import AboutGoals from '@/components/about/AboutGoals'
import Divider from '@/components/Divider'


const AboutPage = () => {
  return (
    <div>

<AboutHero/>

<AboutVision/>
<Divider style=''/>
<AboutValues/>
<Divider style=''/>

<AboutGoals/>
    </div>
  )
}

export default AboutPage