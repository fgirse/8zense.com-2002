import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import NavItems from "./NavItems";
import MobileNav from "../share/MobileNav";

const Header = () => {
  return (
    <header className="w-full bg-grey-600 border-b-2 border-orange-300">
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="">
          <Image 
          className="border border-yellow-500 rounded-xl shadow-2xl shadow-zinc-400"
            src="/assets/images/LogoEZ.png" width={56} height={56}
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
            <Button asChild className="rounded-full bg-zinc-300 hover:bg-orange-300 hover:border-2 hover:border-amber-400" size="lg">
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






