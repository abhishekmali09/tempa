import React from 'react';
import img_aboutUs from '../../public/Images/About us design.png';
import { Facebook, Twitter, LinkedIn } from '@mui/icons-material';
import { aboutUsData } from '../constants';
import GeneralCard from '../components/generalCard';

// TeamMemberCard Component with left-aligned content and MUI icons
const TeamMemberCard = ({ name, title, photo, social }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-[300px] flex flex-col justify-center items-center">
      <img src={photo} alt={name} className="w-32 h-32 mb-4 object-cover" />
      <h3 className="text-xl font-heading font-bold mb-2">{name}</h3>
      <p className="font-text text-lg mb-4">{title}</p>
      <div className="flex gap-4">
        <a href={social.facebook} target="_blank" rel="noopener noreferrer">
          <Facebook />
        </a>
        <a href={social.twitter} target="_blank" rel="noopener noreferrer">
          <Twitter />
        </a>
        <a href={social.linkedin} target="_blank" rel="noopener noreferrer">
          <LinkedIn />
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
        <div className="flex flex-col justify-around items-center h-fit gap-10 max-w-screen px-10 py-30 bg-[#ECEFF1]">
          {/* About Us Title */}
          <h1 className='md:text-7xl text-6xl font-heading text-rose-400 '>ABOUT US</h1>
          <div className="flex flex-col lg:flex-row justify-around items-center gap-10 w-full mt-[52px]">
            {/* Left Section */}
            <div className="flex flex-col max-w-md text-left mx-2">
              <h2 className='md:text-5xl text-4xl font-heading text-rose-400 '>OUR MISSION</h2>
              <p className="text-xl font-text text-[#37474F] mt-4">
                Our mission is to empower you with exceptional medical care, no matter where it takes you. We strive to break down barriers to world-class treatment by offering transparent, personalized, and reliable solutions. Your health and well-being are at the heart of everything we do—we’re committed to making your healing journey extraordinary.
              </p>
              <div>
                <h2 className='md:text-5xl py-8 text-4xl font-heading text-rose-400 '>MOTTO</h2>
                <p className="text-xl font-text text-[#37474F] mt-4">"Your Health, Our Promise—End-to-End Excellence." </p>
                <br />
                <p className="text-xl font-text text-[#37474F] mt-4">This isn’t just a tagline; it’s our guiding principle. We pledge to stand by you 24/7, delivering smarter, faster, and easier medical travel solutions with unwavering integrity and care.</p>
              </div>
            </div>
            {/* Right Section (Image) */}
            <div className="h-full hidden lg:flex">
            <img
            class="w-300 h-100 rounded-lg shadow-md" 
              width="1200"
              height="700"
             src={img_aboutUs}
              alt="About Us"
              className="rounded-lg shadow-lg max-w-full" />
           </div>
          </div>
        </div>

<section className='bg-white'>
<div className="flex flex-col items-center justify-center py-20 ">
      <h1 className=" text-center text-6xl mb-12 font-bold text-rose-400 font-heading py-1">OUR VALUES</h1>
      <div className="grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-2 gap-10 mt-2 px-10 w-[1200px] max-w-full mx-auto">
        {
            aboutUsData.map((data)=>{
                return <GeneralCard generalData={data}/>
            })
        }
      </div>
      </div>
  </section>

        <section className='bg-white'>
          <div className="flex flex-col items-center justify-center py-10 ">
            <h1 className='md:text-6xl py-3 text-4xl font-heading text-rose-400 '>OUR PROMISE</h1>
            <p className="text-xl text-center font-text text-[#37474F] mt-4 px-10 w-[1200px] max-w-full mx-auto">
              We promise to be more than a service—we’re your ally. With 24/7 dedicated support, personalized travel planning, and expert opinions until you’re satisfied,
              we ensure your health, comfort, and trust are never compromised. At Your Health Ally, your journey to wellness begins with us, and we’re with you until the end.
            </p>
          </div>
        </section>
      </section>

      {/* "Meet the Team" section */}
      <div className="w-full">
        <div className="max-w-[1200px] mx-auto py-20 px-10">
          <div className="flex flex-col items-center justify-center pb-10 gap-4">
            <h2 className="text-6xl font-semibold font-heading text-rose-400 text-center ">MEET THE TEAM</h2>
            <div className='w-25 h-1 bg-[#FF6F61]'></div>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={index} {...member} />
            ))}
          </div>
        </div>
      </div>

      {/* FAQs section
      <FAQs /> */}
    </div>
  );
};

export default AboutUs;


