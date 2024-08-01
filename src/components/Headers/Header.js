import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import profile from '../../assets/profile.jpg';

const Header = () => {
  const [text, setText] = useState('Web Developer');

  useEffect(() => {
    const timer = setTimeout(() => {
      setText('Developer');
    }, 3000); // Change text after 3 seconds

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  return (
    <motion.header
      className="flex flex-col md:flex-row items-center justify-between p-8 h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="mx-10 flex items-center justify-between space-x-32 w-full">
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            className="text-7xl font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            {text}
          </motion.h1>
          <motion.p
            className="mt-4 text-xl"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 50 }}
          >
            Hi, I'm Sifat from Bangladesh
          </motion.p>
        </div>
        <div className="w-full md:w-1/2">
          <motion.img
            src={profile}
            alt="profile"
            className="rounded-sm w-2/4 h-full mx-auto md:mx-0"
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              duration: 2,
            }}
          />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
