import { getListPage } from "@/lib/contentParser";
import link from 'next/link';
import { ClientAnimationWrapper } from "@/components/share/ClientAnimationWrapper";
import LogoEZ from"@/public/assets/images/LogoEZ30.svg"
import Diagramm from "@/public/assets/images/diagramm.svg";
import { any, array } from "zod";
import DemoSlider from "@/components/partials/TestimonialsAAA";
import dataSlider from "@/constants/sliderData.json";
import { EnvelopeOpenIcon } from "@radix-ui/react-icons";
//import Testimonials from "@/components/share/Testimonials"
import SlightShow2 from"@/components/share/SlightShow2"
import styles from"./styles.module.css"
import ParticlsRing from '@/components/share/ParticleRing';
import ShuffleHero from "@/components/share/ShuffleHeroEightzense";
import HorizontalSrollCarousel from "@/components/share/HorizontalScrollCarousel";
import {SwipeCarousel  } from "@/components/share/SwipeCaroussel";
import { StaggerTestimonials} from "@/components/share/Testimonial";
import ColCardFeature from "@/components/share/CollapsCardFeature";
import { VanishText } from "@/components/share/VanishText";  
import Space from "@/public/assets/images/space.png";
import ColorChangeCards from "@/components/share/ColorChangeCard";
import FeatureAnimation from "@/components/share/FeatureAnimated";
import LottiAnimation from "@/components/share/LottiAnimation";
import MagnetButton from "@/components/share/MagnetButton";
import IlluTestimonial from"@/public/assets/images/illustration.png";
import Image from "next/image";
import Skizze from "@/public/assets/images/skizze.png";
import Button from "@/components/share/Button";
//import MagnetButtonExample from "./MagnetButton";



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
    
    <section className="-mt-72 section-Space bg-[url('/assets/images/space.png')] bg-contain bg-no-repeat">
    
    

    <div className="relative -top-[25vh] -z-10  w-[77vw] h-[33vh] lg:w-[77vw] lg:h-[50vh]">
  
  <Image src={Space} sizes="100vw"  alt="space Illustration"/>
 
  </div> 
    
    

   
  <section className="container w-full px-8 py-12 grid grid-cols-1 lg:grid-cols-1 items-center gap-8 max-w-6xl mx-auto">

    



   

<h1 className="relative px-1 uppercase leading-10 text-[3.0rem] font-black md:text-center md:leading-[4rem] md:text-[3.750rem] bg-gradient-to-b from-slate-900 via bg-slate-600 to-slate-500 bg-clip-text text-transparent lg:top  lg:tracking-wider lg:leading-6 lg:text-8xl">Timeless Design</h1>

<div className="mt-3 relative w-[75vw] h-[24vh] lg:w-[45vw]">

<Image src={Skizze} fill sizes="100vw" alt="Skizze"/>


</div>

<p className="text-base md:text-lg text-slate-700 my-4 md:my-6">

      <span className="text-zenseSignal2 font-bold">8zenSe.com</span> begleitet, beratet und unterstÃ¼tzt Sie professionell bei der Planung und Umsetzung Ihres individuellen Interieure Desings in Wohnung, Haus, BÃ¼ro ofer Praxis. Sprechen Sie uns an - Wir freuen uns auf Sie!

    </p>

    <Button/>

</section>
  <section className="container w-full px-8 py-12 grid grid-cols-1 lg:grid-cols-1 items-center gap-8 max-w-6xl mx-auto">

    



   

<h1 className="relative px-1 uppercase leading-10 text-[3.0rem] font-black md:text-center md:leading-[4rem] md:text-[3.750rem] bg-gradient-to-b from-slate-900 via bg-slate-600 to-slate-500 bg-clip-text text-transparent lg:top  lg:tracking-wider lg:leading-6 lg:text-8xl">Interior Design</h1>

<div className="mt-3 relative w-[75vw] h-[24vh] lg:w-[45vw]">

<Image src={Skizze} fill sizes="100vw" alt="Skizze"/>


</div>

<p className="text-base md:text-lg text-slate-700 my-4 md:my-6">

      <span className="text-zenseSignal2 font-bold">8zenSe.com</span> begleitet, beratet und unterstÃ¼tzt Sie professionell bei der Planung und Umsetzung Ihres individuellen Interieure Desings in Wohnung, Haus, BÃ¼ro ofer Praxis. Sprechen Sie uns an - Wir freuen uns auf Sie!

    </p>

    <Button/>

</section>

    </section>


    
{/*  <section className="shuffle-Hero -mt-44 ">
    <ShuffleHero/>
  </section>*/}
    <section className="">
    <ColCardFeature/>
    </section>
    
    
    <section className="feature-Animation">
    <FeatureAnimation/>
    </section>
    
    <section className="min-h-screen color-Changecards mt-5 bg-zenseGrey">
      <h1 className=" text-center text-zenseWhite uppercase text-3xl md:text-6xl">Referenz-Projekte</h1>
    <ColorChangeCards/>
    </section>
      <VanishText/>
      <div className="mb-12 lg:mb-24 mx-auto w-[85vw] h-[22vh]">
  <Image  src={IlluTestimonial} alt='illustration' sizes="100vw"/>
</div>
<section className="lg:mt-72">
        <StaggerTestimonials/>
        </section>   
{/*====================================================grid ende ===============*/}

<section className="">    
<HorizontalSrollCarousel/>
       </section>
    <section className="">

    </section>
    </section>
</>
  )
}



    



{/*====================================================grid ende ===============*/}
