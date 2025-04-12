import React,{useState,useEffect} from 'react'
import { hospitals } from '../constants'
import HospitalsCard from '../components/hospitalsCard'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
HospitalsCard
const Hospitals = () => {
        const [totalHospitals,setTotalHospitals] = useState(hospitals);
        const hospitalsPerPage = 12;
        const totalPages = (Math.ceil(totalHospitals.length/hospitalsPerPage));
        const [currentPage,setCurrentPage] = useState(1);
        const [currentPageHos, setCurrentPageHos] = useState(
            totalHospitals.slice((currentPage - 1) * hospitalsPerPage, currentPage * hospitalsPerPage)
        );
        const [searchData,setSearchData] = useState({
                "name":"",
                "city":"",
            })
         function handleSubmit(e){
                e.preventDefault();
                // alert("data submitted",searchData);
                const filteredHospitals = hospitals.filter((hs)=>{
                    if(hs.name.toLowerCase().includes(searchData.name.toLowerCase()) &&  hs.detail.city.toLowerCase().includes(searchData.city.toLowerCase())) return hs;
                })
                console.log(filteredHospitals);
                setTotalHospitals(filteredHospitals);
                setCurrentPage(1);
            }
        useEffect(()=>{
            setCurrentPageHos(totalHospitals.slice((currentPage-1)*(hospitalsPerPage),currentPage*hospitalsPerPage))
            },[currentPage,totalHospitals])
  return (
    <div className='max-w-screen grayish pt-30 pb-10 '>
    <div className='max-w-[1200px] mx-auto flex flex-col gap-10 px-10'>
    <h1 className='text-5xl text-center text-teal-500 font-medium font-heading'>HOSPITALS</h1>
    <div className='max-w-[1200px] mx-auto'>
        <form onSubmit={handleSubmit} className='w-full flex gap-10 font-semibold flex-col lg:flex-row'>
            <div className='flex gap-10 lg:flex-row flex-col'>
                <input placeholder='Jaypee Hospital' className='bg-teal-100 focus:border-2 outline-0 focus:border-teal-400 p-2 rounded-lg sm:w-[20rem] max-w-[20rem] h-[4rem] text-lg font-heading' value={searchData.name} onChange={(e)=>setSearchData((prev)=>({...prev,"name":e.target.value}))}/>
                <input placeholder='New Delhi' className='bg-teal-100 focus:border-2 outline-0 focus:border-teal-400 p-2 rounded-lg w-[20rem] h-[4rem] text-lg font-heading' value={searchData.city} onChange={(e)=>setSearchData((prev)=>({...prev,"city":e.target.value}))}/>
            </div>
            <button type='submit' className='teal px-8 py-2 h-[4rem] text-white rounded-lg cursor-pointer font-text text-xl hover:font-semibold'>Search</button>
        </form>
    </div>
        {
            totalHospitals.length!==0 &&
            <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10 '>
            {currentPageHos.map((hospital)=>{
                return <HospitalsCard hospitalDetail={hospital}/>
            })}
            </div>
        }
        {
                 totalHospitals.length===0 && <h1 className='w-full grayish pt-30 pb-10 text-4xl text-rose-500 flex justify-center items-center'>No Hospitals Found With the Specified Filters</h1>
        }
        <div className='flex gap-5 justify-end items-end pt-3 text-2xl font-semibold '>
            <p
        className={`cursor-pointer text-teal-500 hover:text-teal-800 duration-500 ${
            currentPage <= 1 ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`}
        onClick={() => setCurrentPage((prevPage) => prevPage - 1)}
        >Prev</p>
        {/* <p  className='text-teal-800 text-4xl font-bold font-heading'>{currentPage}</p> */}

        <p className={`cursor-pointer text-teal-500 hover:text-teal-800 duration-500 ${
            currentPage >= totalPages ? "opacity-50 cursor-not-allowed pointer-events-none" : ""
        }`} onClick={()=>setCurrentPage((prevPage)=>prevPage+1)} >Next</p>
        </div>
    </div>

</div>
  )
}

export default Hospitals
