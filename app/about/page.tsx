
import Image from 'next/image'
import LogoEZ from "../../public/assets/images/LogoEZ2.png";
import React from 'react'

const page = () => {
  return (
    <>
    <section className='h-screen flex-1 bg-[url("/assets/images/room.webp")] bg-contain bg-no-repeat bg-center '>
    <h1 className="text-3xl font-extrabold text-lime-200 text-center md:text-5xl lg:py-5">About</h1>
    <div className='m mb-5 flex flex-col items-center yustify-center md:mb-32 lg:hidden'>
    <Image className="mt-5 rounded-full h-36 w-36 max-w-sm" src={LogoEZ} alt="Logo 8zense.com"/>
    </div>
    <div className=" grid grid-cols-5 grid-rows-5 gap-4 lg:grid-cols-5 lg:grid-rows-5 lg:gap-12 lg:py-24">
      <div className="bg-black/20 col-span-5 row-span-2 lg:col-span-2 lg:row-span-5">
      <h1 className="mt-40 text-[3.33rem] leading-10 text-zinc-200 font-black text-center md:mt-20 lg:text-[5rem] lg:text-7xl">Was  +  was ist <span className=' text-white'>8Zense.com</span> </h1> 
      </div>
      <div className=" px-3 col-span-5 row-span-2 lg:col-span-3 lg:row-span-5 lg:col-start-3">
      <p className="relative bg-black/50 py-3 border rounded-xl px-5 text-[1.33rem] font-bold text-zinc-200 text-justify md:-mt-35 md:text-2xl lg:mt-0"><span className='text-orange-300'></span>8zenSe.com ist <span className='text-lime-300'>Fernanda Pereida</span>. 8zense enstand aus einer Intuition, dass Fernanda  immer häufiger sich die Frage stellte ob gutes Design nur denjenigen Menschen zusteht die dies sich auch leisten können. Als studierte Innenarchitektin hat Fernanda unzählige Projekte betreut und die Ingredentien  Beton - Holz - Stahl  umd Glas haben sich als die favorisierten Werkstoffe ihres Schaffens rund um gutes, ansprechendes  und zeitloses Design entwickelt. Es war immer Fernandas Wunsch die Symbiose dieser Werkstoffe zu kombinieren und mit ihnen zu experimentieren. Das Ergebnis ist 'Exclusivität und Individualität ausgezeichnet durch einzigartiges Desingn</p>
      </div>
      
      
      
      <div className='w-[95%] bg-orange-400/80 rounded-xl  mx-au00to'>                    
        <h1 className="container mt-3 text-3xl py-3 text-white bg-orange-500 rounded-xl text-center font-bold">Education</h1>
        <h2 className='rounded-x-0 text-white tgext-2xl text-center'>Curriculum </h2>
        </div>
      
    </div>
    <div className=''>

    </div>
    </section>
    </>
    
  )
}
 
export default page
        
