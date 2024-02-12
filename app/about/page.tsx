"use client"
import Image from 'next/image'
import LogoEZ from "../../public/assets/images/LogoEZ3.svg";
import React from 'react'
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Logo01 from"@/public/assets/images/LogoEZ30.svg"
import Logo02 from"@/public/assets/images/placeholder.png"
import ArchGrafik from"@/public/assets/images/Grafik.svg"
import './about.module.css'
//import Hook from "@/public/assets/images/hook.svg"
import Hook from"@/components/Illustrationen/Häckchen"
import Tools from "@/components/Illustrationen/Tools"
import Grafik from "@/public/assets/images/grafik6.svg"

const page = () => {
  return (
    <>
    <section className='min-h-screen container bg-zenseSignal/10'>
    <div className='flex flex-col items-center justify-around'>

      <h1 className='text center text-xl font-bold text-zenseGrey uppercase'>über uns</h1>
      <div className='image-container flex flex-col items-center sm:w-[20vw]'>
          <Image
          src={Logo01}
          alt="Logo 8zense"
          sizes="100vw"
          style={{
            width: '60%',
            height: 'auto',
          }}
        />
      </div>
      <h1 className=' mt-32 text-4xl font-bold text-zenseGrey md:mt-72'>8zense.com</h1>
     <div className='flex flex-col items-center mt-3 md:w-36'>
      <Image
          src={Logo02}
          alt="Logo 8zense"
          sizes="100vw"
            className='rounded-lg border-x-8 border-gray-100'
          style={{
            width: '33%',
            height: 'auto',
          }}
        /></div>
<h1 className='text-zenseSignal text-[3.1rem] uppercase mt-36 font-bold text-center leading-10 sm:mt-60'>was ist <br/>  8zense-com  </h1>
<h2 className="mt-3 text-[1.49rem] sm:text-4xl sm:mt-5">8zense.com ist Fernanda Perreira</h2>

<h2 className="mb-5 font-normal relative px-2 text-[0.9rem] text-justify sm:text-[1.33rem] leading-5"> <span className="text-[.93rem] leading-3 text-justify">8zense enstand aus einer Intuition heraus,  durch welche sich Fernanda sich immer wieder die Frage stellte ob gutes Design nur denjenigen Menschen zusteht die dies sich auch leisten können. Als studierte Innenarchitektin hat Fernanda unzählige Projekte betreut und die Ingredentien  Beton - Holz - Stahl  umd Glas haben sich als die favorisierten Werkstoffe ihres Schaffens rund um gutes, ansprechendes  und zeitloses Design entwickelt. Es war immer Fernandas Wunsch die Symbiose dieser Werkstoffe zu kombinieren und mit ihnen zu experimentieren. Das Ergebnis ist:</span>
<br/><br/></h2>
<div className='flex flex-col items-center'>
<div className='flex gap-x-1 items-end'>
<h1 className='mx-auto text-left uppercase font-extrabold text-zenserSignal headingA text-5xl md:text-7xl'>design</h1>
<Hook className="w-12 h-12 align-text-bottom"/>
</div>
</div>
<div className='flex gap-x-1 items-end'>
<h1 className='text-le0ft uppercase font-extrabold text-zenserGrey headingA text-5xl md:text-7xl'>Individuell</h1>
<Hook className="w-12 h-12 align-text-bottom"/>
</div><div className='flex gap-x-1 items-end'>
<h1 className='text-left uppercase font-extrabold text-zenserGrey headingA text-5xl md:text-7xl'>exclusive</h1>
<Hook className="w-12 h-12 align-text-bottom"/>
</div>
<div className='flex flex-row items-center justify-start'>

</div>
        
  
    
    <h1 className="mt-16 text-xl font-bold text-zenseGrey text-center md:text-3xl lg:py-5">über Fernanda</h1>
    
    
    <div className="w-full h-60 col-span-10 row-span-4 row-start-3 bg-[url('/assets/images/hotel.png')] bg-cover lg:bg-contain bg-no-repeat bg-center">
    <h1   className='relative  text-center text-3xl text-white uppercase font-extrabold'>projekt sao paulo-brasil</h1>
      </div>
    
          
    <h1 className='px-2 text-[1.82rem] text-zenseSignal font-bold uppercase mt-1 text-left leading-6 py-3'>M. Fernanda Pereira<br/> PhD Architectura+Design interieure</h1> <div className='bg-zenseSignal/10 col-span-3 row-span-5'>
   
   <div className='bg-[url("/assets/images/grafik6.png)] bg-cover'>
    <h1 className='uppercase text-3xl headingA font-extrabold'>Education - Projekte</h1>
    <Image src={Grafik}  alt="Tools"
          sizes="100vw"
            className=''
          style={{
            width: '50%',
            height: 'auto',
          }}
        />
   </div>
   <div className='mt-48 flex items-center justify-center'>
    <Tools className=" w-14 h-14 p-2" />
    <p className=" text-[1.196rem] text-zenseGrey text-justify  px-4 py-3">
Fernanda studierte als PhD an der Universität von Sao Paulo - Brasil
</p></div>
<div className='relative flex'>
    <Tools className=" w-14 h-14 p-1" />
    <p className=" text-[1.196rem] text-zenseGrey text-justify  px-4 py-3">
  An der Universität Montevideo - Uruguay  legte sie den Grundstein ihres beruflichen Werdeganges mit einem Studium der Architektur. 
</p></div>
<div className='flex'>
    <Tools className=" w-14 h-14 p-2" />
    <p className=" text-[1.196rem] text-zenseGrey text-justify  px-4 py-3">
 Sie graduierte mit einem Master’s Degree am rennomierten Institut für Konstruktionswissenschaften ‚Eduardo Torroja‘ in Spanien. 

</p></div>


<div className='flex'>
    <Tools className=" w-14 h-14 p-2" />
    <p className=" text-[1.196rem] text-zenseGrey text-justify  px-4 py-3">
      Fernanda Pereira ist Co-Authorin und Mitgestalterin des Fachbuches „Manual of Concrete Rehabilitation: Reparier, Strengthening and Protection

</p></div>
    
</div>
    
   </div>
    
    </section>
   
   
    
    </>
    
  )
}
 
export default page