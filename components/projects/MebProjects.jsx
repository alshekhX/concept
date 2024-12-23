"use client";
import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Divider from "../Divider";
import { useTranslations } from "next-intl";

import Najran from "@/assets/images/projects/najran.jpg";
import Najran2 from "@/assets/images/projects/najran2.jpg";
import Najran3 from "@/assets/images/projects/najran3.jpg";
import Najran4 from "@/assets/images/projects/najran4.jpg";
import Najran5 from "@/assets/images/projects/najran5.jpg";
import Canteen1 from "@/assets/images/projects/canteen1.jpg";
import Canteen2 from "@/assets/images/projects/canteen2.jpg";
import Canteen3 from "@/assets/images/projects/canteen3.jpg";
import Canteen4 from "@/assets/images/projects/canteen4.jpg";
import gasim1 from "@/assets/images/projects/gasim1.jpg";
import gasim2 from "@/assets/images/projects/gasim2.jpg";
import gasim3 from "@/assets/images/projects/gasim3.jpg";
import gasim4 from "@/assets/images/projects/gasim4.jpg";

const MebProjects = () => {
  const t = useTranslations('ProjectsPage.MepProjects');

  const projects = [
    {
      title: t('projects.0.title'),
      subtitle: t('projects.0.subtitle'),
      images: [Najran.src, Najran2.src, Najran3.src, Najran4.src, Najran5.src],
      video: null// Optional video URL
    },
    {
      title: t('projects.1.title'),
      subtitle: t('projects.1.subtitle'),
      images: [gasim1.src, gasim2.src, gasim3.src, gasim4.src],
      video: "https://vimeo.com/1041768004"
    },
    {
      title: t('projects.2.title'),
      subtitle: t('projects.2.subtitle'),
      images: [Canteen1.src, Canteen2.src, Canteen3.src, Canteen4.src],
      video: null
    }
  ];

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <motion.h1
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {t('title')}
        </motion.h1>

        {projects.map((project, index) => (
          <React.Fragment key={project.title}>
            <ProjectCard
              title={project.title}
              subtitle={project.subtitle}
              images={project.images}
              video={project.video}
            />
            {index < projects.length - 1 ? <Divider /> : <></>}
            {index < projects.length - 1 && <div className="my-12"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default MebProjects;