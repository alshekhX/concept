

"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Divider from '../Divider';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    comments: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log('Form submitted:', formData);
  };

  const inputVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: 'spring', 
        damping: 12, 
        stiffness: 100 
      }
    }
  };

  return (
    <motion.section 
      className=" mx-auto container"
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
    >
        <Divider style=''/>

      <div className="container py-32 mx-auto px-4 max-w-4xl">
        <motion.h2 
          className="text-5xl  font-bold text-center mb-12 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
Have Any Questions?        </motion.h2>
        <motion.form 
          onSubmit={handleSubmit}
          className=" shadow-sm border border-opacity-20 border-darkBlue rounded-lg p-8 space-y-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div variants={inputVariants}>
            <label htmlFor="fullName" className="block text-gray-700 mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border bg-wall border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </motion.div>

          <motion.div variants={inputVariants}>
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 bg-wall border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email address"
            />
          </motion.div>

          <motion.div variants={inputVariants}>
            <label htmlFor="comments" className="block text-gray-700 mb-2">
              Comments or Questions
            </label>
            <textarea
              id="comments"
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-3 py-2 bg-wall border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your comments or questions here"
            />
          </motion.div>

          <motion.button
            type="submit"
            className="w-full bg-darkBlue text-white py-3 rounded-md hover: transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </motion.section>
  );
};

export default ContactForm;