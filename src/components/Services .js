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

const gradientLight = 'linear-gradient(189deg, rgba(131,58,180,1) 0%, rgba(70,41,67,1) 11%, rgba(76,51,240,1) 38%, rgba(253,29,29,1) 58%, rgba(252,176,69,1) 71%, rgba(66,172,162,1) 88%)';
const gradientDark = 'linear-gradient(189deg, rgba(131,58,180,0.8) 0%, rgba(70,41,67,0.8) 11%, rgba(76,51,240,0.8) 38%, rgba(253,29,29,0.8) 58%, rgba(252,176,69,0.8) 71%, rgba(66,172,162,0.8) 88%)';

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
            className="absolute left-0 bottom-0 h-1"
            initial={{ width: 0 }}
            animate={{ width: hover ? '100%' : 0 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            style={{ 
              background: gradientLight,
              bottom: '-0.5rem'
            }}
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
