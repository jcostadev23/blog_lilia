import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import ProfilePicture from './components/myprofilepic'
import WorkPicture from './components/workpic'

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
      <body className='dark:bg-slate-300'>
        <Navbar/>
        <ProfilePicture/>
        {children}
        <WorkPicture/>
        <footer className="bg-gray-400 text-black py-4 mt-16">
          <div className="container mx-auto flex items-center justify-center">
            <p className="text-sm">
              Made by <span className="font-bold">jcostadev23</span>
            </p>
          </div>
        </footer>
        </body>
    </html>
  )
}
