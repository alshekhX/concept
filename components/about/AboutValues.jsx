import React from 'react'

const AboutValues = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 container max-w-screen-xl mx-auto">
      <div className="mb-6 sm:mb-8 md:mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Values
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        <div className="p-4 sm:p-6 bg-darkwall rounded-lg shadow-md">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Concept General Contracting Company is distinguished by its values of excellence and quality. We are committed to providing high-quality services in the fields of construction and finishing contracting, MEP, and general supplies, aiming to achieve customer satisfaction and excellence in the Saudi Arabian market.
          </p>
        </div>
        <div className="p-4 sm:p-6 bg-darkwall rounded-lg shadow-md">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            We strive to build lasting relationships with our clients by offering innovative solutions and unique experiences, with a constant focus on quality and innovation.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutValues