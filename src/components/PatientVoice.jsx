import React from 'react'
import MainImage from "/Images/PuttingGloves.png"
const PatientVoice = () => {
  return (
    <section className='grayish'>
       <div className='flex flex-col lg:flex-row max-w-[1200px] max-h-1/2  mx-auto justify-between' >
        <div className='grayish w-full lg:w-1/2 text-white  flex p-10'>
                <div className=' flex flex-col gap-5  justify-start items-start font-heading text-black'>
                    <div>
                        <h1 className='text-4xl'>Our <span className='text-rose-400'>Medical</span></h1>
                        <h1 className='text-4xl text-rose-400'>Journey</h1>
                        <h1 className='text-4xl'>Begins Here</h1>
                    </div>
                    <p className='text-justify'>At Your Health Ally, we lead the way in medical travel, delivering world-class care tailored to your unique needs. Our mission is simple yet bold: to ensure your healing journey is seamless, transparent, and exceptional. With unwavering dedication to your health, comfort, and peace of mind, we strive to redefine excellence in every step. Begin your path to wellness with a partner you can trust.</p>
                    <button className='py-2 px-5 border-2 border-rose-400 hover:bg-rose-400 duration-700 rounded-2xl '>Learn More</button>
                </div>
            </div>
            <div className=' lg:w-1/2 w-full py-10 lg:px-10 grayish'>
                <img src={MainImage} className='w-full h-full' alt="Hero Section Image" />
            </div>
       </div>
    </section>
  )
}

export default PatientVoice
