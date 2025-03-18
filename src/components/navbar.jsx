import React,{useState} from 'react'
import { businessName } from '../constants'
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
const Navbar = () => {
    const [isActive,setIsActive] = useState(false);
    return (
    <div className='absolute flex justify-around w-full items-center pt-4'>
        <p className='text-2xl font-heading'>{businessName}</p>
        <button className={`z-10 cursor-pointer text-lg py-2 px-5 ${isActive===false?'block':'hidden'} `} onClick={()=>setIsActive((prev)=>!prev)}><MenuIcon fontSize='large'></MenuIcon></button>
        <button className={`${isActive===true?'block':'hidden'} py-2 px-5 z-10 cursor-pointer`} onClick={()=>setIsActive((prev)=>!prev)}><CloseIcon fontSize='large'></CloseIcon></button>
        {
            isActive && <ul className=' absolute h-screen flex flex-col gap-7 coral text-white text-3xl justify-center items-center inset-0 font-heading *:hover:scale-108 *:duration-700'>
                <li><a href="/">Home</a></li>
                <li><a href='/about-us'>About Us </a></li>
                <li><a href='/treatments'>Treatments</a></li>
                <li><a href='/hospitals'>Hospitals</a></li>
                <li><a href='/doctors'>Doctors</a></li>
                <li><a href='/contact-us'>Contact Us</a></li>
                <li><a href='/free-quote'>Free Quote</a></li>
            </ul>
        }
    </div>
  )
}

export default Navbar
