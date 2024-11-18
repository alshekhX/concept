"use client"
 
import React from "react"
import { motion } from "framer-motion"
 
 
const AnimateH2 = React.forwardRef(
  function AnimateH1({ children, ...props }, ref) {
    return (
      <motion.h2 ref={ref} {...props}>
        {children}
      </motion.h2>
    )
  }
)
 
export { AnimateH2 }