import React from 'react'
import MainImage from "/Images/heroSectionModified.png"
import MainVideo from "/Untitled design.mp4"
const HeroSection = () => {
  return (
    <section className='flex grayish flex-col-reverse lg:gap-0 gap-8 relative lg:flex-row h-screen'>
        {/* sm:max-w-screen lg:w-1/2 */}
            <video src={MainVideo} autoPlay={true} loop={true} className='w-full object-cover'></video>
        <div className='absolute inset-0 flex flex-col gap-4  w-full justify-center items-center pb-10'>
            {/* <p className='text-3xl font-heading'>Quality Care</p> */}
            <div className='p-6 font-heading text-center text-white '>
                <h1 className=' md:text-6xl text-3xl max-w-[60rem]'>Faster, Smarter, Stress-Free Medical Travel
                </h1>
                <p className='font-semibold text-lg pt-9 max-w-[60rem]'> Your Health Ally guides you ensuring best treatment, comfort, and total care of your loved ones along with you.</p>
            </div>
            <button className='cursor-pointer font-text coral hover:scale-102 duration-700 rounded-3xl px-8 py-4 text-white text-lg'><a href='/free-quote'>Get Medical opinion</a></button>
        </div>
        {/* <div className=' w-full'>
            <img src={MainImage} className='h-screen w-full object-cover' alt="Hero Section Image" />
        </div> */}
    </section>
  )
}

export default HeroSection
