import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
const VerificationForm = () => {
    const [showPassword, setShowPassword] = useState(false)
    const router = useRouter()
    const { register, handleSubmit, watch, formState: { errors } } = useForm()
  const onSubmit = data => {
    console.log(data);
    router.push("/verify")
    
  }
  return (
    <form 
    onSubmit={handleSubmit(onSubmit)}
    className=' shadow-md px-4 flex  bg-white flex-col space-y-10 py-4 m-auto w-full md:w-[70%] max-w-md my-5 '>
        <div className='flex flex-col gap-3'>
            <label className='font-semibold' htmlFor="">Survey Number</label>
            <input 
            {...register("survey_number", {required: true})}

            className='px-3 py-4 border border-yellow-400 rounded-md' 
            type="text" placeholder='Please enter your firstname' />
        </div>
        <div className='flex flex-col gap-3'>
            <label className='font-semibold' htmlFor="">Surveyor's Name</label>
            <input 
            {...register("surveyor_name", {required: true})}
            className='px-3 py-4 border border-yellow-400 rounded-md' type="text" placeholder='Enter name of surveyor' />
        </div>
        <div className='flex flex-col gap-3'>
            <label className='font-semibold' htmlFor="">C of O Number</label>
            <input
            {...register("co_number", {required: true, pattern: /^\S+@\S+$/i})}
            className='px-3 py-4 border border-yellow-400 rounded-md' type="text" placeholder='please enter email' />
        </div>
        <div className='flex flex-col  gap-3 mb-3'>
            <label className='font-semibold' htmlFor="">Upload Document</label>
           <div className='relative w-full'>
           <input 
            {...register("document", {required: true})}
            
            className='px-3 w-full py-4 border border-yellow-400 rounded-md' 
            type="file" 
            placeholder='Upload your document' />
            
          
           </div>
        </div>

        <button 
        type='submit'
        className="bg-red-500 p-3 rounded-md shadow-md text-white w-full py-4"
        >
            Register Now
        </button>
    </form>
  )
}

export default VerificationForm