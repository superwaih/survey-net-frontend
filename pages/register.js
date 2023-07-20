import HeaderInfo from '@/components/reusables/Header'
import React from 'react'
import RegisterImage from "@/public/images/register.jpg"
import Image from 'next/image'
import RegistrationForm from '@/components/register-components/RegistrationForm'
import Head from 'next/head'
import Spinner from '@/components/reusables/Spinner'

const RegisterPage = () => {

  return (
    <>
    <Head>
        <title>Create An Account</title>
      </Head>
    
    
    <div className='bg-[#F2FAFF] min-h-screen'>
      <HeaderInfo />
      {/* <div className='w-full flex items-center justify-center relative h-[400px]'>
        <Image
          // width={500}
          fill={true}
          // height={500}
          src={RegisterImage}
          alt=""
        />
        <div className='text-white absolute top-[50%] font-bold m-auto  text-5xl'>
          Create an account
        </div>
      </div> */}
      <RegistrationForm />

    </div>
    </>
  )
}

export default RegisterPage