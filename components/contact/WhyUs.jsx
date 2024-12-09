"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Lightbulb, Shield, Clock } from 'lucide-react';

const WhyUs = () => {
  const features = [
    {
      icon: <Building2 className="w-12 h-12 text-black" />,
      title: 'Expertise',
      description: 'Decades of experience in handling complex construction and MEP projects.',
    },
    {
      icon: <Lightbulb className="w-12 h-12 text-black" />,
      title: 'Innovation',
      description: 'Embracing advanced technologies and sustainable practices.',
    },
    {
      icon: <Clock className="w-12 h-12 text-black" />,
      title: 'Reliability',
      description: 'A proven track record of delivering projects on time and within budget.',
    },
    {
      icon: <Shield className="w-12 h-12 text-black" />,
      title: 'Safety First',
      description: 'Unwavering commitment to occupational health and safety standards.',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    },
    hover: {
      scale: 1.05,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.section 
      className="container mx-auto py-32"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="">
        <motion.h2 
          className="text-6xl  font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.title}
              className=" bg-darkwall p-6 rounded-lg   border-darkBlue border-opacity-10  text-center border  grid grid-rows-[auto_1fr_auto]"
              variants={itemVariants}
              whileHover="hover"
            >
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-900">
                  {feature.title}
                </h3>
                <p className="text-gray-700 text-xl">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhyUs;