'use client';

import { Navigation } from '@/components/portfolio/Navigation';
import { Hero } from '@/components/portfolio/Hero';
import { Skills } from '@/components/portfolio/Skills';
import { TechnicalSkills } from '@/components/portfolio/TechnicalSkills';
import { Experience } from '@/components/portfolio/Experience';
import { Education } from '@/components/portfolio/Education';
import { motion } from 'framer-motion';

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
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <div className="pt-8 border-t border-slate-700 text-slate-400 text-sm">
              <p>© 2024 Asma CHAOUI. Tous droits réservés.</p>
              <p className="mt-2">Créé avec Next.js, React et Framer Motion</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
