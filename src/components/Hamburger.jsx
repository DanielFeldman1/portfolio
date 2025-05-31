"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";

export default function HamburgerComponent() {
  const [open, setOpen] = useState(false);
  
  return (
    <div>
      <div className="text-black hover:text-cyan-400 duration-500 md:hidden">
        <Hamburger size={24} toggled={open} toggle={setOpen} />
      </div>

      <div 
        className={`fixed top-0 right-0 md:hidden text-center w-full bg-white shadow px-4 pt-2 pb-4 z-10 transition-all duration-500 ease-in-out transform ${
          open 
            ? 'opacity-100 translate-y-11 scale-100' 
            : 'opacity-0 translate-y-0 scale-95 pointer-events-none'
        }`}
      >
        <a
          href="#about"
          className="block py-2 border-b hover:text-cyan-400 duration-500"
          onClick={() => setOpen(false)}
        >
          About
        </a>
        <a
          href="#projects"
          className="block py-2 border-b hover:text-purple-400 duration-500"
          onClick={() => setOpen(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="block py-2 hover:text-orange-400 duration-500"
          onClick={() => setOpen(false)}
        >
          Contact
        </a>
      </div>
    </div>
  );
}