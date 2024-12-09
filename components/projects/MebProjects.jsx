"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Divider from "../Divider";

const MebProjects = () => {
  const projects = [
    {
      title: "Najran Housing Projects",
      subtitle: "Concrete Works, Finishes, and HVAC Works",
      images: [
        "https://content.jdmagicbox.com/comp/latur/h2/9999p2382.2382.201212162953.h6h2/catalogue/balaji-group-of-construction-latur-city-latur-civil-contractors-3622jhicc8.jpg",
        "https://content.jdmagicbox.com/comp/latur/h2/9999p2382.2382.201212162953.h6h2/catalogue/balaji-group-of-construction-latur-city-latur-civil-contractors-3622jhicc8.jpg",
        "https://content.jdmagicbox.com/comp/latur/h2/9999p2382.2382.201212162953.h6h2/catalogue/balaji-group-of-construction-latur-city-latur-civil-contractors-3622jhicc8.jpg",
        "https://content.jdmagicbox.com/comp/latur/h2/9999p2382.2382.201212162953.h6h2/catalogue/balaji-group-of-construction-latur-city-latur-civil-contractors-3622jhicc8.jpg",
        "https://airfixture.com/hubfs/pexels-pixabay-269077.jpg"
      ]
    },
   
  ];

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          MEP Projects
        </motion.h1>

        {projects.map((project, index) => (
          <React.Fragment key={project.title}>
            <ProjectCard 
              title={project.title}
              subtitle={project.subtitle}
              images={project.images}
            />
            {index < projects.length-1?            <Divider/>
 : <></>}
            {index < projects.length - 1 && (
              <div className=" my-12"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


export default MebProjects