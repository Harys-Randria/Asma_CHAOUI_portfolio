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
            <h3 className="text-2xl font-bold">Let's Work Together</h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hi, feel free to get in touch!
            </p>
            
            <div className="flex justify-center gap-6 pt-4">
              <a
                href="mailto:asma@example.com"
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 rounded-lg transition-all"
              >
                Send Email
              </a>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-2 border border-blue-400 text-blue-400 hover:bg-blue-400/10 rounded-lg transition-all"
              >
                Schedule Call
              </a>
            </div>

            <div className="pt-8 border-t border-slate-700 text-slate-400 text-sm">
              <p>© 2024 Asma CHAOUI. All rights reserved.</p>
              <p className="mt-2">Built with Next.js, React, and Framer Motion</p>
            </div>
          </motion.div>
        </div>
      </footer>
    </main>
  );
}
