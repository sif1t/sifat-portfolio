// src/components/Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <div className="text-2xl font-bold text-gray-800 dark:text-white">Sifat</div>
        <motion.button
          className="text-gray-800 dark:text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          ☰
        </motion.button>
        <motion.ul
          className={`flex flex-col md:flex-row md:items-center md:space-x-6 mt-4 md:mt-0 ${isOpen ? 'block' : 'hidden'} md:flex`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/" className="text-gray-800 dark:text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/about" className="text-gray-800 dark:text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
              About
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/services" className="text-gray-800 dark:text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Services
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/portfolio" className="text-gray-800 dark:text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Portfolio
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <Link to="/contact" className="text-gray-800 dark:text-white hover:text-blue-500" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </motion.li>
          <motion.li whileHover={{ scale: 1.1 }} transition={{ type: 'spring', stiffness: 300 }}>
            <DarkModeToggle />
          </motion.li>
        </motion.ul>
      </div>
    </nav>
  );
};

export default Navbar;
