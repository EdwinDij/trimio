"use client";
import React from "react";
import { Scissors, Film } from "lucide-react";
import { serviceItem } from "../../types/listItems";
import { motion } from "framer-motion";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Services = () => {

  const isMobile = useIsMobile();
  
  const servicesList: serviceItem[] = [
    {
      id: 1,
      title: "Réalisation du dérush",
      description:
        "Nous trions et sélectionnons les meilleures prises de vos rushs pour ne garder que l'essentiel et préparer un montage fluide et percutant.",
      icon: Scissors,
    },
    {
      id: 2,
      title: "Montage vidéo complet",
      description:
        "De l'assemblage des plans à l'ajout de musique, d'effets et de titres, nous construisons une histoire captivante qui reflète votre vision.",
      icon: Film,
    },
    {
      id: 3,
      title: "Étalonnage professionnel",
      description:
        "Nous harmonisons les couleurs et créons une ambiance visuelle unique pour donner à votre vidéo un rendu cinématographique et professionnel.",
      icon: Film,
    },
  ];

  return (
    <section id="services" className="bg-[#14365C] px-6 py-25 sm:px-6 lg:px-10">
      <div className="container mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center text-3xl sm:text-4xl font-bold text-white mb-4"
        >
          Nos Services
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-white text-base sm:text-lg max-w-2xl mx-auto mb-10 px-4"
        >
          Des solutions complètes pour transformer vos idées en vidéos exceptionnelles.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((service, index) => (
            <motion.article
              key={service.id}
              initial={{ opacity: 0,  x: isMobile ? 0 : -50, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1 + index * 0.25,
              }}
              viewport={{ once: true }}
              className="group relative flex flex-col items-center bg-transparent p-6 sm:p-8 md:p-10 rounded-lg shadow-lg border border-[#f8fafc]/15 text-center transition-all duration-300
                hover:-translate-y-2 hover:bg-white/5 hover:shadow-2xl hover:border-white/20"
            >
              <service.icon
                size={50}
                className="text-amber-500 mb-4 bg-amber-400/25 rounded-full p-2 transition-colors duration-300 group-hover:bg-amber-500/30"
              />
              <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4">
                {service.title}
              </h2>
              <p className="text-white text-sm sm:text-base px-2 sm:px-4">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
