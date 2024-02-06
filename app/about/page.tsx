
import Image from 'next/image'
import LogoEZ from "../../public/assets/images/LogoEZ2.png";
import React from 'react'

import { Separator } from '@/components/ui/separator';
const page = () => {
  return (
    <>
   <div className="grid grid-cols-12 grid-rows-16 gap-1">
    <div className="bg-[#66696b] col-span-12 row-span-2">1
             <h1 className="h-12 text-3xl font-extrabold text-white headingA text-center md:text-5xl lg:py-5">About</h1> 
    </div>
    <div className="h-60 col-span-10 row-span-4 row-start-3 bg-[url('/assets/images/hotel.png')] bg-cover lg:bg-contain bg-no-repeat bg-center">
      2</div>
    <div className="bg-black col-span-2 row-span-4 col-start-11 row-start-3">3
          <h1 className="mt-40 transform -rotate-90 text-white text-sm">Hotel <br/>Sao Paulo</h1>
    </div>
    <div className="col-span-9 row-span-4 row-start-7">
    <h1 className='px-2 text-[2rem] text-white font-bold uppercase'>wer ist 8zense.com</h1>
    </div>
    <div className="col-span-8 row-span-4 col-start-5 row-start-11">
    <p className="relative bg-black/50 py-3 px-5 text-[0.66rem] font-bold text-zinc-200 text-justify md:-mt-35 md:text-2xl lg:mt-0"><span className='text-sm text-orange-300'>8zense.com</span> <span className='text-white text-sm'>ist</span><span className="text-sm text-lime-200">&nbsp;Fernanda Pereida</span>.<br/> 8zense enstand aus einer Intuition, dass Fernanda  immer häufiger sich die Frage stellte ob gutes Design nur denjenigen Menschen zusteht die dies sich auch leisten können. Als studierte Innenarchitektin hat Fernanda unzählige Projekte betreut und die Ingredentien  Beton - Holz - Stahl  umd Glas haben sich als die favorisierten Werkstoffe ihres Schaffens rund um gutes, ansprechendes  und zeitloses Design entwickelt. Es war immer Fernandas Wunsch die Symbiose dieser Werkstoffe zu kombinieren und mit ihnen zu experimentieren. Das Ergebnis ist 'Exclusivität und Individualität ausgezeichnet durch einzigartiges Desingn</p>
    
    </div>
    <div className="col-span-3 row-span-4 col-start-10 row-start-7">6</div>
    <div className="col-span-4 row-span-4 col-start-1 row-start-11">7
             
    </div>
    <div className="col-span-7 row-span-2 row-start-15">8</div>
    <div className="col-span-5 row-span-2 col-start-8 row-start-15">9
    <p className="text-[.66rem] text-white">
    M. Fernanda Pereira was a PhD at the university of Sao Paulo -Brasilia. An der Universität Montevideo - Uruguay  legte sie den Grundstein ihres beruflichen Werdeganges mit einem Studium der Architektur. Sie graduierte mit einem Master’s Degree am rennomierten Institut für Konstruktionswissenschaften ‚Eduardo Torroja‘ in Spanien. Fernanda Pereira ist Co-Authorin und Mitgestalterin des Fachbuches „Manual of Concrete Rehabilitation: Reparier, Strengthening and Protection

    </p>
    </div>
</div> 











    
    <div className="col-start-3 row-start-2">
    <div className='lg:hidden'>
    <Image className=" absolute top-20    right-12 rounded-full h-16 w-16" src={LogoEZ} alt="Logo 8zense.com"/>
    </div>
    </div>
    
  
    <div className="............ col-span-2 row-span-3 row-start-6">
    <h1 className='transform -rotate-90 text-[2.33rem] headingA  uppercase leading-9 font-bold inline-block mt-12 mr-5 '>design exclusiv individuell</h1>
    
    </div>
    <div className="col-span-3 row-span-4 col-start-3 row-start-6">
    <p className="relative bg-black/50 py-3 px-5 text-[0.66rem] font-bold text-zinc-200 text-justify md:-mt-35 md:text-2xl lg:mt-0"><span className='text-sm text-orange-300'>8zense.com</span> <span className='text-white text-sm'>ist</span><span className="text-sm text-lime-200">&nbsp;Fernanda Pereida</span>. 8zense enstand aus einer Intuition, dass Fernanda  immer häufiger sich die Frage stellte ob gutes Design nur denjenigen Menschen zusteht die dies sich auch leisten können. Als studierte Innenarchitektin hat Fernanda unzählige Projekte betreut und die Ingredentien  Beton - Holz - Stahl  umd Glas haben sich als die favorisierten Werkstoffe ihres Schaffens rund um gutes, ansprechendes  und zeitloses Design entwickelt. Es war immer Fernandas Wunsch die Symbiose dieser Werkstoffe zu kombinieren und mit ihnen zu experimentieren. Das Ergebnis ist 'Exclusivität und Individualität ausgezeichnet durch einzigartiges Desingn</p>
    </div><hr className="text-white"></hr>
    <div className="bg-lime-300/70 col-span-2 row-span-4 row-start-9">
      <h1 className="leading-7 mt-12 font-black px-1 text-[2.11rem] uppercase headingA" >education projekte</h1 ></div>
    </>
    
  )
}
 
export default page
        
