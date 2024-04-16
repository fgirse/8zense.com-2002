import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "../share/MobileNav";
import Locked from"@/public/assets/images/locked.png"
import Logo from"@/public/assets/images/LogoEZ990.svg";
import FjipMenu from "./FlipMenu";
import StaggeredDropDown from "./staggeredDropDown";

const Header = () => {
  return (
    <header className="flex flex-col w-full lg:h-20 text-white bg-zenseGrey items-center justify-between">
      <div id="" className="w-[100vw] h-20 rounded-xl flex flex-row items-center justify-start">
        <Link href="/" className="">
          <div className="relative w-20 h-16 sm:w-16">
          <Image src={Logo} sizes="100vw" fill alt="Logo 8zense.com"
/></div>
        </Link>

        <SignedIn>
          <nav className=" hidden lg:flex lg:flex-row lg:items-baseline w-3/4 max-w-6xl">
            <NavItems />
            <div className="ml-24"> 
                        
                         </div>

          </nav>
        </SignedIn>
        <StaggeredDropDown/>
        <div className="flex items-center justify-end gap-2">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>

          <SignedOut>
          <div className='flex items-center'>
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













