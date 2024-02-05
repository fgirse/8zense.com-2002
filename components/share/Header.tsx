import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "../share/MobileNav";

const Header = () => {
  return (
    <header className="px-5 w-full h-20 bg-zinc-600 text-white border-b-2 border-orange-300">
      <div id="LogoEZ" className="rounded-full wrapper flex items-start justify-between">
        <Link href="/" className="">
          <Image 
          className=" rounded-full shadow-2xl shadow-zinc-400"
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






