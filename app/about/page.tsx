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



const page = () => {

  return (

    <>
 
 <section className='mx-auto min-h-screen'>


<div className=''>



  <h1 className='text center text-xl font-bold text-zenseGrey uppercase'>uber uns</h1>


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


 <div className='flex flex-col items-center mt-3 md:w-8'>


  <Image


      src={Logo02}


      alt="Logo 8zense"


      sizes="100vw"


        className='rounded-lg border-x-8 border-gray-100'


      style={{


        width: '3%',


        height: 'auto',


      }}





  /></div>



<h1 className='text-zenseSignal text-[3.1rem] uppercase mt-36 font-bold text-center leading-10 sm:mt-60'>was ist <br/>  8zense.com ?</h1>

<h2 className="mt-3 text-[1.49rem]">8zense.com ist Fernanda Pereira</h2>


<h2 className="mb-5 font-normal relative px-2 text-[0.9rem] text-justify"> <span className="text-[.93rem] leading-3 text-justify">8zense enstand aus Intuition heraus,  obwelcher sich Fernanda sich immer wieder die Frage stellte ob gutes Design nur denjenigen Menschen zusteht die dies sich auch leisten können. Als studierte Innenarchitektin hat Fernanda unzählige Projekte betreut und die Ingredentien  Beton - Holz - Stahl  umd Glas haben sich als die favorisierten Werkstoffe ihres Schaffens rund um gutes, ansprechendes  und zeitloses Design entwickelt. Es war immer Fernandas Wunsch die Symbiose dieser Werkstoffe zu kombinieren und mit ihnen zu experimentieren. Das Ergebnis ist:</span>

<br/><br/></h2>



<div className='flex flex-row items-baseline justify-start'>
<h1 className='text-left font-extrabold uppercase text-zenserGrey headingA text-5xl'>design</h1>
<Hook className="w-14 h-14 align-text-bottom"/>

</div>

<div className='flex flex-row items-baseline justify-start'>
<h1 className='text-left font-extrabold uppercase text-zenserGrey headingA text-5xl'>individuell</h1>

<Hook className="w-14 h-14 align-text-bottom"/>

</div>
<div className='flex flex-row items-baseline justify-start'>
<h1 className='text-left font-extrabold uppercase text-zenserGrey headingA text-5xl'>exclusive</h1>

<Hook className="w-14 h-14 align-text-bottom"/>

</div>

        

    <h1 className="mt-7 text-xl font-bold text-zenseGrey text-center md:text-3xl lg:py-5">über Fernanda</h1>

    

    

    <div className="w-full h-60 col-span-10 row-span-4 row-start-3 bg-[url('/assets/images/Hotel-SaoPaulo.png')] bg-cover lg:bg-contain bg-no-repeat bg-center">

    <h1   className='relative  text-center text-3xl text-white uppercase font-extrabold'>projekt sao paulo-brasil</h1>

      </div>

    

          

    <h1 className='text-[1.55rem] sm:text-[1.8rem] style={{

    }}2rem] mt-5 px-2 md:text-[1.92rem] text-zenseSignal font-bold uppercase text-left leading-6 py-3 mb-7'>M. Fernanda Pereira<br/> PhD Architectura+Design interieure</h1>




<div className="w-full h-[33vh] bg-zenseSignal/10  grid grid-cols-[6vw_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] grid-rows-[1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr]  items-stretch gap-0">
    <div className="bg-zenseSignal/10 col-span-2 row-span-3 self-start">
    <Tools className="bg-zenseSignal/5 self-start mt-3 ml-1 w-8 h-8 sm:w-28 md:w-28 p mx-1 rounded-full p-1" />    
    </div>
    <div className="col-span-4 row-span-3 col-start-3">
    <p className='text-xs leading-3 mt-2 p-1 sm:text-sm' >
  M. Fernanda Pereira besuchte als PhD-Studentin die University of Sao Paulo. Hier studierte sie das Fachgebiet Innenarchitektur.
</p>
    </div>
    <div className="mb-5 col-span-4 row-start-1 row-span-6 col-start-7">

    <div className='relative w-full h-60 mt-5 md:mt-3 px-3'>

<Image

    src={ArchGrafik}

    alt="Illustration"

    sizes="100vw"
    fill

      className='rounded-lg '

  

    />

      </div>
    </div>
    <div className="bg-zenseSignal/20 col-span-2 row-span-3 row-start-4">
    <Tools className="bg-zenseSignal self-start mt-3 ml-1 w-8 h-8 sm:w-28 md:w-28 p mx-1 rounded-full p-1" />   
 
    </div>
    <div className="col-span-4 row-span-3 col-start-3 row-start-4">
     <p className='text-xs leading-3 mt-2 p-1 sm:text-sm' >
    An der Universität in Montevideo- Uruquay legte sie den Grundsteon ihres berulichen Werdegangs mit einem Studium der Architektur.
</p>
    </div>
    
    <div className=" col-span-2 row-span-3 row-start-7">
    <Tools className="bg-zenseSignal self-start mt-3 ml-1 w-8 h-8 sm:w-28 md:w-28 p mx-1 rounded-full p-1" />   
    </div>
    <div className="col-span-4 row-span-3 col-start-3 row-start-7">
    <p className='text-xs leading-3 mt-2 p-1 sm:text-sm' >
    Sie graduierte mit einem Masters Degree am rennomierten Institut für Konstruktionswissenschaften "Eduardo Torroja" in Spanien.
</p>
    </div>
    <div className=" col-span-4 row-start-7 row-span-6 col-start-7 ">
    <h1 className="headingA uppercase text-3xl">Education<br/>Projekte</h1>
    </div>
    <div className=" col-span-2 row-span-3 row-start-10">
    <Tools className="bg-zenseSignal self-start mt-3 ml-1 w-8 h-8 sm:w-28 md:w-28 p mx-1 rounded-full p-1" />    
 
    </div>
    <div className="col-span-4 row-span-3 col-start-3 row-start-10">
    <p className='text-xs leading-3 mt-2 p-1 sm:text-sm' >
    Fernanda Pereira ist Co-Authorin und Mitgestalterin des Fachbuches Manual of Concrete Rehabilitation: Reparier, Strengthening and Protection.
</p>
    </div>
  
</div>
    



<div/>
</div>
</section>

</>
)
}
export default page



        

      



