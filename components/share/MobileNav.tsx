import {

  Sheet,

  SheetContent,

  SheetDescription,

  SheetHeader,

  SheetTitle,

  SheetTrigger,

} from "@/components/ui/sheet"

import Image from "next/image"

import { Separator } from "../ui/separator";

import NavItems from "./NavItems"





const MobileNav = () => {

  return (

    <nav className="md:hidden">

      <Sheet>

        <SheetTrigger className="align-middle text-red-500">

          <Image 

            src="/assets/icons/menu.svg"

            alt="menu"

            width={24}

            height={24}

            className="cursor-pointer"

          />

        </SheetTrigger>

        <SheetContent className="flex flex-col gap-6 bg-zinc-600 md:hidden">

          <Image 

            src="/assets/images/LogoEZ.png"

            alt="logo"

            width={38}

            height={38}

          />

          <Separator className="border border-orange-300" />

          <NavItems />

        </SheetContent>

      </Sheet>

    </nav>

  )

}



export default MobileNav