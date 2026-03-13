'use client';

import { motion } from 'framer-motion';
import { AnimationWrapper } from './AnimationWrapper';
import { Cloud, Zap, Lock } from 'lucide-react';

const skillCategories = [
  {
    title: 'Cloud AWS & IaC',
    description: 'Deep expertise in AWS services, CloudFormation, Terraform, and cloud architecture design.',
    icon: Cloud,
    skills: ['AWS EC2', 'S3', 'RDS', 'Lambda', 'CloudFormation', 'Terraform', 'VPC', 'IAM'],
  },
  {
    title: 'Automation & CI/CD',
    description: 'Building robust CI/CD pipelines and automation workflows for continuous delivery.',
    icon: Zap,
    skills: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Ansible', 'Python', 'Bash'],
  },
  {
    title: 'Security, FinOps & Monitoring',
    description: 'Implementing security best practices, cost optimization, and comprehensive monitoring solutions.',
    icon: Lock,
    skills: ['AWS Security', 'CloudWatch', 'Datadog', 'ELK Stack', 'Cost Optimization', 'Compliance', 'SIEM', 'WAF'],
  },
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Competencies</h2>
            <p className="text-xl text-slate-600">Areas where I excel and deliver results</p>
          </div>
        </AnimationWrapper>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="group p-8 rounded-xl border border-blue-100 bg-gradient-to-br from-blue-50 to-white hover:shadow-lg hover:border-blue-300 transition-all duration-300"
                whileHover={{ y: -8 }}
              >
                {/* Icon */}
                <div className="mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-sky-400 to-blue-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Title and Description */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">{category.title}</h3>
                <p className="text-slate-600 mb-6 text-sm leading-relaxed">{category.description}</p>

                {/* Skills Tags */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <motion.span
                      key={skillIdx}
                      className="px-3 py-1 text-xs font-medium bg-white border border-blue-200 text-blue-600 rounded-full"
                      whileHover={{ scale: 1.05, backgroundColor: '#f0f7ff' }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
