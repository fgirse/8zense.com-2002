import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "../share/MobileNav";
import Locked from"@/public/assets/images/locked.png"
import Logo from"@/public/assets/images/LogoEZ30.svg";
import FjipMenu from "./FlipMenu";

const Header = () => {
  return (
    <header className="flex flex-col w-[100vw] text-white bg-zenseGreen items-center justify-center">
      <div id="LogoEZ" className="w-[100vw] h-20  rounded-xl flex items-center justify-around">
        <Link href="/" className="">
          <div className="relative w-24 h-20 sm:w-16">
          <Image src={Logo} sizes="100vw" fill alt="Logo 8zense.com"
/></div>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-3x'¨l">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex items-center justify-end gap-3">
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






