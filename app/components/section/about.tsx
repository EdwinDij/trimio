"use client";
import React from "react";
import { Heart, Users, Rocket } from "lucide-react";
import { serviceItem } from "@/app/types/listItems";
import { motion } from "framer-motion";
import { useIsMobile } from "@/app/hooks/useIsMobile";


export const About = () => {

  const isMobile = useIsMobile();

  const missionItems: serviceItem[] = [
    {
      id: 1,
      title: "Passion & Créativité",
      description:
        "Chaque projet est traité avec un amour inconditionnel pour le détail et l'innovation.",
      icon: Heart,
    },
    {
      id: 2,
      title: "Notre vision",
      description:
        "Nous utilisons les meilleurs outils pour garantir un rendu exceptionnel dans des délais optimisés.",
      icon: Rocket,
    },
    {
      id: 3,
      title: "Partenariat & Écoute",
      description:
        "Votre vision est notre priorité. Nous collaborons étroitement avec vous à chaque étape.",
      icon: Users,
    },
  ];

  return (
    <section id="a-propos" className="px-6 py-10 sm:px-6 lg:px-10">
      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-16 items-center max-w-7xl sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-5xl ">
            Notre mission :{" "}
            <span className="text-amber-500/90">Sublimer vos histoires</span>
          </h3>
          <p className="text-lg mt-4">
            Trimio est né d&apos;une passion pour l&apos;art du storytelling
            visuel. Nous croyons que chaque projet, qu&apos;il soit grand ou
            petit, mérite une attention méticuleuse et une créativité sans
            bornes.
          </p>
          <br />
          <p className="text-lg mt-2">
            Notre objectif est simple : transformer vos rushs bruts en une œuvre
            finale cohérente, émotionnelle et techniquement impeccable, qui non
            seulement atteint, mais dépasse vos attentes.
          </p>
        </motion.div>
        <div>
          <div className="flex flex-col gap-8 mt-8">
            {missionItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: isMobile ? 0 : index % 2 === 0 ? -50 : 50, y: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.3 }}
                viewport={{ once: true, amount: 0.8 }}
                className="flex items-center gap-4"
              >
                <item.icon
                  size={45}
                  className="max-sm:hidden text-amber-500 bg-amber-400/25 rounded-xl p-2"
                />
                <article>
                  <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                  <p>{item.description}</p>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
