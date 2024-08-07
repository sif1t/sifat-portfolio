// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { FaGithub, FaLinkedin, FaCodepen, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import Butterfly from './Butterfly'; // Import the Butterfly component
import sifat from '../assets/sifat.jpg';

const createTextPieces = (text, pieceSize) => {
  // (Text piece creation logic remains unchanged)
};

const Header = () => {
  const texts = ['Web Developer', 'Frontend Developer'];
  const [index, setIndex] = useState(0);
  const [showText, setShowText] = useState(true);
  const [butterflies, setButterflies] = useState([]);

  const gradientLight = 'linear-gradient(189deg, rgba(131,58,180,1) 0%, rgba(70,41,67,1) 11%, rgba(76,51,240,1) 38%, rgba(253,29 ,29,1) 58%, rgba(252,176,69,1) 71%, rgba(66,172,162,1) 88%)';
  const gradientDark = 'linear-gradient(189deg, rgba(131,58,180,0.8) 0%, rgba(70,41,67,0.8) 11%, rgba(76,51,240,0.8) 38%, rgba(253,29 ,29,0.8) 58%, rgba(252,176,69,0.8) 71%, rgba(66,172,162,0.8) 88%)';

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

  useEffect(() => {
    const generateButterflies = () => {
      const numButterflies = 10; // Number of butterflies
      const newButterflies = [];
      for (let i = 0; i < numButterflies; i++) {
        newButterflies.push({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          size: Math.random() * 30 + 20 // Random size between 20 and 50
        });
      }
      setButterflies(newButterflies);
    };

    generateButterflies();
    window.addEventListener('resize', generateButterflies); // Regenerate butterflies on resize

    return () => window.removeEventListener('resize', generateButterflies);
  }, []);

  return (
    <motion.header
      className="relative flex flex-col md:flex-row items-center justify-between p-8 min-h-screen bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="flex flex-col items-center justify-between space-y-8 md:space-y-0 w-full md:flex-row mx-auto max-w-5xl">
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
          <p className="mb-14 text-lg md:text-xl">
            Hi, I'm Sifat from Bangladesh
          </p>
        </div>
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <motion.img
            src={sifat}
            alt="sifat"
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
      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
        <AwesomeButton
          type="primary"
          href="https://github.com"
          target="_blank"
          ripple
          style={{ backgroundImage: gradientLight }}
          className="dark:style={{ backgroundImage: gradientDark }}"
        >
          <FaGithub className="text-3xl md:text-4xl" />
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          href="https://linkedin.com"
          target="_blank"
          ripple
          style={{ backgroundImage: gradientLight }}
          className="dark:style={{ backgroundImage: gradientDark }}"
        >
          <FaLinkedin className="text-3xl md:text-4xl" />
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          href="https://codepen.io"
          target="_blank"
          ripple
          style={{ backgroundImage: gradientLight }}
          className="dark:style={{ backgroundImage: gradientDark }}"
        >
          <FaCodepen className="text-3xl md:text-4xl" />
        </AwesomeButton>
      </div>

      {/* Vertical Icons Right */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-6">
        <AwesomeButton
          type="primary"
          href="https://facebook.com"
          target="_blank"
          ripple
          style={{ backgroundImage: gradientLight }}
          className="dark:style={{ backgroundImage: gradientDark }}"
        >
          <FaFacebook className="text-3xl md:text-4xl" />
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          href="https://instagram.com"
          target="_blank"
          ripple
          style={{ backgroundImage: gradientLight }}
          className="dark:style={{ backgroundImage: gradientDark }}"
        >
          <FaInstagram className="text-3xl md:text-4xl" />
        </AwesomeButton>
        <AwesomeButton
          type="primary"
          href="https://twitter.com"
          target="_blank"
          ripple
          style={{ backgroundImage: gradientLight }}
          className="dark:style={{ backgroundImage: gradientDark }}"
        >
          <FaTwitter className="text-3xl md:text-4xl" />
        </AwesomeButton>
      </div>

      {/* Butterflies */}
      {butterflies.map((butterfly, index) => (
        <Butterfly
          key={index}
          x={butterfly.x}
          y={butterfly.y}
          size={butterfly.size}
        />
      ))}
    </motion.header>
  );
};

export default Header;
