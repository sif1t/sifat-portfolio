import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className=" text-gray-950 dark:text-gray-300 p-6 text-center">
      <p className="text-sm mb-2">Copyright 2023 Sifat | Made By Arifeen Sifat</p>
      <div className="flex justify-center space-x-4 mb-4">
        <a 
          href="https://github.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="GitHub"
          className="text-gray-300 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
        >
          <FaGithub />
        </a>
        <a 
          href="https://linkedin.com/in/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="LinkedIn"
          className="text-gray-300 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
        >
          <FaLinkedin />
        </a>
        <a 
          href="https://twitter.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Twitter"
          className="text-gray-300 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
        >
          <FaTwitter />
        </a>
        <a 
          href="https://facebook.com/yourprofile" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Facebook"
          className="text-gray-300 hover:text-gray-100 dark:text-gray-400 dark:hover:text-gray-200 transition-colors duration-300"
        >
          <FaFacebook />
        </a>
      </div>
      <p className="text-xs">Built with passion and dedication</p>
    </footer>
  );
};

export default Footer;
