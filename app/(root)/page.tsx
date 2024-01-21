import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Player from "../../components/share/Player"
import { nanoid } from 'nanoid'
import Link from 'next/link'
import Hero from './../../public/assets/images/Rastergrafikobg.png'

export default function Home() {
  return (
    <>

    {/*====================================================grid start ===============*/}
<section className='min- flex-1 bg-[url("/assets/images/Griddy.svg")]  bg-cover'>
    <div className='h-svh grid grid-cols-12 grid-rows-15 gap-2'>
    <div className="mt-5 col-span-8 row-span-3">
    <h1 className=" px-1 uppercase text-5xl font-black sm:text-8xl  md:text-8xl  bg-gradient-to-b from-zinc-500 to-zinc-200 bg-clip-text text-transparent  lg:text-[9rem] lg:mb-3">Timeless</h1>
    <h1 className="relative px-1 -top-6 uppercase text-[3.7rem] font-black md:text-[9.11rem] bg-gradient-to-b from-amber-600 via bg-yellow-500 to-zinc-300 bg-clip-text text-transparent lg:-top-28 lg:text-[14rem]">Design</h1>
    </div>
     <div className="relative -top-16  col-span-8 row-span-3 col-start-1 row-start-4 lg:-top-2">
    <div className=" bg-yellow-500/20 rounded-xl col-span-5 row-span-3 col-start-4 row-start-4">
            <div className='mt-12 y-6 w-full  '>
            <Image
              src={Hero}
              className="mx-auto"              width="700"
              height="420"
              alt="technical-glance"
              priority
            />
            </div> 
            </div> 
            </div>
    <div className="col-span-4 row-span-6 col-start-9 row-start-1">
                 <p className="mb-5 lg:mr-12 bg-zinc-500/10 lg:px-5 lg:py-3 rounded-xl  mt-5 py-1 text-zinc-700 font-bold text-right text-sm px-3 sm:text-2xl md:text-[2.33rem] md:leading-9 lg:font-black lg:text-6xl lg-p-5 ">&laquo;the beauty of a living thing is not the atoms that go into it -but the way those atoms are put together...&raquo;</p>
                 <div className=" font-black shadow-xl shadow-gray-400/50 flex flex-col items-center justify-center text-xs sm:text-2xl md:text-2xl lg:text-3xl text-white leading-3 bg-orange-400 rounded-full w-16 h-16 transform translate-x-10 md:transform md:translate-x-44 sm:w-20 sm:h-20 md:w-24 md:h-24 md:-top-1  lg:w-32 lg:h-32">
                  <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black ">Carl</p>
                  <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black">Sagan</p>
                </div>
               </div>
              <div className="col-span-6 row-span-6 col-start-4 row-start-7">
            <div className=" flex flex-col items-center jusify-center lg:border lg:hidden">

                                <Image className="rounded-xl" src="/assets/images/LogoEZ.png" width="350" height="350" alt="Logo: 8zense.com"/>
                            </div>
                  </div>  
          <div className="col-span-8 row-span-3 col-start-3 row-start-13">
    <div className=''>
      <div className="flex flex-col items-center justify-center">
            <Button className="mt-5 bg-zinc-500 text-orange-300 font-bold border-8 border-orange-300 text-3xl w-60 h-12 shadow-2xl shadow-zinc-800 lg:w-80 lg:h-20 lg:text-5xl lg:-mt-12 lg:mb-6" variant={'outline'} size="lg" >send e-mail 
        <div>
  
  </div>   
    <Link href="fgirse@bluemail" className="bg-zinc-600 "></Link>   
    </Button>
    </div>
{/* ----------------------------------- variante in lg=====================================  */}
    <div className="lg:bg-blue-300/20 lg:w-full lg:grid lg:grid-cols-3 lg:rid-rows[1fr] lg:items-center">
<div className='hidden lg:block lg:w-1/3 lg:bg-red-300 '>
  <div className='w-60'>
<Image className="lg:rounded-xl " src="/assets/images/LogoEZ.png" width="350" height="350" alt="Logo: 8zense.com"/>
</div></div>
<div className='w-1/3 w-bg-amber-300 h-60'>
<h1 className='hidden lg:block text-blue-700 text-center uppercase font-bold text-7xl'>test</h1>

</div>
<div>
  <div className="w-16">
<Image  src="/assets/images/chairred.svg" alt="illustration chair rouge"  width="250"  height="250"   />

</div>
    </div>

{/* ----------------------------------- variante in lg end=====================================  */}


    </div>
    
    
          </div>
    </div>
    </div>
    </section>


    
   
  
{/*====================================================grid ende ===============*/}
</>
  )
}