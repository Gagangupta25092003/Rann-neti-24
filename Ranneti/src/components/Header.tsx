import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-black text-white shadow-md">
      <nav className="container mx-auto px-10 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and Title */}
          <div className="flex items-center">
            {/* Logo Image */}
            <img
              src="./logo.jpg" // Ensure this is the correct path
              alt="Logo"
              className="w-16 h-16 mr-4" // Set width and height as needed
            />
            {/* Site Title */}
            <Link to="/" className="text-4xl font-bold text-red-600">
              Rann-neti' 2024
            </Link>
          </div>

          {/* Hamburger Icon (Visible on smaller screens) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle Menu"
            >
              {/* Hamburger Icon */}
              <svg
                className="w-8 h-8"
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

          {/* Navigation Links (Hidden on smaller screens) */}
          <ul className="hidden md:flex space-x-4 text-xl">
            <li>
              <Link to="/" className="hover:text-red-600">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-red-600">
                About
              </Link>
            </li>
            <li>
              <Link to="/teams" className="hover:text-red-600">
                Teams
              </Link>
            </li>
            <li>
              <Link to="/games" className="hover:text-red-600">
                Games
              </Link>
            </li>
            <li>
              <Link to="/rules" className="hover:text-red-600">
                Rules
              </Link>
            </li>
          </ul>
        </div>

        {/* Dropdown Menu for Small Screens */}
        {isOpen && (
          <ul className="md:hidden mt-4 space-y-2 text-xl">
            <li>
              <Link
                to="/"
                className="block text-white hover:text-red-600"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-white hover:text-red-600"
                onClick={toggleMenu}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/teams"
                className="block text-white hover:text-red-600"
                onClick={toggleMenu}
              >
                Teams
              </Link>
            </li>
            <li>
              <Link
                to="/games"
                className="block text-white hover:text-red-600"
                onClick={toggleMenu}
              >
                Games
              </Link>
            </li>
            <li>
              <Link
                to="/rules"
                className="block text-white hover:text-red-600"
                onClick={toggleMenu}
              >
                Rules
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}
