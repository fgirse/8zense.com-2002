import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Player from "../../components/share/Player"
import { nanoid } from 'nanoid'
import Link from 'next/link'

export default function Home() {
  return (
    <>

    {/*====================================================grid start ===============*/}
<section className='bg-[url("/assets/images/Griddy.svg")]  bg-cover'>
    <div className='h-svh grid grid-cols-12 grid-rows-15 gap-2'>
    <div className="mt-5 col-span-8 row-span-3">
    <h1 className=" px-1  peer-odd uppercase text-5xl font-black sm:text-8xl  md:text-8xl  bg-gradient-to-b from-zinc-500 to-zinc-200 bg-clip-text text-transparent lg:text-[11rem]">Timeless</h1>
    <h1 className="relative px-1 -top-6 uppercase text-[4.1rem] font-black md:text-[9.11rem] bg-gradient-to-b from-amber-600 via bg-yellow-500 to-zinc-300 bg-clip-text text-transparent lg:-top-28 lg:text-[20rem]">Design</h1>
    </div>
    <div className="relative -top-16  col-span-8 row-span-3 col-start-1 row-start-4 lg:-top-60">
    <div className="h-32 bg-yellow-500/20 rounded-xl col-span-5 row-span-3 col-start-4 row-start-4 lg:h-60">
            <Image
              src="/assets/images/rastergrafikobg.png"
              className="mx-auto"
              width="700"
              height="420"
              alt="technical-glance"
              priority
            />
            </div> 
            </div>
    <div className="col-span-4 row-span-6 col-start-9 row-start-1">
                 <p className="mb-5 lg:mr-12 bg-zinc-500/10 mt-5 py-1 text-zinc-700 font-bold text-right text-sm px-3 sm:text-2xl md:text-[2.33rem] md:leading-9 lg:text-7xl lg-p-5 lg:leading">&laquo;the beauty of a living thing is not the atoms that go into it -but the way those atoms are put together...&raquo;</p>
                 <div className="relative left-40 shadow-xl shadow-gray-400/50 flex flex-col items-center justify-center text-xs sm:text-3xl md:text-2xl lg:text-3xl text-white leading-3 bg-orange-400 rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 md:-top-1 lgy-yy-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------++++++++++++ lg:w-32 lg:h-32 lg:left-56">
                  <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black ">Carl</p>
                  <p className="text-sm md:text-2xl md:leading-4 lg:text-3xl font-black">Sagan</p>
                </div>
               </div>
              <div className="col-span-6 row-span-6 col-start-4 row-start-7">
              <div className=" relative -top-36 flex flex-col items-center jusify-center lg:border lg:hidden">

                                <Image className="rounded-xl" src="/assets/images/LogoEZ.png" width="350" height="350" alt="Logo: 8zense.com"/>
                            </div>
                  </div>  
          <div className="col-span-8 row-span-3 col-start-3 row-start-13">
    <div className='relative -top-28 lg:hidden'>
      <div className="flex flex-col items-center">
    <Button className="mt-5 text-orange-300 font-bold border-8 border-orange-300 text-3xl w-60 h-12 shadow-2xl shadow-zinc-800 lg:w-80 lg:h-20 lg:text-5xl lg:-mt-12" variant={'outline'} size="lg" >send e-mail 
    <Link href="fgirse@bluemail" className="bg-zinc-600 ">
    </Link>   
    </Button>
    </div>

    <div className="lg:bg-blue-300 lg:w-full lg:h-60 lg:flex lg:flex-row lg:justify-around lg:items-center">
<div className='hidden   lg:w-1/3 lg:bg-red-300 h-36'>
<Image className="lg:rounded-xl lg:-w-1/3" src="/assets/images/LogoEZ.png" width="350" height="350" alt="Logo: 8zense.com"/>
</div>
    </div>
    
    
    
          </div>
    </div>
    </div>
    </section>


    
   
  
{/*====================================================grid ende ===============*/}
</>
  )
}