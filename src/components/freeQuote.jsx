import React from 'react'

const FreeQuote = () => {
  return (
    <div className='grayish py-20'>
        <div className=' mx-auto max-w-[400px]  flex flex-col justify-center items-center gap-9'>
       <div className='flex flex-col items-center justify-center gap-1'>
            <h1 className='text-teal-400 font-heading text-4xl'>Get a Free Quote</h1>
            <div className='w-14 h-0.5 teal'></div>
       </div>
        <p className='text-center font-text text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam vel perspiciatis suscipit cum pariatur explicabo consectetur nostrum a rem?</p>
        <button className='font-heading teal cursor-pointer bg-[#403e3c] px-5 py-2 text-white mt-4 text-xl'><a href='/free-quote'>Get Free Quote</a></button>
    </div>
    </div>
  )
}

export default FreeQuote
