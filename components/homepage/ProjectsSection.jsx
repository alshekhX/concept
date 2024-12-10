import React from "react";
import Image from "next/image";
import DividerTitle from "./DividerTitle";
import HomeSubtitle from "./HomeSubtitle";
import Project from "./Project";
import Tubuk from "@/assets/images/projects/tubuk.jpg";
import Madina from "@/assets/images/projects/madinak.jpg";
import Musta from "@/assets/images/projects/musta.jpg";

const ProjectSection = () => {
  return (
    <div className="text-black px-4 ">
      <div className="  container mx-auto   py-20 md:py-32 flex flex-col">
        <DividerTitle
          title="Projects"
          dividerWidth={"80px"}
          textColor="text-black"
          dividerColor="bg-black opacity-85"
        />
        <HomeSubtitle title="Expert solutions for every project." style="" />

        <Project
          title="Tubuk Housing Project"
          imgSrc={Tubuk.src}
          des="The Tabuk Valley project embodies the concepts of 
exemplary housing and modern living with global 
standards of luxury, designed to be model and 
sustainable. Located within the urban scope, Tabuk 
Valley stands out with its proximity to key city 
arteries."
        >
          <h3 className=" text-xl font-normal opacity-80 w-4/5 md:w-full">
            {" "}
            Concrete Works, Finishes, and HVAC Works.
          </h3>
        </Project>

        <div className="divider my-12 md:my-24"></div>

        <Project
          title="Madinag Housing (Ard Alnaql)"
          imgSrc={Madina.src}
          des=" We are a limited liability company based in Tabuk, 
Saudi Arabia. Founded on over 20 years of 
cumulative experience through our institutions, we 
specialize in government projects and have gained 
extensive expertise in the Saudi market."
        >
             <h3 className="text-xl mb-1 font-normal opacity-75 w-5/6 md:w-full">
            Concrete and Construction:
          </h3>
          <p className="opacity-85 mb-3"> 10 buildings, each with 5 floors</p>
          <h3 className="text-xl  mb-1 font-normal opacity-75 w-5/6 md:w-full">
            {" "}
            HVAC Works:
          </h3>
          <p className="opacity-85"> Installation of 8,800 units</p>
          <p className="opacity-85"> Installation of 8,800 units</p>
        </Project>

        <div className="divider my-24"></div>

        <Project
          title="Establishing the Barq Al Mustaqbal
 Headquarters"
          imgSrc={Musta.src}
          des=" We are a limited liability company based in Tabuk, 
 Saudi Arabia. Founded on over 20 years of 
 cumulative experience through our institutions, we 
 specialize in government projects and have gained 
 extensive expertise in the Saudi market"
        >

<h3 className="text-xl font-normal opacity-80 w-5/6 ">
            Concrete construction and full foundation setup, including HVAC
            installations, wooden doors, and marble supplies.
          </h3>
      
        </Project>
      </div>
    </div>
  );
};

export default ProjectSection;
