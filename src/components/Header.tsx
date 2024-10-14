import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-black text-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-red-600">Rann-neti' 2024</Link>
          <ul className="flex space-x-4 text-xl">
            <li><Link to="/" className="hover:text-red-600">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-600">About</Link></li>
            <li><Link to="/teams" className="hover:text-red-600">Teams</Link></li>
            <li><Link to="/games" className="hover:text-red-600">Games</Link></li>
            <li><Link to="/rules" className="hover:text-red-600">Rules</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}