// import './globals.css'
import { Inter } from 'next/font/google'
import Header from '../../components/header'
import Head from 'next/head'
import '../styles/app.scss'



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Brewood Cricket Club Quiz',
  description: 'Brewood Cricket Club Quiz',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        <div className="container">
          {children}
        </div>
        </body>
    </html>
  )
}
