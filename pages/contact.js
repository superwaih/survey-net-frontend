import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import HeaderInfo from "@/components/reusables/Header";
import Head from "next/head";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

import Sidebar from "@/components/reusables/Sidebar";
import HeroBanner from "@/components/reusables/HeroBanner";
import Popular from "@/components/reusables/Popular";
import Featured from "@/components/reusables/Featured";
import ChooseUs from "@/components/reusables/ChooseUs";
import Slider from "@/components/reusables/Slider";
import { useWindowSize } from "@uidotdev/usehooks";
import Footer from "@/components/reusables/Footer";
import { useState } from "react";
import Link from "next/link";
import ContactForm from "../components/register-components/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function About() {
  const router = useRouter();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <main className={`relative  ${inter.className}`}>
        <HeaderInfo about toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
        {toggleSidebar && (<Sidebar />)}
        <div className="m-auto pt-32 w-[90%] py-6 md:w-[80%]">
          <h3 className="text-center text-2xl font-extrabold md:text-3xl lg:text-5xl text-[#666]">
           CONTACT US
          </h3>
          <div className="flex text-xl font-extrabold justify-center gap-4">
            <Link href={"/"}>
              <h4 className=" text-blue-700 cursor-pointer">HOME</h4>
            </Link>
            <span className="text-black">/</span>
            <h4 className="text-black"> CONTACT US</h4>
          </div>
          <div>
            <h4 className="font-extrabold text-center text-xl text-black">
              <span className="text-red-500  leading-10">HAVENS</span> BY
              EFFULGENCE HOMES
            </h4>

            <div className="flex justify-between ">
                <ContactForm />
             
            </div>
          </div>
        </div>

        <ChooseUs about />
        {/* <Slider /> */}
        <Footer />
       
      </main>
    </>
  );
}
