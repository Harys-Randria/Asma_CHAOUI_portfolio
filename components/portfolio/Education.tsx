'use client';

import { motion } from 'framer-motion';
import { AnimationWrapper } from './AnimationWrapper';
import { Award, BookOpen, Globe } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Certified Solutions Architect - Professional',
    issuer: 'Amazon Web Services',
    date: 'March 2023',
    credentialId: 'SAA-PRO-2023-001',
  },
  {
    title: 'AWS Certified DevOps Engineer - Professional',
    issuer: 'Amazon Web Services',
    date: 'September 2022',
    credentialId: 'DOP-PRO-2022-001',
  },
  {
    title: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'June 2021',
    credentialId: 'SAA-ASS-2021-001',
  },
  {
    title: 'AWS Certified Developer - Associate',
    issuer: 'Amazon Web Services',
    date: 'January 2021',
    credentialId: 'DEV-ASS-2021-001',
  },
  {
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: 'August 2020',
    credentialId: 'CP-2020-001',
  },
];

const education = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University of Technology',
    year: '2015',
    details: 'Graduated with honors, GPA: 3.8/4.0',
  },
  {
    degree: 'Professional Diploma in Linux Administration',
    institution: 'International IT Academy',
    year: '2016',
    details: 'Specialized in server administration and networking',
  },
];

const languages = [
  { name: 'English', level: 'Fluent', proficiency: 95 },
  { name: 'French', level: 'Native', proficiency: 100 },
  { name: 'Spanish', level: 'Intermediate', proficiency: 65 },
  { name: 'Arabic', level: 'Native', proficiency: 100 },
];

export function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Education & Certifications</h2>
            <p className="text-xl text-slate-600">Professional development and continuous learning</p>
          </div>
        </AnimationWrapper>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Award className="w-6 h-6 text-blue-600" />
            AWS Certifications
          </h3>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {certifications.map((cert, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border-2 border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
                whileHover={{ y: -4 }}
              >
                <div className="flex gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center flex-shrink-0">
                    <Award className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{cert.title}</h4>
                    <p className="text-sm text-slate-600">{cert.issuer}</p>
                  </div>
                </div>
                <div className="bg-blue-50 rounded p-3 text-sm">
                  <p className="text-slate-700">
                    <span className="font-semibold">Issued:</span> {cert.date}
                  </p>
                  <p className="text-slate-600 text-xs mt-1">
                    ID: {cert.credentialId}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-blue-600" />
            Education
          </h3>
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border-l-4 border-blue-600 rounded-lg p-6 hover:shadow-lg transition-shadow"
                whileHover={{ x: 4 }}
              >
                <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                <p className="text-blue-600 font-semibold">{edu.institution}</p>
                <div className="flex justify-between items-center mt-2">
                  <p className="text-slate-600">{edu.details}</p>
                  <span className="text-sm font-semibold text-slate-500 bg-blue-50 px-3 py-1 rounded">
                    {edu.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl font-bold text-slate-900 mb-8 flex items-center gap-2">
            <Globe className="w-6 h-6 text-blue-600" />
            Languages
          </h3>
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {languages.map((lang, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-white border border-blue-100 rounded-lg p-6"
              >
                <div className="flex justify-between items-center mb-3">
                  <h4 className="font-bold text-slate-900">{lang.name}</h4>
                  <span className="text-sm font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded">
                    {lang.level}
                  </span>
                </div>
                {/* Proficiency bar */}
                <div className="w-full bg-blue-100 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-sky-400 to-blue-600 h-2 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${lang.proficiency}%` }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    viewport={{ once: true }}
                  />
                </div>
                <p className="text-xs text-slate-500 mt-2">{lang.proficiency}% Proficiency</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
