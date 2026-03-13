'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'À propos', href: '#hero', section: 'hero' },
  { name: 'Compétences', href: '#competences', section: 'competences' },
  { name: 'Expériences', href: '#experiences', section: 'experiences' },
  { name: 'Formation', href: '#formation', section: 'formation' },
  { name: 'Contact', href: '#contact', section: 'contact' },
] as const;

const socialLinks = [
  {
    href: 'https://www.linkedin.com/in/asma-chaoui-aa561390/',
    label: 'LinkedIn',
    icon: (
      <svg className="h-5 w-5 md:h-6 md:w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
  {
    href: 'https://www.malt.fr/profile/asmachaoui/',
    label: 'Malt',
    icon: <Image src="/images/malt.png" alt="Malt" width={20} height={20} className="h-5 w-5 md:h-6 md:w-6" />,
  },
  {
    href: 'https://www.collective.work/profile/asma-chaoui/',
    label: 'Collective',
    icon: <Image src="/images/collective.png" alt="Collective" width={20} height={20} className="h-5 w-5 md:h-6 md:w-6" />,
  },
  {
    href: 'mailto:freelance.chaoui@gmail.com',
    label: 'Email',
    icon: <Image src="/images/email.png" alt="Email" width={20} height={20} className="h-5 w-5 md:h-6 md:w-6" />,
  },
] as const;

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 30);

      const pos = y + 140;
      let current = 'hero';

      for (const link of navLinks) {
        const el = document.getElementById(link.section);
        if (el && pos >= el.offsetTop && pos < el.offsetTop + el.offsetHeight) {
          current = link.section;
          break;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Classes de texte - TOUJOURS EN FONCÉ
  const textClass = scrolled
    ? 'text-gray-700 hover:text-blue-600'
    : 'text-gray-800 hover:text-blue-600'; // Toujours foncé, même sans scroll

  const activeClass = scrolled
    ? 'text-blue-600 font-semibold'
    : 'text-blue-600 font-semibold'; // Bleu toujours visible

  const logoClass = 'from-blue-600 to-blue-800'; // Gradient fixe pour le logo

  return (
    <>
      <motion.nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-gray-200/60 shadow-sm'
            : 'bg-white/80 backdrop-blur-sm' // Fond blanc léger même sans scroll
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 sm:h-20 items-center justify-between">
            <Link href="/" className="flex items-center">
              <AnimatePresence mode="wait">
                {!scrolled ? (
                  <motion.span
                    key="portfolio-text"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="text-xl sm:text-2xl md:text-2.5xl font-extrabold tracking-tight 
                              bg-gradient-to-r from-sky-400 via-blue-500 to-indigo-600 
                              bg-clip-text text-transparent"
                  >
                    PORTFOLIO
                  </motion.span>
                ) : (
                  <motion.div
                    key="profile-avatar"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.85 }}
                    transition={{ duration: 0.35, ease: 'easeOut' }}
                    className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden 
                              border-2 border-blue-400/50 shadow-md flex-shrink-0"
                  >
                    <Image
                      src="/asma_chaoui.jpg"  // ou une version optimisée pour petit format si besoin
                      alt="Asma CHAOUi"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 36px, 40px"
                      priority
                    />
                    {/* Petit glow subtil pour matcher le style hero */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-sky-400/20 to-indigo-600/20 pointer-events-none" />
                  </motion.div>
                )}
              </AnimatePresence>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8 lg:gap-10">
              <div className="flex gap-6 lg:gap-8">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`text-sm lg:text-base font-medium transition-colors ${textClass} ${
                      activeSection === link.section ? activeClass : ''
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <div className="flex items-center gap-4 lg:gap-6">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`${textClass} transition-colors`}
                    aria-label={s.label}
                  >
                    {s.icon}
                  </a>
                ))}

                <Link href="/contact">
                  <Button 
                    size="sm"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white shadow-md px-4 py-2 text-sm lg:px-6 lg:py-2 lg:text-base"
                  >
                    Me contacter
                  </Button>
                </Link>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden p-2 transition-colors text-gray-800`} // Toujours foncé
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden bg-white"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            <div className="flex flex-col h-full pt-20 pb-8 px-6">
              {/* Close button */}
              <button
                className="absolute top-5 right-5 p-2 text-gray-600 hover:text-blue-600 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
                aria-label="Fermer le menu"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navigation Links */}
              <nav className="flex-1 flex flex-col items-center justify-center space-y-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className={`w-full max-w-xs text-center py-4 px-6 rounded-xl text-xl font-medium transition-all ${
                      activeSection === link.section
                        ? 'bg-blue-50 text-blue-700 border-2 border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50 active:bg-gray-100 border-2 border-transparent'
                    }`}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>

              {/* Social Links and CTA */}
              <div className="space-y-8">
                <div className="flex justify-center gap-8">
                  {socialLinks.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target={s.href.startsWith('mailto:') ? undefined : '_blank'}
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors p-2"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </a>
                  ))}
                </div>

                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="block"
                >
                  <Button 
                    className="w-full max-w-xs mx-auto bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white py-6 text-lg font-medium shadow-lg rounded-xl"
                  >
                    Me contacter
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}