// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 h-screen"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      style={{ width: '50%', margin: '0 auto' }}
    >
      <h2 className="text-4xl font-bold">Contact Me</h2>
      <form className="mt-4">
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="email">Email</label>
          <input type="email" id="email" className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"/>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold mb-2" htmlFor="phone">Phone</label>
          <input type="tel" id="phone" className="w-full p-2 border border-gray-300 dark:border-gray-700 rounded"/>
        </div>
        <div className="flex space-x-4">
          <a href="https://github.com" className="text-xl">GitHub</a>
          <a href="https://linkedin.com" className="text-xl">LinkedIn</a>
          <a href="https://facebook.com" className="text-xl">Facebook</a>
          <a href="https://twitter.com" className="text-xl">Twitter</a>
        </div>
        <div className="mt-4">
          <a href="/path/to/cv.pdf" className="bg-blue-500 dark:bg-blue-700 text-white p-2 rounded">Download CV</a>
        </div>
      </form>
    </motion.section>
  );
};

export default Contact;
