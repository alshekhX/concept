"use client"
 
import React from "react"
import { motion } from "framer-motion"
 
 
const DivAnimate = React.forwardRef(
  function DivAnimate({ children, ...props }, ref) {
    return (
      <motion.div ref={ref} {...props}>
        {children}
      </motion.div>
    )
  }
)
 
export { DivAnimate }