import React from 'react'
import { FaEye } from 'react-icons/fa'

const AboutVision = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 container max-w-screen-xl mx-auto">
      <div className="mb-6 sm:mb-8 md:mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center flex items-center justify-center">
        Vision
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-4 sm:p-6 bg-darkwall rounded-lg shadow-md">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            At Concept General Contracting Company, our vision is to be the leading partner in the fields of construction and finishing contracting, MEP, and general supplies in our beloved Kingdom of Saudi Arabia
          </p>
        </div>
        <div className="p-4 sm:p-6 bg-darkwall rounded-lg shadow-md">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            We strive to achieve a prominent position as the top choice for our clients by providing exceptional products and services that exceed their expectations. In this context, we aim to build long-term relationships with our clients by offering innovative solutions and outstanding value
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutVision