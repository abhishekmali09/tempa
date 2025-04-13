import React from 'react'
import MainImage from "/Images/ServiceImage2.png"
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
const HospitalsCard = ({hospitalDetail,extracss}) => {
    const name = hospitalDetail.name.length>=20?`${hospitalDetail.name.slice(0,17)}...`:hospitalDetail.name;
  return (
   <a href={`/hospitals/${hospitalDetail.id}`}>
     <div className={`flex gap-4 mx-auto flex-col justify-between h-[16rem] shadow-sm shadow-[#403e3c]  hover:scale-101 duration-850 rounded-xl ${extracss}`}>
        <div className="  w-full">
            <img src={hospitalDetail.image || MainImage} className="h-[11rem] w-full object-cover rounded-t-xl "/>
        </div>
        <div className="flex  flex-col justify-between pb-10 h-1/4 ">
        <div className="flex flex-col px-4 pb-2 flex-nowrap">
            <h1 className="text-xl font-heading flex-nowrap overflow-hidden">{name}  <ChevronRightIcon/></h1>
            <p className="text-sm font-semibold font-text">{hospitalDetail.address}</p>
        </div>
            {/* <div className="">
            <button type='submit' className=' hover:text-white text-black bg-teal-200 hover:bg-teal-500 px-8 py-2  rounded-lg cursor-pointer  '>
                <a href={`/hospitals/${hospitalDetail.id}`} className=' hover:text-white text-black bg-teal-200 hover:bg-teal-500 px-8 py-2  rounded-lg cursor-pointer text-center '>Know More</a>
                </button>
            </div> */}
        </div>

    </div>
   </a>
  )
}

export default HospitalsCard
