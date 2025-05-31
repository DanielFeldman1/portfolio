"use client";
import { useState } from "react";
import HamburgerComponent from "./Hamburger";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      {/* Navbar */}
      <nav className="text-md fixed top-0 left-0 w-full bg-white shadow h-11 z-50 px-2 md:px-4 py-2 flex justify-between items-center">
        <a href="#">
          <h1 className="hover:text-cyan-400 duration-500">Daniel Feldman</h1>
        </a>
        <HamburgerComponent />
        <div className="space-x-4 hidden md:flex">
          <a href="#about" className="hover:text-cyan-400 duration-500">
            About
          </a>
          <a href="#projects" className="hover:text-purple-400 duration-500">
            Projects
          </a>
          <a href="#openSource" className="hover:text-pink-400 duration-500">
            Open-Source Contributions
          </a>
          <a href="#contact" className="hover:text-orange-400 duration-500">
            Contact
          </a>
        </div>
      </nav>
    </div>
  );
}
