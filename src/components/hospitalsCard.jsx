import React from 'react'
import MainImage from "/Images/ServiceImage2.png"
const HospitalsCard = ({hospitalDetail}) => {
  return (
    <div className="flex gap-4 mx-auto flex-col  md:w-[30rem] w-[20rem] h-[30rem] p-10  shadow-2xl shadow-[#403e3c] hover:scale-105 duration-850 rounded-4xl">
        <div className="flex justify-center items-start  w-full h-1/2">
            <img src={MainImage} className="h-full w-full"/>
        </div>
        <div className="flex gap-5 flex-col  justify-between  ">
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl">{hospitalDetail.name}</h1>
                    <p className="text-xl font-semibold">{hospitalDetail.address}</p>
            </div>
               <div className="flex gap-7 flex-col md:flex-row">
                <button type='submit' className='hover:bg-[#966b54] hover:text-white text-black bg-[#decdc3] px-8 py-2  rounded-lg cursor-pointer'>Know More</button>
               </div>
        </div>

    </div>
  )
}

export default HospitalsCard
