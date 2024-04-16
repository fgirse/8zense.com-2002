import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "../share/MobileNav"
import DropDown from"@/components/share/staggeredDropDown";
import Locked from"@/public/assets/images/locked.png"
import Logo from"@/public/assets/images/LogoEZ80.svg";


const Header = () => {
  return (
    <header className="flex flex-col w-[99.9vw] mx-auto  text-white bg-zenseGrey items-center justify-start lg:flex-row lg:items-baseline">
      <div id="LogoEZ" className=" py-5 h-24 w-[100vw] rounded-xl flex items-baseline justify-between">
       <Link href="/" className="">
          <div className="relative w-16 h-12 sm:w-16">
          <Image src={Logo} sizes="100vw" fill alt="Logo 8zense.com"
/></div>
        </Link>

        <SignedIn>

          <nav className="hidden w-full max-w-3xl ">
            <NavItems />
           
          </nav>
          
        </SignedIn>

        <div className="flex items-center justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            
          </SignedIn>
          <SignedOut>
          <div className='flex items-center justify-center'>
      <Image
          src={Locked}
          alt="Schloss"
          
            className='relative rounded-full border-0 -8 border-gray-300'
          
            width='45'
            height= '45'
        /></div>
            <Button asChild className="mr-9 rounded-xl font-bold text-3xl text-amber-500 bg-[#fcf601] hover:bg-amber-400 hover:border-2 hover:border-[#fcf601]" size="lg">
              <Link href="/sign-in">
                Login
              </Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  )
}
export default Header






