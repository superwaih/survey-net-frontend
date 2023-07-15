import { useRouter } from 'next/router';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import {AiFillEye, AiFillEyeInvisible} from "react-icons/ai"
const RegistrationForm = () => {
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
    className=' box-shadow px-4 flex bg-white rounded-md flex-col space-y-10 py-4 m-auto w-full md:w-[70%] max-w-md my-5 '>
        <div className='flex flex-col gap-3'>
            <label className='font-semibold' htmlFor="">Firstname</label>
            <input 
            {...register("firstname", {required: true})}

            className='px-3 py-4 border border-yellow-400 rounded-md' 
            type="text" placeholder='Please enter your firstname' />
        </div>
        <div className='flex flex-col gap-3'>
            <label htmlFor="">Lastname</label>
            <input 
            {...register("lastname", {required: true})}
            className='px-3 py-4 border border-yellow-400 rounded-md' type="text" placeholder='please your lastname' />
        </div>
        <div className='flex flex-col gap-3'>
            <label htmlFor="">Email</label>
            <input
            {...register("Email", {required: true, pattern: /^\S+@\S+$/i})}
            className='px-3 py-4 border border-yellow-400 rounded-md' type="text" placeholder='please enter email' />
        </div>
        <div className='flex flex-col  gap-3 mb-3'>
            <label htmlFor="">Password</label>
           <div className='relative w-full'>
           <input 
            {...register("password", {required: true})}
            
            className='px-3 w-full py-4 border border-yellow-400 rounded-md' type={showPassword ? "text" : "password"} placeholder='please enter your password' />
            
            <div
            onClick={() => setShowPassword(!showPassword)}
            className='cursor-pointer text-xl absolute right-2 top-[30%]'
            >
               {showPassword ?  <AiFillEye /> :
                <AiFillEyeInvisible />}
            </div>
           </div>
        </div>

        <button 
        type='submit'
        className="bg-red-500 p-3 rounded-md shadow-md text-white w-full py-4"
        >
            Proceed to make payment
        </button>
    </form>
  )
}

export default RegistrationForm