// src/components/Contact.js
import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter, FaEnvelope, FaPhone } from 'react-icons/fa';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css'; // Default styles, you can customize or add your own

const Contact = () => {
  return (
    <motion.section
      id="contact"
      className="min-h-screen w-full flex items-center justify-center p-8 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-200"
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
    </motion.section>
  );
};

export default Contact;
