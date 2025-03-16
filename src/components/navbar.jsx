import React,{useState} from 'react'
import { businessName } from '../constants'
const Navbar = () => {
    const [isActive,setIsActive] = useState(false);
    return (
    <div className='absolute flex justify-around w-full items-center pt-4'>
        <p className='text-2xl'>{businessName}</p>
        <button className='z-10 cursor-pointer text-lg py-2 px-5 bg-black text-white rounded-3xl' onClick={()=>setIsActive((prev)=>!prev)}>Menu</button>
        {
            isActive && <ul className=' absolute h-screen flex flex-col gap-7 bg-black text-white text-2xl justify-center items-center inset-0'>
                <li><a href="/">Home</a></li>
                <li>About Us</li>
                <li><a href='/treatments'>Treatments</a></li>
                <li>Hosptials</li>
                <li><a href='/contact-us'>Contact Us</a></li>
                <li><a href='/free-quote'>Free Quote</a></li>
            </ul>
        }
    </div>
  )
}

export default Navbar
