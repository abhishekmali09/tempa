import HeroSection from './components/heroSection'
import PatientVoice from './components/PatientVoice'
import Footer from './components/footer'
import HomeCard from './components/homeCard'
import { homeServices,services } from './constants'
import Navbar from './components/navbar'
import ServicesCard from './components/servicesCard'
import FreeQuote from './components/freeQuote'
function App() {


  return (
   <>
    <div>
        <Navbar/>
        <HeroSection/>
        <div className='bg-[#decdc3] p-10 '>
            <h1 className='text-4xl pb-10 border-b-2'>Services</h1>
            {homeServices.length!=0 && homeServices.map((ser)=>{
                return <HomeCard serviceDetails={ser} />
            })}
        </div>
        <PatientVoice/>
        <Footer/>
        <div className='bg-[#faf3eb] p-10 flex justify-center items-center flex-col'>
            <div className='flex flex-col justify-center items-center gap-3 py-10'>
                <h1 className='text-5xl'>Treatments Provided</h1>
                <div className='w-7 h-1 bg-black'></div>
            </div>
            <div className='grid grid-cols-3 gap-10'>
            {services.length!=0 && services.map((ser)=>{
                return <ServicesCard serviceDetails={ser} />

            })}
            </div>
        </div>
        <FreeQuote/>
    </div>
   </>
  )
}

export default App
