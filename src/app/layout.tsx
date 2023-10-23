import { Inter } from 'next/font/google';
import React from 'react';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import './globals.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "Lilia's Blog",
  description: 'Created by jcostadev23 ',
}

export default function RootLayout({

  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='bg-pink-50'>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
