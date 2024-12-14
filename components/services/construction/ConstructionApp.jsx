"use client";
import React from "react";
import { motion } from "framer-motion";
import Divider from "@/components/Divider";

const ConstructionApp = () => {
  return (
    <div className="py-32 px-4 container mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 border-b-4 border-black pb-3 tracking-wide">
          Applications
        </h1>
      </motion.div>

      <div className=" my-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-semibold text-gray-900 mb-6  md:mb-12">
            ALUMINUM FORMWORK SYSTEM
          </h2>

          <p className="text-gray-700 md:text-2xl text-xl lg:w-4/5 text-justify md:leading-relaxed leading-normal">
            Aluminum formwork systems represent a revolutionary approach to
            concrete construction, ensuring high efficiency, precision, and
            reduced construction timelines. This method employs durable and
            lightweight aluminum molds that are reusable and highly adaptable to
            complex architectural designs.
          </p>

          <p className="text-gray-800 md:text-xl text-lg  font-semibold lg:w-4/5 italic border-l-4 border-darkBlue pl-4">
            Our company specializes in deploying this advanced technology for
            projects ranging from high-rise buildings to residential complexes,
            ensuring efficiency without compromising quality.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src="https://constrofacilitator.com/wp-content/uploads/2024/04/aluminium-formwork-scaled.webp"
            alt="Aluminum Formwork System"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>

      <Divider />
      <div className=" my-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-semibold text-gray-900 mb-6  md:mb-12 ">
            PRECAST CONCRETE WORKS{" "}
          </h2>

          <p className="text-gray-700 md:text-2xl text-xl lg:w-4/5 text-justify md:leading-relaxed leading-normal">
            Precast concrete is a modern construction technique involving the
            off-site casting, transportation, and assembly of concrete elements,
            providing high-quality, uniform, and efficient solutions for various
            applications including structural components (beams, columns,
            slabs), precast walls for buildings, and modular infrastructure
            projects.
          </p>

          <p className="text-gray-800  md:text-xl text-lg  font-semibold lg:w-4/5 italic border-l-4 border-darkBlue pl-4">
            We integrate precast solutions into projects to optimize efficiency
            and minimize on-site disruption.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src="https://constrofacilitator.com/wp-content/uploads/2020/08/precast-concrete-products.jpg"
            alt="Aluminum Formwork System"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
      <Divider />
      <div className=" my-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-semibold text-gray-900 mb-6  md:mb-12 ">
            TRADITIONAL CONCRETE WORKS{" "}
          </h2>

          <p className="text-gray-700 md:text-2xl text-xl lg:w-4/5 text-justify md:leading-relaxed leading-normal">
            Traditional concrete work is a fundamental method in construction,
            blending manual skills with modern techniques to build strong and
            affordable structures. It's versatile and suitable for projects of
            all sizes, including residential and commercial buildings,
            foundations, industrial columns, and structural frameworks.
          </p>

          <p className="text-gray-800 md:text-xl text-lg  font-semibold lg:w-4/5 italic border-l-4 border-darkBlue pl-4">
            Our expertise in traditional concrete works guarantees high
            standards of safety and durability for all types of projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src="https://i.ytimg.com/vi/rr8GUqABgCU/maxresdefault.jpg"
            alt="Aluminum Formwork System"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
      <Divider />
      <div className=" my-20 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <h2 className="md:text-4xl sm:text-3xl text-2xl font-semibold text-gray-900 mb-6  md:mb-12">
            VINYL FLOORING WORKS
          </h2>

          <p className="text-gray-700 md:text-2xl text-xl lg:w-4/5 text-justify md:leading-relaxed leading-normal">
            Vinyl flooring is a versatile, durable, and affordable choice for
            residential, commercial, and industrial spaces. It's perfect for
            healthcare facilities, educational institutions, offices, retail
            spaces, and homes. Vinyl flooring comes in various designs,
            mimicking wood, stone, or tile finishes. It's highly resistant to
            moisture, stains, and scratches, and is easy to install and
            maintain.
          </p>

          <p className="text-gray-800 md:text-xl text-lg font-semibold lg:w-4/5 italic border-l-4 border-darkBlue pl-4">
            Our team ensures precise installation and premium quality materials
            for long lasting vinyl flooring solutions.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
        >
          <img
            src="https://dam.thdstatic.com/content/production/11bz3P0-EIr9XX5z7elsTA/JOcQViJiDXMu9jGNR3koqg/Original%20file/how-to-install-vinyl-plank-flooring-step-7.jpg"
            alt="Aluminum Formwork System"
            className="w-full h-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ConstructionApp;
