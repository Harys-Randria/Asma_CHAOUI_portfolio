'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowDown, ArrowRight } from 'lucide-react';

// Variants d'animation
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const floatVariants = {
  float: {
    y: [0, -8, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
};

export function Hero() {
  const stats = [
    { label: "Années d'expérience", value: '10' },
    { label: 'Missions réalisées', value: '6+' },
    { label: 'Certifications AWS', value: '2' },
  ];

  return (
    <section
      id="hero"
      className="relative flex items-center bg-gradient-to-br from-blue-50 via-white to-indigo-50/40 pt-24 pb-12 md:pt-28 md:pb-16 min-h-[calc(100vh-0px)]"
    >
      <div className="container max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center"
        >
          {/* Contenu texte */}
          <div className="space-y-6 md:space-y-7">
            {/* Nom */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight"
            >
              Asma CHAOUI
            </motion.h1>

            {/* Rôle */}
            <motion.div variants={itemVariants} className="space-y-2">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 tracking-tight">
                Ingénieur DevOps AWS
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-medium">
                Infrastructure cloud • IaC • Automatisation
              </p>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-base md:text-lg leading-relaxed text-slate-600 max-w-xl"
            >
              Ingénieur DevOps/Cloud AWS avec 10 ans d'expérience, certifiée AWS
              Solution Architect Associate et AWS SysOps Associate. Compétences
              particulières en Cloud AWS, Infrastructure as Code (Terraform),
              automatisation (Ansible, Python) et déploiement CI/CD (GitLab, GitHub Actions).
            </motion.p>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-4 py-2"
            >
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl md:text-4xl font-extrabold bg-gradient-to-br from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    {stat.value}
                  </div>
                  <p className="mt-1 text-xs md:text-sm text-slate-500 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 pt-2"
            >
              <a href="/CV-Asma-CHAOUI.pdf" download>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-lg shadow-blue-200/30 w-full sm:w-auto"
                >
                  Télécharger mon CV
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </a>

              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-blue-400/60 text-blue-700 hover:bg-blue-50/80 hover:text-blue-800 w-full sm:w-auto"
                >
                  Me contacter
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Photo profil */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto lg:mx-0 max-w-sm lg:max-w-none"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-sky-400/30 to-blue-600/30 rounded-3xl blur-3xl opacity-40 -z-10" />
            <motion.div
              variants={floatVariants}
              animate="float"
              className="relative rounded-3xl overflow-hidden border-4 border-white/80 shadow-2xl bg-white p-3"
            >
              <Image
                src="/asma_chaoui.jpg"
                alt="Asma CHAOUI - Ingénieur DevOps AWS"
                width={500}
                height={600}
                className="w-full h-auto rounded-2xl object-cover aspect-[4/5]"
                priority
                sizes="(max-width: 768px) 80vw, 40vw"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}