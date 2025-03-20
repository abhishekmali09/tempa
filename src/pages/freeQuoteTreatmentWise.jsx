import Form from '../components/form'
import { ContactInformation, treatments } from '../constants'
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { useParams } from 'react-router';
const iconsReg = {
    "facebook":<FacebookOutlinedIcon/>,
    "linkedin":<LinkedInIcon/>,
    "instagram":<InstagramIcon/>,
    "x":<XIcon/>
}
const FreeQuoteTreatmentWise = () => {
    const treatmentId = useParams();
    console.log(treatmentId);
  return (
    <div className='grayish max-w-screen'>
        <div className=' w-full flex items-end lg:flex-row flex-col pt-30 pb-10'>
            <div className='lg:w-1/2 w-full flex justify-center items-center p-10'>
                <div className=' grid grid-cols-2 gap-11 justify-center max-w-[400px]'>
                            <h1 className='text-6xl col-start-1 row-start-1 col-span-2 row-span-2 font-heading text-rose-400 pb-10'>Free Quote </h1>

                            <LocationOnOutlinedIcon className='col-start-1 row-start-3'/>
                            <PhoneOutlinedIcon className='col-start-1 row-start-4'/>
                            <EmailOutlinedIcon className='col-start-1 row-start-5'/>
                            <ConnectWithoutContactIcon className='col-start-1 row-start-6'/>

                            <p className='font-semibold col-start-2 row-start-3 font-text text-lg'>{ContactInformation.address}</p>
                            <p className='font-semibold col-start-2 row-start-4 font-text text-lg'>{ContactInformation.contactNumber}</p>
                            <p className='font-semibold col-start-2 row-start-5 font-text text-lg'>{ContactInformation.emailAddress}</p>
                            <div className='flex gap-3 col-start-2 row-start-6'>
                                { Object.entries(ContactInformation.socialMediaHandles).map((social)=>{
                                        return <a className='font-semibold cursor-pointer ' key={social[0]} target='_blank' href={social[1]}>{iconsReg[social[0]]}</a>
                                })}
                            </div>
                </div>
            </div>
            <div className=' w-full lg:w-1/2'>
            <Form formType="quote" treatmentDetail={treatments[treatmentId.treatmentId]}/>
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

export default FreeQuoteTreatmentWise
