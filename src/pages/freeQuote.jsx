import Form from '../components/form'
import { ContactInformation,doctors } from '../constants'
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
const FreeQuote = () => {

    return (
        <div className='grayish max-w-screen'>
            <div className=' w-full flex items-end lg:flex-row flex-col pt-30 pb-10'>
                <div className='lg:w-1/2 w-full flex justify-center items-center p-10'>
                    <div className=' grid grid-cols-2 gap-11 justify-center max-w-[400px]'>
                                <h1 className='md:text-7xl text-6xl col-start-1 row-start-1 col-span-2 row-span-2 font-heading text-rose-400 pb-10'>Free Quote</h1>

                                <LocationOnOutlinedIcon className='col-start-1 row-start-3' fontSize='large'/>
                                <PhoneOutlinedIcon className='col-start-1 row-start-4' fontSize='large'/>
                                <EmailOutlinedIcon className='col-start-1 row-start-5' fontSize='large'/>
                                <ConnectWithoutContactIcon className='col-start-1 row-start-6' fontSize='large'/>

                                <p className='font-semibold col-start-2 row-start-3 font-text text-xl'>{ContactInformation.address}</p>
                                <p className='font-semibold col-start-2 row-start-4 font-text text-xl'>{ContactInformation.contactNumber}</p>
                                <p className='font-semibold col-start-2 row-start-5 font-text text-xl'>{ContactInformation.emailAddress}</p>
                                <div className='flex gap-3 col-start-2 row-start-6'>
                                    { Object.entries(ContactInformation.socialMediaHandles).map((social)=>{
                                            return <a className='font-semibold cursor-pointer ' key={social[0]} target='_blank' href={social[1]}>{iconsReg[social[0]]}</a>
                                    })}
                                </div>
                    </div>
                </div>
                <div className=' w-full lg:w-1/2 '>
                <Form formType="quote"/>
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

export default FreeQuote
