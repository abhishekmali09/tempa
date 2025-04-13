import MainImage from "/Images/doctor avatar.png"

const DoctorsCard = ({doctorDetail,extracss}) => {
  return (
    <a href={`/doctors/${doctorDetail.id}`}>
        <div className={`flex gap-4 flex-col p-5 mx-5 shadow-sm shadow-[#403e3c] rounded-xl ${extracss}`}>
            <div className="flex justify-center items-start w-full rounded-xl bg-gray-400">
                <img src={doctorDetail.image || MainImage} className="h-[15rem] w-full object-contain"/>
            </div>
            <div className="flex gap-5 flex-col justify-between ">
                <div className="flex flex-col gap-4 overflow-hidden text-nowrap">
                    <h1 className="text-2xl font-heading overflow-hidden">{doctorDetail.name}</h1>
                    <div className="flex gap-4">
                        <img src="https://img.icons8.com/pulsar-line/50/out-patient-department.png" width="25" />
                        <p className="text-xl font-semibold font-text ">{doctorDetail.department}</p>
                    </div>
                    <div className="flex gap-4">
                        <img src="https://img.icons8.com/external-konkapp-detailed-outline-konkapp/50/external-hospital-virus-transmission-konkapp-detailed-outline-konkapp.png" width="25" />
                    <h1 className="font-text ">{doctorDetail.hospital}</h1>
                    </div>
                    <div className="flex gap-4">
                        <img src="https://img.icons8.com/ios/50/briefcase-settings.png" width="25" />
                        <p className="font-text">{doctorDetail.experience} of experience </p>
                    </div>
                    <p className="md:block hidden font-text">{doctorDetail.shortDesc}</p>
                </div>
                <div className="flex gap-4 flex-col">
                    {/* <button type='submit' className='border-2 border-teal-600 hover:text-white hover:bg-teal-500 text-black  px-8 py-2  rounded-lg cursor-pointer font-heading duration-300'> */}
                    <button className='border-2 border-teal-600 hover:text-white hover:bg-teal-500 text-black px-8 py-2 text-center rounded-lg cursor-pointer font-heading duration-300'>Know More
                    </button>
                    {/* </button> */}
                    <a className='text-center  hover:bg-white golden-yellow px-8 py-2 hover:scale-102 duration-700 rounded-lg font-heading cursor-pointer' href={`/free-quote/d/${doctorDetail.id}`}>Book Appointment</a>
                </div>
            </div>

        </div>
    </a>
  )
}

export default DoctorsCard
