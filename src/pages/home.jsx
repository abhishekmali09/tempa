import HeroSection from '../components/heroSection'
import PatientVoice from '../components/PatientVoice'
import Carousal from '../components/carousal'
import WhyChooseUs from '../components/whyChooseUs'
const Home = () => {
  return (
    <>
    <div>
        <HeroSection/>
        <h1 className='text-4xl p-10  max-w-[1200px] mx-auto text-center font-heading text-teal-400 '>Why Choose Us?</h1>
        <WhyChooseUs/>
        <div className=' py-10 bg-white max-w-[1200px] mx-auto'>
            <h1 className='text-4xl p-10  max-w-[1200px] mx-auto font-heading text-rose-400 '>Popular Hospitals</h1>
            <div className="flex justify-center items-start w-full px-10">
            <Carousal type="hosptials"/>
            </div>
            <h1 className='text-4xl p-10  max-w-[1200px] mx-auto font-heading text-rose-400 '>Popular Doctors</h1>
            <div className="flex justify-center items-start w-full px-10">
            <Carousal type="doctors"/>
            </div>
        </div>
        <PatientVoice/>

    </div>
   </>
  )
}

export default Home
