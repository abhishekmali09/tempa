import { homeServices,treatments } from '../constants'
import ServicesCard from '../components/servicesCard'
import FreeQuote from '../components/freeQuote'
const Service = () => {
  return (
    <section>
        <div className='font-display grayish p-10 pt-40 flex justify-center items-center flex-col'>
            <div className='flex flex-col justify-center items-center gap-3 py-10'>
                <h1 className='text-7xl font-heading text-rose-400'>Treatments Provided</h1>
                <div className='w-16 h-0.5  bg-rose-700'></div>
            </div>
            <div className='font-sans max-w-[1100px] flex flex-wrap justify-center items-baseline flex-row gap-10 mx-auto'>
            {treatments.length!==0 && treatments.map((ser)=>{
                return <ServicesCard serviceDetails={ser} />

            })}
            </div>
        </div>
        <FreeQuote/>
    </section>
  )
}

export default Service
