// Butterflies.js
import React from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as ButterflyIcon } from '../assets/butterfly.svg'; // Adjust path

const colors = [
  'rgba(255, 192, 203, 0.8)', // Light Pink
  'rgba(255, 223, 186, 0.8)', // Light Peach
  'rgba(186, 255, 186, 0.8)', // Light Green
  'rgba(186, 223, 255, 0.8)', // Light Blue
  'rgba(255, 186, 223, 0.8)', // Light Lavender
  'rgba(223, 255, 186, 0.8)', // Light Yellow
];

const Butterflies = () => {
  const createRandomButterfly = (index) => ({
    id: index,
    size: Math.random() * 20 + 10, // Random size between 10 and 30
    startX: Math.random() * window.innerWidth,
    startY: Math.random() * window.innerHeight,
    endX: Math.random() * window.innerWidth,
    endY: Math.random() * window.innerHeight,
    color: colors[Math.floor(Math.random() * colors.length)],
  });

  const butterflies = Array.from({ length: 15 }, (_, index) => createRandomButterfly(index));

  return (
    <div className="butterfly-container" style={containerStyle}>
      {butterflies.map((butterfly) => (
        <motion.div
          key={butterfly.id}
          className="butterfly"
          style={{
            ...butterflyStyle,
            width: butterfly.size,
            height: butterfly.size,
            top: butterfly.startY,
            left: butterfly.startX,
          }}
          animate={{
            x: [butterfly.startX, butterfly.endX], // Horizontal movement
            y: [butterfly.startY, butterfly.endY], // Vertical movement
          }}
          transition={{
            duration: Math.random() * 10 + 5, // Random duration between 5 and 15 seconds
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'easeInOut',
          }}
        >
          <ButterflyIcon style={{ width: '100%', height: '100%', display: 'block' }} />
        </motion.div>
      ))}
    </div>
  );
};

const containerStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  pointerEvents: 'none', // Ensure the container doesn't capture pointer events
};

const butterflyStyle = {
  position: 'absolute',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

export default Butterflies;
