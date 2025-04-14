import React,{useState} from 'react'
import {ContactInformation,businessName,newsLetterSchema} from '../constants.js'
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
const iconsReg = {
    "facebook":<FacebookOutlinedIcon/>,
    "linkedin":<LinkedInIcon/>,
    "instagram":<InstagramIcon/>,
    "x":<XIcon/>,
    "contactNumber":<PhoneOutlinedIcon/>,
    "emailAddress":<EmailOutlinedIcon/>,
    "address":<LocationOnOutlinedIcon/>
}
const Footer = () => {
   const { register, handleSubmit, formState: { errors } } = useForm({
           resolver: zodResolver(newsLetterSchema),
       });

        const [successResponse, setsuccessResponse] = useState(false); // Track submission status
           const [errorResponse,seterrorResponse] = useState(false);
           const [submitted, setsubmitted] = useState(false);
           const onSubmit = async (data) => {
               console.log("Form Data:", data);
               setsuccessResponse(false);
               seterrorResponse(false);
               setsubmitted(false);

            const contactFormData = new FormData();
            contactFormData.append("entry.509247396", data.email);

            try {
                await fetch(
                    "https://docs.google.com/forms/d/e/1FAIpQLSerEpqL_ZK5rY316a0seyxo_ZFcUHPI8NHFPEoMMOGT2xZ8aA/formResponse",
                    {
                        method: "POST",
                        body: contactFormData,
                        mode: "no-cors",
                    }
                );
                setsuccessResponse(true);
                console.log("newsLetter form submitted successfully");
            } catch (error) {
                seterrorResponse(true);
                console.error("Error submitting newsLetter form:", error);
                alert("An error occurred while submitting the newsLetter form.");
            } finally {
                setsubmitted(true);
            }
        }
// max-w-[1200px] mx-auto
  return (
    <footer className='grayish h-1/2 '>
        <div className='w-full border-b-2 '>
        <div className='pt-10 pb-5 pl-10 max-w-[1200px] mx-auto text-3xl font-heading'>{businessName}</div>
        </div>
         <div className='border-b-2'>
            <div className='flex flex-col max-w-[1200px] mx-auto'>
                    {/* <div className='flex flex-col md:border-r-2 gap-3 py-16 lg:col-span-2 p-10 font-heading'>
                        <div>
                            <h3>Subscribe to Our</h3>
                            <h3>Newsletter</h3>
                        </div>
                        <form onSubmit={handleSubmit(onSubmit)} noValidate >
                            <div className='flex flex-col pb-4'>
                                <label><small className='font-text'>Enter Your Email Address *</small></label>
                                <div className='flex gap-5 md:flex-row flex-col'>
                                <div className='flex-col'>
                                    <input type='email' {...register("email")} className='bg-red-200 px-6 py-2 focus:outline-0 focus:border-2 border-red-600 max-w-[20rem]' />
                                    {/* <input className='border-3 p-1' {...register("email")} /> */}
                                    {/* {errors.email && <p><small className="text-red-500">{errors.email.message}</small></p>} */}
                                {/* </div>
                                <button type='submit' className=' cursor-pointer coral px-8 py-2 text-white rounded-3xl max-w-[100px] h-[45px]'>Join</button>
                                </div>
                            </div>
                            <div className='flex gap-4'>
                                <label>Subscribe to newsletter</label>
                            </div>
                            {submitted && successResponse && <p className='font-semibold pt-3 font-heading text-teal-500'>
                                Thanks for Subscribing!
                            </p>}
                            {submitted && errorResponse && <p className='font-semibold pt-3 font-heading text-rose-500'>
                                Error while Subscribing!
                            </p>}
                        </form>
                        <a href='/contact-us' >Contact Us</a> */}
                    {/* </div> */}

                    <div className=' flex justify-center items-center divide-x *:px-4  font-text pt-5 flex-wrap'>
                        {
                            // console.log(Object.entries(ContactInformation))
                        Object.entries(ContactInformation).map((entry)=>
                            {
                                if(entry[0]!=="socialMediaHandles"){
                                    return  <div className=' flex gap-4 my-3 text-center'>
                                        <div>
                                        {iconsReg[entry[0]]}
                                        </div>
                                        <div>
                                            {entry[1]}
                                        </div>
                                </div>
                                }
                            })
                        }
                    </div>
                        {
                              <div className='flex gap-3 pb-5 justify-center items-center'>
                             { Object.entries(ContactInformation.socialMediaHandles).map((social)=>{
                                 return <a className='font-semibold cursor-pointer ' key={social[0]} target='_blank' href={social[1]}>{iconsReg[social[0]]}</a>
                             })}
                             </div>
                        }
                    <ul className='underline pb-16 flex  flex-wrap justify-center items-start font-heading px-10  divide-x *:px-4 ' >
                        <li>Privacy Policy</li>
                        <li>Accessibility Statement</li>
                        <a href=''><li>About us</li></a>
                        <a href=''><li>Contact us</li></a>
                        <a href=''><li>Doctors</li></a>
                        <a href=''><li>Hospitals</li></a>
                        <a href='/treatments'><li>Treatments</li></a>
                        <li>Compliance  Policy</li>
                    </ul>
            </div>
           </div>
           <div>
             <div className='max-w-[1200px] mx-auto text-center py-10 font-heading'>@2025 {businessName}. All rights reserved.</div>
           </div>

    </footer>
  )
}

export default Footer
