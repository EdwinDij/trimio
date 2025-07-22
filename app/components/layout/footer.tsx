import React from "react";
import Logo from "../../../public/LOGO-1.png";
import Image from "next/image";
import { navbarItem } from "../../types/listItems";
import Link from "next/link";
import { Mail } from "lucide-react";

export const Footer = () => {
  const navLinks: navbarItem[] = [
    {
      id: "services",
      label: "Services",
    },
    {
      id: "about",
      label: "À propos",
    },
    {
      id: "contact",
      label: "Contact",
    },
  ];

  return (
    <footer className="py-10 text-center bg-[#14365C] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center max-sm:flex-col gap-6 justify-between mb-6">
          <div className="flex flex-col items-center mb-6">
            <Image
              src={Logo}
              width={90}
              height={50}
              alt="Trimio Logo"
              className="mb-4"
            />
            <p className="text-white text-sm">
              Montage vidéo professionnel pour donner vie à vos projets.
            </p>
          </div>
          <div className="flex flex-col mb-6 gap-3 items-left">
            <h2 className="text-xl font-bold text-white mb-2">Navigation</h2>
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={`#${link.id}`}
                className="text-white hover:text-amber-500 transition-colors px-4"
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex flex-col mb-6 gap-3 items-left">
            <h2 className="text-xl font-bold text-white mb-2">
              Contactez-nous
            </h2>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                <Mail className="w-5 h-5 text-amber-500/90" />
              </div>
              <Link
                href="mailto:contact@trimioedit.com"
                className="hover:text-amber-500/90 transition-colors"
              >
                contact@trimioedit.com
              </Link>
            </div>
          </div>
        </div>

        {/* LIGNE + COPYRIGHT */}
        <div className="border-t border-white/20 pt-6 text-sm text-white/60">
          © {new Date().getFullYear()} <strong className="text-white">Trimio</strong>. Tous droits
          réservés. 🚀 Propulsé par{" "}
          <span className="font-semibold text-white">Edwin Dijeont</span>
        </div>
      </div>
    </footer>
  );
};
