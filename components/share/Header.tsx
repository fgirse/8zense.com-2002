import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "../share/MobileNav";
import Locked from"@/public/assets/images/locked.png"

const Header = () => {
  return (
    <header className="px-5 w-full h-20 bg-zinc-600 text-white border-b-2 border-grey-200">
      <div id="LogoEZ" className="rounded-xl wrapper flex items-start justify-between">
        <Link href="/" className="">
          <Image 
          className=" rounded-xl shadow-2xl shadow-zinc-400"
            src="/assets/images/LogoEZ2.png" width={66} height={66}
            alt="Logo 8zense.com" 
          />
        </Link>

        <SignedIn>
          <nav className="md:flex-between hidden w-full max-w-xs">
            <NavItems />
          </nav>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <MobileNav />
          </SignedIn>
          <SignedOut>
          <div className='flex flex-col items-center mt-3'>
      <Image
          src={Locked}
          alt="Logo 8zense"
          sizes="100vw"
            className='rounded-full border-x-8 border-gray-300'
          style={{
            width: '33%',
            height: 'auto',
          }}
        /></div>
            <Button asChild className="rounded-full bg-[#fcf601] hover:bg-amber-400 hover:border-2 hover:border-[#fcf601]" size="lg">
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






