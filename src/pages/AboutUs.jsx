import React from 'react';
import img from '../../public/Images/ServiceImage1.png';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import  img_Accuracy from '../../public/Images/Accuracy.png';
import img_Integrity from '../../public/Images/Integrity.png';
import img_Empathy from '../../public/Images/Empathy.png';
import img_Education from '../../public/Images/Education.png';

// TeamMemberCard Component with left-aligned content and MUI icons
const TeamMemberCard = ({ name, title, photo, social }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-[300px]">
      <img src={photo} alt={name} className="w-32 h-32 mb-4 object-cover" />
      <h3 className="text-xl  font-heading font-bold mb-2">{name}</h3>
      <p className=" font-text mb-4">{title}</p>
      <div className="flex gap-4">
        <a href={social.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook className= "text-[#FF6F61]" />
        </a>
        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter className="text-[#FF6F61]" />
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedIn className="text-[#FF6F61]" />
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
    <div className="bg-white max-w-screen">
      {/* Existing content */}
<section>
      <div className="flex flex-col justify-around items-center h-fit gap-10 max-w-screen pb-10  pt-30 bg-[#ECEFF1]">
        {/* About Us Title */}
        <h1 className=" md:text-6xl font-bold  font-heading  text-[#FF6F61] pt-5">ABOUT US</h1>
        <div className="flex flex-col lg:flex-row justify-around items-center gap-10 w-full mt-[52px]">
          {/* Left Section */}
          <div className="flex flex-col gap-10 max-w-md text-left mx-2">
            
              <h2 className="text-4xl font-bold font-heading text-[#FF6F61] ">MISSION</h2>
              <p className="text-xl font-text text-[#37474F] mt-4">
              Our mission is to inspire, educate, and comfort through the power of medical quotes, creating a supportive community for healthcare professionals, patients, and anyone touched by the medical field. We aim to curate meaningful words that uplift, motivate, and provide wisdom, bridging the gap between inspiration and understanding in the healthcare journey.
              </p>
           
            <div>
              <h2 className="text-4xl font-bold font-heading text-[#FF6F61]">MOTTO</h2>
              <p className="text-xl font-text text-[#37474F] mt-4">A motto is a short phrase or sentence that captures the essence, purpose, or values of a person, organization, or project.</p>
            </div>
          </div>
          {/* Right Section (Image) */}
          <div className="hidden lg:flex">
            <img
              width="400px"
              height="400px"
              src={'#'}
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full"
            />
          </div>
        </div>
      </div>
    </section>

{/* "Our Values" section */}

<section>
<div className="flex flex-col items-center justify-center py-8  mt-12">
      <h1 className=" text-center text-6xl mb-12 font-bold text-[#FF6F61] font-heading py-1">OUR VALUES</h1>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-3 md:grid-rows-2 gap-10 mt-2 px-10 w-[1200px] max-w-full mx-auto">
        {/*Accuracy  (Top-left corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 row-start-1">
          <img
            src={img_Accuracy} // Replace with the actual path to your icon
            alt="Accuracy"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold font-heading mb-2">Accuracy</h2>
          <p className="text-center font-text text-[#37474F]  text-text">
          We prioritize delivering medically sound and reliable information, ensuring all quotes are sourced from credible professionals or grounded in evidence-based knowledge.
          </p>
        </div>

        {/* Integrity (Top-right corner) */}
        <div className="flex flex-col items-center justify-center col-start-1  md:col-start-3  md:row-start-1 row-start-2">
          <img
            src={img_Integrity} // Replace with the actual path to your icon
            alt="Integrity"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold font-heading mb-2">Integrity</h2>
          <p className="text-center font-text text-gray-600 text-text">
          We commit to honesty and transparency, maintaining ethical standards in how we present content and engage with our community.
          </p>
        </div>

        {/* Empathy (Bottom-left corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 md:row-start-2 row-start-3">
          <img
            src={img_Empathy} // Replace with the actual path to your icon
            alt="Empathy"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold font-heading mb-2">Empathy</h2>
          <p className="text-center font-text text-gray-600 text-text">
           We value compassion and understanding, reflecting the human side of medicine through quotes that connect with the emotions and experiences of our users.
          </p>
        </div>

        {/* Education (Bottom-right corner) */}
        <div className="flex flex-col items-center justify-center col-start-1 md:col-start-3  md:row-start-2  row-start-4">
          <img
            src={img_Education} // Replace with the actual path to your icon
            alt="Education"
            className="w-36 h-36 mb-4"
          />
          <h2 className="text-2xl font-semibold font-heading mb-2">Education</h2>
          <p className="text-center font-text text-gray-600 text-text">
           We strive to inform and enlighten, curating quotes that enhance medical literacy and spark curiosity about health and wellness.
          </p>
        </div>
      </div>
      </div>
  </section>
      
  
      {/* "Meet the Team" section */}
      <div className=" bg-[#ECEFF1] max-w-screen">
        <div>
          
        </div>
      <div className="max-w-[1000px] mx-auto py-10">
        <div className="flex flex-col items-center justify-center pb-10 gap-4">
        <h2 className="text-6xl font-bold font-heading text-[#FF6F61] text-center ">MEET THE TEAM</h2>
        <div className=' w-25 h-0.5 bg-[#FF6F61]'></div>
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