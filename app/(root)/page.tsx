import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Player from "../../components/share/Player"
import { nanoid } from 'nanoid'


export default function Home() {
  return (
    <>

    {/*====================================================grid start ===============*/}
<section className='bg-[url("/assets/images/Griddy.svg")]  bg-cover'>
    <div className='h-svh grid grid-cols-12 grid-rows-15 gap-2'>
    <div className="mt-5 col-span-8 row-span-3">
    <h1 className=" px-1  peer-odd uppercase text-5xl font-black sm:text-8xl  md:text-8xl  bg-gradient-to-b from-zinc-500 to-zinc-200 bg-clip-text text-transparent">Timeless</h1>
    <h1 className="relative px-1 -top-6
    uppercase text-[4.1rem] font-black md:text-[9.9rem] bg-gradient-to-b from-amber-600 via bg-yellow-500 to-zinc-300 bg-clip-text text-transparent">Design</h1>
    </div>
    <div className="relative -top-16  col-span-8 row-span-3 col-start-1 row-start-4">
    <div className="h-32 bg-yellow-500/20 rounded-xl col-span-5 row-span-3 coel-start-4 row-start-4">
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
                 <p className="mt-5 text-zinc-700 bold text-right text-sm px-3 sm:text-2xl md:text-[2.33rem] md:leading-9">&laquo;the beauty of a living thing is not the atoms that go into it -but the way those atoms are put together...&raquo;</p>
                 <div className="relative left-10 top-3 shadow-xl shadow-gray-400/50 flex flex-col items-center justify-center text-xs sm:text-3xl md:text-2xl lg:text-3xl text-white leading-3 bg-orange-400 rounded-full w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 md:-top-1 lg:w-28 lg:h-28 lg:left-56">
                  <p className="text-sm md:text-2xl md:leading-4 lg:text-xl font-black lg:leading-3">Carl</p>
                  <p className="text-sm md:text-2xl md:leading-4 lg:text-xl font-black">Sagan</p>
                </div>
               </div>
              <div className="col-span-6 row-span-6 col-start-4 row-start-7">
              <div className=" relative -top-20 flex flex-col items-center jusify-center">

                                <Image className="rounded-xl" src="/assets/images/LogoEZ.png" width="350" height="350" alt="Logo: 8zense.com"/>
                            </div>
                  </div>  
          <div className="col-span-8 row-span-3 col-start-3 row-start-13">
    <div className='relative -top-28  *:flex flex-col  justify-center items-center'>
    <Button variant={'outline'} size="lg" className='mx-auto bg-zinc-100 text-zinc-600 hover:bg-zinc-400 hover:text-white' >send e-mail 
      </Button>
      </div>
    
    
          </div>
    </div>
    </section>


    
   
  
{/*====================================================grid ende ===============*/}
</>
  )
}