"use client";
import { useState } from "react";
import Hamburger from "hamburger-react";

export default function HamburgerComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="text-black hover:text-cyan-400 duration-500 md:hidden">
        <Hamburger size={24} toggled={open} toggle={setOpen} />
      </div>
      <div
        className={`fixed top-0 right-0 md:hidden text-center w-full bg-white shadow px-4 pt-2 pb-4 z-10 transition-all duration-500 ease-in-out transform ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-0 scale-95 pointer-events-none"
        }`}
      >
        <div className="fixed top-0 right-2 text-black hover:text-cyan-400 duration-500 md:hidden">
          <Hamburger size={24} toggled={open} toggle={setOpen} />
        </div>
        <a href="#" className="fixed top-3 left-3">
          <h1
            className="hover:text-cyan-400 duration-500"
            onClick={() => setOpen(false)}
          >
            Daniel Feldman
          </h1>
        </a>
        <div className="pt-8">
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
            href="#openSource"
            className="block py-2 border-b hover:text-pink-400 duration-500"
            onClick={() => setOpen(false)}
          >
            Open-Source Contributions
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
    </>
  );
}
