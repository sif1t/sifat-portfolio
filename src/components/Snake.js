import React, { useState, useEffect } from 'react';
import './Snake.css'; // Import CSS for snake styling

const Snake = () => {
  const [snakeParts, setSnakeParts] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setSnakeParts((prevParts) => [
        ...prevParts.slice(-50), // Adjust the length of the snake
        { x: event.clientX, y: event.clientY }
      ]);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="snake">
      {snakeParts.map((part, index) => (
        <div
          key={index}
          className="snake-part"
          style={{
            left: `${part.x}px`,
            top: `${part.y}px`,
            transform: `translate(-50%, -50%)`,
            animation: `crawl ${2 + index / 10}s linear infinite`
          }}
        />
      ))}
    </div>
  );
};

export default Snake;
