import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "../share/MobileNav";
import Locked from"@/public/assets/images/locked.png"
import Logo from"@/public/assets/images/LogoEZ30.svg";

const Header = () => {
  return (
    <header className="flex flex-col py-3 px-5 w-full bg-zenseSignal/10 text-white items-center justify-center">
      <div id="LogoEZ" className="w-[100vw] h-20  rounded-xl flex items-center justify-around">
        <Link href="/" className="">
          <div className="w-[12vw] h-1/4 sm:w-16">
          <Image src={Logo} sizes="100vw" style={{width:"6%",height:"auto"}}alt="Logo 8zense.com"
/></div>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-3xl">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex  items-center justify-center gap-20">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
          <div className='
      '>
            
      <Image
          src={Locked}
          alt="Schloss"
          sizes="100vw"
            className='rounded-full border-x-8 border-gray-300'
          style={{
            width: '3%',
            height: 'auto',
          }}
        /></div>
            <Button asChild className="rounded-xl font-bold text-3xl text-amber-500 bg-[#fcf601] hover:bg-amber-400 hover:border-2 hover:border-[#fcf601]" size="lg">
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






