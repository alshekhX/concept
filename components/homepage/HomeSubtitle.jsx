import React from 'react'
import { AnimateH2 } from '../animation/H2Animate'

const HomeSubtitle = ({title , style=''}) => {
  return (
    <div> <AnimateH2 initial={{ opacity: 0, y: -10 }}
    viewport={{amount:"all"}}  whileInView={{ opacity: 1, y: 0 }}   transition={{ delay: .5,duration:.3}} className={`${style} mb-10 sm:mb-12 text-4xl md:text-4xl lg:text-6xl` }>{title}</AnimateH2>
    </div>
  )
}

export default HomeSubtitle