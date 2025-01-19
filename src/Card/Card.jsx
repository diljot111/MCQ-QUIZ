import React from 'react';
import { Link } from 'react-router-dom';

function Card({ title, description, imageUrl, linkTo }) {
  return (
    <Link to={linkTo} className="group block">
      <div className="w-80 border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105 dark:border-gray-700">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-blue-500">
            {title}
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            {description}
          </p>
        </div>
      </div>
    </Link>
  );
}

export default Card;
