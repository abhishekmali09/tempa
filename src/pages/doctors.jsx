import React,{useState,useEffect} from 'react'
import { doctors,hospitals,treatments } from '../constants'
import DoctorsCard from '../components/doctorsCard'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
const Doctors = () => {
    const doctorsPerPage = 12;
    const [totalDoctors,setTotalDoctors] = useState(doctors);
    const totalPages = (Math.ceil(totalDoctors.length/doctorsPerPage));
    const [currentPage,setCurrentPage] = useState(1);
    const [isOpen,setIsOpen] = useState(false);
    const [currentPageDoc, setCurrentPageDoc] = useState(
        totalDoctors.slice((currentPage - 1) * doctorsPerPage, currentPage * doctorsPerPage)
    );
    const [searchData,setSearchData] = useState({
        "name":"",
        "city":"",
        "department":"",
        "hospital":"",
    })
    function handleSubmit(){
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
     useEffect(()=>{
                    handleSubmit()
    },[searchData])

  return (
    <div className='max-w-screen grayish pt-30 pb-10 '>
        <div className='max-w-[1200px] mx-auto flex flex-col gap-10'>
        <h1 className='text-5xl text-center font-heading '>Meet Our <span className='text-teal-500'>Specialists</span></h1>
        <div className='max-w-[1200px] mx-auto'>
            <form onSubmit={handleSubmit} className='flex gap-10 font-semibold flex-wrap  items-center justify-center'>
                    <input placeholder='New Delhi' className=' border-2 outline-0 p-2 rounded-lg max-w-[15rem] h-[2.5rem] text-md font-heading' value={searchData.city} onChange={(e)=>{setSearchData((prev)=>({...prev,"city":e.target.value}))  }}/>
                    <input placeholder='John Doe' className='border-2 outline-0 p-2 rounded-lg max-w-[15rem] h-[2.5rem] text-md font-heading' value={searchData.name} onChange={(e)=>setSearchData((prev)=>({...prev,"name":e.target.value}))}/>
                {/* <div className='flex gap-10 md:flex-row flex-col'> */}
               {/* <div className='flex gap-10 md:flex-row flex-col'> */}
                     <div className='flex items-center relative '>
                                <select className='border-2 outline-0 px-2 pr-12 rounded-lg appearance-none h-[2.5rem] max-w-[15rem] text-sm font-heading overflow-hidden' onClick={()=>setIsOpen(!isOpen)} onChange={(e)=>{setSearchData((prev)=>({...prev,"hospital":e.target.value}))
                                }}>
                                    <option value="">Select a hospital</option>
                                    {hospitals.map((hos)=>(<option key={hos.id} value={hos.name}>{hos.name}</option>))}
                                </select>
                                {
                                    isOpen ? <KeyboardArrowUpIcon className='absolute top-1 right-0 pr-2' fontSize='large' />:<KeyboardArrowDownIcon className='absolute top-1 right-0 pr-2' fontSize='large'/>
                                }
                            </div>
                        <div className='flex items-center relative'>
                        <select className='border-2 outline-0 px-2 rounded-lg appearance-none pr-12 overflow-hidden h-[2.5rem] max-w-[15rem] text-sm font-heading ' onClick={()=>setIsOpen(!isOpen)} onChange={(e)=>{setSearchData((prev)=>({...prev,"department":e.target.value}))
                        }}>
                            <option value="">Select treatment</option>
                            {treatments.map((hos)=>(<option key={hos.id} value={hos.name}>{hos.name}</option>))}
                        </select>
                        {
                            isOpen ? <KeyboardArrowUpIcon className='absolute top-1 right-0 pr-2' fontSize='large' />:<KeyboardArrowDownIcon className='absolute top-1 right-0 pr-2' fontSize='large'/>
                        }
                        </div>

                    {/* </div> */}
                    {/* <input placeholder="Cardiac Surgery" className='bg-teal-100 focus:border-2 outline-0 focus:border-teal-400 p-2 rounded-lg w-[20rem] h-[4rem] text-lg font-heading' value={searchData.department} onChange={(e)=>setSearchData((prev)=>({...prev,"department":e.target.value}))}/> */}
                {/* <button type='submit' className='teal px-8 py-2 h-[4rem] text-3xl text-white rounded-lg cursor-pointer font-heading'>Search</button> */}
            </form>
        </div>
            {
                totalDoctors.length!==0 &&
                <div className='w-full grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-4 '>
                {currentPageDoc.map((doctor)=>{
                    return <DoctorsCard doctorDetail={doctor} extracss=""/>
                })}
            </div>
            }
            {
                 totalDoctors.length===0 && <h1 className='w-full grayish pt-30 pb-10 text-4xl text-rose-500 flex justify-center items-center'>No Doctors Found With the Specified Filters</h1>
            }
        <div className='flex gap-5 justify-end items-end pt-3 text-2xl font-semibold mx-5 font-heading'>
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

export default Doctors
