import HomeCard from '../components/homeCard'
import HeroSection from '../components/heroSection'
import PatientVoice from '../components/PatientVoice'
import { homeServices } from '../constants'
import Carousal from '../components/carousal'
// import Navbar from '../components/navbar'
// import Footer from '../components/footer'
const Home = () => {
  return (
    <>
    <div>
        <HeroSection/>
        <div className='grayish p-10 '>
            <h1 className='text-4xl pb-10  max-w-[1200px] mx-auto px-10  font-heading text-rose-400 '>Services</h1>
            <div className='border-b-2 border-black'></div>
            <Carousal/>
        </div>
        <PatientVoice/>

    </div>
   </>
  )
}

export default Home
