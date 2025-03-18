import React from 'react'
import {useForm} from "react-hook-form";

const Form = () => {
    const {register,handleSubmit} = useForm();
    const onSubmit = (data) =>console.log(data);

    return (
    <div className='primary-background px-10 pt-10 pb-6 w-full'>
        <form onSubmit={handleSubmit(onSubmit)} className='font-text mx-auto auto-rows-min  max-w-[1000px] w-full grid  justify-center items-start gap-y-0'>
                <div className='flex gap-4 w-full lg:flex-row flex-col'>
                    <div className='flex flex-col lg:w-1/2 w-full'>
                        <label><small className='font-semibold font-heading'>First Name</small></label>
                        <input className='border-3 p-1'   {...register("firstName",{required:true,minLength:3})} />
                    </div>
                    <div className='flex flex-col lg:w-1/2 w-full'>
                        <label><small className='font-semibold font-heading'>Last Name</small></label>
                        <input className='border-3 p-1'  {...register("lastname",{required:true,minLength:3})} />
                    </div>
                </div>
                <div className='flex flex-col w-full'>
                    <label><small className='font-semibold font-heading'>Email</small></label>
                    <input className='border-3 p-1 '  {...register("email",{required:true,minLength:3})} />
                </div>
                <div className='flex flex-col w-full h-32'>
                    <label><small className='font-semibold font-heading'>Message</small></label>
                    <textarea className='h-full border-3 px-2 resize-none' name="" id="" {...register("message",{required:true,minLength:10,maxLength:1000})} ></textarea>
                </div>
                <div>
                <button type='submit' className='font-heading w-full cursor-pointer text-black px-5 py-3 text-xl font-semibold bg-rose-400  mt-4 hover:scale-101 duration-500'>Send</button>
                <p className='font-semibold  pt-3 font-heading'>Thanks for submitting!</p>
                </div>
                {/* <input type='submit'/> */}
        </form>
    </div>
  )
}

export default Form
