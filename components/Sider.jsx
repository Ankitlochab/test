import Image from 'next/image'
import React from 'react'
import logo2 from '../public/img/logo2.png'
import side1 from '../public/img/side1.png'
import side2 from '../public/img/side2.png'
import side3 from '../public/img/side3.png'
import side4 from '../public/img/side4.png'
import side5 from '../public/img/side5.png'
import side6 from '../public/img/side6.png'
import { Callicon, Exiticon, Facebook1icon, Facebookicon, Insta3icon, Instaicon, Lattericon, Locationicon, Twitter4icon, Twittericon, Youtube2icon, Youtubeicon } from './icon'
import Link from 'next/link'
 


const Sider = ({item, setItem}) => {
  return (
    <>
      <div className="max-w-[600px] pl-[50px] z-50 w-full bg-[#5a5858] px-[12px]    h-screen  pb-[100px]">
        <div className="flex cursor-pointer justify-end p-[20px]   " onClick={() => setItem(!item) }>
          <Exiticon/>
        </div>
        <div className="  pt-[100px]">
          <Image src={logo2} width={200} height={80} />
        </div>   

        <div>
          <p className="text-[25px] pt-[50px] text-white">Our Gallery </p>
        </div>

        <div className="max-w-[500px] w-full flex  flex-wrap   ">
          <Image src={side1} width={100} height={100} />
          <Image src={side2} width={100} height={100} />
          <Image src={side3} width={100} height={100} />

        </div>
        <div className="max-w-[500px]  w-full flex  flex-wrap  ">
          <Image src={side4} width={100} height={100} />
          <Image src={side5} width={100} height={100} />
          <Image src={side6} width={100} height={100} />

        </div>







        <div>
          <p className="text-[25px] pt-[50px] text-white">Contact Info  </p>

          <div className="flex pt-[40px] items-center">
            <Locationicon/>
            <p className="pl-[30px] text-[20px] text-white">411 University St Seattle USA </p>
          </div>

          <div className="flex pt-[10px] items-center">
            <Lattericon/>
            <p className="pl-[30px] text-[20px] text-white"> onetwo@gmail.com </p>
          </div>

          <div className="flex pt-[10px] items-center">
             <Callicon />
            <p className="pl-[30px] text-[20px] text-white">+91 9600000011 </p>
          </div>
        </div>

        <div className=" flex pt-[100px]  gap-10 mt-3">
          <Link href="">
            <Facebook1icon />
          </Link>
          <Link href="">
            <Insta3icon />
          </Link>
          <Link href="">
            <Twitter4icon />
          </Link>
          <Link href="">
            <Youtube2icon />
          </Link>
        </div>



        </div>

    </>
  )
}

export default Sider