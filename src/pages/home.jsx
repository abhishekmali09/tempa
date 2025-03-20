import HeroSection from '../components/heroSection'
import PatientVoice from '../components/PatientVoice'
import Carousal from '../components/carousal'
const Home = () => {
  return (
    <>
    <div>
        <HeroSection/>
        <div className=' py-10 bg-white max-w-[1500px] mx-auto'>
            <h1 className='text-4xl p-10  max-w-[1200px] mx-auto font-heading text-rose-400 '>Goverment Policies</h1>
            <div className="flex justify-center items-start w-full px-10">
            {/* <div className="flex justify-center items-center"> */}
                <img src="/Images/speakerimg.png" className=" w-[200px] h-[100px] hidden lg:flex object-contain" alt="Speaker" />
            {/* </div> */}
            <Carousal />
            </div>
        </div>
        <PatientVoice/>

    </div>
   </>
  )
}

export default Home
