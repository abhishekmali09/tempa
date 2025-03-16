import React from 'react'
import {useForm} from "react-hook-form";

const Form = () => {
    const {register,handleSubmit} = useForm();
    const onSubmit = (data) =>console.log(data);

    return (
    <div className='  p-10 w-full'>
        <form onSubmit={handleSubmit(onSubmit)} className='mx-auto max-w-[400px] w-full flex flex-col justify-center items-start'>
            <div className='flex gap-4 w-full'>
                <div className='flex flex-col w-1/2'>
                    <label><small className='font-semibold'>First Name</small></label>
                    <input className='border-3 p-1'   {...register("firstName",{required:true,minLength:3})} />
                </div>
                <div className='flex flex-col w-1/2'>
                    <label><small className='font-semibold'>Last Name</small></label>
                    <input className='border-3 p-1'  {...register("lastname",{required:true,minLength:3})} />
                </div>
            </div>
                <div className='flex flex-col w-full'>
                    <label><small className='font-semibold'>Email</small></label>
                    <input className='border-3 p-1'  {...register("email",{required:true,minLength:3})} />
                </div>
                <div className='flex flex-col w-full h-32'>
                    <label><small className='font-semibold'>Message</small></label>
                    <textarea className='h-full border-3 px-2 resize-none' name="" id="" {...register("message",{required:true,minLength:10,maxLength:1000})} ></textarea>
                </div>

                <button type='submit' className='w-full cursor-pointer bg-[#403e3c] px-5 py-2 text-white mt-4 '>Send</button>
                <p className='font-semibold py-3'>Thanks for submitting!</p>
                {/* <input type='submit'/> */}
        </form>
    </div>
  )
}

export default Form
