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

    <section className='mx-auto min-h-screen container'>

    <div className='flex flex-col items-center justify-around'>


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

        

    <h1 className="mt-7 text-xl font-bold text-zenseGrey text-center md:text-3xl lg:py-5">uber Fernanda</h1>

    

    

    <div className="w-full h-60 col-span-10 row-span-4 row-start-3 bg-[url('/assets/images/Hotel-SaoPaulo.png')] bg-cover lg:bg-contain bg-no-repeat bg-center">

    <h1   className='relative  text-center text-3xl text-white uppercase font-extrabold'>projekt sao paulo-brasil</h1>

      </div>

    

          

    <h1 className='text-[1.8rem] style={{

    }}2rem] mt-5 px-2 md:text-[1.92rem] text-zenseSignal font-bold uppercase text-left leading-6 py-3 mb-7'>M. Fernanda Pereira<br/> PhD Architectura+Design interieure</h1>



<div className="grid grid-cols-5 grid-rows-5 gap-4">

    <div className="bg-zenseSignal/10 col-span-3 row-span-5">

   
  
  <div className="p-2 flex items-start gap-3">
  <Tools className="mt-3 ml-1 w-32 sm:w-28 md:w-28 p mx-1 bg-zenseSignal rounded-full p-1" />
          
    <p className='text-xs mt-2 p-1 sm:text-sm' >
  M. Fernanda Pereira besuchte als PhD-Studentin die University of Sao Paulo. Hier studierte sie das Fachgebiet Innenarchitektur.
</p></div>

<div className="p-2 flex  items-start gap-1">
<Tools className="mt-3 ml-1 w-32 md:w-12 md:h-12 p mx-1 bg-zenseSignal rounded-full p-1" />
          
    <p className='text-xs mt-2 p-1 sm:text-sm' >
    An der Universität in Montevideo- Uruquay legte sie den Grundsteon ihres berulichen Werdegangs mit einem Studium der Architektur.
</p></div>

<div className="p-2 flex items-start gap-3">
<Tools className="mt-3 ml-1 w-32 md:w-12 md:h-12 p mx-1 bg-zenseSignal rounded-full p-1" />
          
    <p className='text-xs mt-2 p-1 sm:text-sm' >
    Sie graduierte mit einem Masters Degree am rennomierten Institut für Konstruktionswissenschaften "Eduardo Torroja" in Spanien.
</p></div>

<div className="p-2 flex items-start gap-3">
<Tools className="mt-3 ml-1 w-32 md:w-12 md:h-12 p mx-1 bg-zenseSignal rounded-full p-1" />
          
    <p className='text-xs mt-2 p-1 sm:text-sm' >
    Fernanda Pereira ist Co-Authorin und Mitgestalterin des Fachbuches Manual of Concrete Rehabilitation: Reparier, Strengthening and Protection.
</p></div>



{/*<div className='inline-flex '>
      <Tools className=" ml-2 mr-2 w-20 h-20 md:w-24 md:h-24 p-1" />

    <p className="mt-6 text-[.55rem] mr-2 text-zenseGrey text-justify">

     M. Fernanda Pereira besuchte als PhD-Studentin die University of Sao Paulo -Brasilia. 


</p>
</div>
</div>

<div className=' inline-block float-left md:flex md:flex-row md.items-start md:justify-start'>
      <Tools className="w-12 h-12 " />
<p className=" text-[.76rem] text-zenseGrey text-justify">

 An der Universität Montevideo - Uruguay  legte sie den Grundstein ihres beruflichen Werdeganges mit einem Studium der Architektur. 


</p> 
</div>

<div className='flex flex-row items-start justify-center'>
      <Tools className="w-24 h-24 p-1" />
<p className=" text-[.966rem] text-zenseGrey text-justify  px-4 py-3">

 Sie graduierte mit einem Masters Degree am rennomierten Institut fÃ¼r Konstruktionswissenschaften âEduardo Torrojaâ in Spanien.


</p>
</div>
<div className='flex flex-row items-start justify-center'>
      <Tools className="w-24 h-24 p-1" />
 <p className=" text-[.966rem] text-zenseGrey text-justify  px-4 py-3">
 Fernanda Pereira ist Co-Authorin und Mitgestalterin des Fachbuches âManual of Concrete Rehabilitation: Reparier, Strengthening and Protection</p>
        </div>*/}
    </div>


    <div className='flex-3 bg-[ url("/assets/images/grafik7.png")] bg-cover bg-no-repeat col-span-2 row-span-5 col-start-4 h-96'>
    <div className='mt-5 flex flex-col items-center md:mt-3 px-3'>

      <Image

          src={ArchGrafik}

          alt="Illustration"

          sizes="100vw"

            className='rounded-lg '

          style={{

            width: '40%',

            height: 'auto',

          }}

          />

            </div>

        <h1 className="mt-44 sm:mt-60 text-zenseGrey  leading-7 md:mt-2 font-black px-1 text-[2.11rem] uppercase headingA" >education projekte</h1 >

  </div>
</div>
</div>
</section>  
</>
)
}
export default page



        

      



