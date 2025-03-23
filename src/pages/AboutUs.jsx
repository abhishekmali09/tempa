import React from 'react';
import img_aboutUs from '../../public/Images/About us design.png';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import  img_Accuracy from '../../public/Images/Accuracy.png';
import img_Integrity from '../../public/Images/Integrity.png';
import img_Empathy from '../../public/Images/Empathy.png';
import img_Education from '../../public/Images/Education.png';

// TeamMemberCard Component with left-aligned content and MUI icons
const TeamMemberCard = ({ name, title, photo, social }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-[300px] flex flex-col justify-center items-center">
      <img src={photo} alt={name} className="w-32 h-32 mb-4 object-cover" />
      <h3 className="text-xl  font-heading font-bold mb-2">{name}</h3>
      <p className=" font-text text-lg mb-4">{title}</p>
      <div className="flex gap-4">
        <a href={social.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook  />
        </a>
        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter  />
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedIn  />
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
      photo: 'https://img.icons8.com/color/100/circled-user-male-skin-type-1-2--v1.png',
      social: {
        facebook: 'https://facebook.com/donfrancis',
        twitter: 'https://twitter.com/donfrancis',
        linkedin: 'https://linkedin.com/in/donfrancis',
      },
    },
    {
      name: 'Ashley Jones',
      title: 'Tech Lead',
      photo: 'https://img.icons8.com/color/100/circled-user-female-skin-type-1-2.png',
      social: {
        facebook: 'https://facebook.com/ashleyjones',
        twitter: 'https://twitter.com/ashleyjones',
        linkedin: 'https://linkedin.com/in/ashleyjones',
      },
    },
  ];

  return (
    <div className="grayish w-full">
      {/* Existing content */}
    <section className='max-w-[1200px] mx-auto'>
      <div className="flex flex-col justify-around items-center h-fit gap-10 max-w-screen px-10  py-30 bg-[#ECEFF1]">
        {/* About Us Title */}

        <h1 className='md:text-7xl text-6xl font-heading text-rose-400 '>ABOUT US</h1>

        <div className="flex flex-col lg:flex-row justify-around items-center gap-10 w-full mt-[52px]">
          {/* Left Section */}
          <div className="flex flex-col  max-w-md text-left mx-2">

              <h2 className='md:text-5xl text-4xl font-heading text-rose-400 '>MISSION</h2>
              <p className="text-xl font-text text-[#37474F] mt-4">
              Our mission is to inspire, educate, and comfort through the power of medical quotes, creating a supportive community for healthcare professionals, patients, and anyone touched by the medical field.
              </p>

            <div>
              <h2 className='md:text-5xl py-3 text-4xl font-heading text-rose-400 '>MOTTO</h2>
              <p className="text-xl font-text text-[#37474F] mt-4">A motto is a short phrase or sentence that captures the essence, purpose, or values of a person, organization, or project.</p>
            </div>
          </div>
          {/* Right Section (Image) */}
          <div className=" h-full hidden lg:flex">
            <img
              width="600px"
              height="700px"
              src={img_aboutUs}
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>
    </section>

{/* "Our Values" section */}

<section className='bg-white'>
<div className="flex flex-col items-center justify-center py-20 ">
      <h1 className='md:text-7xl text-6xl font-heading text-rose-400 '>OUR VALUES</h1>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-2 gap-10 mt-2 px-10 w-[1200px] max-w-full mx-auto">
        {/*Accuracy  (Top-left corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 row-start-1">
          <img
            src={img_Accuracy} // Replace with the actual path to your icon
            alt="Accuracy"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-3xl font-semibold font-heading mb-2">Accuracy</h2>
          <p className="text-center text-2xl font-text text-[#37474F] ">
          We provide medical information backed by experts and evidence.</p>
        </div>

        {/* Integrity (Top-right corner) */}
        <div className="flex flex-col items-center justify-center col-start-1  md:col-start-3  md:row-start-1 row-start-2">
          <img
            src={img_Integrity} // Replace with the actual path to your icon
            alt="Integrity"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-3xl font-semibold font-heading mb-2">Integrity</h2>
          <p className="text-center  text-2xl font-text text-gray-600 text-text">
          Honest, transparent, ethical content and engagement is our commitment. </p>
        </div>

        {/* Empathy (Bottom-left corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 md:row-start-2 row-start-3">
          <img
            src={img_Empathy} // Replace with the actual path to your icon
            alt="Empathy"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-3xl font-semibold font-heading mb-2">Empathy</h2>
          <p className="text-center text-2xl font-text text-gray-600 text-text">
          Quotes show medicine's compassion, connecting with users emotionally. </p>
        </div>

        {/* Education (Bottom-right corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 md:col-start-3  md:row-start-2  row-start-4">
          <img
            src={img_Education} // Replace with the actual path to your icon
            alt="Education"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-3xl font-semibold font-heading mb-2">Education</h2>
          <p className="text-center text-2xl font-text text-gray-600 text-text">
          We curate quotes to foster medical literacy and curiosity about health. </p>
        </div>
      </div>
      </div>
  </section>


      {/* "Meet the Team" section */}
      <div className="  w-full">
      <div className="max-w-[1200px] mx-auto py-20 px-10">
        <div className="flex flex-col items-center justify-center pb-10 gap-4">
        <h2 className="text-6xl font-semibold font-heading text-rose-400 text-center ">MEET THE TEAM</h2>
        <div className=' w-25 h-1 bg-[#FF6F61]'></div>
        </div>


        <div className="flex flex-wrap justify-center gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default AboutUs;
