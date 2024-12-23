import React from 'react';
import { AirVent} from 'lucide-react' 
function ServicesCard({ imageSrc, title, description, children }) {
  return (
    <div className="card xl:mb-0 justify-self-center  sm:mr-8 mb-10 w-80">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content h-80">
       <div className=' flex mb-2 '> {children}<h2 className="card-title">{title}</h2></div>
        <p className="card-description    mt-auto">{description}</p>   

      </div>
    </div>
  );
}

export default ServicesCard;