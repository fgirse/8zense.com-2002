import Footer from "../../components/share/Footer";
import Header from "../../components/share/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen flex flex-col justify-between items-center">
      <Header />
      <main className="content">{children}</main>
      <Footer />
    </div>
  )
}