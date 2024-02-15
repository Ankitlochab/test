import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Hero";
import Footer from "@/components/Hero";
import Sider from "@/components/Sider";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <Hero/>
  {/* <Footer/> */}
  {/* <Sider/> */}
  
  </>
  );
}
