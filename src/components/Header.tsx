import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white shadow-md">
      <nav className="container w-full px-4 md:px-6 py-3">
        <div className="flex justify-between items-center ">
          {/* Logo */}
          <img src="./logo1.png" className="w-16 -ml-3" alt="Logo" />

          {/* Hamburger Menu for small screens */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none hover:text-red-600"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links (hidden on small screens, visible on medium and above) */}
          <ul className="hidden md:flex space-x-2 md:space-x-6 text-sm md:text-xl">
            <li><Link to="/" className="hover:text-red-600 text-base">Home</Link></li>
            <li><Link to="/about" className="hover:text-red-600 text-base">About</Link></li>
            <li><Link to="/teams" className="hover:text-red-600 text-base">Teams</Link></li>
            <li><Link to="/games" className="hover:text-red-600 text-base">Games</Link></li>
            <li><Link to="/participants" className="hover:text-red-600 text-base">Participants</Link></li>
            <li><Link to="/rules" className="hover:text-red-600 text-base">Rules</Link></li>
            <li><Link to="/register" className="hover:text-red-600 text-base">Register</Link></li>
          </ul>
        </div>

        {/* Dropdown Menu for small screens */}
        {isOpen && (
          <ul className=" md:hidden mt-2 space-y-2 text-sm">
            <li><Link to="/" className="block px-2 py-1 hover:text-red-600 w-full text-center" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" className="block px-2 py-1 hover:text-red-600 w-full text-center" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/teams" className="block px-2 py-1 hover:text-red-600 w-full text-center" onClick={toggleMenu}>Teams</Link></li>
            <li><Link to="/games" className="block px-2 py-1 hover:text-red-600 w-full text-center" onClick={toggleMenu}>Games</Link></li>
            <li><Link to="/participants" className="block px-2 py-1 hover:text-red-600 w-full text-center" onClick={toggleMenu}>Participants</Link></li>
            <li><Link to="/rules" className="block px-2 py-1 hover:text-red-600 w-full text-center" onClick={toggleMenu}>Rules</Link></li>
            <li><Link to="/register" className="block px-2 py-1 hover:text-red-600 w-full text-center" onClick={toggleMenu}>Register</Link></li>

          </ul>
        )}
      </nav>
    </header>
  );
}
