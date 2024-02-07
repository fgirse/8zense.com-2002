
import Image from 'next/image'
import LogoEZ from "../../public/assets/images/LogoEZ2.png";
import React from 'react'
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';


const smileyEmoji = String.fromCodePoint(0x1F603);


const page = () => {
  return (
    <>
   <div className=" bg-zinc-200 grid grid-cols-12 grid-rows-16 gap-1">
    <div className="bg-[#66696b] col-span-12 row-span-2">
             <h1 className=" text-xl font-bold text-white text-center md:text-5xl lg:py-5">About</h1> 
    </div>
    <div className="h-60 col-span-10 row-span-4 row-start-3 bg-[url('/assets/images/hotel.png')] bg-cover lg:bg-contain bg-no-repeat bg-center">
      </div>
    <div className="bg-black col-span-2 row-span-4 col-start-11 row-start-3">
          <h1 className="w-z6 mt-40 leading-5 transform -rotate-90 text-white text-[1rem]">Hotel in Sao Paulo</h1>
    </div>
    <div className="col-span-9 row-span-4 row-start-7 bg-zenseGrey">
    <h1 className='px-2 text-[2.0rem] text-zenseCyan font-bold uppercase'>wer ist 8zense.com</h1>
    </div>
    <div className="col-span-8 row-span-4 col-start-5 row-start-11">
    <p className="relative bg-black/50 py-3 px-5 text-[0.66rem] font-bold text-zinc-200 text-justify md:-mt-35 md:text-2xl lg:mt-0"><span className='text-sm text-orange-300'>8zense.com</span> <span className='text-white text-sm'>ist</span><span className="text-sm text-lime-200">&nbsp;Fernanda Pereida</span>.<br/> 8zense enstand aus einer Intuition, dass Fernanda  immer häufiger sich die Frage stellte ob gutes Design nur denjenigen Menschen zusteht die dies sich auch leisten können. Als studierte Innenarchitektin hat Fernanda unzählige Projekte betreut und die Ingredentien  Beton - Holz - Stahl  umd Glas haben sich als die favorisierten Werkstoffe ihres Schaffens rund um gutes, ansprechendes  und zeitloses Design entwickelt. Es war immer Fernandas Wunsch die Symbiose dieser Werkstoffe zu kombinieren und mit ihnen zu experimentieren. Das Ergebnis ist:<br/>
    <span className="text-[2.0rem] text-zenseGrey leading-7 headingA uppercase font-black ">design<span className='text-zenseSignal'>✔</span></span>  <span className="text-[2.0rem] text-zenseGrey leading-7 headingA uppercase font-black ">individuell<span className='text-zenseSignal'>✔</span></span> <span className="text-[2.0rem] text-zenseGrey leading-7 headingA uppercase font-black ">exklusiv<span className='text-zenseSignal'>✔</span></span> </p>
    </div>
    <div className="col-span-3 row-span-4 col-start-10 row-start-7"></div>
    <div className="col-span-4 row-span-4 col-start-1 row-start-11">
    <h1 className='transform -rotate-90 text-[2.0rem] text-zenseGrey leading-7  -ml-2 headingA uppercase font-black inline-block mt-14'></h1>   
    </div>
    <div className="col-span-7 row-span-2 row-start-15 bg-zenseGrey">
      
      <p className="text-[.66rem] text-white text-justify  px-4 py-2">
     <span className='mt-1 text-left text-lg leading-3'>M. Fernanda Pereira<br/> PhD Architectura+Design interieure</span> <br/> <br/> M. Fernanda Pereira besuchte als PhD-Studentin die university of Sao Paulo -Brasilia. <br/> <br/>An der Universität Montevideo - Uruguay  legte sie den Grundstein ihres beruflichen Werdeganges mit einem Studium der Architektur. <br/> <br/> Sie graduierte mit einem Master’s Degree am rennomierten Institut für Konstruktionswissenschaften ‚Eduardo Torroja‘ in Spanien. <br/> <br/> Fernanda Pereira ist Co-Authorin und Mitgestalterin des Fachbuches „Manual of Concrete Rehabilitation: Reparier, Strengthening and Protection

    </p>
      </div>
    <div className="col-span-5 row-span-2 col-start-8 row-start-15 bg-zenseSignal">
    <h1 className="bg-zensGrey leading-7 mt-12 font-black px-1 text-[2.11rem] uppercase headingA" >education projekte</h1 >
    </div>
</div> 



    <Card/>
    
    </>
    
  )
}
 
export default page
        
