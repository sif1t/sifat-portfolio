// src/components/About.js
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { name: 'HTML', percentage: 90 },
  { name: 'CSS', percentage: 85 },
  { name: 'Bootstrap', percentage: 80 },
  { name: 'JavaScript', percentage: 75 },
  { name: 'Node.js', percentage: 70 },
  { name: 'Vue.js', percentage: 65 },
  { name: 'React.js', percentage: 75 },
];

const gradientLight = 'linear-gradient(189deg, rgba(131,58,180,1) 0%, rgba(70,41,67,1) 11%, rgba(76,51,240,1) 38%, rgba(253,29,29,1) 58%, rgba(252,176,69,1) 71%, rgba(66,172,162,1) 88%)';
const gradientDark = 'linear-gradient(189deg, rgba(131,58,180,0.8) 0%, rgba(70,41,67,0.8) 11%, rgba(76,51,240,0.8) 38%, rgba(253,29,29,0.8) 58%, rgba(252,176,69,0.8) 71%, rgba(66,172,162,0.8) 88%)';

const textVariants = {
  hover: {
    x: [0, 50, -50, 50, -50, 0],
    y: [0, 50, 50, -50, -50, 0],
    transition: {
      x: { duration: 1, ease: "easeInOut" },
      y: { duration: 1, ease: "easeInOut" },
      loop: Infinity
    }
  }
};

const splitText = (text) => {
  return text.split(' ').map((word, index) => (
    <motion.span
      key={index}
      className="inline-block"
      variants={textVariants}
      whileHover="hover"
      style={{ display: 'inline-block' }}
    >
      {word}{' '}
    </motion.span>
  ));
};

const About = () => {
  return (
    <motion.section
      id="about"
      className="min-h-screen p-8 w-full bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 flex flex-col justify-center"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2 className="text-4xl font-bold text-left">About Me</h2>
      <p className="mt-4 text-lg text-left">
        {splitText("Hello. I'm a web designer who codes. I strive to create simple, original, and impactful user experiences. As a web designer, my passion lies in creating visually stunning and user-friendly websites that leave a lasting impression on visitors. I believe that the web is a powerful medium that allows me to blend creativity with technology to craft unique online experiences.")}
      </p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        <motion.div
          className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg perspective-1000"
          whileHover={{ scale: 1.05, rotateY: 10, rotateX: -5 }}
          whileTap={{ scale: 0.95, rotateY: -10, rotateX: 5 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <h3 className="text-2xl font-semibold">Skills</h3>
          <ul className="mt-2 space-y-4">
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                className="flex items-center justify-between"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <span>{skill.name}</span>
                <div className="w-2/3 bg-gray-300 dark:bg-gray-700 rounded-full h-4 ml-4 relative overflow-hidden">
                  <motion.div
                    className="absolute inset-0 h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    style={{
                      background: gradientLight,
                      transformOrigin: 'left center',
                      borderRadius: '9999px',
                      zIndex: 1
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 h-full rounded-full"
                    initial={{ clipPath: 'inset(0% 0% 0% 0%)' }}
                    animate={{ clipPath: `inset(0% 0% 0% ${100 - skill.percentage}%)` }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    style={{
                      background: gradientDark,
                      transformOrigin: 'left center',
                      borderRadius: '9999px',
                      zIndex: 0,
                      mixBlendMode: 'multiply'
                    }}
                  />
                  <motion.span
                    className="absolute right-0 pr-2 text-xs font-bold text-gray-900 dark:text-gray-200"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, delay: index * 0.3 }}
                    whileHover={{ scale: 1.5, x: 10 }}
                    style={{ transformOrigin: 'center center' }}
                  >
                    {skill.percentage}%
                  </motion.span>
                </div>
              </motion.li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg perspective-1000"
          whileHover={{ rotateY: -10, rotateX: 10, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <h3 className="text-2xl font-semibold">Experience</h3>
          <p className="mt-2">
            Web Design<br />
            Industrial Attachment Done Bd Task Limited
          </p>
        </motion.div>
        <motion.div
          className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg perspective-1000"
          whileHover={{ rotateY: -10, rotateX: 10, scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 200, damping: 10 }}
        >
          <h3 className="text-2xl font-semibold">Education</h3>
          <p className="mt-2">
            Year: 2012<br />
            P.S.C Successfully Done<br />
            53 no. Charjongla Model Govt. Primary School<br /><br />
            Year: 2015<br />
            J.S.C Successfully Done<br />
            Abdur Rob High School And College<br /><br />
            Year: 2018<br />
            S.S.C Successfully Done, Department: Science<br />
            Abdur Rob High School And College<br /><br />
            Year: 2023<br />
            Diploma Successfully Done, Department: Computer<br />
            Barishal Polytechnic Institute - BPI
          </p>
        </motion.div>
      </div>
      <motion.div
        className="p-4 bg-gray-100 dark:bg-gray-800 rounded-lg mt-8 relative perspective-1000"
        whileHover={{ 
          x: "100%", // Move to the right
          scale: 1.1, // Slightly scale up
          transition: { type: 'spring', stiffness: 100 } 
        }}
        style={{
          background: gradientLight,
          transformOrigin: 'left center',
          borderRadius: '9999px'
        }}
      >
        <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-4 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 h-full rounded-full"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1 }}
            style={{
              background: gradientLight,
              borderRadius: '9999px'
            }}
          />
        </div>
      </motion.div>
    </motion.section>
  );
};

export default About;
