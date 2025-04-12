import React from 'react'
import { whyChooseUsData } from '../constants'
import GeneralCard from './generalCard'

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 mt-2 px-10 w-[1200px] max-w-full mx-auto">
    {
        whyChooseUsData.map((data)=>{
            return <GeneralCard generalData={data}/>
        })
    }
  </div>
  )
}

export default WhyChooseUs
