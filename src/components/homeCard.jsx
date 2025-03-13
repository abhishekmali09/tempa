import React from 'react'

const HomeCard = ({serviceDetails}) => {
  return (
    <div className=' border-b-2 py-10 grid grid-cols-3 items-center text-xl '>
        <p>{serviceDetails.name}</p>
        <p className='text-right'>{serviceDetails.cost}</p>
         <div className='text-right'>
         <button className=' cursor-pointer bg-[#966b54] px-5 py-2 text-white'>Book Now</button>
         </div>
    </div>
  )
}

export default HomeCard
