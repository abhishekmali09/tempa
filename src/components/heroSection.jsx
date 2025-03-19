import React from 'react'
import MainImage from "/Images/MainImage.png"
const HeroSection = () => {
  return (
    <section className='flex grayish flex-col-reverse md:gap-0 gap-6  md:flex-row h-screen'>
        <div className='flex flex-col gap-4 sm:max-w-screen md:w-1/2 w-full justify-center items-center pb-10'>
            <p className='text-xl font-text'>Quality Care</p>
            <div className='text-6xl pb-6 font-heading'>
                <h1 ><span className='text-rose-400'>Your</span> Health</h1>
                <h1>Our<span className='text-rose-400'>Priority</span></h1>
            </div>
            <button className='cursor-pointer font-text coral hover:scale-102 duration-700 rounded-3xl px-5 py-2 text-white text-lg'><a href='/free-quote'>Get Medical opinion</a></button>
        </div>
        <div className='sm:max-w-screen md:w-1/2 w-full'>
            <img src={MainImage} className='h-screen w-full' alt="Hero Section Image" />
        </div>
    </section>
  )
}

export default HeroSection
