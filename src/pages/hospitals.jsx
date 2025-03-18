import React,{useState,useEffect} from 'react'
import { hospitals } from '../constants'
import HospitalsCard from '../components/hospitalsCard'
import {useForm} from "react-hook-form";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
HospitalsCard
const Hospitals = () => {
       const {register,handleSubmit} = useForm();
        const hospitalsPerPage = 12;
        const totalPages = (Math.ceil(hospitals.length/hospitalsPerPage));
        const [currentPage,setCurrentPage] = useState(1);
        const [currentPageHos, setCurrentPageHos] = useState(
            hospitals.slice((currentPage - 1) * hospitalsPerPage, currentPage * hospitalsPerPage)
        );
        function onSubmit(e,data){
            e.preventDefault();
            alert("data submitted",data);
        }
        useEffect(()=>{
            setCurrentPageHos(hospitals.slice((currentPage-1)*(hospitalsPerPage),currentPage*hospitalsPerPage))
            },[currentPage])
  return (
    <div className='max-w-screen grayish pt-30 pb-10 '>
    <div className='max-w-[1200px] mx-auto flex flex-col gap-10'>
    <h1 className='text-5xl text-center text-teal-500 font-medium font-heading'>HOSPITALS</h1>
    <div className='max-w-[1200px] mx-auto'>
        <form onSubmit={onSubmit} className='flex gap-5 font-semibold md:flex-row flex-col '>
            <input placeholder='Mumbai' className='bg-[#decdc3] focus:border-2 border-[#966b54] p-2 rounded-lg w-[20rem] h-[4rem] text-xl' />
            {/* <input placeholder="Cardiac Surgery" className='bg-[#decdc3] focus:border-2 border-[#966b54] p-2 rounded-lg w-[20rem] h-[4rem] text-xl' /> */}
            <button type='submit' className='bg-[#966b54] px-8 py-2 text-white rounded-lg '>Search</button>
        </form>
    </div>
    <div className='w-full grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10 px-10'>
        {
            currentPageHos.length!==0 && currentPageHos.map((hospital)=>{
                return <HospitalsCard hospitalDetail={hospital}/>
            })
        }
    </div>
    </div>
    <div className='flex gap-5 justify-center items-center pt-10'>
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

export default Hospitals
