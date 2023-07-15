import RegistrationForm from '@/components/register-components/RegistrationForm'
import VerificationForm from '@/components/register-components/VerificationForm'
import HeaderInfo from '@/components/reusables/Header'
import React from 'react'
import Head from 'next/head'
 

const VerificationPage = () => {
  return (

    <>
     <Head>
        <title>Verification Page</title>
      </Head>
    
    <div className='bg-[#F2FAFF] min-h-screen'>
      <HeaderInfo />
      <div className='py-6 px-5 text-center'>
       <h3> You need to create an account to list new properties</h3>
       <p>If you've not created an account, please click this link to create an account</p>
      </div>
     <VerificationForm />
    </div>
    </>
  )
}

export default VerificationPage