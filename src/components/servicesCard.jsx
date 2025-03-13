import React from 'react'

const ServicesCard = ({serviceDetails}) => {
  return (
    <div className='max-w-[calc((100vw-40px)/3)] bg-[#e3d4ca] rounded-xl'>
        <img src={serviceDetails.img} className='w-full h-10/12' />
        <div className='text-center pt-5 text-xl'>
            <h1>{serviceDetails.name}</h1>
        </div>
    </div>
  )
}

export default ServicesCard
