import { featuredPlaces } from "@/assets/data";
import React from "react";
import Image from "next/image";
import { AiOutlineShareAlt } from "react-icons/ai";

const Featured = () => {
  return (
    <div className="flex flex-col bg-[#f5f7fb] text-[#666] py-12 w-full">
      <div className="flex flex-col w-full  items-center justify-center text-center space-y-4">
        <h3 className="font-semibold text-xl">Featured Properties</h3>
        <p>These are our featured properties</p>
      </div>
      <div className='py-12 px-5 m-auto place-content-center place-items-center w-full md:w-[80%] md:px-12  grid grid-cols-1 lg:grid-cols-2 gap-5 '>
            {featuredPlaces.map((place) => {
                return(
                    <div key={place.id} className='flex w-fit md:flex-row flex-col border-[#ebebeb]  text-[#666] hover:scale-105 gap-4 cursor-pointer transition-all duration-300 bg-white rounded-lg shadow-md border'>
                        <Image
                            width={500}
                            height={500}
                            src={place.image}
                            className='rounded-t-md w-full md:w-2/5'
                            alt="place image"
                        />
                        <div className='flex flex-col justify-between space-y-3 w-full  md:w-3/5 py-3 px-4'>
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
            })}
        </div>
    </div>
  );
};

export default Featured;
