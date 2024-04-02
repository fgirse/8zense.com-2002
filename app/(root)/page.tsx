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
import Diagramm from "@/public/assets/images/diagramm.svg";
import { any, array } from "zod";
import DemoSlider from "@/components/partials/TestimonialsAAA";
import dataSlider from "@/constants/sliderData.json";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
//import Testimonials from "@/components/share/Testimonials"
import SlightShow2 from"@/components/share/SlightShow2"
import"@/app/home.module.css"
import ParticlsRing from '@/components/share/ParticleRing';
import ShuffleHero from "@/components/share/ShuffleHeroEightzense";
import HorizontalSrollCarousel from "@/components/share/HorizontalScrollCarousel";
import {SwipeCarousel  } from "@/components/share/SwipeCaroussel";
import { StaggerTestimonials} from "@/components/share/Testimonial";
import CollapsCardFeature from "@/components/share/CollapsCardFeature";
import { VanishText } from "@/components/share/VanishText";  
import Space from "@/public/assets/images/space.png"
import ColorChangeCards from "@/components/share/ColorChangeCard";
import FeatureAnimation from "@/components/share/FeatureAnimated";
import LottiAnimation from "@/components/share/LottiAnimation";
import MagnetButton from "@/components/share/MagnetButton";





export default function Home() {

  

  return (


    <>



    {/*====================================================grid start ===============*/}

<section className='mx-auto min-h-screen'>

  <ParticlsRing/>

<div className=" grid grid-cols-12 grid-rows-16 gap-1">



    <div className="col-span-7 row-span-3 col-start-1 row-start-4">

    

    

    </div>

    <div className="mr-5 px-1 col-span-6 row-span-7 col-start-7 row-start-1">

    <p className="mb-5 lg:mr-12 bg-slate-900  rounded-xl  mt-7 py-1 text-slate-50 font-black text-right text-[.9rem] px-3 sm:text-2xl md:font-semibold md:text-[2.33rem] md:leading-9 lg:px-5 lg:py-3 lg:font-semibold lg:text-6xl lg:p-5 ">&laquo;the beauty of a living thing is not the atoms that go into it -but the way those atoms are put together...&raquo;</p>

<div className=" relative -top-2 left-10 shadow-xl shadow-gray-400/50 flex flex-col items-center justify-center text-xs sm:text-2xl md:text-2xl lg:text-3xl text-white leading-3 bg-orange-400 rounded-full w-16 h-16 transform translate-x-16 md:transform md:translate-x-44 sm:w-20 sm:h-20 md:w-24 md:h-24 md:-top-1  lg:left-2/4 lg:w-32 lg:h-32">


 <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black ">Carl</p>


 <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black">Sagan</p>

    

    </div>

    </div> 
    

    </div>
    </section>
    <section className="section-Space">
    
    <div className='mt-12 mb-44 w-[60vw] lg:-mt-[20vh]'>

    <div className="mb-24 -top-44 -z-10 relative w-[77vw] h-[33vh] lg:w-[77vw] lg:h-[50vh]">
  
  <Image src={Space} fill sizes="100vw"  alt="space Illustration"/>
 
  </div>             

    </div> 
    </section>
    
    <section className="shuffle-Hero -mt-44 ">
    <ShuffleHero/>
    </section>
    <section className="collaps-Feature">
    <CollapsCardFeature/>
    </section>
    <LottiAnimation/>
    <section className="slight-Show">
    <SlightShow2/>
    </section>
    <section className="feature-Animation">
    <FeatureAnimation/>
    </section>
    
    <section className="color-Changecards">
    <ColorChangeCards/>
    </section>
      <VanishText/>
        <StaggerTestimonials/>
    
{/*====================================================grid ende ===============*/}

<section className="">    
<HorizontalSrollCarousel/>
       </section>
    <section className="">


    </section>
</>
  )
}



    



{/*====================================================grid ende ===============*/}
