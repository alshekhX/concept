"use client"
 
import React from "react"
import { motion } from "framer-motion"
 
 
const AnimateH1 = React.forwardRef(
  function AnimateH1({ children, ...props }, ref) {
    return (
      <motion.h1 ref={ref} {...props}>
        {children}
      </motion.h1>
    )
  }
)
 
export { AnimateH1 }