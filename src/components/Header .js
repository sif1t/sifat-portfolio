// src/components/Header.js
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      className="flex flex-col md:flex-row items-center justify-between p-8 h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-5xl font-bold">Web Developer</h1>
        <p className="mt-4 text-xl">Hi, I'm Sifat from Bangladesh</p>
      </div>
      <div className="w-full md:w-1/2">
        <img src="path/to/image.jpg" alt="Sifat" className="w-full h-auto mt-8 md:mt-0"/>
      </div>
    </motion.header>
  );
};

export default Header;
