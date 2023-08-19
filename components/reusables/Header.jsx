import { useRouter } from 'next/router'
import React, {useEffect, useLayoutEffect, useRef, useState} from 'react'
import Link from 'next/link'
import Image from 'next/image'
const HeaderInfo = ({size}) => {
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
    className={isVisible ? "w-full upper  border-b-2 fixed shadow-md bg-white text-white border-white": "w-full  border-b-2 fixed shadow-md head-col text-white upper border-white"}
    
    >
    <div className='flex px-2 py-2 md:py-5 items-center  m-auto   lg:flex-row justify-between w-[80%]'>
    <Link href="/">
    <div className='font-italic text-black flex items-center gap-2 font-bold text-lg'>
      <Image
        width={90}
        height={90}
        objectFit="cover"
        src={"/bg/logo.png"}
        alt=""
      />
     <h3 className='md:flex hidden'> Effulgence Homes</h3>
      </div>
    </Link>

    <div className="flex justify-between gap-4">
      <button 
      onClick={() => router.push("/register")}
      className="bg-red-500 p-2 md:p-3 md:px-8 rounded-md shadow-md text-white">
        Add Listing
      </button>


    
    </div>
    </div>
  </header>
  )
}

export default HeaderInfo