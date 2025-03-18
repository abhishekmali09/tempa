import React from 'react'
import { useParams } from 'react-router'
import { doctors,hospitals } from '../constants';
const Details = ({detailType}) => {
    const id = useParams();
    const detail = detailType==="doctors"? doctors[id.doctorId-1]:hospitals[id.hospitalId-1];
    console.log(detail,id)
    return (
    <div className='pt-30 pb-10 max-w-[1000px] mx-auto px-10 flex flex-col lg:flex-row justify-center items-stretch gap-9'>
        <div className='flex flex-col justify-center gap-4 items-start'>
            <img src={detail.image} className='w-[20rem] h-[18rem]' />
            <p className='text-xl font-heading'>{detail.name}</p>
        </div>
        <div className='flex flex-col max-w-2/3'>
            <h1 className='mb-6 text-4xl font-heading text-rose-400 font-semibold'>Overview</h1>
            <div className='bg-teal-200 p-10 rounded-2xl h-[20rem]'>
                <div className='grid grid-cols-2 gap-6 not-odd:font-text not-even:font-heading '>

                    {/* <p className='font-bold text-xl'>Department:</p>
                    <p>{detail.department}</p>

                    <p className='font-bold text-xl'>Experience:</p>
                    <p>{detail.experience}</p>

                    <p className='font-bold text-xl'>Hospital:</p>
                    <p>{detail.hospital}</p> */}
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
                <h1 className='font-heading text-2xl pb-3'>Infrastructure or Description</h1>
                <p className='font-text text-lg'>{detail.desc}</p>
                <p className='font-text text-lg'>{detail.longDesc}</p>
            </div>
        </div>
    </div>
  )
}

export default Details
