import React from 'react'
import MainImage from "/Images/ServiceImage2.png"
const HospitalsCard = ({hospitalDetail}) => {
  return (
    <div className="flex gap-4 mx-auto flex-col justify-between  max-w-[30rem] h-[30rem] p-10  hover:shadow-2xl hover:shadow-[#403e3c] hover:scale-102 duration-850 rounded-4xl">
        <div className="  w-full h-1/2">
            <img src={hospitalDetail.image || MainImage} className="h-full w-full object-cover"/>
        </div>
        <div className="flex gap-5 flex-col  justify-between  ">
        <div className="flex flex-col gap-6">
            <h1 className="text-3xl font-heading">{hospitalDetail.name}</h1>
                <p className="text-lg font-semibold font-text">{hospitalDetail.address}</p>
        </div>
            <div className="">
            {/* <button type='submit' className=' hover:text-white text-black bg-teal-200 hover:bg-teal-500 px-8 py-2  rounded-lg cursor-pointer  '> */}
                <a href={`/hospitals/${hospitalDetail.id}`} className=' hover:text-white text-black bg-teal-200 hover:bg-teal-500 px-8 py-2  rounded-lg cursor-pointer text-center '>Know More</a>
                {/* </button> */}
            </div>
        </div>

    </div>
  )
}

export default HospitalsCard
