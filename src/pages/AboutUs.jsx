import React from 'react';
import img from '../../public/Images/ServiceImage1.png';

const AboutUs = () => {
  return (
    <div className='bg-[#faf3eb] max-w-screen'>
      <div className='flex flex-col mx-auto max-w-[500px] justify-center items-center pt-30 pb-10'>
        <div className="p-8">
          <h1 className="text-6xl flex flex-col  text-center mb-8">About Us</h1>
          <p className="flex flex-col text-center mb-4">Finding Inspiration in Every Turn</p>
          <p className="flex flex-col text-center mb-8">
            This is your About Page.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias vitae repellat, molestiae hic eaque praesentium itaque. Enim, nesciunt dicta.</p>
          <img src={img} alt="About Us" className="w-full h-auto mb-8" />
          <h2 className="text-5xl flex flex-col text-center mb-4">Our Story</h2>
          <p className="flex flex-col text-center mb-2">
               Team is good 
          </p>
          <p className='flex flex-col text-center mb-8 '>
            some thing about the company.Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias vitae repellat, molestiae hic eaque praesentium itaque. Enim, nesciunt dicta.</p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;