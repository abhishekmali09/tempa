import React from 'react'

const HomeCard = ({serviceDetails}) => {
  return (
    <div className=' border-b-2  py-10 grid grid-cols-3 items-center text-xl font-text '>
        <p className='font-bold'>{serviceDetails.name}</p>
        <p className='text-right '>{serviceDetails.cost}</p>
         <div className='text-right'>
         <button className=' cursor-pointer border-2 border-teal-400 hover:bg-teal-400 duration-500 hover:text-white px-5 py-2 font-heading'>Book Now</button>
         </div>
    </div>
  )
}

export default HomeCard
