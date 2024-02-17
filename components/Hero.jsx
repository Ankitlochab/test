import React, { useState } from 'react'
import logo from '../public/img/logo.png'
import Image from 'next/image'
import Dropdown from './Dropdown'
import kaja from '../public/img/kaja.png'
import mask from '../public/img/Mask.png'
import Group from '../public/img/Group.png'
import Dropdown2 from './Dropdown2'
import Dropdown3 from './Dropdown3'
import Dropdown4 from './Dropdown4'
import Dropdown5 from './dropdown5'
import img1 from '../public/img/img1.png'
import img2 from '../public/img/img2.png'
import img3 from '../public/img/img3.png'
import img4 from '../public/img/img4.png'
import img5 from '../public/img/img5.png'
import part1 from '../public/img/part1.png'
import part2 from '../public/img/part2.png'
import part3 from '../public/img/part3.png'
import Bach from '../public/img/Bach.png'
import iconbox2 from '../public/img/iconbox2.png'
import iconbox3 from '../public/img/iconbox3.png'
import immg1 from '../public/img/immg1.png'
import immg2 from '../public/img/immg2.png'
import immg3 from '../public/img/immg3.png'
import immg4 from '../public/img/immg4.png'
import immg5 from '../public/img/immg5.png'
import immg6 from '../public/img/immg6.png'
import srceen1 from '../public/img/srceen1.png'
import srceen2 from '../public/img/srceen2.png'
import one from '../public/img/one.png'
import two from '../public/img/two.png'
import three from '../public/img/three.png'
import Button from '../public/img/Button.png'
import KajariyaFooter from './Footer'
import Sider from './Sider'
import { Entericon } from './icon'

