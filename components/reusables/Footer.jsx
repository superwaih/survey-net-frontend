import React from "react";
import Link from "next/link";
import Image from "next/image";
import {BiSolidEditLocation} from "react-icons/bi"
import { AiFillMail, AiFillPhone, AiOutlineTwitter } from "react-icons/ai";
const Footer = () => {
  return (
    <footer className="bg-[#303441] py-5 text-sm">
 <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 m-auto w-[90%]"> 
 <div>
  <Link href="/">
       
          <Image
            width={120}
            height={120}
            src={"/bg/logo.png"}
            alt=""
          />
      </Link>
      <p className="text-color">
      Nigeria's foremost destination for property seekers looking for their dream homes.
      </p>

      <div className="flex flex-col pt-4 space-y-3">
        <div className="flex gap-3 items-center">
            <AiFillPhone className="text-[#FF385C] text-lg" />
        
            <span className="text-color">21 Victory Estate Olorunda Abaa, Ibadan, Nigeria
</span>
        </div>
        <div className="flex gap-3 items-center">
           <BiSolidEditLocation className="text-[#FF385C] text-lg" />
            <span className="text-color">+456 875 369 208</span>
        </div>
        <div className="flex gap-3 items-center">
           
            <AiFillMail className="text-[#FF385C] text-lg" />
            <span className="text-color">support@havens.ng</span>
        </div>
      </div>
  </div>

  <div className="text-color py-10">
    <h3 className="text-white underline underline-offset-4  decoration-[#FF385C]">Navigation</h3>
    <div className="py-3">
        <p className="hover:text-[#FF385C] border-b w-fit hover:underline">Properties</p>
        <p className="hover:text-[#FF385C] border-b w-fit hover:underline">Properties List</p>
        <Link href={"/about"}>
        <p className="hover:text-[#FF385C] border-b w-fit hover:underline">About Us</p>
        </Link>
        <p className="hover:text-[#FF385C] border-b w-fit hover:underline">Blog</p>
        <Link href={"/contact"}>
        <p className="hover:text-[#FF385C] border-b w-fit hover:underline">Contact us</p>
        </Link>
    </div>
    
  </div>
  <div className="text-color py-10">
    <h3 className="text-white underline underline-offset-4  decoration-[#FF385C]">Instagram feeds</h3>
    <div className="py-3">
      <AiOutlineTwitter className="hover:text-[#FF385C] underline hover:underline" />
        {/* <p className="hover:text-[#FF385C] underline hover:underline">We are trending</p> */}
        

    </div>
    
  </div>

  <div className="text-color py-10">
    <h3 className="text-white underline underline-offset-4  decoration-[#FF385C]">Newsletter</h3>
    <div className="py-3">
       <p>
       Sign Up for Our Newsletter to get Latest Updates and Offers. Subscribe to receive news in your inbox.
       </p>
       <div className="relative mt-3">
        <input type="text" placeholder="Enter your Email" className="py-4 px-3 text-white rounded-sm placeholder:text-white  bgcolor" name="" id="" />
        <button className="py-4 px-3 = bg-[#FF385C] text-white">SUBSCRIBE</button>
       </div>

    </div>
    
  </div>
 </div>
 <div className="w-full h-[1px] my-4 bg-slate-300">

 </div>
 <div className="px-4 text-center text-color">
  <p>2023 © Copyright - Havens By Effulgence Home.</p>
 </div>
    </footer>
  );
};

export default Footer;
