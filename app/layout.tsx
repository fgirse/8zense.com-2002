import type { Metadata } from 'next';
import { Saira, Saira_Condensed } from 'next/font/google';
import './globals.css';
import './../styles/styles.css';
import { ClerkProvider } from '@clerk/nextjs';
import { neobrutalism } from '@clerk/themes';


const sairaCond = Saira_Condensed({
  display: 'swap',
  weight: ['300', '400', '700', '900',],
  variable: '--font-saira_c',
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
    <ClerkProvider  appearance={{
      baseTheme:neobrutalism
    }} >
   
   <html lang="en" className={`${sairaCond.variable}d`}>


      <body className={sairaCond.className}>{children}</body>
    </html>
    </ClerkProvider>
  )
}
