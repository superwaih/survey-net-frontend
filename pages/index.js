import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import HeaderInfo from "@/components/reusables/Header";
import Head from "next/head";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>Landing Page</title>
      </Head>
    <main className={` ${inter.className}`}>
   <HeaderInfo />
    </main>
    
    </>
  );
}
