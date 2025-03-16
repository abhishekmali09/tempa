import React from 'react';
import img from '../../public/Images/ServiceImage1.png';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-4xl font-bold text-center mb-4">About Us</h1>
          <p className="text-center text-gray-600 mb-8">Finding Inspiration in Every Turn</p>
          <p className="text-gray-700 mb-8">
            This is your About Page.
          </p>
          <img src={img} alt="About Us" className="w-full h-auto mb-8" />
          <h2 className="text-2xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700">
               Team is good 
          </p>
          <p className="text-gray-700 mt-4">
            some thing about the company
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;