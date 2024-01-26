
import { motion } from "framer-motion";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Player from "../../components/share/Player";
import { nanoid } from 'nanoid';
import Link from 'next/link';
import SideBoard  from "./../../public/assets/images/Rastergrafikobg.png";
import { ClientAnimationWrapper } from "@/components/share/ClientAnimationWrapper";
import LogoEZ from'./../../public/assets/images/LogoEZ.png';

import Hero from './../../public/assets/images/Rastergrafikobg.png';



export default function Home() {

  return (

    <>


    {/*====================================================grid start ===============*/}

<section className='h-[100dvh] bg-[url("/assets/images/Griddy.svg")]  bg-cover'>

<div className="grid grid-cols-12 grid-rows-16 gap-4">
      <div className="mt-8 col-span-8 row-span-3">
      <h1 className=" px-1 uppercase text-5xl font-black sm:text-8xl  md:text-8xl  bg-gradient-to-b from-zinc-500 to-zinc-200 bg-clip-text text-transparent  lg:text-[9rem] lg:mb-3">Timeless</h1>

<h1 className="relative px-1 -top-6 uppercase text-[3.7rem] font-black md:text-[9.11rem] bg-gradient-to-b from-amber-600 via bg-yellow-500 to-zinc-300 bg-clip-text text-transparent lg:-top-28 lg:text-[14rem]">Design</h1>

    
    </div>
    <div className="col-span-7 row-span-3 col-start-1 row-start-4">
    <div className='-mt-1 2w-[60vw]  '>
            <Image src={SideBoard}  width={300}     height="250"  alt="technical-glance"/>
    </div> 
    
    </div>
    <div className="col-span-4 row-span-7 col-start-9 row-start-1">
    <p className="mb-5 lg:mr-12 bg-zinc-500/10 lg:px-5 lg:py-3 rounded-xl  mt-5 py-1 text-zinc-700 font-bold text-right text-sm px-3 sm:text-2xl md:text-[2.33rem] md:leading-9 lg:font-black lg:text-6xl lg-p-5 ">&laquo;the beauty of a living thing is not the atoms that go into it -but the way those atoms are put together...&raquo;</p>

<div className=" font-black shadow-xl shadow-gray-400/50 flex flex-col items-center justify-center text-xs sm:text-2xl md:text-2xl lg:text-3xl text-white leading-3 bg-orange-400 rounded-full w-16 h-16 transform translate-x-10 md:transform md:translate-x-44 sm:w-20 sm:h-20 md:w-24 md:h-24 md:-top-1  lg:w-32 lg:h-32">

 <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black ">Carl</p>

 <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black">Sagan</p>
    
    </div>
    </div>
    <div className="mt1dd col-span-6 row-span-6 col-start-4 row-start-8">
    <ClientAnimationWrapper>
      <div className="flex flex-col items-center">
    <Image className="mt-12 mx-auto w-36 border-2 border-yellow-600" src={LogoEZ}  width={133} height={133}  alt="technical-glance"/>
    </div>
    </ClientAnimationWrapper>
    </div>
    <div className="col-span-8 row-span-3 col-start-3 row-start-14">
    <div className="mt-24 flex flex-col items-center justify-center">
            <Button className="mt-5 bg-zinc-500 text-orange-300 font-bold border-8 border-orange-300 text-3xl w-60 h-12 shadow-2xl shadow-zinc-800 lg:w-80 lg:h-20 lg:text-5xl lg:-mt-12 lg:mb-6" variant={'outline'} size="lg" >send e-mail 
        <div>
  
  </div>   
    <Link href="fgirse@bluemail" className="bg-zinc-600 "></Link>   
    </Button>
    </div>
    
    </div>
</div>
    


    </section>
{/*====================================================grid ende ===============*/}

</>

  )

}