const Hero = () => {
  const [item, setItem] = useState(false)

  return (
    <>
      <div className="bg-[url(/img/bg.png)]  relative bg-black bg-cover     bg-no-repeat bg-center pb-[100px] h-full">
        <div className='w-full  justify-between  flex  items-center   h-[100px] '>
          <div className="w-[200px] flex items-center h-[100px] bg-white">
            <Image className='pl-[20px]' src={logo} width={150} height={60} />
          </div>

          <div className='flex max-xl:hidden   pt-[20px]'>
            <div ><Dropdown /></div>
            <div><Dropdown2 /></div>
            <div><Dropdown3 /></div>

            <div><Dropdown4 /></div>
            <div><Dropdown5 /></div>
            <p className="text-white pl-[20px] pt-[3px]">CONTACTS</p>

          </div>
          <div className="pr-[30px]">


          </div>
          <div className=" cursor-pointer " onClick={() => setItem(!item)}>
            <Entericon />
          </div>

        </div>
        <hr />

        <div className=" ">

          <div className="  ">

            <div>
              <p className="text-[50px] text-center pt-[50px] text-white font-medium">New Level  of  Premium Tile </p>
              <p className="text-center text-white"> Kajaria brings to you premium wall tiles that are detailed with perfection </p>
              <p className="text-center text-white">Each tile is made using state of the art technology making them strong durable & easy to maintian   </p>
              <div className="flex  justify-center pt-[60px]">
                <button className='hover:text-white bg-white  text-[20px] w-[200px] h-[80px]  hover:bg-black'>VIEW PROJECTS</button>
              </div>
            </div>
          </div>
          {/* <div className="   w-[300px]  absolute top-[100px]  max-2xl:hidden left-[1100px]">
            <Image className='  ' src={kaja} width={300} height={200} />
          </div> */}




        </div>
        <div className={`absolute w-full duration-500 ${item ? "left-0 top-0" : "left-[-105%] top-0"}`}>
          <Sider
            item={item} setItem={setItem} />
        </div>

      </div>
      <div className='max-w-[1440px] w-full     mx-auto ' >


        <div className=" h-full items-center max-xl:pt-[50px]  pb-[50px]  px-[12px]  md:flex max-w-[1000px] relative  w-full mx-auto justify-between  ">

          <div className=" -z-40">
            <Image src={mask} width={400} height={500} />
          </div>

          <div className="h-[600px] max-xl:hidden w-[0.08px] bg-[#787777]">

          </div>

          <div className="max-xl:pt-[50px]   -z-40 pl-[20px] ">
            <p>[about Kajaria]</p>
            <p className="text-[35px] text-[#5353d3]">From Premium Tiles <br /> to Life </p>
            <p>.........................</p>
            <p className="max-w-[400px] w-full">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Error veniam, ut ipsum, fugit laborum doloremque asperiores optio dicta porro, saepe maxime quibusdam consectetur illo dolorum ullam cum molestiae. Quae sed dolores, recusandae iure dicta numquam voluptatem? Ipsum magni quas doloremque?</p>
            <div>
              <Image className='  max-xl:hidden absolute  top-[60px] right-[-30px]' src={Group} width={200} height={200} />
            </div>
          </div>





        </div>

        <div className="h-[200px] w-full bg-[#f8f3f3] flex items-center">
          <div style={{ overflowY: 'scroll', }} className="flex gap-11    overflow-scroll   mx-auto ">
            <Image src={img1} width={200} height={200} />
            <Image src={img2} width={200} height={200} />
            <Image src={img3} width={200} height={200} />
            <Image src={img4} width={200} height={200} />
            <Image src={img5} width={200} height={200} />
          </div>
        </div>


        <div className="flex   overflow-scroll">
          <Image className='' src={part1} width={500} height={400} />
          {/* <p className=" relative  text-[25px] text-white pt-[00px]" > The Ultima</p> */}
          <Image src={part2} width={500} height={400} />
          <Image src={part3} width={500} height={400} />

        </div>

        <div className="pt-[150px]  max-w-[1100px] pb-[100px] px-[12px] w-full mx-auto ">
          <p className="text-[#b6b5b5] text-center">[OUR SERVICES]</p>
          <p className="text-[60px] text-center"> What Can We Offer</p>


          <div className=" xl:flex grid-cols-2 max-md:grid-cols-1 grid   justify-center   gap-4 overflow-scroll">
            <div className="flex mx-auto max-w-[400px]  w-full  gap-4 pt-[100px]">
              <div className="  max-w-[400px]  w-full   hover:bg-black     bg-[#f5f1f1] h-full  pb-[50px]  ">
                <div className="  ">
                  <div className="flex justify-center"> <Image className='  pt-[30px]' src={Bach} width={150} height={150} /></div>
                  <p className="text-[30px] text-center  pt-[30px]  text-[#9e9e9e] ">Design & Planning</p>
                  <p className="  text-[#9e9e9e]     text-center "> We will help you to get the  result <br /> you dreamed of.
                  </p>
                  <p className="text-black text-center pt-[40px]  font-extrabold">Read more</p>

                </div>

              </div>

            </div>


            <div className="flex  mx-auto max-w-[400px]    w-full  gap-4 pt-[100px]">
              <div className="  max-w-[400px]  w-full       hover:bg-black bg-[#f5f1f1] h-full  pb-[50px]  ">
                <div className="  ">
                  <div className="flex justify-center"> <Image className='  pt-[30px]' src={iconbox2} width={200} height={150} /></div>
                  <p className="text-[30px] text-center  pt-[30px]  text-[#9e9e9e] ">Custom Solution</p>
                  <p className="  text-[#9e9e9e]     text-center ">Individual aesthetically stunning <br /> solutions for customers </p>
                  <p className="text-black text-center pt-[40px]  font-extrabold">Read more</p>

                </div>

              </div>

            </div>


            <div className="flex mx-auto  justify-center max-w-[400px] group-hover:text-white  w-full  gap-4 pt-[100px]">
              <div className="  max-w-[400px]  w-full    hover:bg-black   bg-[#f5f1f1] h-full  pb-[50px]  ">
                <div className="  ">
                  <div className="flex justify-center"> <Image className='  pt-[30px]' src={iconbox3} width={160} height={150} /></div>
                  <p className="text-[30px] text-center  pt-[30px]  text-[#9e9e9e] ">Wall & Floor Tiles</p>
                  <p className="  text-[#9e9e9e]     text-center "> We create and produce our <br /> product design lines</p>
                  <p className="text-black text-center pt-[40px]    font-extrabold">Read more</p>

                </div>

              </div>

            </div>



          </div>
        </div>

        <div className="flex justify-between pb-[100px] px-[12px]   gap-5 flex-wrap max-md:justify-center      max-w-[1100px] w-full mx-auto ">
          <div >
            <p className="text-[30px] text-center text-[#c2bfbf]">[180+]</p>
            <p className="text-[19px] font-bold">CURRENT CLIENTS</p>
          </div>

          <div>
            <p className="text-[30px] text-center text-[#c2bfbf]">[10+]</p>
            <p className="text-[19px] font-bold">YEARS OF EXPERIENCE </p>
          </div>

          <div>
            <p className="text-[30px] text-center text-[#c2bfbf]">[35+]</p>
            <p className="text-[19px] font-bold">AWARDS WINNING</p>
          </div>
        </div>

        <div className="flex flex-wrap mx-auto max-w-[1440px] w-full justify-center">


          <Image src={immg1} width={480} height={200} />


          <Image src={immg2} width={480} height={200} />



          <Image src={immg3} width={480} height={200} />

          <Image src={immg4} width={480} height={200} />


          <Image src={immg5} width={480} height={200} />



          <Image src={immg6} width={480} height={200} />



        </div>
















        <div className="bg-black w-full ">
          <div className="max-w-[1100px] md:flex mx-auto justify-between pt-[50px] pb-[50px] px-[10px]  w-full h-full">
            <div>
              <p className="text-[30px] text-white">Get Incredible wall & Floor Tiles  Right  Now !</p>
              <p className="text-[#d0cece]">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, porro!</p>
            </div>
            <div>

              <button className=' px-[40px] w-full max-md:mt-[50px] h-[60px] bg-[white] text-[black]'>
                GEt IN TOUCH
              </button>
            </div>

          </div>


        </div>

        <div className="max-w-[1100px]  md:flex  px-[12px] justify-between w-full mx-auto pt-[150px]">
          <div className=" md:hidden">
            <Image src={mask} width={400} height={500} />
          </div>
          <div>
            <p className="text-[#c4c4c4]">[ OUR SKILLS ]</p>

            <p className="text-[32px] pt-[20px] ">The  Core Company Values</p>
            <p>......................</p>
            <p className="max-w-[500px] w-full pt-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis accusamus earum blanditiis, tempore commodi laborum  </p>

            <div>
              <div className="flex  max-w-[300px] w-full justify-between">
                <p>INTERIOR SKETCH </p>
                <p>65%</p>
              </div>
              <div className="max-w-[300px] mt-[10px] h-[1px] bg-black">

              </div>
            </div>

            <div>
              <div className="flex  max-w-[400px] w-full justify-between">
                <p> 3D MODELLING </p>
                <p>85%</p>
              </div>
              <div className="max-w-[400px] mt-[10px] h-[1px] bg-black">

              </div>
            </div>


            <div>
              <div className="flex  max-w-[200px] w-full justify-between">
                <p> 2D PLANNING </p>
                <p>55%</p>
              </div>
              <div className="max-w-[200px] mt-[10px] h-[1px] bg-black">

              </div>
            </div>
          </div>

          <div className="max-md:hidden">
            <Image src={mask} width={400} height={500} />
          </div>

        </div>


        <div className="max-w-[1100px]  px-[15px]   pt-[100px]  xl:flex w-full mx-auto">
          <div className="md:flex md:justify-center  mx-auto max-w-[550px] w-full justify-between">
            <div>
              <Image src={srceen1} width={200} height={500} />
            </div>
            <div className="pl-[50px] max-md:pt-[50px]">
              <p className="text-[20px] text-[#b1adad] ">UPTO 60% OFF</p>
              <p className="text-[45px] pt-[20px] font-extrabold">Offer Sale <br /> Today </p>
              <button className='w-[250px] h-[70px]  text-[20px] mt-[40px]'> SHOP NOW  </button>
            </div>
          </div>

          <div className=" max-w-[550px] mx-auto    max-xl:pt-[100px]  md:pl-[100px] w-full justify-between">
            <div>
              <Image src={srceen2} width={500} height={500} />
            </div>
            <div>
              <p className="text-[20px] text-[#b1adad] ">UPTO 70% OFF</p>
              <p className="text-[45px] pt-[20px] font-extrabold"> Modern Bath  <br /> tiles </p>
              <button className='w-[250px] h-[70px]  text-[20px] mt-[40px]'> SHOP NOW  </button>
            </div>

          </div>




        </div>





        <div className="max-w-[1100px] px-[10px] pt-[100px] w-full mx-auto">
          <div className=" md:flex  justify-between">
            <div>
              <p className="text-[#cccbcb]">[OUR BLOG ]</p>
              <p className="text-[32px] ">Read Our Laster  News</p>
              <p>.........................</p>

            </div>
            <div>
              <button className='text-white mt-[20px] bg-black w-[200px] h-[60px] '>VIEL ALL </button>
            </div>
          </div>



        </div>


        <div className="    pt-[150px] px-[10px]  xl:flex grid-cols-2 max-md:grid-cols-1 grid   justify-center   gap-4 overflow-scroll">

          <div className="max-w-[500px] mx-auto   h-full pb-[50px] border-[1px] border-[#929191] p-[10px]">
            <Image src={one} width={480} height={200} />
            <p className="text-[16px] pt-[20px] text-[#c0bfbf]">MARCH 20 2020 .. TOM BLACK</p>
            <p className=" text-[30px] pt-[20px] pb-[90px] max-w-[480px] w-full"> 4D Floor & Wall Tiles: Elevating Tile Excellence with Kajaria </p>
            <p className="text-[16px] text-[#c0bfbf]">A Faceting effect livens up and.....</p>

          </div>
          <div className="max-w-[500px] mx-auto h-full pb-[50px] border-[1px] border-[#929191] p-[10px]">
            <Image src={two} width={480} height={200} />
            <p className="text-[16px] pt-[20px] text-[#c0bfbf]">MARCH 20 2020 .. TOM BLACK</p>
            <p className=" text-[30px] pt-[20px] pb-[90px] max-w-[480px] w-full"> Ideal Tiles for Walls: Enhancing the Aesthetices of Every Space  </p>
            <p className="text-[16px] text-[#c0bfbf]">A Faceting effect livens up and.....</p>

          </div><div className="max-w-[500px] mx-auto h-full pb-[50px] border-[1px] border-[#929191] p-[10px]">
            <Image src={three} width={480} height={200} />
            <p className="text-[16px] pt-[20px] text-[#c0bfbf]">MARCH 20 2020 .. TOM BLACK</p>
            <p className=" text-[30px] pt-[20px] max-w-[480px] w-full"> Revolutionizing the Tile Industry Continua+ Technology at Kajaria Eternity for Producing  The Ultima Slabs </p>
            <p className="text-[16px] text-[#c0bfbf]">A Faceting effect livens up and.....</p>

          </div>
        </div>
        <div className="pt-[100px]">
          <KajariyaFooter />
        </div>

      </div></>
  )
}
export default Hero