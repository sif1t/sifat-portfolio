import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css'; // Default styles, you can customize or add your own

const gradientLight = 'linear-gradient(189deg, rgba(131,58,180,1) 0%, rgba(70,41,67,1) 11%, rgba(76,51,240,1) 38%, rgba(253,29,29,1) 58%, rgba(252,176,69,1) 71%, rgba(66,172,162,1) 88%)';
const gradientDark = 'linear-gradient(189deg, rgba(131,58,180,0.8) 0%, rgba(70,41,67,0.8) 11%, rgba(76,51,240,0.8) 38%, rgba(253,29,29,0.8) 58%, rgba(252,176,69,0.8) 71%, rgba(66,172,162,0.8) 88%)';

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200 relative"
      initial={{ x: '-100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="w-full max-w-4xl">
        <h2 className="text-5xl font-bold mb-8">Contact Me</h2>
        <div className="grid md:grid-cols-3 gap-12">
          <div className="col-span-1 flex flex-col justify-between">
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <FaEnvelope className="mr-3 text-2xl" />
                <span className="text-xl">Arifeen.sifat@gmail.com</span>
              </div>
              <div className="flex items-center mb-6">
                <FaPhone className="mr-3 text-2xl" />
                <span className="text-xl">01306842102</span>
              </div>
              <div className="flex space-x-6 mt-6">
                <a href="https://facebook.com" className="text-2xl hover:text-blue-600 dark:hover:text-blue-400"><FaFacebook /></a>
                <a href="https://github.com" className="text-2xl hover:text-gray-800 dark:hover:text-gray-400"><FaGithub /></a>
                <a href="https://linkedin.com" className="text-2xl hover:text-blue-600 dark:hover:text-blue-400"><FaLinkedin /></a>
                <a href="https://twitter.com" className="text-2xl hover:text-blue-400 dark:hover:text-blue-300"><FaTwitter /></a>
              </div>
            </div>
            <div className="text-center md:text-left">
              <AwesomeButton
                type="primary"
                size="large"
                href="/path/to/cv.pdf"
                className="awesome-button"
              >
                Download CV
              </AwesomeButton>
            </div>
          </div>
          <form className="col-span-2 space-y-6">            
            <div>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded bg-gray-200 dark:bg-gray-900 text-xl"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded bg-gray-200 dark:bg-gray-900 text-xl"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                className="w-full p-4 border border-gray-300 dark:border-gray-700 rounded bg-gray-200 dark:bg-gray-900 text-xl h-40"
              />
            </div>
            <div>
              <AwesomeButton
                type="primary"
                size="large"
                className="awesome-button w-full"
              >
                Submit
              </AwesomeButton>
            </div>
          </form>
        </div>
      </div>
      {/* Gradient Line */}
      <div
        className="absolute bottom-0 left-0 w-full h-1"
        style={{
          background: `linear-gradient(189deg, rgba(131,58,180,1) 0%, rgba(70,41,67,1) 11%, rgba(76,51,240,1) 38%, rgba(253,29,29,1) 58%, rgba(252,176,69,1) 71%, rgba(66,172,162,1) 88%)`,
          filter: 'brightness(0.8)' // Adjusts for dark mode if needed
        }}
      />
    </motion.section>
  );
};

export default Contact;
