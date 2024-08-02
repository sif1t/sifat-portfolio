// src/components/Services.js
import React from 'react';
import { motion } from 'framer-motion';
import webDesignLogo from '../assets/web design.png';
import webDevelopmentLogo from '../assets/web development.png';
import wordpressLogo from '../assets/wordpress.png';

const Services = () => {
  return (
    <motion.section
      id="services"
      className="p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 min-h-screen flex flex-col justify-center"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2 className="text-4xl font-bold text-left">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <div className="bg-white dark:bg-gray-700 p-6 shadow-md rounded-lg flex flex-col items-center">
          <motion.img 
            src={webDesignLogo} 
            alt="Web Design Logo" 
            className="h-16 w-16 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
          <p>Creating visually appealing and user-friendly web designs that are tailored to meet your needs.</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 shadow-md rounded-lg flex flex-col items-center">
          <motion.img 
            src={webDevelopmentLogo} 
            alt="Web Development Logo" 
            className="h-16 w-16 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p>Developing robust and scalable web applications using the latest technologies.</p>
        </div>
        <div className="bg-white dark:bg-gray-700 p-6 shadow-md rounded-lg flex flex-col items-center">
          <motion.img 
            src={wordpressLogo}
            alt="WordPress Logo" 
            className="h-16 w-16 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <h3 className="text-2xl font-semibold mb-2">WordPress</h3>
          <p>Offering customized WordPress solutions for your website needs.</p>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
