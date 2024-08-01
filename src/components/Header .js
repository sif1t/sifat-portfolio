// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaCodepen, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import profile from '../assets/profile.jpg';

const createTextPieces = (text, pieceSize) => {
  const pieces = [];
  const chars = text.split('');
  const pieceStyle = {
    width: pieceSize,
    height: pieceSize,
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  };
  for (let i = 0; i < chars.length; i++) {
    pieces.push(
      <motion.div
        key={i}
        className="text-piece"
        style={{
          ...pieceStyle,
          left: `${(i % 10) * pieceSize}px`,
          top: `${Math.floor(i / 10) * pieceSize}px`,
          zIndex: chars.length - i,
          color: 'inherit',
          fontSize: 'inherit',
        }}
        variants={{
          initial: { opacity: 1, x: 0, y: 0 },
          hover: {
            opacity: 0,
            x: [Math.random() * 50, -Math.random() * 50],
            y: [Math.random() * 50, -Math.random() * 50],
            transition: { duration: 0.5, ease: 'easeInOut' },
          },
          animate: { opacity: 1, x: 0, y: 0 }
        }}
        initial="initial"
        whileHover="hover"
      >
        {chars[i]}
      </motion.div>
    );
  }
  return pieces;
};

const Header = () => {
  const texts = ['Web Developer', 'Frontend Developer'];
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowText(false);
      setTimeout(() => {
        setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        setShowText(true);
      }, 1000); // Delay for the new text to appear after 1 second
    }, 3000); // Change text every 3 seconds

    return () => clearInterval(timer); // Cleanup timer on unmount
  }, []);

  return (
    <motion.header
      className="relative flex flex-col md:flex-row items-center justify-between p-8 min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-between space-y-8 md:space-y-0 w-full md:flex-row mx-10">
        <div className="w-full md:w-1/2 text-center md:text-left relative">
          <AnimatePresence>
            {showText && (
              <motion.h1
                key={index}
                className="relative inline-block text-4xl md:text-7xl font-bold"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
              >
                <div className="relative inline-block">
                  {createTextPieces(texts[index], 60)}
                </div>
              </motion.h1>
            )}
          </AnimatePresence>
          <motion.p
            className="mb-14 text-lg md:text-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7, type: 'spring', stiffness: 50 }}
          >
            Hi, I'm Sifat from Bangladesh
          </motion.p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <motion.img
            src={profile}
            alt="profile"
            className="rounded-sm w-3/4 md:w-2/4 h-auto"
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              damping: 20,
              duration: 2,
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, 10, -10, 0],
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
          />
        </div>
      </div>

      {/* Vertical Icons Left */}
      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 p-2">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
          <motion.div
            className="text-3xl md:text-4xl text-gray-900 dark:text-gray-200 group-hover:text-blue-500 transition duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2 }}
          >
            <FaGithub />
          </motion.div>
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
          <motion.div
            className="text-3xl md:text-4xl text-gray-900 dark:text-gray-200 group-hover:text-blue-500 transition duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2 }}
          >
            <FaLinkedin />
          </motion.div>
        </a>
        <a href="https://codepen.io" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
          <motion.div
            className="text-3xl md:text-4xl text-gray-900 dark:text-gray-200 group-hover:text-blue-500 transition duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2 }}
          >
            <FaCodepen />
          </motion.div>
        </a>
      </div>

      {/* Vertical Icons Right */}
      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6 p-2">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
          <motion.div
            className="text-3xl md:text-4xl text-gray-900 dark:text-gray-200 group-hover:text-blue-500 transition duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2 }}
          >
            <FaFacebook />
          </motion.div>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
          <motion.div
            className="text-3xl md:text-4xl text-gray-900 dark:text-gray-200 group-hover:text-blue-500 transition duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2 }}
          >
            <FaInstagram />
          </motion.div>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="group flex flex-col items-center">
          <motion.div
            className="text-3xl md:text-4xl text-gray-900 dark:text-gray-200 group-hover:text-blue-500 transition duration-300"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.2 }}
          >
            <FaTwitter />
          </motion.div>
        </a>
      </div>
    </motion.header>
  );
};

export default Header;
