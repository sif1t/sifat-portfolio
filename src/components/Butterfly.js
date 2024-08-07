// src/components/Butterfly.js
import React, { useState, useEffect } from 'react';
import './Butterfly.css'; // Import the CSS for styling

const Butterfly = ({ x, y, size }) => {
  const [style, setStyle] = useState({
    top: `${y}px`,
    left: `${x}px`,
    width: `${size}px`,
    height: `${size}px`,
  });

  useEffect(() => {
    const moveButterfly = () => {
      setStyle((prevStyle) => ({
        ...prevStyle,
        top: `${Math.random() * window.innerHeight}px`,
        left: `${Math.random() * window.innerWidth}px`,
      }));
    };

    const interval = setInterval(moveButterfly, 2000); // Move every 2 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <div
      className="butterfly"
      style={style}
    >
      🦋
    </div>
  );
};

export default Butterfly;
