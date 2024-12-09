import React from 'react'
import { FaEye} from 'react-icons/fa'


const AboutVision = () => {
  return (
    <div className=" mb-12 py-16 container mx-auto">
    <div className="mb-10 text-4xl flex md:text-5xl lg:text-6xl font-bold ">
      
    Vision
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-4 bg-darkwall rounded-lg">
        <p className="text-xl"> At Concept General Contracting Company, our vision is to be the leading partner in the
 fields of construction and finishing contracting, MEP, and general supplies in our beloved
 Kingdom of Saudi Arabia</p>
      </div>
      <div className="p-4 bg-darkwall rounded-lg">
        <p className="text-xl"> We strive to achieve a prominent position as the top choice for our clients by providing
 exceptional products and services that exceed their expectations. In this context, we aim
 to build long-term relationships with our clients by offering innovative solutions and
 outstanding value</p>
      </div>
    </div>
  </div>
  )
}

export default AboutVision