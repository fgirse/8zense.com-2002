
import Image from 'next/image'
import LogoEZ from "/public/assets/images/LogoEZ.png";
import React from 'react'

const page = () => {
  return (
    <>
    <section className=' flex-1 bg-[url("/assets/images/room.webp")] bg-cover bg-no-repeat bg-center '>
    <h1 className="text-3xl font-extrabold text-amber-500 text-center md:text-5xl">About</h1>
    <div className='mb-5 flex flex-col items-center yustify-center md:mb-32'>
    <Image className="mt-5 rounded-full h-auto w-36 max-w-sm  " src={LogoEZ} alt="Logo 8zense.com"/>
    </div>
    <div className=" grid grid-cols-5 grid-rows-5 gap-4">
      <div className="col-span-5 row-span-2 ">
      <h1 className="mt-40 text-[3.33rem] leading-10 text-zinc-200 font-black text-center md:mt-20">Was ist 8Zense.com ?</h1> 
      </div>
      <div className="px-3 col-span-5 row-span-2 row-start-3">
      <p className="bg-black/30 -mt-36 py-3 border rounded-xl px-5 text-[-.5rem] font-bold text-zinc-200 text-justify md:-mt-35 md:text-2xl"><span className='text-orange-300'></span>8zenSe.com ist <span className='text-yellow-600'>Fernanda Pereida</span>. 8zense enstand aus einer Intuition, dass Fernanda  immer häufiger sich die Frage stellte ob gutes Design nur denjenigen Menschen zusteht die dies sich auch leisten können. Als studierte Innenarchitektin hat Fernanda unzählige Projekte betreut und die Ingredentien  Beton - Holz - Stahl  umd Glas haben sich als die favorisierten Werkstoffe ihres Schaffens rund um gutes, ansprechendes  und zeitloses Design entwickelt. Es war immer Fernandas Wunsch die Symbiose dieser Werkstoffe zu kombinieren und mit ihnen zu experimentieren. Das Ergebnis ist 'Exclusivität und Individualität ausgezeichnet durch einzigartiges Desingn</p>                                                                                                                                                                             


                          
        <h1 className=" mt-3 text-3xl py-3 text-white bg-orange-500 rounded-xl text-center font-bold">Education
        
        
        </h1>
        <h2 className='text-white tgext-2xl text-center'>Curriculum                                                                                                                                </h2>
        
      </div>
    </div>
    <div className='bg-orange-400'>

    </div>
    </section>
    </>
    
  )
}
 
export default page
        