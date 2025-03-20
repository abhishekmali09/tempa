import MainImage from "/Images/doctor avatar.png"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const DoctorsCard = ({doctorDetail}) => {
  return (
    <div className="flex gap-4 mx-auto md:flex-row flex-col lg:max-w-[55rem] md:max-w-[45rem] max-w-[25rem] p-10  hover:shadow-2xl hover:shadow-[#403e3c] hover:scale-102 duration-850 rounded-4xl">
        <div className="flex justify-center items-start md:max-w-1/2 w-full">
            <img src={doctorDetail.image || MainImage} className="h-full object-contain"/>
        </div>
        <div className="flex gap-5 flex-col  justify-between  ">
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl font-heading">{doctorDetail.name}</h1>
                <div className="flex gap-4">
                    <CalendarTodayIcon/>
                    <p className="text-xl font-semibold font-text">{doctorDetail.department}</p>
                </div>
                <div className="flex gap-4">
                <LocalHospitalIcon/>
                <h1 className="font-text">{doctorDetail.hospital}</h1>
                </div>
                <div className="flex gap-4">
                    <MedicalServicesIcon/>
                    <p className="font-text">{doctorDetail.experience} of Experience</p>
                </div>
                <p className="md:block hidden font-text">{doctorDetail.shortDesc}</p>
            </div>
               <div className="flex gap-7 flex-col md:flex-row">
                {/* <button type='submit' className='border-2 border-teal-600 hover:text-white hover:bg-teal-500 text-black  px-8 py-2  rounded-lg cursor-pointer font-heading duration-300'> */}
                <a href={`/doctors/${doctorDetail.id}` } className='border-2 border-teal-600 hover:text-white hover:bg-teal-500 text-black px-8 py-2 text-center rounded-lg cursor-pointer font-heading duration-300'>Know More
                </a>
                {/* </button> */}
                <a className='text-center hover:border-2 hover:border-yellow-500 hover:bg-white golden-yellow px-8 py-2  rounded-lg font-heading cursor-pointer' href={`/free-quote/d/${doctorDetail.id}`}>Book Appointment</a>
               </div>
        </div>

    </div>
  )
}

export default DoctorsCard
