import React, {useState} from 'react'
import Hero from "../../public/images/hero.png"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '@/variants'
import { useRouter } from 'next/router'

const container = {
  hidden: {},
  show: {
    transition :{
      staggerChildren: 0.1,
      delayChildren: 0.3,
    }
  }
}
const HeroBanner = () =>{
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  return (
    <motion.div 
    initial='hidden'
    whileInView={'show'}
     variants={container} 
     
     className='w-full header-bg flex items-center justify-center  h-screen pt-32 pb-8' >
        <div className=' flex  flex-col px-4 w-full h-full  justify-center items-center '>
        <div className="flex flex-col items-center justify-center space-y-3">
            <h3 variants={fadeIn("down")} className='text-white text-center leading-16 md:max-w-2xl font-semibold text-2xl md:text-4xl'>Find Your Dream Apartment</h3>

            <p variants={fadeIn("down")} className='text-white text-center leading-16 max-w-2xl'>
            We Have Over Million Properties For You.
            </p>
            <div className='flex items-center justify-center gap-4'>
              <button className='text-white bg-[#ff385c] px-6 py-3 rounded-md font-semibold'>For Sale</button>
              <button className='text-black bg-white px-6 py-3 rounded-md font-semibold'>For Rent</button>


            </div>
            <div className='bg-white px-4 shadow-md grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 py-4 rounded-md'>
            <input type="text" placeholder='Enter Keyword' className='py-3 w-full px-2 rounded-md border-[#ebebeb]  border' />

            <select className='border border-[#ebebeb] py-3 bg-white px-2 rounded-md w-full' name="" id="">
             
              <option className='font-bold text-black' value="">Property Type</option>
              <option value="">Family House</option>
              <option value="">Apartment</option>
              <option value="">Condo</option>
            </select>
            <select className='border  border-[#ebebeb] py-3 bg-white px-2 rounded-md w-full' name="" id="">
             
             <option className='font-bold text-black' value="">Location</option>
             <option value="">Family House</option>
             <option value="">Apartment</option>
             <option value="">Condo</option>
           </select>

           <button className='px-2 w-full py-3 bg-white border border-[#ebebeb]'>Advanced Search</button>
           <button className='text-white bg-[#ff385c] px-6 w-full py-3 rounded-md font-semibold'>Search Now</button>

            </div>

            {/* <motion.button onClick={() => router.push("/register")} variants={fadeIn("down")} className='bg-[#306BB1] flex items-center gap-4 text-white p-4 rounded-[12px] w-fit'>
                Get Started  </motion.button> */}
        </div>

      
        
        </div>    
    </motion.div>
  )
}

export default HeroBanner


// <div className="flex flex-col space-y-3">
//             <motion.h3 variants={fadeIn("down")} className='text-white text-center leading-16 md:max-w-2xl font-semibold text-2xl md:text-4xl'>Luxury Apartments for Sale and Rent: Exclusive Offer for Nigeria and the Diaspora.</motion.h3>

//             <motion.p variants={fadeIn("down")} className='text-white leading-16 max-w-2xl'>
//             At Effulgence Homes, we offer exquisite luxury apartments for sale and rent to clients within Nigeria and those in the diaspora. Our mission is to provide unparalleled real estate services, delivering exceptional properties that cater to the sophisticated tastes and discerning lifestyles of our esteemed clients.
//             </motion.p>

//             <motion.button onClick={() => router.push("/register")} variants={fadeIn("down")} className='bg-[#306BB1] flex items-center gap-4 text-white p-4 rounded-[12px] w-fit'>
//                 Get Started  </motion.button>
//         </div>