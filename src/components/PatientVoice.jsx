import React from 'react'
import MainImage from "/Images/PuttingGloves.png"
const PatientVoice = () => {
  return (
    <section className='flex flex-col lg:flex-row w-full max-h-1/2'>
        <div className='grayish text-white w-full lg:w-1/2 flex p-10'>
            <div className='w-1/2 flex flex-col gap-5  justify-start items-start font-heading text-black'>
                <div>
                    <h1 className='text-4xl'>Our <span className='text-rose-400'>Medical</span></h1>
                    <h1 className='text-4xl text-rose-400'>Journey</h1>
                    <h1 className='text-4xl'>Begins Here</h1>
                </div>
                <p>At the forefront of healthcare, we strive to provide exceptional medical services tailored to your individual needs. Our commitment to quality care and patient well-being drives every aspect of our operations. Join us on this journey towards a healthier you.</p>
                <button className='py-2 px-5 border-2 border-rose-400 hover:bg-rose-400 duration-700 rounded-2xl '>Learn More</button>
            </div>
        </div>
        <div className=' lg:w-1/2 w-full py-10 lg:px-10 grayish'>
            <img src={MainImage} className='w-full h-full' alt="Hero Section Image" />
        </div>
    </section>
  )
}

export default PatientVoice
