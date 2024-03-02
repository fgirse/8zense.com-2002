"use client"

import Image from 'next/image'
import LogoEZ from "../../public/assets/images/LogoEZ3.svg";
import React from 'react'
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Logo01 from"@/public/assets/images/LogoEZ30.svg"
import Logo02 from"@/public/assets/images/placeholder.png"
import ArchGrafik from"@/public/assets/images/grafik70.png"
import './about.module.css'
import  Tools from'@/components/Illustrationen/Tools';
import Hook from"@/components/Illustrationen/Hackchen"
import Arrow from '@/public/assets/images/arrow05.svg'
import { transform } from 'next/dist/build/swc';
import Signature from "@/public/assets/images/arrow2.svg"
import styles from "./about.module.css";
import Projekt from'@/public/assets/images/Hotel-SaoPaulo.png';

const page = () => {

  return (

    <>
 
 <section className='mx-auto min-h-screen'>


<div className='flex flex-col items-center justify-center container'>



  <h1 className=' mt-3 py-1 px-1 text center text-xs  lg:text-xl bg-black/10 p-1font-bold text-zenseGrey uppercase'>über 8zense.com</h1>


  <div className='relative w-60 h-60'>


      <Image


      src={Logo01}


      alt="Logo 8zense"


      sizes="100vw"

      fill

    />


  </div>


  {/*<h1 className='text-3xl font-bold text-zenseGrey md:mt-72'>8zense.com</h1>*/}


 <div className='relative w-24 h-24'>


  <Image


      src={Logo02}


      alt="Portrait"


      sizes="100vw"


        className='rounded-full'

      fill
  /> 
  
  </div>


  <div className='mt-20 relative w-3/4 h-44'>


  <Image


      src={Signature}


      alt="Signature"


      sizes="100vw"


        className='rounded-full'

      fill
  /> 
  
  </div>
  <p className='py-3 w-36 text-xs  lg:text-xl text-center'>Fernanda Pereira</p>


<h1 className='mt-12 text-zenseSignal text-[2.66rem] uppercase font-bold text-center leading-10 sm:mt-60 md:text-8xl md:font-black lg:-mt-1



lg:text-[9rem]'>was ist <br/>  8zense.com ?</h1>

<h2 className="mt-3 text-[1.49rem] md:text-[2.33rem] lg:text-[7rem]">8zense.com ist Fernanda Pereira</h2>


<h2 className="  bg-zenseCyan/50 rounded-xl mb-7 font-normalrelative py-2 px-2 leading-3 text-7xl
text-justify md:text-[3.33rem] lg:text-5xl"> <span className="px-7 py-3 text-[.83rem] leading-3 text-justify lg:block h-40 lg:w-[66vw] lg:text-3xl">8zense enstand aus einer Intuition heraus,  obwelcher Fernanda sich immer wieder die Frage stellte, ob gutes Design nur denjenigen Menschen zusteht die dies sich auch leisten können. Als studierte Innenarchitektin hat Fernanda unzählige Projekte betreut und die Ingredentien  Beton - Holz - Stahl  umd Glas haben sich als die favorisierten Werkstoffe ihres Schaffens rund um gutes, ansprechendes  und zeitloses Design entwickelt. Es war immer Fernandas Wunsch die Symbiose dieser Werkstoffe zu kombinieren und mit ihnen zu experimentieren. Das Ergebnis ist:</span><br/><br/></h2>
<div  className='relative w-full h-60 transform scale-150 translate-y-10 lg:w-20vw lg:text-6xl'>   
<Image src={Arrow} fill sizes="100vw" alt="pfeil" />
</div>

<section className='mt-32'>
<div className='flex flex-row items-baseline justify-start'>
<h1 className='{styles.headingA} text-left font-extrabold uppercase text-zenseGrey headingB  leading-3 text-4xl md:text-6xl lg:text-[r7em]'>design </h1>
<span className='text-5xl align-text-bottom bg-zenseCyan rounded-full lg:text-[14rem]'>&#x2714;</span>
</div>
</section>

<section className=''>
<div className='flex flex-row items-baseline justify-start'>
<h1 className='{styles.headingA} text-left font-extrabold uppercase text-zenseGrey  text-4xl leading-3 md:text-6xl lg:text-[7rem]'>individuell </h1>
<span className='text-5xl align-text-bottom bg-zenseCyan rounded-full lg:text-[14rem]'>&#x2714;</span>
</div>
</section>
<section className=''>
<div className='flex flex-row items-baseline justify-start'>
<h1 className='{styles.headingA}    text-left font-extrabold uppercase text-zenseGrey text-4xl md:text-6xl lg:text-[7rem]'>exklusiv </h1>
<span className='text-5xl align-text-bottom bg-zenseCyan rounded-full lg:text-[7rem]'>&#x2714;</span>
</div>
      
</section>
    <h1 className="mb-3 p-1 mt-7 text-xs bg-black/10 font-bold text-zenseGrey text-center md:text-3xl lg:py-5">über Fernanda</h1>

    

    

  

    
    <div  className='relative w-full h-44 lg:mx-auto lg:relative lg:h-[66vh] lg:w-[90vw]'>
    
      <Image className='mx-auto'  src={Projekt} fill sizes="100vw" alt="projekt sao  paulo"/>
      <h1   className='relative text-center text-3xl lg:text-7xl text-white uppercase font-extrabold'>projekt sao paulo-brasil</h1>
    </div>
          

    <h1 className='text-[1.145rem] leading-5 sm:text-[1.36rem] mt-5 px-2 md:text-[1.92rem] lg:text-[2.33rem text-zenseSignal font-bold uppercase text-left lg:leading-9 py-3 mb-7'>M. Fernanda Pereira<br/> PhD Architectura+Design interieure</h1>




<div className="bg-zenseCyan/30 w-full h-1/3 grid grid-cols-[5vw_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]  items-stretch gap-0">
    <div className=" col-span-2 row-span-3 self-start">
    <Tools className="bg-zenseCyan self-start mt-3 ml-1 w-8 h-8 sm:w-12 sm:h-12  mx-1 rounded-full p-1"></Tools>
    </div>
    <div className="  col-span-4 row-span-3 col-start-3">
    <p className='text-xs leading-3 mt-2 p-1 sm:text-sm lg:text-xl' >
  M. Fernanda Pereira besuchte als PhD-Studentin die University of Sao Paulo. Hier studierte sie das Fachgebiet Innenarchitektur.
</p>
    </div>
    <div className="bg-zenseGrey/20 col-span-4 row-start-1 row-span-6 col-start-7">

    <div className='relative w-full h-60 mt-5 md:mt-3 px-3'>

<Image

    src={ArchGrafik}

    alt="Illustration"

    sizes="100vw"
    fill

      className='rounded-xl'

  

    />

      </div>
    </div>
    <div className="bg-zenseCyan/10 col-span-2 row-span-3 row-start-4">
    <Tools className="bg-zenseCyan self-start mt-3 ml-1 w-8 h-8 sm:w-12 sm:h-12 mx-1 rounded-full p-1" />   
 
    </div>
    <div className="bg-zenseCyan/10  col-span-4 row-span-3 col-start-3 row-start-4">
     <p className='text-xs  lg:text-xl leading-3 mt-2 p-1 sm:text-sm' >
    An der Universität in Montevideo- Uruquay legte sie den Grundsteon ihres berulichen Werdegangs mit einem Studium der Architektur.
</p>
    </div>
    
    <div className="bg-zenseCyan/20 col-span-2 row-span-3 row-start-7">
    <Tools className="bg-zenseCyan self-start mt-3 ml-1 w-8 h-8 sm:w-12 sm:h-12  mx-1 rounded-full p-1" />   
    </div>
    <div className="bg-zenseCyan/10 col-span-4 row-span-3 col-start-3 row-start-7">
    <p className='text-xs   lg:text-xl leading-3 mt-2 p-1 sm:text-sm' >
    Sie graduierte mit einem Masters Degree am rennomierten Institut für Konstruktions- wissenschaften "Eduardo Torroja" in Spanien.
</p>
    </div>
    <div className="bg-zenseGrey/20 col-span-4 row-start-7 row-span-6 col-start-7 ">
    <h1 className="{styles.headingA} p-1 font-bold ml-5 mt-2 headingA uppercase text-1.96rem] sm:text-5xl">Education<br/>Projekte</h1>
    </div>
    <div className="bg-zenseCyan/10 col-span-2 row-span-3 row-start-10">
    <Tools className="bg-zenseCyan self-start mt-3 ml-1 w-8 h-8 sm:w-12 sm:h-12 mx-1 rounded-full p-1" />    
 
    </div>
    <div className="bg-zenseCyan/10 col-span-4 row-span-3 col-start-3 row-start-10">
    <p className='text-xs  lg:text-xl leading-3 mt-2 p-1 sm:text-sm' >
    Fernanda Pereira ist Co-Authorin und Mitgestalterin des Fachbuches Manual of Concrete Rehabilitation: Reparier, Strengthening and Protection.
</p>
    </div>
  
</div>
    

</div>
</section>


</>
  )
}
export default page