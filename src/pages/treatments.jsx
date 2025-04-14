import { treatments } from '../constants'
import TreatmentsCard from '../components/treatmentCard'
import FreeQuote from '../components/freeQuote'
import FAQs from '../components/FAQs'

const Treatments = () => {
  return (
    <section>
        <div className='font-display grayish p-10 pt-40 flex justify-center items-center flex-col'>
            <div className='flex flex-col justify-center items-center gap-3 py-10'>
                <h1 className='text-5xl text-center font-heading'><span className='text-teal-400'>Healthcare Services</span> Offered</h1>
                <div className='w-16 h-1  bg-teal-400'></div>
            </div>
            <div className='font-sans max-w-[1200px] flex flex-wrap justify-evenly items-baseline flex-row gap-10 mx-auto'>
            {treatments.length!==0 && treatments.map((ser)=>{
                return <TreatmentsCard treatmentDetails={ser} />

            })}
            </div>
        </div>
        <FreeQuote/>
        <FAQs/>
    </section>
  )
}

export default Treatments
