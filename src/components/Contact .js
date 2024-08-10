import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css'; // Default styles, you can customize or add your own

const gradientLight = 'linear-gradient(189deg, rgba(131,58,180,1) 0%, rgba(70,41,67,1) 11%, rgba(76,51,240,1) 38%, rgba(253,29,29,1) 58%, rgba(252,176,69,1) 71%, rgba(66,172,162,1) 88%)';
const gradientDark = 'linear-gradient(189deg, rgba(131,58,180,0.8) 0%, rgba(70,41,67,0.8) 11%, rgba(76,51,240,0.8) 38%, rgba(253,29,29,0.8) 58%, rgba(252,176,69,0.8) 71%, rgba(66,172,162,0.8) 88%)';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const iconVariants = {
  hover: { scale: 1.2, rotate: 10, transition: { type: 'spring', stiffness: 400 } },
};

const buttonVariants = {
  hover: { scale: 1.1, rotate: 3, transition: { duration: 0.3 } },
};

const containerVariants = {
  hidden: { opacity: 0, transition: { staggerChildren: 0.2 } },
  visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
};

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 relative"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      whileHover={{ rotateY: 5, rotateX: 5 }} // 3D rotation effect on hover
    >
      <div className="w-full max-w-4xl">
        <motion.h2
          className="text-5xl font-bold mb-8"
          initial="hidden"
          animate="visible"
          variants={textVariants}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          Contact Me
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-3 gap-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="col-span-1 flex flex-col justify-between"
            variants={textVariants}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="mb-8">
              <motion.div
                className="flex items-center mb-6"
                whileHover="hover"
                variants={iconVariants}
              >
                <FaEnvelope className="mr-3 text-2xl" />
                <span className="text-xl">Arifeen.sifat@gmail.com</span>
              </motion.div>
              <motion.div
                className="flex items-center mb-6"
                whileHover="hover"
                variants={iconVariants}
              >
                <FaPhone className="mr-3 text-2xl" />
                <span className="text-xl">01306842102</span>
              </motion.div>
              <motion.div
                className="flex space-x-6 mt-6"
                variants={textVariants}
                transition={{ duration: 0.6, ease: 'easeOut' }}
              >
                <a href="https://facebook.com">
                  <motion.div whileHover="hover" variants={iconVariants} className="text-2xl hover:text-blue-600 dark:hover:text-blue-400">
                    <FaFacebook />
                  </motion.div>
                </a>
                <a href="https://github.com">
                  <motion.div whileHover="hover" variants={iconVariants} className="text-2xl hover:text-gray-800 dark:hover:text-gray-400">
                    <FaGithub />
                  </motion.div>
                </a>
                <a href="https://linkedin.com">
                  <motion.div whileHover="hover" variants={iconVariants} className="text-2xl hover:text-blue-600 dark:hover:text-blue-400">
                    <FaLinkedin />
                  </motion.div>
                </a>
                <a href="https://twitter.com">
                  <motion.div whileHover="hover" variants={iconVariants} className="text-2xl hover:text-blue-400 dark:hover:text-blue-300">
                    <FaTwitter />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <motion.div
              className="text-center md:text-left"
              variants={textVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
            >
              <AwesomeButton
                type="Ghost"
                size="medium"
                href="/path/to/cv.pdf"
                className="awesome-button"
                variants={buttonVariants}
                whileHover="hover"
              >
                Download CV
              </AwesomeButton>
            </motion.div>
          </motion.div>
          <motion.form
            className="col-span-2 space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
            >
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded bg-gray-200 dark:bg-gray-900 text-xl"
              />
            </motion.div>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.6 }}
            >
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded bg-gray-200 dark:bg-gray-900 text-xl"
              />
            </motion.div>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.8 }}
            >
              <textarea
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded bg-gray-200 dark:bg-gray-900 text-xl h-40"
              />
            </motion.div>
            <motion.div
              variants={textVariants}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 1 }}
            >
              <AwesomeButton
                type="Ghost " 
                size="medium"
                className="awesome-button w-full"
                variants={buttonVariants}
                whileHover="hover"
              >
                Submit
              </AwesomeButton>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
      {/* Gradient Line */}
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{
          background: gradientLight,
          filter: 'brightness(0.8)' // Adjusts for dark mode if needed
        }}
      />
    </motion.section>
  );
};

export default Contact;
