import React, { useState, useEffect } from 'react';
import './Snake.css'; // Import CSS for snake styling

const Snake = () => {
  const [snakeParts, setSnakeParts] = useState([]);

  useEffect(() => {
    const handleMouseMove = (event) => {
      setSnakeParts((prevParts) => [
        ...prevParts.slice(-30), // Adjust the length of the snake
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
      {snakeParts.length > 0 && snakeParts.map((part, index) => (
        <div
          key={index}
          style={{
            left: `${part.x}px`,
            top: `${part.y}px`,
            transform: `translate(-50%, -50%)`,
          }}
        />
      ))}
    </div>
  );
};

export default Snake;
