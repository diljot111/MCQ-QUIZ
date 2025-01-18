import React from 'react';
import {Link,useNavigate} from 'react-router-dom'
  
// const Card = ({ title, description, imageUrl, linkTo }) => {
  function Card({ title, description, imageUrl, linkTo }){
  return (
    <Link to={linkTo} className="group block">
      <div className="w-80 border rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-xl font-semibold text-gray-800 group-hover:text-blue-500">
            {title}
          </h2>
          <p className="text-gray-600 mt-2">{description}</p>
        </div>
      </div>
    </Link>
  );
};
export default Card