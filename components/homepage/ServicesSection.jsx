import React from 'react'

 
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
 


const ServicesSection = () => {
    return (
        <div className="  bg-zainb py-36 ">

            <div className='container px-4 mx-auto flex flex-col'>

            <div className='mb-8 text-xl text-black font-semibold '>Our Services</div>
        <div className='mb-16 text-6xl '>We offer Quality craftsmanship, reliable solutions, and exceptional service.</div>
        <Carousel className="  w-full  ">
          <CarouselContent className="-ml-1">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-1 md:basis-1/4 lg:basis-1/5">
                <div className="p-1">
                  <Card>
                    <CardContent className="flex aspect-square items-center justify-center p-6">
                      <span className="text-2xl font-semibold">{index + 1}</span>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        </div>
        </div>
      )
}

export default ServicesSection