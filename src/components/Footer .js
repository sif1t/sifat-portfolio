import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className=" text-gray-950 dark:text-gray-300 p-8 text-center">
      <motion.p
        className="text-lg mb-4 font-semibold"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Copyright 2023 Sifat | Made By Arifeen Sifat
      </motion.p>
      <div className="flex justify-center space-x-6 mb-6">
        <motion.a
          href="https://github.com/sif1t"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300 text-2xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/arifeen-sifat-037a78226/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300 text-2xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaLinkedin />
        </motion.a>
        <motion.a
          href="https://twitter.com/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
          className="text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300 text-2xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaTwitter />
        </motion.a>
        <motion.a
          href="https://www.facebook.com/arifinsifat.arifinsifat/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="text-gray-700 hover:text-gray-950 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300 text-2xl"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaFacebook />
        </motion.a>
      </div>
     
    </footer>
  );
};

export default Footer;
