import Footer from "@/components/share/Footer";
import Header from "@/components/share/Header";
import ScrollToTop from "@/components/BackToTop/ScrollToTop";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen flex-col mx-auto max-w-9xl">
      <Header />
      <main className="content">{children}</main>
  <ScrollToTop/>
      <Footer />
      
    </div>
  )
}