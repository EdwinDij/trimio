"use client";
import { motion } from "framer-motion";
import { Info, Mail, Phone } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";
import { useIsMobile } from "../../hooks/useIsMobile";

export const Contact = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [projectType, setProjectType] = useState<string[]>([]);
  const [description, setDescription] = useState<string>("");
  const isMobile = useIsMobile();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, projectType, description });

    const response = await fetch(`${process.env.NEXT_PUBLIC_APIROUTE}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        projectType,
        description,
      }),
    });
    if (response.ok) {
      alert("Message envoyé avec succès !");
      setName("");
      setEmail("");
      setProjectType([]);
      setDescription("");
    } else {
      alert("Une erreur est survenue. Veuillez réessayer plus tard.");
    }
  };

  return (
    <section id="contact" className="bg-[#14365C] text-white py-25 px-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Titre + intro */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-black heading-font ">
            Contactez-nous
          </h2>
          <p className="mt-4 text-lg text-blue-200 max-w-2xl mx-auto">
            Prêt à démarrer votre projet ? Remplissez le formulaire ou
            contactez-nous directement.
          </p>
        </motion.div>

        {/* Conteneur côte à côte */}
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Formulaire */}
          <motion.form
            className="flex-1 w-full space-y-6 p-8 rounded-lg shadow-xl border border-[#f8fafc]/15 bg-[#14365C] text-white"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onSubmit={handleSubmit}
          >
            {/* Nom */}
            <div>
              <label htmlFor="name" className="font-semibold">
                Prénom/Nom de l&apos;entreprise
              </label>
              <input
                id="name"
                name="name"
                required
                className="mt-2 w-full rounded-md border border-gray-600 bg-[#14365C] px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-amber-500/90"
                placeholder="Ex : Dupont"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="font-semibold">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="mt-2 w-full rounded-md border border-gray-600 bg-[#14365C] px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/90"
                placeholder="exemple@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Types de projet */}
            <div>
              <label htmlFor="projectType" className="font-semibold">
                Type de projet
              </label>
              <div className="flex flex-wrap gap-4 mt-2">
                {["Dérushage vidéo", "Montage vidéo", "Etalonnage avancé"].map(
                  (type) => (
                    <label key={type} className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        value={type}
                        checked={projectType.includes(type)}
                        onChange={(e) => {
                          const value = e.target.value;
                          setProjectType((prev) =>
                            prev.includes(value)
                              ? prev.filter((v) => v !== value)
                              : [...prev, value]
                          );
                        }}
                        className="accent-blue-500 focus:ring-amber-500/90"
                      />
                      <span>{type}</span>
                    </label>
                  )
                )}
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="font-semibold">
                Décrivez votre projet
              </label>
              <textarea
                id="description"
                name="description"
                rows={5}
                className="mt-2 w-full rounded-md border border-gray-600 bg-[#14365C] px-3 py-2 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-500/90"
                placeholder="Votre projet en quelques mots..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>

            {/* Bouton centré */}
            <div className="pt-2 flex justify-center">
              <button
                type="submit"
                className="w-full sm:w-60 bg-amber-500/90 text-white hover:bg-amber-500 font-bold py-3 rounded-md transition-colors"
              >
                Envoyer
              </button>
            </div>
          </motion.form>

          {/* Infos de contact */}
          <motion.div
            className="flex-1 space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="text-lg  space-y-4">
              <p>
                Contactez-nous pour tout renseignement, demande de devis ou
                simplement pour échanger sur votre projet.
              </p>
              <p>
                Nous vous répondrons dans un délai maximum de 24 heures ouvrées.
              </p>
            </div>
            <div className="bg-blue-900/30 border-l-4 border-amber-500/90 p-4 rounded-r-lg">
              <div className="flex items-start space-x-3">
                <Info className="w-6 h-5 text-amber-500/90 mt-1 flex-shrink-0" />
                <p className="">
                  Pour information, nous acceptons un nombre limité de projets
                  afin de garantir une qualité optimale pour chacun de nos
                  clients.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-lg">
                <div className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-amber-500/90" />
                </div>
                <Link
                  href="mailto:contact@trimioedit.com"
                  className=" hover:text-amber-500/90 transition-colors"
                >
                  contact@trimioedit.com
                </Link>
              </div>
              {/* <div className="flex items-center space-x-4 text-lg">
                <div className="w-10 h-10 rounded-full bg-blue-800/30 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-amber-500/90" />
                </div>
                <a
                  href="tel:0650369639"
                  className=" hover:text-amber-500/90 transition-colors"
                >
                  06 50 36 96 39
                </a>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
