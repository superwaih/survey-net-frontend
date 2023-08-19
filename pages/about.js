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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
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
            ABOUT OUR COMPANY
          </h3>
          <div className="flex text-xl font-extrabold justify-center gap-4">
            <Link href={"/"}>
              <h4 className=" text-blue-700 cursor-pointer">HOME</h4>
            </Link>
            <span className="text-black">/</span>
            <h4 className="text-black"> ABOUT US</h4>
          </div>
          <div>
            <h4 className="font-extrabold text-xl text-black">
              <span className="text-red-500 leading-10">HAVENS</span> BY
              EFFULGENCE HOMES
            </h4>
            <div className="flex justify-between ">
              <div className="md:w-1/2">
                <p className="text-[15px] text-[#666] leading-8 tracking-normal ">
                  Welcome to Effulgence Home, Nigeria's foremost destination for
                  property seekers looking for their dream homes – from
                  affordable choices to opulent abodes. We bridge the divide
                  between affordability and luxury, ensuring that every Nigerian
                  and those in the Diaspora can find a place to call home
                </p>

                <p className="text-[15px] text-[#666] leading-8 tracking-normal ">
                  Effulgence Home was established by a team of seasoned
                  professionals who bring with them a diverse set of experiences
                  in the real estate industry. Their insights, combined with an
                  unwavering commitment to service, provide our clients with a
                  real estate experience like no other. We are not just a
                  property listing site; we are a partner that guides you
                  through the complexities of the Nigerian real estate
                  landscape, from start to finish
                </p>
                <button className="border-red-500 border p-4 text-lg rounded-2xl px-8 mt-4">Read more</button>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <ChooseUs about />
        <Slider />
        <Footer />
        {/* <div
        className="w-[80%] mt-4 m-auto
        "
      >
        <motion.div 
        variants={fadeIn("down")}
        initial='hidden'
        whileInView={'show'}
        className="flex flex-col space-y-8 items-center justify-center">
          <h3 className="text-2xl md:text-4xl font-semibold">Our Mission</h3>
          <p className="normal-text leading-12 max-w-2xl text-center">
          Our mission is to provide unparalleled real estate services, delivering exceptional properties that cater to the sophisticated tastes and discerning lifestyles of our esteemed clients.
          </p>
        </motion.div>

        <div className="py-4 border-[#CDDBEC] border-b"></div>

        <motion.div
        initial='hidden'
        whileInView={'show'}
        variants={fadeIn("right")}
        className="py-8 flexible gap-5 justify-between w-full border-[#CDDBEC] border-b">
          <div className="w-full flex flex-col space-y-4">
            <motion.h3 
            variants={fadeIn("down")}
            initial='hidden'
            whileInView={'show'}
            className="text-2xl md:text-4xl max-w-lg font-semibold">
             Why Choose Effulgence Homes?
            </motion.h3>
            <p className="gray-text leading-12 max-w-lg">
            <span className="font-bold">Unmatched Expertise:</span> Our team of experienced real estate professionals has in-depth knowledge of the local market and trends. We leverage our expertise to guide you through every step of the buying or renting process, providing valuable insights and ensuring a seamless experience.
            </p>

            <p className="gray-text leading-12 max-w-lg">
            <span className="font-bold">Tailored Solutions:</span> At Effulgence Homes, we recognize that every client has unique preferences and requirements. Our dedicated agents work closely with you to understand your specific needs, offering personalized solutions that exceed your expectations and fulfill your real estate aspirations.
Transparent and Trustworthy: We prioritize transparency and integrity in all our dealings. With Effulgence Homes, you can expect open communication, honest advice, and complete transparency throughout the process, ensuring your confidence and peace of mind.

            </p>
          </div>
        
        </motion.div>

        <motion.div 
        
        variants={fadeIn("down")}
            initial='hidden'
            whileInView={'show'}
        className="py-9 border-[#CDDBEC] border-b">
          <div className="flex flex-col space-y-8 items-center justify-center">
            <h3 className="text-2xl md:text-4xl font-semibold text-center">
              Our Values
            </h3>
            <p className="normal-text leading-12 max-w-2xl italic text-lg text-center">
            &ldquo;We pride ourselves on presenting a carefully curated selection of luxury apartments that embody elegance, sophistication, and superior craftsmanship. Each property is meticulously handpicked to ensure it meets our stringent standards of quality, design, and amenities.&ldquo;
            </p>
          </div>

          <div 
          variants={fadeIn("left")}
          initial='hidden'
          whileInView={'show'}
          
          className="grid gap-5 py-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
           
          </div>
        </motion.div>

        <div className="py-9 flexible border-[#CDDBEC] border-b">
      
           
        </div>
      </div> */}
      </main>
    </>
  );
}
