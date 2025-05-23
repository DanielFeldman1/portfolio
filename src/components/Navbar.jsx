"use client"
import {useState} from "react";
export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <nav className="text-xs fixed top-0 left-0 w-full bg-white shadow z-50 px-2 md:px-4 py-2 flex justify-between items-center">
        <a href='#'><h1 className="hover:text-cyan-400 duration-500" >Daniel Feldman</h1></a>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6 hover:text-cyan-400 hover:cursor-pointer duration-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <div className="space-x-4 hidden md:flex">
          <a href="#about" className="hover:text-cyan-400 duration-500">
            About
          </a>
          <a href="#projects" className="hover:text-cyan-400 duration-500">
            Projects
          </a>
          <a href="#contact" className="hover:text-cyan-400 duration-500">
            Contact
          </a>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed top-15 right-0 md:hidden bg-white shadow px-4 pt-2 pb-4 transition-all duration-500 ease-in-out ">
            <a
              href="#about"
              className="block py-2 border-b hover:text-cyan-400 duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#projects"
              className="block py-2 border-b hover:text-cyan-400 duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block py-2 hover:text-cyan-400 duration-500"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
}
