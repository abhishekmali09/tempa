import React from 'react'

const FreeQuote = () => {
  return (
    <div className='bg-[#faf3eb] py-20'>
        <div className=' mx-auto max-w-[400px]  flex flex-col justify-center items-center gap-9'>
       <div className='flex flex-col items-center justify-center gap-1'>
            <h1 className='text-3xl'>Get a Free Quote</h1>
            <div className='w-8 h-0.5 bg-black'></div>
       </div>
        <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam vel perspiciatis suscipit cum pariatur explicabo consectetur nostrum a rem?</p>
        <button className=' cursor-pointer bg-[#403e3c] px-5 py-2 text-white mt-4'>Get Free Quote</button>
    </div>
    </div>
  )
}

export default FreeQuote
