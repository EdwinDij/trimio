"use client";
import React, { useState } from "react";
import Logo from "../../../public/LOGO-1.png";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import creations from "../../utils/creation.json"; // Assuming this is the correct path to your creations data
import { motion } from "framer-motion";

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
  const menuItems = [
    { id: "services", label: "Services" },
    { id: "a-propos", label: "À propos" },
    ...(creations.length > 0
      ? [{ id: "creations", label: "Nos créations" }]
      : []),
    { id: "contact", label: "Contact" },
  ];

  console.log(creations.length);
  return (
    <motion.header
      className="container mx-auto px-4 py-6 flex justify-between items-center fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent text-white"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Link href="#">
        <Image
          src={headerList[0].logo}
          alt="Logo"
          width={80}
          height={60}
        />
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex gap-10 items-center">
        {menuItems.map((item) => {
          if (item.id === "contact") {
            return (
              <Link
                key={item.id}
                href={`#${item.id}`}
                className="bg-amber-500/90 text-[#102a47] px-4 py-2 rounded-full font-semibold hover:bg-amber-500/70 transition-colors"
              >
                {item.label}
              </Link>
            );
          }

          return (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className="hover:text-amber-500/90 text-lg font-medium"
            >
              {item.label}
            </Link>
          );
        })}
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
          {menuItems.map((item) => (
            <Link
              key={item.id}
              href={`#${item.id}`}
              className={
                item.id === "contact"
                  ? "bg-amber-500/90 text-[#102a47] px-4 py-2 rounded-3xl font-semibold hover:bg-amber-500/70 transition-colors"
                  : "hover:text-amber-500/90 text-lg font-medium"
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </motion.header>
  );
};
