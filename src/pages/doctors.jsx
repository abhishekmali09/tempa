import React,{useState,useEffect} from 'react'
import { doctors } from '../constants'
import DoctorsCard from '../components/doctorsCard'
import {useForm} from "react-hook-form";
const Doctors = () => {
    const {register,handleSubmit} = useForm();
    const doctorsPerPage = 10;
    const totalPages = (Math.ceil(doctors.length/doctorsPerPage));
    const [currentPage,setCurrentPage] = useState(1);
    const [currentPageDoc, setCurrentPageDoc] = useState(
        doctors.slice((currentPage - 1) * doctorsPerPage, currentPage * doctorsPerPage)
    );
    function onSubmit(e,data){
        e.preventDefault();
        alert("data submitted",data);
    }
    useEffect(()=>{
        setCurrentPageDoc(doctors.slice((currentPage-1)*(doctorsPerPage),currentPage*doctorsPerPage))
    },[currentPage])
  return (
    <div className='max-w-screen bg-[#faf3eb] pt-30 pb-10 '>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-10'>
        <h1 className='text-5xl text-center'>Doctors</h1>
        <div className='max-w-[1200px] mx-auto'>
            <form onSubmit={onSubmit} className='flex gap-5 font-semibold md:flex-row flex-col '>
                <input placeholder='Mumbai' className='bg-[#decdc3] focus:border-2 border-[#966b54] p-2 rounded-lg w-[20rem] h-[4rem] text-xl' />
                <input placeholder="Cardiac Surgery" className='bg-[#decdc3] focus:border-2 border-[#966b54] p-2 rounded-lg w-[20rem] h-[4rem] text-xl' />
                <button type='submit' className='bg-[#966b54] px-8 py-2 text-white rounded-lg '>Search</button>
            </form>
        </div>
        <div className='w-full flex flex-col justify-center items-start gap-10 px-10'>
            {
                currentPageDoc.length!==0 && currentPageDoc.map((doctor)=>{
                    return <DoctorsCard doctorDetail={doctor}/>
                })
            }
        </div>
        </div>
        <div className='flex gap-5 justify-center items-end pt-10'>
            <button type='submit' className={`bg-[#966b54] px-8 py-2 text-white rounded-lg`} onClick={()=>setCurrentPage((prevPage)=>prevPage-1)} disabled={currentPage===1}>{"<"}</button>
            <button type='submit' className='bg-[#966b54] px-8 py-2 text-white rounded-lg '>{currentPage}</button>
            <button type='submit' className={`bg-[#966b54] px-8 py-2 text-white rounded-lg `} onClick={()=>setCurrentPage((prevPage)=>prevPage+1)} disabled={currentPage===totalPages}>{">"}</button>
        </div>
    </div>
  )
}

export default Doctors
