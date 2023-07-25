// src/Card.js
import React from 'react';

const Card = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
