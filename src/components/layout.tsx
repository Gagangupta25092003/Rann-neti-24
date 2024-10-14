import React, { useState } from 'react'
import { Link } from 'react-router-dom';


const navItems = [
  { name: "About", href: "/about" },
  { name: "Teams", href: "/teams" },
  { name: "Games", href: "/games" },
  { name: "Rules", href: "/rules" },
  { name: "Sponsors", href: "/sponsors" },
]

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <header className="border-b border-red-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          {/* <Link to={""} className="flex items-center space-x-2">
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ranneeti-logo-final-04-drYhyC1Igm4BZ12TqqxiFtohdDSisz.jpg"
              alt="Rann-neti Logo"
              // width={40}
              // height={40}
              className="rounded-full"
            />
            <span className="text-2xl font-bold">Rann-neti' 2024</span>
          </Link> */}
          {/* <nav className="hidden md:flex space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={"/"}
                className="text-white hover:text-red-500 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav> */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* {isMenuOpen && (
          <nav className="md:hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={"/"}
                className="block px-4 py-2 text-white hover:bg-red-900 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>
        )} */}
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="border-t border-red-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <h3 className="text-xl font-bold">Rann-neti' 2024</h3>
              <p>The Ultimate Sports Fest at IIT Mandi</p>
            </div>
            <div className="flex space-x-4">
              {['Facebook', 'Twitter', 'Instagram'].map((social) => (
                <a key={social} href="#" className="text-white hover:text-red-500 transition-colors">
                  <span className="sr-only">{social}</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15v-4H9v-2h2V9.5C11 7.57 12.57 6 14.5 6H17v2h-2c-.55 0-1 .45-1 1v2h3v2h-3v4h-3z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          <div className="mt-4 text-center text-sm">
            © 2024 Rann-neti' Sports Fest. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}