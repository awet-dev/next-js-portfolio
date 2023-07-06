
import './globals.css'
import "tw-elements/dist/css/tw-elements.min.css";
import { Inter } from 'next/font/google'
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portfolio - home',
  description: 'Awet portfolio that show some of my skills and experience',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Navigation />
      {children}
      <Footer />
      </body>
    </html>
  )
}
