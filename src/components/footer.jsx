import React,{useState} from 'react'
import {ContactInformation,businessName} from '../constants.js'
const Footer = () => {
    const [email,setEmail] = useState("");

    function handleSubmittion(e){
        e.preventDefault();
        // Submit the form
        console.log(email);
    }
  return (
    <footer className='bg-[#faf3eb] h-1/2'>
        <div className='py-10 pl-3 border-b-2 text-3xl'>{businessName}</div>
        <div className='grid grid-cols-1 grid-rows-3 md:grid-rows-1 md:grid-cols-4 border-b-2'>
            <div className='flex flex-col border-r-2 gap-3 py-16 md:col-span-2 pl-10'>
                <div>
                    <h3>Subscribe to Our</h3>
                    <h3>Newsletter</h3>
                </div>
                <form onSubmit={handleSubmittion}>
                    <div className='flex flex-col '>
                        <label><small>Enter Your Email Address *</small></label>
                        <div className='flex gap-5'>
                        <input type='email' name='emailAddress' value={email} onChange={(e)=> setEmail(e.target.value)} className='bg-[#decdc3]' />
                        <button type='submit' className='bg-[#966b54] px-8 py-2 text-white rounded-3xl'>Join</button>
                        </div>
                    </div>
                    <input type='checkbox'  />
                    <label>Yes,Subscribe me to newsletter</label>
                </form>
                <a>Contact Us</a>
            </div>

            <div className=' flex flex-col justify-center items-start px-10 '>
                {
                    // console.log(Object.entries(ContactInformation))
                Object.entries(ContactInformation).map((entry)=>
                    {
                        if(entry[0]!=="socialMediaHandles"){
                            return  <div>
                            {entry[1]}
                        </div>
                        }
                        else{
                            return <div className='flex'>
                               { Object.entries(entry[1]).map((social)=>{
                                return <p>{social[1]}</p>
                               })}
                            </div>
                        }

                    })
                }
            </div>
            <ul className='underline py-16 flex flex-col justify-center items-start'>
                <li>Privacy Policy</li>
                <li>Accessibility Statement</li>
                <li>Terms and Conditions</li>
                <li>Refund Policy</li>
            </ul>
        </div>
        <div className='py-10 pl-10'>@2025 {businessName}</div>
    </footer>
  )
}

export default Footer
