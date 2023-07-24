import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
const HeaderInfo = () => {
    const router = useRouter()
   
  return (
    <header className=" w-full  border-b shadow-md bg-white">
    <div className='flex px-2 py-2 md:py-6 items-center  m-auto   lg:flex-row justify-between w-[80%]'>
    <Link href="/">
    <div className='font-italic flex items-center gap-2 font-bold text-lg'>
      <AiOutlineHome className='text-red-500' />
      Effulgence Homes</div>
    </Link>

    <div className="flex justify-between gap-4">
      <button 
      onClick={() => router.push("/register")}
      className="bg-red-500 p-2 md:p-3 md:px-4 rounded-md shadow-md text-white">
        Sign in
      </button>

{/* {!router.pathname.includes("register") && (
  <button
  onClick={() => router.push("/verify")}
  className="bg-yellow-500 p-2 md:p-3 rounded-md shadow-md text-white">
    Verify Documents
  </button>
)} */}
    
    </div>
    </div>
  </header>
  )
}

export default HeaderInfo