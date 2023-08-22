import { useRouter } from 'next/router'
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
const HeaderInfo = ({toggleSidebar, small, setToggleSidebar, about}) => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.scrollY > 300){
            setIsVisible(true)
        }else{
            setIsVisible(false)
        }
    }
  
    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () =>{
            window.removeEventListener("scroll", toggleVisibility)
        }
    }, [])
   
   
  return (
    <header  
    className={isVisible ? `w-full   border-b-2 fixed upper shadow-md bg-white text-white border-white` : 
    small ?`w-full upper  border-b-2 fixed shadow-md bg-white text-white upper border-white` :
    `w-full upper  border-b-2 fixed shadow-md head-col text-white upper border-white`}
    
    >
    <div className='flex  items-center  m-auto   lg:flex-row justify-between w-[90%]'>
   <div
   onClick={() => setToggleSidebar(!toggleSidebar)}
   className='p-3 bg-[#eee] md:hidden flex cursor-pointer rounded-sm'>
    {toggleSidebar ? <AiOutlineClose className='text-2xl text-black' /> : <AiOutlineMenu className='text-2xl text-black' />}
   </div>
   
   <div className='flex justify-between gap-8'>
   <Link href="/">
    <div className=' text-black flex items-center gap-2 font-bold text-lg'>
      <Image
        width={120}
        height={120}
        src={"/bg/logo.png"}
        alt=""
      />
     <h3 className={isVisible ? "text-black lg:flex hidden" : "text-black lg:flex hidden"}> Effulgence Homes</h3>
      </div>
    </Link>

  {
    about ?   <ul className={isVisible ? 'text-black items-center justify-evenly md:flex hidden ' :  'text-black md:flex hidden items-center justify-evenly '}>
    <Link href={"/"}>
    <li className='hover:bg-[#FF385C] hover:p-3 hover:text-white hover:rounded-md px-3'>Home</li>
    </Link>
     <li className='hover:bg-[#FF385C] hover:p-3 hover:text-white hover:rounded-md px-3'>Property</li>
    <Link href={"/about"}>
    <li className='hover:bg-[#FF385C] hover:text-white hover:p-3 hover:rounded-md px-3'>
       About us
     </li></Link>
     <li className='hover:bg-[#FF385C] hover:p-3 hover:text-white hover:rounded-md px-3'>Blog</li>
     <li className='hover:bg-[#FF385C] hover:p-3 hover:text-white hover:rounded-md px-3'>Contact</li>
   </ul> :   <ul className={isVisible ? 'text-black items-center justify-evenly md:flex hidden ' :  'text-white md:flex hidden items-center justify-evenly '}>
     <Link href={"/"}>
     <li className='hover:bg-[#FF385C] hover:p-3 hover:text-white hover:rounded-md px-3'>Home</li>
     </Link>
      <li className='hover:bg-[#FF385C] hover:p-3 hover:text-white hover:rounded-md px-3'>Property</li>
     <Link href={"/about"}>
     <li className='hover:bg-[#FF385C] hover:text-white hover:p-3 hover:rounded-md px-3'>
        About us
      </li></Link>
      <li className='hover:bg-[#FF385C] hover:p-3 hover:text-white hover:rounded-md px-3'>Blog</li>
     <Link href={"/contact"}>
      <li className='hover:bg-[#FF385C] hover:p-3 hover:text-white hover:rounded-md px-3'>Contact</li>
     </Link>
    </ul>
  }
   </div>

  {!toggleSidebar && (  
  
  <div className="flex justify-between gap-4">
     {router.pathname.includes("register") || router.pathname.includes("verify")? 
      <button 
      onClick={() => router.push("/register")}
      className="bg-red-500 p-2 md:p-3 md:px-8 rounded-md shadow-md text-white">
       Register
      </button> :  <button 
      onClick={() => router.push("/register")}
      className="bg-red-500 p-2 md:p-3 md:px-8 rounded-md shadow-md text-white">
        Register
      </button>}
    </div>) }
    {
      toggleSidebar && (
        <div
   onClick={() => setToggleSidebar(!toggleSidebar)}
   className='p-3 bg-[#eee] md:hidden flex cursor-pointer rounded-sm'>
    {toggleSidebar ? <AiOutlineClose className='text-2xl text-black' /> : <AiOutlineMenu className='text-2xl text-black' />}
   </div>
      )
    }
    </div>
  </header>
  )
}

export default HeaderInfo