import type { Metadata } from 'next'
import { Raleway, Bowlby_One_SC } from 'next/font/google'
import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'

const bowlbySC = Bowlby_One_SC({
  weight: '400',
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-bowlbySC',
    });
  
const raleway = Raleway({
    subsets: ['latin'],
  display: 'swap',
   variable: '--font-raleway'
    });


export const metadata: Metadata = {
  title: '8zenSe.com',
  description: 'LandingPage for startup - 8zense.com',
  icons: {icon : "/assets/images/LogoEZ.png"}
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
   <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
