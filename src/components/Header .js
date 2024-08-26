import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { FaPlay } from 'react-icons/fa';
import profileImage from '../assets/profile2.png';

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const texts = ['Web Developer', 'Frontend Developer'];
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const handleVideoClick = () => {
    setIsVideoOpen(true);
  };

  const handleCloseVideo = () => {
    setIsVideoOpen(false);
  };

  return (
    <>
      <motion.header
        className={`relative flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-12 py-16 transition-colors duration-500 ${
          darkMode ? 'bg-dark text-light' : 'bg-light text-dark'
        }`}
        initial={{ opacity: 0, translateY: -50 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        style={{ perspective: '1200px' }}
      >
        <motion.div
          className="flex flex-col items-start md:w-1/2 space-y-6 md:space-y-10 lg:space-y-14"
          initial={{ opacity: 0, translateX: -50 }}
          animate={{ opacity: 1, translateX: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          <motion.h1
            className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.3 }}
          >
            HI, I'M SIFAT!<br />
            <span className="text-highlight">
              {texts[currentTextIndex]}
            </span>
          </motion.h1>
          <motion.p
            className="text-base md:text-lg lg:text-xl leading-relaxed mb-6"
            initial={{ opacity: 0, translateY: 20 }}
            animate={{ opacity: 1, translateY: 0 }}
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          >
            Hello. I’m a web designer who codes. I strive to create simple, original, and impactful user experiences. As a web designer, my passion lies in creating visually stunning and user-friendly websites that leave a lasting impression on visitors.
          </motion.p>
          <div className="flex items-center space-x-4">
            <AwesomeButton
              type="Minimal"
              href="#"
              className={`font-semibold ${
                darkMode ? 'bg-accent-dark text-dark' : 'bg-accent text-light'
              }`}
            >
              Download Cv
            </AwesomeButton>
            <button 
              onClick={handleVideoClick}
              className={`p-2 rounded-full transition duration-300 ${
                darkMode ? 'border-2 border-highlight text-highlight hover:bg-highlight hover:text-dark' 
                : 'border-2 border-highlight-dark text-highlight-dark hover:bg-highlight-dark hover:text-light'
              }`}
            >
              <FaPlay className="text-2xl" />
            </button>
          </div>
        </motion.div>
        <motion.div
          className="flex justify-center items-center md:w-1/2 mt-12 md:mt-0"
          initial={{ scale: 0.8, opacity: 0, translateY: 30 }}
          animate={{ scale: 1, opacity: 1, translateY: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <motion.img
            src={profileImage}
            alt="Profile"
            className="rounded-lg w-72 sm:w-80 md:w-96 lg:w-100 xl:w-104"
            initial={{ scale: 0.8, rotateX: 10 }}
            animate={{ scale: 1, rotateX: 0 }}
            transition={{
              type: 'spring',
              stiffness: 300,
              damping: 30,
              duration: 1.5,
            }}
            whileHover={{
              scale: 1.05,
              rotate: [0, 5, -5, 0],
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            style={{ filter: darkMode ? 'brightness(70%)' : 'brightness(100%)' }}
          />
        </motion.div>
        <div className="absolute top-4 right-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-transparent border-2 border-current transition duration-300"
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative w-full h-full">
              <button
                onClick={handleCloseVideo}
                className="absolute top-4 right-4 text-white text-3xl z-10"
              >
                ×
              </button>
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/your-video-id"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
