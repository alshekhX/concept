import React from 'react'

const AboutGoals = () => {
  return (
    <div className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 container max-w-screen-xl mx-auto">
      <div className="mb-6 sm:mb-8 md:mb-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center">
        Goals
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <div className="p-4 sm:p-6 bg-darkwall rounded-lg shadow-md">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            In Concept General Contracting Company in Saudi Arabia, we strive to achieve our goals by providing the best services and products in the fields of construction and finishing contracting, MEP, and general supplies in the evolving Saudi market. We are committed to delivering high-quality products that combine excellent performance with superior aesthetics, always focusing on achieving the perfect balance between quality and cost
          </p>
        </div>
        <div className="p-4 sm:p-6 bg-darkwall rounded-lg shadow-md">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            Our primary mission is to help our clients in Saudi Arabia achieve their goals and exceed their expectations by providing solutions tailored to their needs. We aim to accomplish this by offering exceptional services and innovative products that reflect our vision of sustainability and innovation in supply and installation.
          </p>
        </div>
        <div className="p-4 sm:p-6 bg-darkwall rounded-lg shadow-md">
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            We seek to manufacture our products within the Kingdom in collaboration with our Chinese and Egyptian partners, supporting the vision of the Crown Prince and the Custodian of the Two Holy Mosques to enhance local industry and achieve sustainable development. This step stems from our commitment to supporting the national economy without compromising the renowned quality and efficiency of our products.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutGoals