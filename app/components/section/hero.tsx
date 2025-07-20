"use client";
import React from "react";
import Logo from "../../../public/LOGO-1.png";
import Image from "next/image";
import Link from "next/link";
import { LucidePlayCircle } from "lucide-react";
import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      <div className="absolute inset-0"></div>
      <div className="absolute -bottom-10 -right-30 w-80 h-80 bg-white opacity-20 rounded-full blur-3xl pointer-events-none z-0"></div>
      <div className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          <Image
            src={Logo}
            alt="Logo"
            width={150}
            height={150}
            className="mx-auto mb-6 rounded-full"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-white text-4xl md:text-6xl font-bold mb-4"
        >
          Donnez vie à vos vidéos,<br />
          <span className="text-amber-500/90"> avec une touche de génie</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-white text-lg md:text-xl mb-8"
        >
          Trimio est votre partenaire créatif pour un montage vidéo
          professionnel qui captive,<br />
          engage et convertit. De la première coupe à l&apos;étalonnage final,<br />
          nous sublimons votre contenu.
        </motion.p>

        <div className="flex justify-center gap-6 items-center max-sm:flex-col max-sm:gap-10">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Link
              href="#contact"
              className="bg-amber-500/90 text-[#102a47] px-6 py-3 rounded-full font-semibold hover:bg-amber-500/70 transition-colors hover:scale-110"
            >
              Démarrer un projet
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Link
              href="#services"
              className="flex items-center gap-2 bg-transparent border px-6 py-3 rounded-full font-semibold text-white hover:bg-white/10 transition-colors hover:text-black"
            >
              <LucidePlayCircle />
              Démarrer un projet
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
