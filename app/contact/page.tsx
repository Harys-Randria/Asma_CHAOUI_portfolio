'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Navigation } from '@/components/portfolio/Navigation';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { ArrowLeft, Phone, Mail, Linkedin } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  type: string;
  message: string;
};

type FormErrors = {
  [K in keyof FormData]?: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    type: 'freelance',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Le nom est requis';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'L\'email est requis';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email invalide';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Le sujet est requis';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Le message est requis';
    } else if (formData.message.length < 50) {
      newErrors.message = 'Le message doit contenir au moins 50 caractères';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        type: 'freelance',
        message: '',
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="overflow-hidden">
      <Navigation />
      
      {/* Contact Header with Back Button */}
      <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="mb-8"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span>Retour au portfolio</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4">Me contacter</h1>
            <p className="text-xl text-slate-600">Disponible pour des missions freelance</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12 items-start">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="md:col-span-2"
            >
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 border-2 border-green-200 rounded-lg p-8 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-green-200 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-green-900 mb-2">Message envoyé !</h3>
                  <p className="text-green-800 mb-4">
                    Votre message a bien été envoyé. Asma vous répondra dans les plus brefs délais.
                  </p>
                  <p className="text-sm text-green-700">Temps de réponse habituel : sous 24h</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Prénom et Nom *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Votre nom"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          errors.name
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : 'border-blue-200 bg-white focus:border-blue-500'
                        } outline-none`}
                      />
                      {errors.name && (
                        <p className="text-red-600 text-sm mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        Email professionnel *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                          errors.email
                            ? 'border-red-300 bg-red-50 focus:border-red-500'
                            : 'border-blue-200 bg-white focus:border-blue-500'
                        } outline-none`}
                      />
                      {errors.email && (
                        <p className="text-red-600 text-sm mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Téléphone (optionnel)
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="0650989526"
                      className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white focus:border-blue-500 outline-none transition-colors"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Sujet *
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Le sujet de votre demande"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        errors.subject
                          ? 'border-red-300 bg-red-50 focus:border-red-500'
                          : 'border-blue-200 bg-white focus:border-blue-500'
                      } outline-none`}
                    />
                    {errors.subject && (
                      <p className="text-red-600 text-sm mt-1">{errors.subject}</p>
                    )}
                  </div>

                  {/* Mission Type */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Type de mission
                    </label>
                    <select
                      name="type"
                      value={formData.type}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-blue-200 bg-white focus:border-blue-500 outline-none transition-colors"
                    >
                      <option value="freelance">Mission freelance</option>
                      <option value="consultation">Consultation</option>
                      <option value="other">Autre</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Décrivez votre demande en détail (minimum 50 caractères)"
                      rows={6}
                      className={`w-full px-4 py-3 rounded-lg border transition-colors resize-none ${
                        errors.message
                          ? 'border-red-300 bg-red-50 focus:border-red-500'
                          : 'border-blue-200 bg-white focus:border-blue-500'
                      } outline-none`}
                    />
                    <div className="flex justify-between items-center mt-2">
                      {errors.message && (
                        <p className="text-red-600 text-sm">{errors.message}</p>
                      )}
                      <p className="text-sm text-slate-600 ml-auto">{formData.message.length}/50</p>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-sky-400 to-blue-600 hover:from-sky-500 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all disabled:opacity-70"
                  >
                    {isLoading ? 'Envoi en cours...' : 'Envoyer le message'}
                  </Button>
                </form>
              )}
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-8"
            >
              {/* Email */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Mail className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <a
                      href="mailto:freelance.chaoui@gmail.com"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      freelance.chaoui@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <div className="flex items-start gap-3 mb-3">
                  <Phone className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold text-slate-900">Téléphone</h3>
                    <a
                      href="tel:0650989526"
                      className="text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      0650989526
                    </a>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Réseaux sociaux</h3>
                <div className="space-y-3">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </a>
                  <a
                    href="https://malt.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Image
                      src="/images/malt.png"
                      alt="Malt"
                      width={20}
                      height={20}
                    />
                    Malt
                  </a>
                  <a
                    href="https://collective.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Image
                      src="/images/collective.png"
                      alt="Collective"
                      width={20}
                      height={20}
                    />
                    Collective
                  </a>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-gradient-to-r from-sky-100 to-blue-100 border border-blue-300 rounded-lg p-6 text-center">
                <p className="text-sm text-slate-700">
                  <span className="font-semibold">Temps de réponse habituel :</span>
                  <br />
                  Sous 24h
                </p>
              </div>
            </motion.div>
          </div>
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
