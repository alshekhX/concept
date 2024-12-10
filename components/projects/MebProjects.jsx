"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Divider from "../Divider";

import Najran from "@/assets/images/projects/najran.jpg";
import Najran2  from "@/assets/images/projects/najran2.jpg";
import Najran3 from "@/assets/images/projects/najran3.jpg";
import Najran4 from "@/assets/images/projects/najran4.jpg";
import Najran5 from "@/assets/images/projects/najran5.jpg";


const MebProjects = () => {
  const projects = [
    {
      title: "Najran Housing Projects",
      subtitle: "Concrete Works, Finishes, and HVAC Works",
      images: [
        Najran.src,
        Najran2.src,
        Najran3.src,
        Najran4.src,
        Najran5.src,

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