"use client"
import React, { useState } from "react";
import Logo from "../../../public/LOGO-1.png";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // <-- Lucide icons

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const headerList = [
    {
      logo: Logo,
      services: "Services",
      about: "A propos",
      contact: "Contacter",
    },
  ];

  return (
    <header className="container mx-auto px-4 py-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent text-white">
      {/* Logo */}
      <Link href="#">
        <Image
          src={headerList[0].logo}
          alt="Logo"
          width={80}
          height={60}
          className="rounded-full"
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10 items-center">
        <Link
          href="#services"
          className="hover:text-amber-500/90 hover:scale-110 transition-transform duration-300"
        >
          {headerList[0].services}
        </Link>
        <Link
          href="#about"
          className="hover:text-amber-500/90 hover:scale-110 transition-transform duration-300"
        >
          {headerList[0].about}
        </Link>
        <Link
          href="#contact"
          className="border rounded-3xl bg-amber-500/90 px-4 py-2 text-[#102a47] transition-transform hover:scale-110 duration-300 font-semibold"
        >
          {headerList[0].contact}
        </Link>
      </nav>

      {/* Mobile Hamburger Button (Lucide icons) */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-[#102a47] md:hidden flex flex-col items-center gap-4 py-6 shadow-lg">
          <Link
            href="#services"
            className="hover:text-amber-500/90 text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            {headerList[0].services}
          </Link>
          <Link
            href="#about"
            className="hover:text-amber-500/90 text-lg font-medium"
            onClick={() => setIsOpen(false)}
          >
            {headerList[0].about}
          </Link>
          <Link
            href="#contact"
            className="bg-amber-500/90 text-[#102a47] px-4 py-2 rounded-3xl font-semibold"
            onClick={() => setIsOpen(false)}
          >
            {headerList[0].contact}
          </Link>
        </div>
      )}
    </header>
  );
};
