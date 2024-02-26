import Footer from "../../components/share/Footer";
import Header from "../../components/share/Header";
//import './kontakt.module.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex min-h-screen h-[100 dvh] flex-col justify-between items-center">
      <Header />
      <main className="content h-100vw flex-1">{children}</main>
      <Footer />
    </div>
  )
}