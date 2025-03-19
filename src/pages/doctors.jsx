import React,{useState,useEffect} from 'react'
import { doctors } from '../constants'
import DoctorsCard from '../components/doctorsCard'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
const Doctors = () => {
    const doctorsPerPage = 10;
    const [totalDoctors,setTotalDoctors] = useState(doctors);
    const totalPages = (Math.ceil(totalDoctors.length/doctorsPerPage));
    const [currentPage,setCurrentPage] = useState(1);
    const [currentPageDoc, setCurrentPageDoc] = useState(
        totalDoctors.slice((currentPage - 1) * doctorsPerPage, currentPage * doctorsPerPage)
    );
    const [searchData,setSearchData] = useState({
        "name":"",
        "city":"",
        "department":"",
        "hospital":"",
    })
    function handleSubmit(e){
        e.preventDefault();
        // alert("data submitted",searchData);
        const filteredDoctors = doctors.filter((dc)=>{
            if(dc.detail.city.toLowerCase().includes(searchData.city.toLowerCase()) &&  dc.detail.department.toLowerCase().includes(searchData.department.toLowerCase()) && dc.name.toLowerCase().includes(searchData.name.toLowerCase()) &&  dc.detail.hospital.toLowerCase().includes(searchData.hospital.toLowerCase())) return dc;
        })
        console.log(filteredDoctors);
        setTotalDoctors(filteredDoctors);
        setCurrentPage(1);
    }
    useEffect(()=>{
        setCurrentPageDoc(totalDoctors.slice((currentPage-1)*(doctorsPerPage),currentPage*doctorsPerPage))
    },[currentPage,totalDoctors])

  return (
    <div className='max-w-screen grayish pt-30 pb-10 '>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-10'>
        <h1 className='text-5xl text-center font-heading text-teal-500'>DOCTORS</h1>
        <div className='max-w-[1200px] mx-auto'>
            <form onSubmit={handleSubmit} className='flex gap-10 font-semibold  flex-col '>
                <div className='flex gap-10 md:flex-row flex-col'>
                    <input placeholder='Jaypee Hospital' className='bg-teal-100 focus:border-2 outline-0 focus:border-teal-400 p-2 rounded-lg w-[20rem] h-[4rem] text-lg font-heading' value={searchData.hospital} onChange={(e)=>setSearchData((prev)=>({...prev,"hospital":e.target.value}))}/>
                    <input placeholder='John Doe' className='bg-teal-100 focus:border-2 outline-0 focus:border-teal-400 p-2 rounded-lg w-[20rem] h-[4rem] text-lg font-heading' value={searchData.name} onChange={(e)=>setSearchData((prev)=>({...prev,"name":e.target.value}))}/>
                </div>
               <div className='flex gap-10 md:flex-row flex-col'>
                    <input placeholder='Mumbai' className='bg-teal-100 focus:border-2 outline-0 focus:border-teal-400 p-2 rounded-lg w-[20rem] h-[4rem] text-lg font-heading' value={searchData.city} onChange={(e)=>setSearchData((prev)=>({...prev,"city":e.target.value}))}/>
                    <input placeholder="Cardiac Surgery" className='bg-teal-100 focus:border-2 outline-0 focus:border-teal-400 p-2 rounded-lg w-[20rem] h-[4rem] text-lg font-heading' value={searchData.department} onChange={(e)=>setSearchData((prev)=>({...prev,"department":e.target.value}))}/>
               </div>
                <button type='submit' className='teal px-8 py-2 h-[4rem] text-3xl text-white rounded-lg cursor-pointer font-heading'>Search</button>
            </form>
        </div>
        <div className='w-full flex flex-col justify-center items-start gap-10 px-10'>
            {
                totalDoctors.length!==0 && currentPageDoc.map((doctor)=>{
                    return <DoctorsCard doctorDetail={doctor}/>
                })
            }
            {
                 totalDoctors.length===0 && <h1 className='w-full grayish pt-30 pb-10 text-4xl text-rose-500 flex justify-center items-center'>No Doctors Found With the Specified Filters</h1>
            }
        </div>
        </div>
        <div className='flex gap-5 justify-center items-end pt-10'>
            <ArrowCircleLeftIcon
        className={`cursor-pointer text-teal-500 ${
            currentPage === 1 ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`}
        fontSize="large"
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        />
        <p  className='text-teal-800 text-4xl font-bold font-heading'>{currentPage}</p>

        <ArrowCircleRightIcon className={`cursor-pointer text-teal-500 ${
            currentPage === totalPages ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`} onClick={()=>setCurrentPage((prevPage)=>prevPage+1)}  fontSize="large"></ArrowCircleRightIcon>
        </div>
    </div>
  )
}

export default Doctors
