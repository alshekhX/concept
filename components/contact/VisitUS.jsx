import React from 'react';
import Divider from '../Divider';

const VisitUS = () => {
  return (
    <div className="container mx-auto px-4">
      <Divider style='' />
      <div className=' py-32'>
      <h2           className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-8 sm:mb-12 text-gray-800">You Can Visit Us</h2>
      <div className="max-w-4xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.2745136426247!2d46.66991189999999!3d24.8544722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2ee5006c46d3e9%3A0x7b2adcfd4786e69b!2z2YjYp9it2Kkg2KfZhNij2LnZhdin2YQgItmF2LPYp9it2Kkg2LnZhdmEIg!5e0!3m2!1sen!2sae!4v1733835781986!5m2!1sen!2sae"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg  shadow-lg"
        ></iframe>
        <p className="text-center mt-4 text-lg">
         Uthman Ibn Affan Road, An Narjis Neighborhood, Riyadh, 
Saudi Arabia        </p>
      </div>
      </div>
    </div>
  );
};

export default VisitUS;