// src/components/Portfolio.js
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.section
      id="portfolio"
      className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 h-screen"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2 className="text-4xl font-bold">My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
        <div className="bg-gray-200 dark:bg-gray-700 h-48">Project 1</div>
        <div className="bg-gray-200 dark:bg-gray-700 h-48">Project 2</div>
        <div className="bg-gray-200 dark:bg-gray-700 h-48">Project 3</div>
        <div className="bg-gray-200 dark:bg-gray-700 h-48">Project 4</div>
        <div className="bg-gray-200 dark:bg-gray-700 h-48">Project 5</div>
        <div className="bg-gray-200 dark:bg-gray-700 h-48">Project 6</div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
