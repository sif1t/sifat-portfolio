// src/components/Services.js
import React from 'react';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.section
      id="services"
      className="p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2 className="text-4xl font-bold">Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-white dark:bg-gray-700 p-4 shadow-md">
          <h3 className="text-2xl">Web Design</h3>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 shadow-md">
          <h3 className="text-2xl">Web Development</h3>
        </div>
        <div className="bg-white dark:bg-gray-700 p-4 shadow-md">
          <h3 className="text-2xl">WordPress</h3>
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
