import { useRouter } from 'next/router'
import React from 'react'

const HeaderInfo = () => {
    const router = useRouter()
  return (
    <header className=" w-full  border-b shadow-md bg-white">
    <div className='flex py-6 items-center justify-between m-auto w-[90%]'>
    <div>Company Logo</div>
    <div className="flex justify-between gap-4">
      <button 
      onClick={() => router.push("/register")}
      className="bg-red-500 p-3 rounded-md shadow-md text-white">
        Create an Account
      </button>

      <button
      onClick={() => router.push("/verify")}
      className="bg-yellow-500 p-3 rounded-md shadow-md text-white">
        Add new property
      </button>
    </div>
    </div>
  </header>
  )
}

export default HeaderInfo