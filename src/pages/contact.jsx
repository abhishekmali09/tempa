import Form from '../components/form'
import { ContactInformation } from '../constants'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
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
    <div className='grayish w-full'>

            <div className='flex flex-col mx-auto max-w-[750px] justify-center items-center pt-30 pb-10'>
                <div className='pb-6 flex gap-6 flex-col justify-center items-center'>
                    <h1 className='md:text-7xl text-6xl font-heading text-rose-400 '>Contact Us</h1>
                    <p className='text-center font-text text-2xl px-10'>Connect with us for tailored medical quotes. Use the form, email, or call us—we're here to make it easy for you.</p>
                </div>
            </div>
            <div className='border-b-[1px] border-t-[1px] w-full bg-white '>
                <div className='max-w-[1200px] mx-auto flex lg:flex-row flex-col'>
                    <div className='lg:w-2/5 w-full grid grid-rows-2 grid-cols-1 justify-center py-10'>
                            <div className=' flex flex-col gap-10 w-full'>
                                <div className='flex flex-col gap-5 '>
                                    <LocationOnOutlinedIcon/>
                                    <h1 className='font-heading text-2xl'>Address</h1>
                                    <p className='  font-text text-xl'>{ContactInformation.address}</p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <PhoneOutlinedIcon/>
                                    <h1 className='font-heading text-2xl'>Phone</h1>
                                    <p className=' font-text text-xl'>{ContactInformation.contactNumber}</p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-10 w-full'>
                                <div className='flex flex-col gap-5'>
                                    <EmailOutlinedIcon/>
                                    <h1 className='font-heading text-2xl text-wrap'>Email</h1>
                                    <p className=' font-text text-xl'>{ContactInformation.emailAddress}</p>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <ConnectWithoutContactIcon/>
                                    <h1 className='font-heading text-2xl'>Social Media</h1>
                                    <div className='flex gap-2 '>
                                    { Object.entries(ContactInformation.socialMediaHandles).map((social)=>{
                                        return <a className='font-semibold cursor-pointer ' target='_blank' href={social[1]} key={social[0]} >{iconsReg[social[0]]}</a>
                                    })}
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div className=' lg:border-l-[1px] border-t-[1px] lg:border-t-0 w-full  py-10'>
                        <Form formType="contact"/>
                    </div>
                </div>
            </div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3790.7941166163414!2d77.05957291124969!3d28.58761278601735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1b2188177235%3A0x6fd63d3b832a140a!2s306%2C%2011%2C%20Sector%206%2C%20Sector%2010%20Dwarka%2C%20Dwarka%2C%20New%20Delhi%2C%20Delhi%2C%20110075!5e1!3m2!1sen!2sin!4v1744556728462!5m2!1sen!2sin"
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
