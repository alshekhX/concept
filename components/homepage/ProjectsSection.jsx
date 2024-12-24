import React from "react";
import Image from "next/image";
import DividerTitle from "./DividerTitle";
import HomeSubtitle from "./HomeSubtitle";
import Project from "./Project";
import Tubuk from "@/assets/images/projects/tubuk.jpg";
import Madina from "@/assets/images/projects/madinak.jpg";
import Musta from "@/assets/images/projects/musta.jpg";
import {useTranslations} from 'next-intl'


const ProjectSection = () => {

  const t = useTranslations('HomePage.ProjectSection')
  return (
    <div className="text-black px-4 ">
      <div className="  container mx-auto   py-20 md:py-32 flex flex-col">
        <DividerTitle
          title={t('sectionTitle')}
          dividerWidth={"80px"}
          textColor="text-black"
          dividerColor="bg-black opacity-85"
        />
        <HomeSubtitle title={t('sectionSubtitle')} style="" />

        <Project
          title={t('projects.0.title')}
          imgSrc={Tubuk.src}
          des={t('projects.0.description')}
        >
          <h3 className=" text-lg md:text-xl text-gray-600 font-normal w-4/5 md:w-full">
            {" "}
            {t('projects.0.details')}          </h3>
        </Project>

        <div className="divider my-12 md:my-24"></div>

        <Project
          title={t('projects.1.title')}
          imgSrc={Madina.src}
          des={t('projects.1.description')}

        >
             <h3 className="text-lg md:text-xl mb-1 font-normal text-gray-700 w-5/6 md:w-full">
        {t('projects.1.details.0.category')}
          </h3>
          <p className="text-md text-gray-600 md:text-lg mb-3">         {t('projects.1.details.0.description')}
</p>
          <h3 className="text-lg md:text-xl mb-1 font-normal text-gray-700 w-5/6 md:w-full">
            {" "}
            {t('projects.1.details.1.category')}
          </h3>
          <p className="text-md text-gray-600 md:text-lg">         {t('projects.1.details.1.description')}
</p>
        </Project>

        <div className="divider my-24"></div>

        <Project
                   title={t('projects.2.title')}

          imgSrc={Musta.src}
          des={t('projects.2.description')}
        >

<h3 className=" text-lg md:text-xl text-gray-600 font-normal w-4/5 md:w-full">
{t('projects.2.details')}
          </h3>
      
        </Project>
      </div>
    </div>
  );
};

export default ProjectSection;
