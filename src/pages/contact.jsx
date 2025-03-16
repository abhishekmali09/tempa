import React from 'react'
import Form from '../components/form'

const Contact = () => {
  return (
    <div>
        <div className='flex flex-col gap-4 sm:max-w-screen w-1/2 justify-center items-center'>
            <p>Quality Care</p>
            <div className='text-6xl pb-6'>
                <h1>Your Health,</h1>
                <h1>Our Priority</h1>
            </div>
            {/* <button className='cursor-pointer bg-[#966b54] rounded-3xl px-5 py-2 text-white'>Get Medical opinion</button> */}
        </div>
        <Form/>
    </div>
  )
}

export default Contact
