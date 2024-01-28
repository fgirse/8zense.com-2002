import React from 'react'
import Image from 'next/image'
import LogoEZ from "/public/assets/images/LogoEZ.png";

const page = () => {
  return (
  
    <div className='flex-1 h-screen bg-[url("/assets/images/room.webp")] bg-no-repeat bg-cover bg-center'>

         <h1  className='text-center uppercase font-black text-1xl text-yellow-600' >about</h1>
         <div className='flex flex-col jusify-center items-center'>
          <Image className="rounded-full h-auto w-1/4 max-w-sm  " src={LogoEZ}  alt="Logo 8zense.com"/>
         </div>
         <div className="mt-36 container grid grid-cols-1 grid-rows-3">
          <h1 className="text-5xl text-zinc-200 font-black text-[3rem] text-center">Was ist 8Zense.com ?</h1> 
         <p className=" rounded-xl px-1 py-1 bg-black/50 text-[-.5rem] font-bold text-zinc-200 text-justify -mt-36"><span className='text-orange-300'></span>8zenSe.com ist <span className='text-yellow-600'>Fernanda Pereida</span>. 8zense enstand aus einer Intuition, dass Fernanda  immer häufiger sich die Frage stellte ob gutes Design nur denjenigen Menschen zusteht die dies sich auch leisten können. Als studierte Innenarchitektin hat Fernanda unzählige Projekte betreut und die Ingredentien  Beton - Holz - Stahl  umd Glas haben sich als die favorisierten Werkstoffe ihres Schaffens rund um gutes, ansprechendes  und zeitloses Design entwickelt. Es war immer Fernandas Wunsch die Symbiose dieser Werkstoffe zu kombinieren und mit ihnen zu experimentieren. Das Ergebnis ist 'Exclusivität und Individualität ausgezeichnet durch einzigartiges Desingn</p>
      
      </div></div>
    
  )
}

export default page