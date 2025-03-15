import React from 'react'
import MainImage from "/Images/MainImage.png"
const HeroSection = () => {
  return (
    <section className='flex bg-[#decdc3] flex-col sm:flex-row h-screen'>
        <div className='flex flex-col gap-4 sm:max-w-screen w-1/2 justify-center items-center'>
            <p>Quality Care</p>
            <div className='text-6xl pb-6'>
                <h1>Abhishek Health,</h1>
                <h1>Our Priority</h1>
            </div>
            <button className='cursor-pointer bg-[#966b54] rounded-3xl px-5 py-2 text-white'>Get Medical opinion</button>
        </div>
        <div className='sm:max-w-screen w-1/2'>
            <img src={MainImage} className='h-screen w-full' alt="Hero Section Image" />
        </div>
    </section>
  )
}

export default HeroSection
