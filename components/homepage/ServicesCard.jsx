import React from 'react';
import { AirVent} from 'lucide-react' 
function ServicesCard({ imageSrc, title, description, children }) {
  return (
    <div className="card cursor-pointer xl:mb-0 sm:mr-8 mb-10 w-80">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
       <div className=' flex '> {children}<h2 className="card-title">{title}</h2></div>
        <p className="card-description">{description}</p>   

      </div>
    </div>
  );
}

export default ServicesCard;