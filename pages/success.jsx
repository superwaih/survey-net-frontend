import FlutterWaveBtn from '@/components/reusables/FlutterWaveBtn'
import { useUserContext } from '@/context/UserProvider'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import {AiFillCheckCircle} from "react-icons/ai"
const SuccessPage = () => {
  const{userObject, submissionType} = useUserContext()
  const router = useRouter()
  useEffect(() => {
    if(userObject.email === undefined){
      router.push("/verify")
    }
  })

  return (
    <div className='h-screen w-full p-4 flex items-center justify-center bg-[#F2FAFF]'> 

        <div className='flex flex-col shadow-lg rounded-md  space-y-4 bg-white py-4 px-3  items-center justify-center max-w-md'>
            <h3>Dear <span className='font-bold'>{userObject?.email}</span>, your information has been recieved </h3>
            {/* <AiFillCheckCircle className='text-5xl text-green-500' /> */}
            {
              submissionType === "surveyor_method" ? <p>with survey number <span className='font-semibold'>{userObject.survey_number} </span> please click on the button below to proceed to make payment for verification of your document</p> : <p>with C of O number <span className='font-semibold'>{userObject.cof_number} </span> please click on the button below to proceed to make payment for verification of your document</p>
            }
            
            
            {/* <button
            className="bg-red-500 p-3 rounded-md shadow-md text-white w-full py-4"
            >Proceed to make payment now</button> */}
            <FlutterWaveBtn user={userObject}/>
        </div>

    </div>
  )
}

export default SuccessPage