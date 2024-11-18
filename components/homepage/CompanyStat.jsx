'use client';

import React, { useState, useEffect } from 'react';
import { DivAnimate } from '../animation/DivAnimate';

const MovingCompanyState = ({ state,icon,  companyCount }) => {


  return (
    <DivAnimate initial={{ opacity: 0, y: -10 }}
    viewport={{amount:"all"}}  whileInView={{ opacity: 1, y: 0 }}   transition={{ delay: .5,duration:.3}} className=" flex flex-col   pb-12" style={{color:'#EAE3D5'}}>
    <div className="text-4xl lg:text-5xl  text-center">{`${companyCount} +`}</div>
    <div className="text-2xl lg:text-3xl text-center">{state}</div>
  </DivAnimate>
  );
};

export default MovingCompanyState;