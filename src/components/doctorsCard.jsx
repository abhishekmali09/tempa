import MainImage from "/Images/PuttingGloves.png"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';

const DoctorsCard = ({doctorDetail}) => {
    console.log(doctorDetail);
  return (
    <div className="flex gap-4 mx-auto md:flex-row flex-col lg:max-w-[65rem] md:max-w-[45rem] max-w-[25rem] p-10  shadow-2xl shadow-[#403e3c] hover:scale-105 duration-850 rounded-4xl">
        <div className="flex justify-center items-start md:max-w-1/2 w-full">
            <img src={MainImage} className="h-full"/>
        </div>
        <div className="flex gap-5 flex-col  justify-between  ">
            <div className="flex flex-col gap-6">
                <h1 className="text-3xl">{doctorDetail.name}</h1>
                <div className="flex gap-4">
                    <CalendarTodayIcon/>
                    <p className="text-xl font-semibold">{doctorDetail.department}</p>
                </div>
                <div className="flex gap-4">
                <LocalHospitalIcon/>
                <h1>{doctorDetail.hospital}</h1>
                </div>
                <div className="flex gap-4">
                    <MedicalServicesIcon/>
                    <p>{doctorDetail.experience} of Experience</p>
                </div>
                <p className="md:block hidden">{doctorDetail.shortDesc}</p>
            </div>
               <div className="flex gap-7 flex-col md:flex-row">
                <button type='submit' className='hover:bg-[#966b54] hover:text-white text-black bg-[#decdc3] px-8 py-2  rounded-lg cursor-pointer'>Know More</button>
                <button type='submit' className='hover:bg-[#966b54] hover:text-white text-black bg-[#decdc3] px-8 py-2  rounded-lg '>Book Appointment</button>
               </div>
        </div>

    </div>
  )
}

export default DoctorsCard
