"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const LogoSlider = ({ logos }) => {
  return (
    <div className="container pt-11 ">
      
      <div className="slider flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10   before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10  after:to-transparent after:content-['']">
        <motion.div
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
          }}
          initial={{ translateX: 0 }}
          animate={{ translateX: "-50%" }}
          className="flex flex-none sm:gap-20 gap-16 md:gap-24 pr-16"
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {logos.map(({ src, alt }, i) => (
                <img
                  key={i}
                  src={src}
                  fill={true}
                  alt={alt}
                  className=" md:w-25 sm:w-20 w-16 flex-none"
                />
              ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default LogoSlider;
