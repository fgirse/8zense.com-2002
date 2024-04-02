import type { Metadata } from 'next';
import { Saira, Saira_Condensed } from 'next/font/google';          
import 'normalize-css/normalize.css';
import './globals.css';
import styles from './home.module.css';
import { ClerkProvider } from '@clerk/nextjs';
import { neobrutalism } from '@clerk/themes';
import link from 'next/link';

const sairaCond = Saira_Condensed({
  display: 'swap',
  subsets: ['latin'],
  weight: ['300', '400', '700', '900',],
  variable: '--font-saira_c',
    });

    export const metadata: Metadata = {
      title: '8zenSe.com',
      description: 'LandingPage for startup - 8zense.com',
      icons: {icon : "/assets/images/LogoEZ300.png"}
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
   
   <html lang="en" className="bg-transparent">


      <body className={styles.container}>{children}/</body>
    </html>
    </ClerkProvider>
  )
}
