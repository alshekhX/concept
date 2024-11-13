'use client';

import React, { useState, useEffect } from 'react';

const MovingCompanyState = ({ state,icon,  companyCount }) => {


  return (
    <div className="text-wall  flex flex-col">
      <div className=" text-4xl lg:text-5xl font-bold">{`${companyCount} +`}</div>
      <div className="text-2xl lg:text-3xl ">{state}</div>
      
    </div>
  );
};

export default MovingCompanyState;