import Form from '../components/form'
import { ContactInformation } from '../constants'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
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
ContactInformation
const Contact = () => {
  return (
    <div className='bg-[#faf3eb] max-w-screen'>
        <div className='flex flex-col mx-auto max-w-[500px] justify-center items-center pt-30 pb-10'>
            <p>Let's Connect</p>
            <div className='pb-6 flex gap-6 flex-col justify-center items-center'>
                <h1 className='text-6xl'>Contact</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores alias vitae repellat, molestiae hic eaque praesentium itaque. Enim, nesciunt dicta.</p>
            </div>
        </div>
        <div className='border-2 w-full flex lg:flex-row flex-col'>
            <div className='lg:w-1/2 w-full flex justify-center items-center p-10'>
                <div className=' grid grid-rows-1 grid-cols-2 gap-20 justify-center max-w-[400px]'>
                    <div className='grid grid-rows-2 gap-10 w-full'>
                        <div className='flex flex-col gap-5'>
                            <LocationOnOutlinedIcon/>
                            <h1>Address</h1>
                            <p className='font-semibold'>{ContactInformation.address}</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <PhoneOutlinedIcon/>
                            <h1>Phone</h1>
                            <p className='font-semibold'>{ContactInformation.contactNumber}</p>
                        </div>
                    </div>
                    <div className='grid grid-rows-2 gap-10 w-full'>
                        <div className='flex flex-col gap-5'>
                            <EmailOutlinedIcon/>
                            <h1>Email</h1>
                            <p className='font-semibold'>{ContactInformation.emailAddress}</p>
                        </div>
                        <div className='flex flex-col gap-5'>
                            <ThumbUpOffAltOutlinedIcon/>
                            <h1>Social Media</h1>
                            <div className='flex gap-2 '>
                            { Object.entries(ContactInformation.socialMediaHandles).map((social)=>{
                                   return <a className='font-semibold cursor-pointer ' target='_blank' href={social[1]} key={social[0]} >{iconsReg[social[0]]}</a>
                            })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' lg:border-l-2 border-t-2 lg:border-t-0 w-full lg:w-1/2'>
                <Form/>
            </div>
        </div>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d40811.1274211957!2d77.23156499863079!3d28.553648502338184!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce3c16e028cd1%3A0x653beb1ee85ec67a!2sLotus%20Temple!5e0!3m2!1sen!2sin!4v1742134950922!5m2!1sen!2sin"
            height="450"
            style={{ border: 0 }} // Use double curly braces for inline styles
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className='w-full pt-20'
        />

    </div>
  )
}

export default Contact
