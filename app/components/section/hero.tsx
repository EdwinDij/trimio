import React from "react";
import Logo from "../../../public/LOGO-1.png";
import Image from "next/image";
import Link from "next/link";
import { LucidePlayCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0"></div>
      <div className="absolute -bottom-10 -right-30 w-80 h-80 bg-white opacity-20 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="relative z-10 text-center">
        <Image
          src={Logo}
          alt="Logo"
          width={150}
          height={150}
          className="mx-auto mb-6 rounded-full"
        />
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-4">
          Donnez vie à vos vidéos,<br></br>
          <span className="text-amber-500/90"> avec une touche de génie</span>
        </h1>
        <p className="text-white text-lg md:text-xl mb-8">
          Trimio est votre partenaire créatif pour un montage vidéo
          professionnel qui captive,<br></br> engage et convertit. De la
          première coupe à l&apos;étalonnage final,<br></br>nous sublimons votre
          contenu.
        </p>
        <div className="flex justify-center gap-6 items-center max-sm:flex-col max-sm:gap-10">
          <Link
            href="#contact"
            className="bg-amber-500/90 text-[#102a47] px-6 py-3 rounded-full font-semibold hover:bg-amber-500/70 transition-colors hover:scale-110 "
          >
            Démarrer un projet
          </Link>
          <Link
            href="#services"
            className="flex items-center gap-2 bg-transparent border px-6 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-colors hover:text-black"
          >
            <LucidePlayCircle />
            Démarrer un projet
          </Link>
        </div>
      </div>
    </section>
  );
};
