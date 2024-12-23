"use client";
import React from "react";
import { motion } from "framer-motion";

const CMShero = ({ title, subtitle, children }) => {
  return (
    <div className="">
      <div className="mx-auto container px-4 py-16 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-800 tracking-wide uppercase"
          >
            {title}
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-4xl  md:text-6xl font-bold text-gray-900 leading-tight"
          >
            {children}{" "}
          </motion.h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className=""
        >
          <p className="  border-l-4 pl-4 border-darkBlue font-semibold md:text-2xl text-gray-800 italic leading-relaxed text-justify">
            {subtitle}
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CMShero;
