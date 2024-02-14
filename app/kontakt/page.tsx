"use client"

import React from 'react';
import Image from 'next/image';
import Logo from "@/public/assets/images/LogoEZ30.svg";
import Phone from "@/components/Illustrationen/phone";
import Email from "@/components/Illustrationen/email";
import QRCode from "@/public/assets/images/QRCode.png";
import { Separator } from '@/components/ui/separator';
const Contact = () => {
  return (
    <>
    <h1  className='text-center uppercase font-black text-xl text-zenseGrey' >contact</h1>
    <div className='flex flex-col items-center'>
            <div className='py-7 w-full flex flex-col items-center'>
              <Image src={Logo} alt="Logo 8zense" sizes="100vw" className='' style={{ width: '45%', height: 'auto',}}/>
            </div>
        <h1 className='mt-32 text-center text-2xl font-semibold text-zenseGreen'>María Fernanda Pereira Campos</h1>
        <h1 className='text-center text-2xl font-extralight text-zenseGreen'>Architecte et Designer Interieur </h1>
        <h1 className='text-center text-2xl font-extralight text-zenseGreen'>3 Rue de Blotzheim</h1>
        <h1 className='text-center text-2xl font-normal text-zenseGreen'>F-68128-Village-Neuf </h1>
        <div className='flex flex-row items-center justify-evenly gap-x-2'>
          <Phone/>
          <h1 className='text-2xl font-normal text-zenseGreen'> +33 (0) 671463942</h1>
        </div>
        <div className=' flex flex-row items-baseline justify-evenly gap-x-2'>
          <Email/>
        <h1 className='text-2xl text-zenseGreen font-normal'>mf.pereira@8zense.com</h1>
        </div>
        <Separator></Separator>
      
    </div>
    <div className='flex flex-col items-center'>
    <Image src={QRCode} alt="Logo 8zense" sizes="100vw" style={{ width: '33%',height: 'auto',}} className ="mt-5 w-full mx-auto" /> 
  
    
    </div>
    </>
  )
}

export default Contact