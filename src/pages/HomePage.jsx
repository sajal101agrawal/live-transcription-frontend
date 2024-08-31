// src/pages/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white px-4">
      <h1 className="text-3xl font-bold mb-6">Welcome to AI Project</h1>
      <div className="space-y-4">
        {['Scenario 1', 'Scenario 2', 'Scenario 3', 'Scenario 4'].map((title, index) => (
          <Link
            key={index}
            to="/transcript"
            className="block w-64 py-3 text-center bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
          >
            {title}
          </Link>
        ))}
        <Link
          to="/admin"
          className="block w-64 py-3 text-center bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
        >
          Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
