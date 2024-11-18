'use client'
import React from 'react'
import { useState , useEffect} from 'react';

const HeroSlide = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextSlide = () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        setCurrentIndex(nextIndex);
      };

      useEffect(() => {
        const timer = setInterval(() => {
          goToNextSlide();
        }, 3000); // Change slide every 3 seconds
    
        return () => clearInterval(timer);
      }, [currentIndex]);
    
      // ... rest of the component
    
    
      return (
        <div className="slideshow-container bg-black">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            >
              <img src={slide} className="h-full w-full" alt="" />
              </div>
          ))}
        </div>)
}

export default HeroSlide