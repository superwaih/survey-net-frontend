import { useRouter } from 'next/router'
import React from 'react'
import Link from 'next/link'
import {AiFillHome} from "react-icons/ai"
const Sidebar = () => {
    const router = useRouter()
  return (
    <div className='w-[260px] py-4 absolute md:hidden upper top-0 bottom-0 left-0 bg-[#262626]'>
    <div className='fixed w-[250px]'>
    <div className='border-b border-slate-400 py-4'>
        <h3 className='text-center text-white uppercase'>Menu</h3>
        </div>
        <div>
           <Link href={"/"}>
           <div className='border-b py-4 cursor-pointer border-slate-400'>
                <h2 className='text-white px-3 text-sm'>Home</h2>
            </div></Link>
            <div className='border-b py-4 cursor-pointer border-slate-400'>
                <h2 className='text-white px-3 text-sm'>Property</h2>
            </div>
            <Link href="/about">
            <div className='border-b hover:bg- py-4 cursor-pointer border-slate-400'>
                <h2 className='text-white px-3 text-sm'>About us</h2>
            </div></Link>
            <div className='border-b py-4 border-slate-400'>
                <h2 className='text-white px-3 text-sm'>Blog</h2>
            </div>
            <div className='border-b py-4 cursor-pointer border-slate-400'>
                <h2 className='text-white px-3 text-sm'>Contact</h2>
            </div>
        <button 
      onClick={() => router.push("/register")}
      className="bg-red-500 w-4/5 flex items-center gap-4 justify-center py-3  my-3 p-2 mx-2 md:p-3 md:px-8 rounded-md shadow-md text-white">
        <AiFillHome className='text-xl' />
        Add Listing
      </button>
        </div>
    </div>
    </div>
  )
}

export default Sidebar