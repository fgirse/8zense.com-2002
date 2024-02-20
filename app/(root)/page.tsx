import { getListPage } from "@/lib/contentParser";
import { motion } from "framer-motion";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Player from "../../components/share/Player";
import { nanoid } from 'nanoid';
import Link from 'next/link';
import SideBoard  from "./../../public/assets/images/sideboardobg.png";
import { ClientAnimationWrapper } from "@/components/share/ClientAnimationWrapper";
import LogoEZ from"@/public/assets/images/LogoEZ30.svg"
//import {LinkIcon} from "@/public/assets/icons/link.svg"
import { any, array } from "zod";
import DemoSlider from "@/components/partials/TestimonialsAAA";
import dataSlider from "@/constants/sliderData.json";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
//import Testimonials from "@/components/share/Testimonials"
import SlightShow2 from"@/components/share/SlightShow2"
import"@/app/home.module.css"
import ParticlsRing from '@/components/share/ParticleRing';

export default function Home() {

  

  return (


    <>



    {/*====================================================grid start ===============*/}

<section className='{styles.section}  mx-auto min-h-screen bg-[url("/assets/images/gitter.png")] bg-contain'>
<div className="">
  <ParticlsRing/>
</div>


<div className=" grid grid-cols-12 grid-rows-16 gap-1">

      <div className="mt-8 col-span-6 row-span-3">

      <h1 className=" px-1 uppercase text-5xl font-black sm:text-8xl md:text-8xl bg-gradient-to-b from-zinc-500 to-zinc-200 bg-clip-text text-transparent lg:text-[11.66rem] lg:tracking-widest lg:mb-3">Timeless</h1>


<h1 className="relative px-1 top-4 uppercase text-[3.7rem] font-black md:text-[9.11rem] bg-gradient-to-b from-cyan-700 via bg-yellow-500 to-zinc-300 bg-clip-text text-transparent lg:-top-28 lg:text-[rem] lg:tracking-wider">Design</h1>

    

    </div>

    <div className="col-span-7 row-span-3 col-start-1 row-start-4">

    <div className='mt-12 w-[60vw] lg:-mt-[20vh]'>

            <Image src={SideBoard}   alt="technical-glance"/>

    </div> 

    

    </div>

    <div className="px-1 col-span-6 row-span-7 col-start-7 row-start-1">

    <p className="mb-5 lg:mr-12 bg-zenseSignal/20  rounded-xl  mt-7 py-1 text-zinc-700 font-black text-right text-[.9rem] px-3 sm:text-2xl md:font-semibold md:text-[2.33rem] md:leading-9 lg:px-5 lg:py-3 lg:font-semibold lg:text-6xl lg:p-5 ">&laquo;the beauty of a living thing is not the atoms that go into it -but the way those atoms are put together...&raquo;</p>

<div className=" relative -top-2 left-10 shadow-xl shadow-gray-400/50 flex flex-col items-center justify-center text-xs sm:text-2xl md:text-2xl lg:text-3xl text-white leading-3 bg-orange-400 rounded-full w-16 h-16 transform translate-x-10 md:transform md:translate-x-44 sm:w-20 sm:h-20 md:w-24 md:h-24 md:-top-1  lg:left-2/4 lg:w-32 lg:h-32">


 <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black ">Carl</p>


 <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black">Sagan</p>

    

    </div>

    </div>

    <div className=" col-span-6 row-span-6 col-start-4 row-start-8">

    <ClientAnimationWrapper>

      <div className="{styles.image-container} mt-[35vh] mb-8 flex flex-col items-center  lg:w-[10vw] lg:flex-1">

    <Image className="{styles.image-home} mx-auto  lg:mt-0  lg:bg-black/5" src={LogoEZ}  alt="LogoEZCyan" sizes="100vw" style={{width:'50%',height: 'auto',}}/>

    </div>

    </ClientAnimationWrapper>

    </div>

   {/*} <div className="col-span-8 row-span-3 col-start-3 row-start-14">

    <div className="mb-16 mt-[15vh] flex flex-row items-center justify-center gap-x-5 sm:mt-12">

            <Button className=" bg-lime-300 text-orange-400 font-bold border-8 border-lime-300 text-3xl w-72 h-12 shadow-2xl shadow-zinc-800 lg:w-96 lg:h-24 lg:ml-5 lg:text-5xl lg:px-2 lg:-mt-12 lg:mb-6" variant={'outline'} size="lg" >
              <EnvelopeOpenIcon margin-right={15} width={50} height={50}/>
             

        <div>

  

  </div>   

    <Link href="fgirse@bluemail" className="bg-zinc-600 "></Link>   
                     &nbsp; send e-mail
    </Button>

    </div>

    

  </div>*/}

    </div>
    </section>

{/*====================================================grid ende ===============*/}
{/*<main className="flex min-h-screen flex-col items-center justify-between">
      <DemoSlider data={dataSlider} />
</main>*/}
{/*"<Testimonials data={testimonial}/>"*/}"
    <SlightShow2/>

    <section className="">
<ParticlsRing>
  
</ParticlsRing>

    </section>
</>
  )
}



    



{/*====================================================grid ende ===============*/}

{/*
<section>



<Testimonials data={testimonial} />


</section>

</>
)
}
export default Home


*/}
