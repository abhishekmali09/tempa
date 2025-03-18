import React from 'react';
import img from '../../public/Images/ServiceImage1.png';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';

// TeamMemberCard Component with left-aligned content and MUI icons
const TeamMemberCard = ({ name, title, photo, social }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-[300px]">
      <img src={photo} alt={name} className="w-32 h-32 mb-4 object-cover" />
      <h3 className="text-xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600 mb-4">{title}</p>
      <div className="flex gap-4">
        <a href={social.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className="text-black text-xl" />
        </a>
        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="text-black text-xl" />
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedIn className="text-black text-xl" />
        </a>
      </div>
    </div>
  );
};

const AboutUs = () => {
  // Define team member data
  const teamMembers = [
    {
      name: 'Don Francis',
      title: 'Founder & CEO',
      photo: '/images/team/don.jpg',
      social: {
        facebook: 'https://facebook.com/donfrancis',
        twitter: 'https://twitter.com/donfrancis',
        linkedin: 'https://linkedin.com/in/donfrancis',
      },
    },
    {
      name: 'Ashley Jones',
      title: 'Tech Lead',
      photo: '/images/team/ashley.jpg',
      social: {
        facebook: 'https://facebook.com/ashleyjones',
        twitter: 'https://twitter.com/ashleyjones',
        linkedin: 'https://linkedin.com/in/ashleyjones',
      },
    },
  ];

  return (
    <div className="bg-[#faf3eb] max-w-screen">
      {/* Existing content */}
<section>
      <div className="flex flex-col justify-around items-center h-fit gap-10 max-w-screen pb-10  pt-30 bg-[#faf3eb]">
        {/* About Us Title */}
        <h1 className="md:text-6xl text-heading  pt-5">ABOUT US</h1>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-10 w-full mt-[52px]">
          {/* Left Section */}
          <div className="flex flex-col gap-10 max-w-md text-left mx-2">
            
              <h2 className="text-4xl ">MISSION</h2>
              <p className="text-xl mt-4">
                Ingenious is an established engineering company in India engaged
                in the manufacture of fabricated structures of construction and
                mining machinery.
              </p>
           
            <div>
              <h2 className="text-4xl">MOTTO</h2>
              <p className="text-xl mt-4">Timely Delivery and High Quality</p>
            </div>
          </div>
          {/* Right Section (Image) */}
          <div className="hidden lg:flex">
            <img
              width="400px"
              height="400px"
              src={img}
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>
    </section>

{/* "Our Values" section */}

<section>
<div className="flex flex-col items-center justify-center pt-8  mt-12">
      <h1 className=" text-center text-4xl mb-12 text-heading py-1">OUR VALUES</h1>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-2 gap-10 mt-2 px-10 w-[1200px] max-w-full mx-auto">
        {/* Customer First (Top-left corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 row-start-1">
          <img
            src={'#'} // Replace with the actual path to your icon
            alt="Customer First"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Customer First</h2>
          <p className="text-center text-gray-600 text-text">
            We place exceptional customer experience at the center of everything we do.
          </p>
        </div>

        {/* Integrity (Top-right corner) */}
        <div className="flex flex-col items-center justify-center col-start-1  md:col-start-3  md:row-start-1 row-start-2">
          <img
            src={'#'} // Replace with the actual path to your icon
            alt="Integrity"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Integrity</h2>
          <p className="text-center text-gray-600 text-text">
            We are honest, transparent, and ethical in all actions, from big to small.
          </p>
        </div>

        {/* Accountability (Bottom-left corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 md:row-start-2 row-start-3">
          <img
            src={'#'} // Replace with the actual path to your icon
            alt="Accountability"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Accountability</h2>
          <p className="text-center text-gray-600 text-text">
            We are proactive and take full responsibility for our decisions, behaviors, and actions.
          </p>
        </div>

        {/* Respect (Bottom-right corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 md:col-start-3  md:row-start-2  row-start-4">
          <img
            src={'#'} // Replace with the actual path to your icon
            alt="Respect"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold mb-2">Respect</h2>
          <p className="text-center text-gray-600 text-text">
            We are proactive and take full responsibility for our decisions, behaviors, and actions.
          </p>
        </div>
      </div>
      </div>
  </section>
  
      {/* "Meet the Team" section */}
      <div className="max-w-[1000px] mx-auto">
        <h2 className="text-3xl text-center mb-4">MEET THE TEAM</h2>
        <hr className="mb-8" />
        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;