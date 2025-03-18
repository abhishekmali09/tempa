import React,{useState} from 'react'
import {ContactInformation,businessName} from '../constants.js'
import ThumbUpOffAltOutlinedIcon from '@mui/icons-material/ThumbUpOffAltOutlined';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
const iconsReg = {
    "facebook":<FacebookOutlinedIcon/>,
    "linkedin":<LinkedInIcon/>,
    "instagram":<InstagramIcon/>,
    "x":<XIcon/>
}
const Footer = () => {
    const [email,setEmail] = useState("");

    function handleSubmittion(e){
        e.preventDefault();
        // Submit the form
        console.log(email);
    }
  return (
    <footer className='grayish h-1/2'>
        <div className='py-10 pl-3 border-b-2 text-3xl font-heading'>{businessName}</div>
        <div className='grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-4 border-b-2'>
            <div className='flex flex-col md:border-r-2 gap-3 py-16 lg:col-span-2 p-10 font-heading'>
                <div>
                    <h3>Subscribe to Our</h3>
                    <h3>Newsletter</h3>
                </div>
                <form onSubmit={handleSubmittion}>
                    <div className='flex flex-col pb-4'>
                        <label><small>Enter Your Email Address *</small></label>
                        <div className='flex gap-5 md:flex-row flex-col'>
                        <input type='email' name='emailAddress' value={email} onChange={(e)=> setEmail(e.target.value)} className='bg-red-200 px-6 py-2 focus:outline-0 focus:border-2 border-red-600 max-w-[20rem]' />
                        <button type='submit' className='coral px-8 py-2 text-white rounded-3xl max-w-[100px]'>Join</button>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <input type='checkbox'  />
                        <label>Yes,Subscribe me to newsletter</label>
                    </div>
                </form>
                <a href='/contact-us' >Contact Us</a>
            </div>

            <div className=' flex flex-col justify-center items-start px-10 font-text'>
                {
                    // console.log(Object.entries(ContactInformation))
                Object.entries(ContactInformation).map((entry)=>
                    {
                        if(entry[0]!=="socialMediaHandles"){
                            return  <div className='max-w-[220px]'>
                            {entry[1]}
                        </div>
                        }
                        else{
                            return <div className='flex gap-3 pt-3'>
                               { Object.entries(entry[1]).map((social)=>{
                                 return <a className='font-semibold cursor-pointer ' key={social[0]} target='_blank' href={social[1]}>{iconsReg[social[0]]}</a>
                               })}
                            </div>
                        }

                    })
                }
            </div>
            <ul className='underline py-16 flex flex-col justify-center items-start font-heading px-10'>
                <li>Privacy Policy</li>
                <li>Accessibility Statement</li>
                <li>Terms and Conditions</li>
                <li>Refund Policy</li>
            </ul>
        </div>
        <div className='py-10 pl-10 font-heading'>@2025 {businessName}</div>
    </footer>
  )
}

export default Footer
