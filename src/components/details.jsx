import React from 'react'
import { useParams } from 'react-router'
import { doctors,hospitals } from '../constants';
const Details = ({detailType}) => {
    const id = useParams();
    const detail = detailType==="doctors"? doctors[id.doctorId-1]:hospitals[id.hospitalId-1];
    console.log(detail,id)
    return (
        // flex flex-col lg:flex-row justify-center items-center
    <div className='pt-30 pb-10 max-w-[1200px] mx-auto md:px-10 flex flex-col lg:flex-row justify-center lg:items-start  items-center gap-9'>
            <div className='flex flex-col justify-center items-center gap-4 pt-16 '>
            <img src={detail.image} className='w-[20rem] h-[17rem] ' />
            <p className='text-xl font-heading'>{detail.name}</p>
        </div>
        <div className='flex flex-col max-w-10/12 lg:max-w-2/3'>
            <h1 className='mb-6 text-4xl font-heading text-rose-400 font-semibold'>Overview</h1>
            <div className='bg-teal-200 p-10 rounded-2xl h-fit'>
                <div className='grid md:grid-cols-2 grid-cols-1 gap-6 not-odd:font-text not-even:font-heading '>
                    {Object.entries(detail.detail).map((x, index) =>
                    {
                        if(x[0]!=='image' && x[0]!=='desc' && x[0]!=='longDesc' )return <React.Fragment key={index}>
                        <p className="font-bold text-xl capitalize">{x[0]}:</p>
                        <p>{x[1]}</p>
                    </React.Fragment>
                    }
                )}
                </div>

            </div>
            <div className='mt-16'>
                <h1 className='font-heading text-3xl pb-3 font-semibold text-rose-500'>Infrastructure or Description</h1>
                <p className='font-text text-lg'>{detail.desc}</p>
                <p className='font-text text-lg'>{detail.longDesc}</p>
            </div>
        </div>
    </div>
  )
}

export default Details
