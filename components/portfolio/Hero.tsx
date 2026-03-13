'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { AnimationWrapper } from './AnimationWrapper';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const stats = [
    { label: 'Années d\'expérience', value: '7+' },
    { label: 'Projets réalisés', value: '50+' },
    { label: 'Certifications AWS', value: '5' },
  ];

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 flex items-center pt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <AnimationWrapper delay={0.1}>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-sm font-semibold text-blue-600">Bienvenue sur mon portfolio</span>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mt-2 text-balance">
                  Asma CHAOUI
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">
                  Ingénieure DevOps AWS
                </h2>
                <p className="text-lg text-slate-600 mt-2">
                  Spécialisée en infrastructure cloud, Infrastructure as Code et DevOps
                </p>
              </motion.div>

              <motion.p
                className="text-slate-600 leading-relaxed text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Avec plus de 7 ans d'expertise en infrastructure AWS, j'aide les organisations à concevoir, 
                mettre en place et optimiser leurs solutions cloud. Ma passion réside dans l'automatisation 
                d'infrastructure, les pipelines CI/CD et la création de systèmes évolutifs et sécurisés 
                qui créent de la valeur métier.
              </motion.p>

              {/* Stats */}
              <motion.div
                className="grid grid-cols-3 gap-4 py-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {stats.map((stat, idx) => (
                  <div key={idx} className="text-center">
                    <motion.div
                      className="text-3xl font-bold text-blue-600"
                      initial={{ scale: 0.5 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.5 + idx * 0.1 }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm text-slate-600 mt-1">{stat.label}</p>
                  </div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex gap-4 pt-4"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <a
                  href="#experiences"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('experiences')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  <Button className="bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white px-6 py-2 h-auto">
                    Voir mon travail <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <Link href="/contact">
                  <Button variant="outline" className="border-blue-200 text-blue-600 hover:bg-blue-50 px-6 py-2 h-auto">
                    Me contacter
                  </Button>
                </Link>
              </motion.div>
            </div>
          </AnimationWrapper>

          {/* Right - Profile Image */}
          <AnimationWrapper delay={0.2}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              {/* Glow effect background */}
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-blue-600 rounded-2xl blur-2xl opacity-30 -z-10" />
              
              {/* Floating animation wrapper */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="relative rounded-2xl overflow-hidden border-2 border-blue-200 bg-white p-2">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Asma CHAOUI"
                    width={400}
                    height={500}
                    className="w-full h-auto rounded-xl object-cover"
                    priority
                  />
                </div>
              </motion.div>
            </motion.div>
          </AnimationWrapper>
        </div>
      </div>
    </section>
  );
}
