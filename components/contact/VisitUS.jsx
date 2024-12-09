import React from 'react';
import Divider from '../Divider';

const VisitUS = () => {
  return (
    <div className="container mx-auto">
      <Divider style='' />
      <div className=' py-32'>
      <h2           className="text-5xl  font-bold text-center mb-12 text-gray-900">You Can Visit Us</h2>
      <div className="max-w-4xl mx-auto">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.982399448866!2d-73.98823292395986!3d40.74844197138593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1701734567890!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="rounded-lg shadow-lg"
        ></iframe>
        <p className="text-center mt-4 text-lg">
          Empire State Building, 350 5th Ave, New York, NY 10118
        </p>
      </div>
      </div>
    </div>
  );
};

export default VisitUS;