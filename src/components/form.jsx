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
            contactFormData.append("entry.1996996062", data.firstName);
            contactFormData.append("entry.1590575703", data.lastName);
            contactFormData.append("entry.2088677335", data.email);
            contactFormData.append("entry.239038748", data.message);
            try {
                await fetch(
                    "https://docs.google.com/forms/d/e/1FAIpQLScHD9D09NgIsDDZxoVfR658U8YlD0c2nJtKz-7xSLDj8afmTw/formResponse",
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
            quoteFormData.append("entry.185853128", data.firstName);
            quoteFormData.append("entry.162375049", data.lastName);
            quoteFormData.append("entry.859676106", data.email);
            if(doctorDetail)quoteFormData.append("entry.1090098999", data.doctor_name);
            if(treatmentDetail)quoteFormData.append("entry.627415965", data.treatment_name);
            quoteFormData.append("entry.1227958253", data.message);
            // https://docs.google.com/forms/d/e/1FAIpQLSeWiZ0hlrygVVcoDKesk5hsaos_--5JdPasMoM89bJdgG2CRA/viewform?usp=pp_url&entry.185853128=abhishek&entry.162375049=mali&entry.859676106=abhishekamali@gamil.com&entry.1090098999=abhi&entry.627415965=dvsfbhr&entry.1227958253=nil
            try {

                await fetch(
                    "https://docs.google.com/forms/d/e/1FAIpQLSeWiZ0hlrygVVcoDKesk5hsaos_--5JdPasMoM89bJdgG2CRA/formResponse",
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
        <div className='primary-background pt-10 pb-6 flex justify-center items-center'>
            <form
                onSubmit={handleSubmit(onSubmit)}
                className='font-text w-full  justify-center items-start gap-y-4 px-10'
            >
                {/* <div className='flex gap-4 w-full lg:flex-row flex-col'> */}
                    <div className='flex flex-col w-full'>
                        <label>
                            <small className='font-semibold font-heading'>First Name</small>
                        </label>
                        <input
                            className='border-2 p-1 h-[50px] text-xl font-heading rounded focus:border-2 duration-500 focus:border-teal-500 outline-0 max-w-[40rem]'
                            {...register("firstName")}
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                        )}
                    </div>

                    <div className='flex flex-col w-full'>
                        <label>
                            <small className='font-semibold font-heading'>Last Name</small>
                        </label>
                        <input
                            className='border-2 p-1 h-[50px] text-xl font-heading rounded focus:border-2 duration-500 focus:border-teal-500 outline-0 max-w-[40rem]'
                            {...register("lastName")}
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                        )}
                    </div>
                {/* </div> */}

                <div className='flex flex-col w-full'>
                    <label>
                        <small className='font-semibold font-heading'>Email</small>
                    </label>
                    <input
                        type='email'
                        className='border-2 p-1 rounded h-[50px] text-xl font-heading focus:border-2 duration-500 focus:border-teal-500 outline-0 max-w-[40rem]'
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
                        className='border-2 p-1 rounded h-[50px] text-xl font-heading focus:border-2 duration-500 focus:border-teal-500 outline-0 max-w-[40rem]'
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
                        className='border-2 p-1 rounded h-[50px] text-xl font-heading focus:border-2 duration-500 focus:border-teal-500 outline-0 max-w-[40rem]'
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
                        className='border-2 p-2 rounded text-xl font-heading resize-none h-full focus:border-2 duration-500 focus:border-teal-500 outline-0 max-w-[40rem]'
                        {...register("message")}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm">{errors.message.message}</p>
                    )}
                </div>

                <div className='flex flex-col items-start w-full'>
                    <button
                        type='submit'
                        className='font-heading cursor-pointer text-black px-5 py-3 text-xl font-semibold bg-rose-400 mt-4 hover:scale-[101%] duration-700 rounded hover:font-bold'
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
