import Image from "next/image";
import { Inter } from "next/font/google";
import { useRouter } from "next/router";
import HeaderInfo from "@/components/reusables/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter()
  return (
    <main className={` ${inter.className}`}>
   <HeaderInfo />
    </main>
  );
}
