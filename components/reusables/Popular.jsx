import React from 'react'
import Image from 'next/image'
import { popularPlaces } from '@/assets/data'
const Popular = () => {
  return (
    <section className='flex flex-col py-12 w-full'>
        <div className='flex flex-col w-full  items-center justify-center text-center space-y-4'>
            <h3 className='font-semibold text-xl'>Popular Places</h3>
            <p >Properties In Most Popular Places.</p>
        </div>
        <div className='py-12 px-7 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 '>
            {popularPlaces.map((place) => {
                return(
                    <div key={place.id} className='flex w-full  border-[#ebebeb]  text-[#666] hover:scale-105 gap-4 cursor-pointer transition-all duration-300 bg-white rounded-lg shadow-md border'>
                        <div>
                        <Image
                            width={200}
                            height={200}
                            src={place.image}
                            className=''
                            alt="place image"
                        />
                        </div>
                        <div className='flex text-sm   flex-col justify-center '>
                            <h3 className='font-semibold'>{place.location}</h3>
                            <p>{place.properties} Properties</p>
                        </div>
                        </div>
                )
            })}
        </div>
    </section>
  )
}

export default Popular