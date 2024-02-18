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
    <header className="px-5 w-full h-20 bg-transparent text-white border-b-2 border-grey-200">
      <div id="LogoEZ" className="rounded-xl wrapper flex items-start justify-between">
        <Link href="/" className="">
          <div className="w-[12vw] h-1/2 sm:w-16">
          <Image src={Logo} sizes="100vw" style={{width:"24%",height:"auto"}}alt="Logo 8zense.com"
          
          /></div>
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-7xl">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex items justify-end gap-8">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
          <div className='flex flex-col items-center mt-3'>
            
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
            <Button asChild className="rounded-xl font-bold text-amber-500 bg-[#fcf601] hover:bg-amber-400 hover:border-2 hover:border-[#fcf601]" size="lg">
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






