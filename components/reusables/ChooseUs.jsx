import { choose } from '@/assets/data'
import React from 'react'

const ChooseUs = () => {
  return (
    <div className="flex flex-col  text-[#666] py-12 w-full">
         <div className="flex flex-col w-full  items-center justify-center text-center space-y-4">
        <h3 className="font-semibold text-xl">Why Choose Us</h3>
        <p>We provide full service at every step.</p>
      </div>
      <div className='py-12 px-8 md:px-12 place-content-center place-items-center m-auto w-full md:w-[80%]   grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 '>
            {choose.map((place) => {
                const {id, title, content, Icon} = place
                return(
                    <div key={id} className='flex w-fit max-w-md  flex-col py-3 px-3 border-[#ebebeb]  text-[#666] hover:scale-105 gap-4 cursor-pointer transition-all duration-300 bg-white rounded-lg shadow-md border'>
                               <div className='flex items-center justify-center'>
                               <Icon className="text-[#FF385C] text-5xl " />    
                               </div>
                               <h3 className='text-center font-bold text-xl'>{title}</h3>         
                               <p className='text-center'>{content}</p>  
                        </div>
                )
            })}
        </div>
    </div>
  )
}

export default ChooseUs