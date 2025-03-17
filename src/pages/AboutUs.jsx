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
      <div className="max-w-[500px] mx-auto p-8">
        <h1 className="text-6xl text-center mb-8">About Us</h1>
        <p className="text-center mb-4">Finding Inspiration in Every Turn</p>
        <p className="text-center mb-8">
          This is your About Page. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias vitae repellat, molestiae hic eaque praesentium itaque. Enim, nesciunt dicta.
        </p>
        <img src={img} alt="About Us" className="w-full h-auto mb-8" />
        <h2 className="text-5xl text-center mb-4">Our Story</h2>
        <p className="text-center mb-2">Team is good</p>
        <p className="text-center mb-8">
          Some thing about the company. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias vitae repellat, molestiae hic eaque praesentium itaque. Enim, nesciunt dicta.
        </p>
      </div>
      {/* "Meet the Team" section */}
      <div className="max-w-[1000px] mx-auto mt-10">
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