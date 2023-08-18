import { featuredPlaces } from '@/assets/data';
import React from 'react'
import AliceCarousel from "react-alice-carousel";
import Image from 'next/image';
import "react-alice-carousel/lib/alice-carousel.css";
import { AiOutlineShareAlt } from 'react-icons/ai';
const Slider = () => {
    const responsive = {
        0: {
          items: 1,
        },

        512: {
          items: 2,
        },
        1000:{
          items: 3
        }
      };

    
    const items = featuredPlaces.map((place) => {
        return(
            <div key={place.id} className='flex w-fit mx-3 items-center justify-center max-w-md  flex-col border-[#ebebeb]  text-[#666]   gap-4 cursor-pointer transition-all duration-300 bg-white rounded-lg shadow-md border'>
                <Image
                    width={500}
                    height={500}
                    src={place.image}
                    className='rounded-t-md w-full '
                    alt="place image"
                />
                <div className='flex flex-col justify-between space-y-3 w-full   py-3 px-4'>
                    <h3 className='font-semibold'>{place.name}</h3>
                    <p>{place.location}</p>
                    <div className="grid grid-cols-2 w-full">
                        <p>{place.rooms} Bedrooms</p>
                        <p>{place.desc}</p>
                        <p>{place.size}</p>
                        <p>3 Bathrooms</p>


                    </div>
                    <div className="h-[1px] w-full bg-gray-400">

                    </div>
                    <div className="flex justify-between">
                        <h3 className="font-bold">$150,000</h3>
                        <div className="flex gap-4">
                            <AiOutlineShareAlt />
                            <AiOutlineShareAlt />
                            <AiOutlineShareAlt />

                        </div>
                    </div>

                    
                </div>
                </div>
        )
    })
  return (
    <div className='py-5 bg-[#FF385C] flex  flex-col items-center justify-center pb-8 px-5'>
         <div className="flex text-white flex-col w-full pb-5  items-center justify-center text-center space-y-4">
        <h3 className="font-semibold text-xl">Discover Popular Properties</h3>
        <p>We provide full service at every step.</p>
      </div>
      <div  className="m-auto w-full md:w-[70%]">

        <AliceCarousel
        mouseTracking
        // infinite
        autoPlayInterval={1000}
        animationDuration={1500}
        disableDotsControls
        disableButtonsControls
        responsive={responsive}
        items={items}
       
        // autoPlay
      />
      </div>
    </div>
  )
}

export default Slider