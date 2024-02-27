import Footer from "../../components/share/Footer";
import Header from "../../components/share/Header";
import styles from'./about.module.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      
      <Footer />
    </>
  )
}