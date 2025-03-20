import React from 'react'
import MainImage from "/Images/heroSectionModified.png"
const HeroSection = () => {
  return (
    <section className='flex grayish flex-col-reverse lg:gap-0 gap-8 relative lg:flex-row h-screen'>
        {/* sm:max-w-screen lg:w-1/2 */}
        <div className='absolute inset-0 flex flex-col gap-4  w-full justify-center items-center pb-10'>
            {/* <p className='text-3xl font-heading'>Quality Care</p> */}
            <div className='md:text-8xl  text-6xl p-6 font-heading text-center text-white '>
                <h1 ><span className='text-rose-400'>Your</span> Health,</h1>
                <h1>Our<span className='text-rose-400'> Priority</span></h1>
            </div>
            <button className='cursor-pointer font-text coral hover:scale-102 duration-700 rounded-3xl px-8 py-4 text-white md:text-3xl  text-2xl'><a href='/free-quote'>Get Medical opinion</a></button>
        </div>
        <div className=' w-full'>
            <img src={MainImage} className='h-screen w-full object-cover' alt="Hero Section Image" />
        </div>
    </section>
  )
}

export default HeroSection
