import React from 'react';
import { motion } from 'framer-motion';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Fade } from 'react-awesome-reveal';
import './Portfolio.css'; 
import linkedin from '../assets/linkdin.jpg'; 
import ecomars from '../assets/ecomars.jpg';
import sifTube from '../assets/siftube.jpg';
import joonbook from '../assets/Jonbook.jpg';

const Portfolio = () => {
  const projects = [
    {
      title: "Linkdin-clone",
      features: [
        "Secure user login and registration using JWT (JSON Web Token).",
        "Editable user profiles with profile picture, bio, work experience, education, and skills.",
        "Advanced search for users, posts, and companies.",
        "Insights on profile views and post engagements.",
        "Liking, commenting, and sharing posts.",
      ],
      liveLink: "https://libkdin.netlify.app/",
      image: linkedin, 
    },
    {
      title: "Sifat Ecommearch",
      features: [
        "Product Management: Easy-to-use admin panel for managing inventory, categories, and product details.",
        "User Accounts: Personalized user accounts with order tracking and wish lists.",
        "Secure Payment: Integrated payment gateways with SSL encryption for secure transactions."
      ],
      liveLink: "https://sifatecommearch.netlify.app/",
      image: ecomars, 
    },
    {
      title: "SifTube",
      features: [
        "User Authentication: Secure login and registration system.",
        "Video Streaming: High-quality video playback with adaptive bitrate streaming.",
        "Search Functionality: Powerful search engine to find videos easily.",
      ],
      liveLink: "https://siftube.netlify.app/",
      image: sifTube,
    },
    {
      title: "JoonBook",
      features: [
        "User Profiles: Create and customize detailed profiles to showcase your interests and ",
        "Responsive Design: Access Jonbook from any device with a responsive, mobile-friendly layout.",
        "Notifications: Get notified of important events, messages, and interactions.",
      ],
      liveLink: "https://joonbook.netlify.app/",   
      image: joonbook,
    },
  ];

  const gradientLight = 'linear-gradient(189deg, rgba(131,58,180,1) 0%, rgba(70,41,67,1) 11%, rgba(76,51,240,1) 38%, rgba(253,29,29,1) 58%, rgba(252,176,69,1) 71%, rgba(66,172,162,1) 88%)';
  const gradientDark = 'linear-gradient(189deg, rgba(131,58,180,0.8) 0%, rgba(70,41,67,0.8) 11%, rgba(76,51,240,0.8) 38%, rgba(253,29,29,0.8) 58%, rgba(252,176,69,0.8) 71%, rgba(66,172,162,0.8) 88%)';
  const isDarkMode = document.documentElement.classList.contains('dark');
  const gradient = isDarkMode ? gradientDark : gradientLight;

  const cubeVariants = {
    animate: {
      rotateX: [0, 360],
      rotateY: [0, 360],
      rotateZ: [0, 360],
      transition: {
        duration: 10,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <motion.section
      id="portfolio"
      className="min-h-screen p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 flex flex-col justify-center"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <div className="mb-8">
        <h2 className="text-4xl font-bold text-left">My Work</h2>
        <div
          className="mt-2 h-1 rounded-full"
          style={{ background: gradient }}
        />
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <Fade triggerOnce key={index}>
            <div className="card bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl relative">
              <img src={project.image} alt={project.title} className="overlay-image rounded-lg" />
              <div className="relative z-10">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-200">{project.title}</h3>
                <p className="mt-4 font-semibold text-gray-800 dark:text-gray-300">Features :</p>
                <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-400">
                  {project.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="mt-4 flex justify-between items-center relative z-10">
                <a href={project.liveLink} className="text-blue-500 dark:text-blue-300 hover:underline no-underline">View Live →</a>
                <div className="flex items-center space-x-2">
                  <a href="https://github.com/sif1t" className="text-gray-900 dark:text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.165c-3.337.725-4.033-1.61-4.033-1.61-.546-1.39-1.33-1.76-1.33-1.76-1.087-.745.084-.73.084-.73 1.205.085 1.837 1.234 1.837 1.234 1.07 1.836 2.805 1.306 3.492.997.108-.774.42-1.306.763-1.606-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.237-3.222-.124-.305-.535-1.525.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 0 1 3.006-.404c1.02.005 2.04.138 3.006.404 2.292-1.552 3.3-1.23 3.3-1.23.652 1.651.241 2.87.118 3.176.77.842 1.237 1.912 1.237 3.222 0 4.61-2.804 5.624-5.476 5.922.43.372.815 1.103.815 2.222v3.293c0 .32.218.694.825.577C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      <motion.div 
        className="flex justify-center mt-8"
        variants={cubeVariants}
        animate="animate"
      >
        <motion.div
          className="w-24 h-24 bg-gradient-to-r from-blue-500 to-red-500"
          style={{
            transformStyle: "preserve-3d",
            transformOrigin: "center",
          }}
        >
          <motion.div className="absolute w-full h-full bg-gradient-to-r from-green-400 to-blue-500" />
          <motion.div className="absolute w-full h-full bg-gradient-to-r from-red-400 to-yellow-500" style={{ transform: "rotateY(90deg)" }} />
          <motion.div className="absolute w-full h-full bg-gradient-to-r from-purple-400 to-pink-500" style={{ transform: "rotateX(90deg)" }} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Portfolio;
