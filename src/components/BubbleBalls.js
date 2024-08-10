// BubbleBalls.js
import React from 'react';
import { motion } from 'framer-motion';

const colors = [
  'rgba(131, 58, 180, 0.8)',
  'rgba(70, 41, 67, 0.8)',
  'rgba(76, 51, 240, 0.8)',
  'rgba(253, 29, 29, 0.8)',
  'rgba(252, 176, 69, 0.8)',
  'rgba(66, 172, 162, 0.8)',
];

const BubbleBalls = () => {
  const bubbles = Array.from({ length: 50 }, (_, index) => ({
    id: index,
    size: Math.random() * 20 + 10, // Random size between 10 and 30
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    color: colors[Math.floor(Math.random() * colors.length)],
  }));

  return (
    <div className="bubble-container" style={containerStyle}>
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="bubble"
          style={{
            ...bubbleStyle,
            width: bubble.size,
            height: bubble.size,
            backgroundColor: bubble.color,
            top: bubble.y,
            left: bubble.x,
          }}
          animate={{
            y: [bubble.y, bubble.y - 1000],
          }}
          transition={{
            duration: Math.random() * 10 + 5, // Random duration between 5 and 15 seconds
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'linear',
          }}
        />
      ))}
    </div>
  );
};

const containerStyle = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
};

const bubbleStyle = {
  position: 'absolute',
  borderRadius: '50%',
};

export default BubbleBalls;
