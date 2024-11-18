import React from 'react'
import { AnimateH1 } from '../animation/H1Animate'
import { DivAnimate } from '../animation/DivAnimate'
const DividerTitle = ({title,textColor,dividerColor,dividerWidth}) => {
  return (
    <div>  <AnimateH1  viewport={{amount:"all"}} initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}   transition={{ delay: .4,duration:.1}}
    className={`mb-1 text-xl ${textColor}  font-semibold `}>
       {title}</AnimateH1>
        <DivAnimate viewport={{amount:'all'}} initial={{width:0}} transition={{ delay: 0,duration:.5}} whileInView={{width:dividerWidth}} className={` ${dividerColor} line mb-8`}></DivAnimate></div>
  )
}

export default DividerTitle