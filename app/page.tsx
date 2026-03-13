'use client';

import { Navigation } from '@/components/portfolio/Navigation';
import { Hero } from '@/components/portfolio/Hero';
import { Skills } from '@/components/portfolio/Skills';
import { TechnicalSkills } from '@/components/portfolio/TechnicalSkills';
import { Experience } from '@/components/portfolio/Experience';
import { Education } from '@/components/portfolio/Education';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowDown } from 'lucide-react';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <Hero />
      <Skills />
      <TechnicalSkills />
      <Experience />
      <Education />
      
      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h3 className="text-4xl font-bold text-slate-900">Travaillons ensemble</h3>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">
              Je suis toujours intéressée par de nouveaux projets et opportunités. 
              N'hésitez pas à me contacter !
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6 pt-4">
              <a
                href="mailto:freelance.chaoui@gmail.com"
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white rounded-lg transition-all"
              >
                Envoyer un email
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2 border border-blue-400 text-blue-600 hover:bg-blue-50 rounded-lg transition-all"
              >
                Formulaire de contact
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-gradient-to-b from-slate-900 to-slate-950 text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_50%)]" />

        <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="grid lg:grid-cols-3 gap-12 lg:gap-16"
          >
            {/* Colonne 1 - Brand & Tagline */}
            <div className="space-y-6 text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Asma CHAOUi
              </h3>
              <p className="text-slate-400 text-lg font-medium">
                Ingénieure DevOps AWS — Freelance
              </p>
              <p className="text-slate-500 text-sm leading-relaxed max-w-md mx-auto lg:mx-0">
                Spécialiste infrastructure cloud, IaC et automatisation.  
                Construisons ensemble des systèmes performants et évolutifs.
              </p>
            </div>

            {/* Colonne 2 - Navigation rapide */}
            <div className="text-center lg:text-left">
              <h4 className="text-lg font-semibold text-slate-300 mb-6 tracking-wide uppercase">
                Navigation
              </h4>
              <nav className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-1 gap-4 text-sm">
                {[
                  { name: 'À propos', href: '#hero' },
                  { name: 'Compétences', href: '#competences' },
                  { name: 'Expériences', href: '#experiences' },
                  { name: 'Formation', href: '#formation' },
                  { name: 'Contact', href: '#contact' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-slate-400 hover:text-sky-400 transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Colonne 3 - Réseaux sociaux + CTA */}
            <div className="text-center lg:text-right space-y-8">
              <h4 className="text-lg font-semibold text-slate-300 mb-6 tracking-wide uppercase">
                Connectons-nous
              </h4>

              {/* Icônes réseaux sociaux */}
              <div className="flex justify-center lg:justify-end gap-6 flex-wrap">
                <a
                  href="https://www.linkedin.com/in/asma-chaoui-aa561390/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group"
                >
                  <div className="p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-sky-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-500/20">
                    <svg className="w-7 h-7 text-slate-300 group-hover:text-sky-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </div>
                </a>

                <a
                  href="https://www.malt.fr/profile/asmachaoui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Malt"
                  className="group"
                >
                  <div className="p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-sky-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-500/20">
                    <Image
                      src="/images/malt.png"
                      alt="Malt"
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain"
                    />
                  </div>
                </a>

                <a
                  href="https://www.collective.work/profile/asma-chaoui/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Collective"
                  className="group"
                >
                  <div className="p-3 rounded-xl bg-slate-800/70 backdrop-blur-sm border border-slate-600/70 group-hover:border-sky-400/60 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-500/20">
                    <Image
                      src="/images/collective.png"
                      alt="Collective"
                      width={28}
                      height={28}
                      className="w-7 h-7 object-contain brightness-125 contrast-125" // ← booste visibilité
                    />
                  </div>
                </a>

                <a
                  href="mailto:freelance.chaoui@gmail.com"
                  aria-label="Email"
                  className="group"
                >
                  <div className="p-3 rounded-xl bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 group-hover:border-sky-500/50 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-sky-500/20">
                    <svg className="w-7 h-7 text-slate-300 group-hover:text-sky-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                </a>
              </div>

              {/* CTA Télécharger CV */}
              <motion.a
                href="/CV-Asma-CHAOUI.pdf"
                download="CV-Asma-CHAOUI.pdf"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-6 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 rounded-xl text-white font-medium shadow-lg shadow-blue-500/20 transition-all duration-300"
              >
                Télécharger mon CV
                <ArrowDown className="w-5 h-5" />
              </motion.a>
            </div>
          </motion.div>

          {/* Bas du footer - copyright */}
          <div className="mt-16 pt-10 border-t border-slate-800/60 text-center text-slate-500 text-sm">
            <p>© {new Date().getFullYear()} Asma CHAOUi. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
