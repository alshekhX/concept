"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { ImageModal } from "@/components/ui/image-modal";
import ProjectCard from "./ProjectCard";
import Divider from "../Divider";
import Tubuk from "@/assets/images/projects/tubuk.jpg";

import Tubuk2 from "@/assets/images/projects/tubuk2.jpg";
import Tubuk3 from "@/assets/images/projects/tubuk3.jpg";
import Tubuk4 from "@/assets/images/projects/tubuk4.jpg";
import Tubuk5 from "@/assets/images/projects/tubuk5.jpg";
import Musta from "@/assets/images/projects/musta.jpg";
import Musta2 from "@/assets/images/projects/musta2.jpg";
import Madinak from "@/assets/images/projects/madinak.jpg";
import Madinak2 from "@/assets/images/projects/madinak2.jpg";






const ConstructionProjects = () => {
  const projects = [
    {
      title: "Tubuk Housing Projects",
      subtitle: "Concrete Works, Finishes, and HVAC Works",
      images: [
Tubuk.src,
Tubuk2.src,
Tubuk3.src,
Tubuk4.src,
Tubuk5.src

    
      ]
    },
    {
      title: "Establishing Barq Al Mustaqbal Headquarters",
      subtitle: "Concrete Construction and Full Foundation Setup, Including HVAC Installations, Wooden Doors, and Marble Supplies",
      images: [
       Musta.src,
       Musta2.src
      ]
    },
    {
      title: "Madina Housing (Ard Alnaql)",
      subtitle: "85 Buildings (1870 Units)",
      images: [
        Madinak.src,
        Madinak2.src
      ]
    }
  ];

  return (
    <div className=" min-h-screen">
      <div className="container mx-auto px-4 py-32">
        <motion.h1 
          className="text-5xl mb-16 md:text-6xl font-bold text-center  text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Construction Projects
        </motion.h1>

        {projects.map((project, index) => (
          <React.Fragment key={project.title}>
            <ProjectCard 
              title={project.title}
              subtitle={project.subtitle}
              images={project.images}
            />
  {index < projects.length-1?      <Divider/>
 : <></>}            {index < projects.length - 1 && (
              <div className=" my-12"></div>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};


export default ConstructionProjects;