'use client';

import { headerLinks } from"../../constants/index"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const NavItems = () => {
  const pathname = usePathname();

  return (
    <ul className="md:flex-between flex w-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        const isActive = pathname === link.route;
        
        return (
          <li
            key={link.route}
            className={`${
              isActive && 'text-primary-500'
            } font-sans py-1 px-2. rounded-lg bg-zinc-700 text-zinc-100 hover:text-orange-400 hover:bg-zinc-300 font-black uppercase text-2xl flex-center p-medium-16 whitespace-nowrap lg:text-3xl`}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        )
      })}
    </ul>
  )
}

export default NavItems