import HomeCard from '../components/homeCard'
import HeroSection from '../components/heroSection'
import PatientVoice from '../components/PatientVoice'
import { homeServices } from '../constants'
// import Navbar from '../components/navbar'
// import Footer from '../components/footer'
const Home = () => {
  return (
    <>
    <div>
        <HeroSection/>
        <div className='bg-[#decdc3] p-10 '>
            <h1 className='text-4xl pb-10 border-b-2'>Services</h1>
            {homeServices.length!=0 && homeServices.map((ser)=>{
                return <HomeCard serviceDetails={ser} />
            })}
        </div>
        <PatientVoice/>

    </div>
   </>
  )
}

export default Home
