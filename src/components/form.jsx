import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactUsSchema } from '../constants';

const Form = ({ formType,doctorDetail,treatmentDetail }) => {
    console.log(treatmentDetail);
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: zodResolver(contactUsSchema),
    });
    const [successResponse, setsuccessResponse] = useState(false); // Track submission status
    const [errorResponse,seterrorResponse] = useState(false);
    const [submitted, setsubmitted] = useState(false);
    const onSubmit = async (data) => {
        console.log("Form Data:", data);
        setsuccessResponse(false);
        seterrorResponse(false);
        setsubmitted(false);

        if (formType === 'contact') {
            const contactFormData = new FormData();
            contactFormData.append("entry.904745691", data.firstName);
            contactFormData.append("entry.29233579", data.lastName);
            contactFormData.append("entry.295706247", data.email);
            contactFormData.append("entry.1652019015", data.message);

            try {
                await fetch(
                    "https://docs.google.com/forms/d/e/1FAIpQLSdOlO0T0K5MuxsKQcPqVO5WQT61dXZoQdMiULygIMfBSpbpXw/formResponse",
                    {
                        method: "POST",
                        body: contactFormData,
                        mode: "no-cors",
                    }
                );
                setsuccessResponse(true);
                console.log("Contact form submitted successfully");
            } catch (error) {
                seterrorResponse(true);
                console.error("Error submitting contact form:", error);
                alert("An error occurred while submitting the contact form.");
            } finally {
                setsubmitted(true);
            }
        } else if (formType === 'quote') {
            const quoteFormData = new FormData();
            quoteFormData.append("entry.165473670", data.firstName);
            quoteFormData.append("entry.473017976", data.lastName);
            quoteFormData.append("entry.1188495906", data.email);
            if(doctorDetail)quoteFormData.append("entry.966855998", data.doctor_name);
            if(treatmentDetail)quoteFormData.append("entry.1547308294", data.treatment_name);
            quoteFormData.append("entry.2139192016", data.message);

            try {
                // https://docs.google.com/forms/d/e/1FAIpQLSfiDOlrMGhUrEw-RhMDTJYqwQAYPLdwAHEFZAmI4HuBbYbOrQ/viewform?usp=pp_url&entry.165473670=a&entry.473017976=b&entry.1188495906=c&entry.966855998=d&entry.1547308294=e&entry.2139192016=f
                await fetch(
                    "https://docs.google.com/forms/d/e/1FAIpQLSfiDOlrMGhUrEw-RhMDTJYqwQAYPLdwAHEFZAmI4HuBbYbOrQ/formResponse",
                    {
                        method: "POST",
                        body: quoteFormData,
                        mode: "no-cors",
                    }
                );
                setsuccessResponse(true);
                console.log("Quote form submitted successfully");
            } catch (error) {
                seterrorResponse(true);
                console.error("Error submitting quote form:", error);
                alert("An error occurred while submitting the quote form.");
            } finally {
                setsubmitted(true);
            }
        }
    };

    return (
        <div className='primary-background px-10 pt-10 pb-6 w-full'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='font-text mx-auto auto-rows-min max-w-[1000px] w-full grid justify-center items-start gap-y-4'
            >
                <div className='flex gap-4 w-full lg:flex-row flex-col'>
                    <div className='flex flex-col lg:w-1/2 w-full'>
                        <label>
                            <small className='font-semibold font-heading'>First Name</small>
                        </label>
                        <input
                            className='border-2 p-1 h-[50px] text-xl font-heading rounded focus:border-2 duration-500 focus:border-teal-500 outline-0'
                            {...register("firstName")}
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                        )}
                    </div>

                    <div className='flex flex-col lg:w-1/2 w-full'>
                        <label>
                            <small className='font-semibold font-heading'>Last Name</small>
                        </label>
                        <input
                            className='border-2 p-1 h-[50px] text-xl font-heading rounded focus:border-2 duration-500 focus:border-teal-500 outline-0'
                            {...register("lastName")}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                        )}
                    </div>
                </div>

                <div className='flex flex-col w-full'>
                    <label>
                        <small className='font-semibold font-heading'>Email</small>
                    </label>
                    <input
                        type='email'
                        className='border-2 p-1 rounded h-[50px] text-xl font-heading focus:border-2 duration-500 focus:border-teal-500 outline-0'
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.email.message}</p>
                    )}
                </div>
                {doctorDetail && <div className='flex flex-col w-full'>
                    <label>
                        <small className='font-semibold font-heading'>Doctor Name</small>
                    </label>
                    <input
                        type='email'
                        className='border-2 p-1 rounded h-[50px] text-xl font-heading focus:border-2 duration-500 focus:border-teal-500 outline-0'
                        {...register("doctor_name")}
                        value={doctorDetail.name}
                        disabled
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.doctor_name.message}</p>
                    )}
                </div>}
                {treatmentDetail && <div className='flex flex-col w-full'>
                    <label>
                        <small className='font-semibold font-heading'>Treatment Name</small>
                    </label>
                    <input
                        type='email'
                        className='border-2 p-1 rounded h-[50px] text-xl font-heading focus:border-2 duration-500 focus:border-teal-500 outline-0'
                        {...register("treatment_name")}
                        value={treatmentDetail.name}
                        disabled
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm">{errors.treatment_name.message}</p>
                    )}
                </div>}

                <div className='flex flex-col h-48'>
                    <label>
                        <small className='font-semibold font-heading'>Message</small>
                    </label>
                    <textarea
                        className='border-2 p-2 rounded text-xl font-heading resize-none h-full focus:border-2 duration-500 focus:border-teal-500 outline-0'
                        {...register("message")}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                </div>

                <div className='flex flex-col items-start w-full'>
                    <button
                        type='submit'
                        className='font-heading  w-full cursor-pointer text-black px-5 py-3 text-xl font-semibold bg-rose-400 mt-4 hover:scale-[101%] duration-700 rounded hover:font-bold'
                    >
                        Send
                    </button>
                    {submitted && successResponse && <p className='font-semibold pt-3 font-heading text-teal-500'>
                        Thanks for submitting!
                    </p>}
                    {submitted && errorResponse && <p className='font-semibold pt-3 font-heading text-rose-500'>
                        Error while submitting!
                    </p>}

                </div>
            </form>
        </div>
    );
};

export default Form;
