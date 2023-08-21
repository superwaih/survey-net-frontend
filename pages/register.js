import HeaderInfo from '@/components/reusables/Header'
import React, { useState } from 'react'
import RegisterImage from "@/public/images/register.jpg"
import Image from 'next/image'
import RegistrationForm from '@/components/register-components/RegistrationForm'
import Head from 'next/head'
import Spinner from '@/components/reusables/Spinner'
import RegistrationSuccessful from '@/components/modal/RegistrationSuccessful'
import Sidebar from '../components/reusables/Sidebar'
import Footer from '@/components/reusables/Footer'

const RegisterPage = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [toggleSidebar, setToggleSidebar] = useState(false)

  return (
    <>
    <Head>
        <title>Create An Account</title>
      </Head>
    
    
    <div className='bg-[#F2FAFF] min-h-screen'>
    <HeaderInfo about small toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
   {toggleSidebar && (<Sidebar />)}
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
      <RegistrationForm isOpen={isOpen} setIsOpen={setIsOpen} />

    </div>
    <Footer />
    {isOpen && (<RegistrationSuccessful isOpen={isOpen} setIsOpen={setIsOpen} />)}
    </>
  )
}

export default RegisterPage