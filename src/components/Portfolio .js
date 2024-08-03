// src/components/Portfolio.js
import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const projects = [
    {
      title: "Nota Corda",
      features: [
        "Students can read and buy music scores and save them in an online library.",
        "Teachers can add and update scores with instant reviews and ratings.",
        "The web app has mobile user authentication using different OAuth providers.",
      ],
      liveLink: "#",
      clientLink: "#",
      serverLink: "#",
      image: "/path/to/nota-corda-image.jpg", // Replace with the actual image path
    },
    {
      title: "Project Alpha",
      features: [
        "A project management tool with task assignments and progress tracking.",
        "Real-time collaboration with team members using chat and file sharing.",
        "Customizable dashboards and reporting features.",
      ],
      liveLink: "#",
      clientLink: "#",
      serverLink: "#",
      image: "/path/to/project-alpha-image.jpg", // Replace with the actual image path
    },
    {
      title: "E-commerce Platform",
      features: [
        "Complete online shopping experience with product browsing and checkout.",
        "Admin panel for managing products, orders, and users.",
        "Integration with various payment gateways.",
      ],
      liveLink: "#",
      clientLink: "#",
      serverLink: "#",
      image: "/path/to/e-commerce-platform-image.jpg", // Replace with the actual image path
    },
    {
      title: "Fitness Tracker",
      features: [
        "Track workouts, diet plans, and health metrics.",
        "Social features to connect with friends and join fitness challenges.",
        "Personalized recommendations based on user data.",
      ],
      liveLink: "#",
      clientLink: "#",
      serverLink: "#",
      image: "/path/to/fitness-tracker-image.jpg", // Replace with the actual image path
    },
  ];

  return (
    <motion.section
      id="portfolio"
      className="min-h-screen p-8 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-200 flex flex-col justify-center"
      initial={{ x: '100vw' }}
      animate={{ x: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
    >
      <h2 className="text-4xl font-bold text-left mb-8">My Work</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map((project, index) => (
          <motion.div 
            key={index} 
            className="card bg-gray-200 dark:bg-gray-700 p-6 rounded-lg shadow-lg transform transition-transform duration-500 hover:-translate-y-2 hover:shadow-2xl relative"
            whileHover={{ scale: 1.05 }}
          >
            <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300" />
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
              <a href={project.liveLink} className="text-blue-500 dark:text-blue-300 hover:underline">View Live →</a>
              <div className="flex items-center space-x-2">
                <a href={project.clientLink} className="text-blue-500 dark:text-blue-300 hover:underline">Client</a>
                <a href={project.serverLink} className="text-blue-500 dark:text-blue-300 hover:underline">Server</a>
                <a href="https://github.com" className="text-gray-900 dark:text-gray-200">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.11.82-.26.82-.577v-2.165c-3.337.725-4.033-1.61-4.033-1.61-.546-1.39-1.33-1.76-1.33-1.76-1.087-.745.084-.73.084-.73 1.205.085 1.837 1.234 1.837 1.234 1.07 1.836 2.805 1.306 3.492.997.108-.774.42-1.306.763-1.606-2.665-.305-5.466-1.332-5.466-5.93 0-1.31.47-2.38 1.237-3.222-.124-.305-.535-1.525.117-3.176 0 0 1.008-.322 3.3 1.23a11.47 11.47 0 0 1 3.006-.404c1.02.005 2.04.138 3.006.404 2.292-1.552 3.3-1.23 3.3-1.23.652 1.651.241 2.87.118 3.176.77.842 1.237 1.912 1.237 3.222 0 4.61-2.804 5.624-5.476 5.922.43.372.815 1.103.815 2.222v3.293c0 .32.218.694.825.577C20.565 21.796 24 17.3 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Portfolio;
