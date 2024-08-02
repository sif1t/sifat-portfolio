// src/components/Services.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import webDesignLogo from '../assets/web design.png';
import webDevelopmentLogo from '../assets/web development.png';
import wordpressLogo from '../assets/wordpress.png';

const cardVariants = {
  hidden: { opacity: 0, scale: 0.8, rotateX: 20, rotateY: 20 },
  visible: { opacity: 1, scale: 1, rotateX: 0, rotateY: 0 },
};

const Services = () => {
  const [hover, setHover] = useState(false);

  const splitText = (text) => text.split(' ').map((word, index) => (
    <motion.span
      key={index}
      className="inline-block"
      initial={{ x: 0 }}
      animate={{ x: hover ? 20 : 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      {word}
      {index < text.split(' ').length - 1 && ' '}
    </motion.span>
  ));

  return (
    <motion.section
      id="services"
      className="p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 min-h-screen flex flex-col justify-center"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="relative">
        <motion.h2
          className="text-4xl font-bold text-left relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {splitText('Services')}
          <motion.div
            className="absolute left-0 bottom-0 bg-blue-500 h-1"
            initial={{ width: 0 }}
            animate={{ width: hover ? '100%' : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ bottom: '-0.5rem' }}
          />
          <motion.div
            className="absolute left-0 bottom-0 h-1 w-1 bg-blue-500"
            animate={{
              scaleX: hover ? [1, 0.5, 1] : 0,
              scaleY: hover ? [1, 0.5, 1] : 0,
              rotate: hover ? [0, 180, 0] : 0,
            }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            style={{ bottom: '-0.5rem', left: '50%', transformOrigin: 'center' }}
          />
        </motion.h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        <motion.div
          className="bg-white dark:bg-gray-700 p-6 shadow-md rounded-lg flex flex-col items-center"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          whileHover={{ scale: 1.05, rotateX: 10, rotateY: 10 }}
        >
          <motion.img 
            src={webDesignLogo} 
            alt="Web Design Logo" 
            className="h-16 w-16 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <h3 className="text-2xl font-semibold mb-2">Web Design</h3>
          <p>🚀 ELEVATE YOUR BRAND WITH EXCEPTIONAL WEB DESIGN 🚀
            Transform your online presence with stunning, user-focused designs that capture attention and drive engagement. Let’s create a website that not only looks amazing but also delivers a seamless user experience. 🌟
          </p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-700 p-6 shadow-md rounded-lg flex flex-col items-center"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          whileHover={{ scale: 1.05, rotateX: -10, rotateY: -10 }}
        >
          <motion.img 
            src={webDevelopmentLogo} 
            alt="Web Development Logo" 
            className="h-16 w-16 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <h3 className="text-2xl font-semibold mb-2">Web Development</h3>
          <p>🔧 Web Development: Bringing your ideas to life with custom-built, scalable web solutions. From sleek interfaces to powerful functionality, we ensure your site performs seamlessly across all devices. 🚀</p>
        </motion.div>

        <motion.div
          className="bg-white dark:bg-gray-700 p-6 shadow-md rounded-lg flex flex-col items-center"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.8, type: 'spring', stiffness: 80 }}
          whileHover={{ scale: 1.05, rotateX: 15, rotateY: -15 }}
        >
          <motion.img 
            src={wordpressLogo}
            alt="WordPress Logo" 
            className="h-16 w-16 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          <h3 className="text-2xl font-semibold mb-2">WordPress</h3>
          <p>🛠️ WordPress Development: Transforming your vision into a dynamic, user-friendly WordPress site. Whether you need a custom theme or plugin, we handle it all to boost your online presence with ease. 🌐</p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Services;
