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
     
     className='w-full bg-[#E8F7FD] pt-16 pb-8' >
        <div className='m-auto flex space-y-5 flex-col lg:flex-row justify-between w-[80%]'>
        <div className="hero__text w-full lg:w-1/2 flex flex-col space-y-6">
            <motion.h3 variants={fadeIn("down")} className='text-[#306BB1] leading-16 md:max-w-2xl font-semibold text-2xl md:text-4xl'>Luxury Apartments for Sale and Rent: Exclusive Offer for Nigeria and the Diaspora.</motion.h3>

            <motion.p variants={fadeIn("down")} className='text-[#283341] leading-16 max-w-2xl'>
            At Effulgence Homes, we offer exquisite luxury apartments for sale and rent to clients within Nigeria and those in the diaspora. Our mission is to provide unparalleled real estate services, delivering exceptional properties that cater to the sophisticated tastes and discerning lifestyles of our esteemed clients.
            </motion.p>

            <motion.button onClick={() => router.push("/register")} variants={fadeIn("down")} className='bg-[#306BB1] flex items-center gap-4 text-white p-4 rounded-[12px] w-fit'>
                Get Started  </motion.button>
        </div>

        <motion.div variants={fadeIn("down")} 
       
        
        className='hero__image w-full lg:w-1/2 flex items-center justify-center lg:items-end lg:justify-end'>
            {/* <Image
                width={0}
                height={0}
                src={Hero}
                alt=""
            /> */}
        </motion.div>
        
        </div>    
    </motion.div>
  )
}

export default HeroBanner