import React from 'react'

const HomeCard = ({ index, handleSlideClick,treatmentDetails}) => {
  return (
    <a className='embla__slide my-10 rounded-2xl py-10 px-10 items-center text-xl  hover:bg-rose-200 hover:text-black duration-700 font-heading flex ' onClick={() => handleSlideClick(index)} href={`/free-quote/t/${treatmentDetails.id}`}>
        <p className=' text-4xl'>{treatmentDetails.name}</p>
        {/* <p className='text-right '>{serviceDetails.cost}</p>
         <div className='text-right'>
         <button className=' cursor-pointer border-2 border-teal-400 hover:bg-teal-400 duration-500 hover:text-white px-5 py-2 font-heading'>Book Now</button>
         </div> */}
    </a>
  )
}

export default HomeCard
