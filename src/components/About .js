// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.section
      id="about"
      className="p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2 className="text-4xl font-bold">About Me</h2>
      <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <h3 className="text-2xl">Skills</h3>
          <ul className="list-disc list-inside mt-2">
            <li>HTML</li>
            <li>CSS</li>
            <li>Bootstrap</li>
            <li>JavaScript</li>
            <li>Node.js</li>
            <li>Vue.js</li>
            <li>React.js</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl">Experience</h3>
          <p>Web Design</p>
        </div>
        <div>
          <h3 className="text-2xl">Education</h3>
          <p>Details about your education</p>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
