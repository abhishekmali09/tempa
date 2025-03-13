import React from 'react'
import MainImage from "/Images/PuttingGloves.png"
const PatientVoice = () => {
  return (
    <section className='flex flex-col sm:flex-row max-h-1/2'>
        <div className='bg-[#966b54]  text-white sm:max-w-screen w-1/2 flex pl-10'>
            <div className='w-1/2 flex flex-col gap-5 justify-center items-start'>
                <h1 className='text-4xl'>Our Medical</h1>
                <h1 className='text-4xl'>Journey</h1>
                <h1 className='text-4xl'>Begins Here</h1>
                <p>At the forefront of healthcare, we strive to provide exceptional medical services tailored to your individual needs. Our commitment to quality care and patient well-being drives every aspect of our operations. Join us on this journey towards a healthier you.</p>
                <button className='py-2 px-5 border-2 border-white rounded-2xl '>Learn More</button>
            </div>
        </div>
        <div className='sm:max-w-screen w-1/2'>
            <img src={MainImage} className='w-full h-full' alt="Hero Section Image" />
        </div>
    </section>
  )
}

export default PatientVoice
