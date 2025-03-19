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
                    <p>At the forefront of healthcare, we strive to provide exceptional medical services tailored to your individual needs. Our commitment to quality care and patient well-being drives every aspect of our operations. Join us on this journey towards a healthier you.</p>
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
