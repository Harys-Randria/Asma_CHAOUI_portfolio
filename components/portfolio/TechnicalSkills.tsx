'use client';

import { motion } from 'framer-motion';
import { AnimationWrapper } from './AnimationWrapper';

const technicalSkills = [
  // Cloud Platforms
  { name: 'AWS', category: 'cloud', level: 'expert' },
  { name: 'Azure', category: 'cloud', level: 'intermediate' },
  { name: 'GCP', category: 'cloud', level: 'intermediate' },

  // AWS Services
  { name: 'EC2', category: 'aws', level: 'expert' },
  { name: 'S3', category: 'aws', level: 'expert' },
  { name: 'RDS', category: 'aws', level: 'expert' },
  { name: 'Lambda', category: 'aws', level: 'expert' },
  { name: 'CloudFormation', category: 'aws', level: 'expert' },
  { name: 'VPC', category: 'aws', level: 'expert' },
  { name: 'IAM', category: 'aws', level: 'expert' },
  { name: 'CloudWatch', category: 'aws', level: 'advanced' },
  { name: 'ECS', category: 'aws', level: 'advanced' },
  { name: 'EKS', category: 'aws', level: 'advanced' },

  // Infrastructure as Code
  { name: 'Terraform', category: 'iac', level: 'expert' },
  { name: 'CloudFormation', category: 'iac', level: 'expert' },
  { name: 'Ansible', category: 'iac', level: 'advanced' },
  { name: 'Helm', category: 'iac', level: 'advanced' },

  // CI/CD
  { name: 'Jenkins', category: 'cicd', level: 'expert' },
  { name: 'GitLab CI', category: 'cicd', level: 'expert' },
  { name: 'GitHub Actions', category: 'cicd', level: 'expert' },
  { name: 'GitOps', category: 'cicd', level: 'advanced' },
  { name: 'ArgoCD', category: 'cicd', level: 'advanced' },

  // Containerization
  { name: 'Docker', category: 'containers', level: 'expert' },
  { name: 'Kubernetes', category: 'containers', level: 'expert' },
  { name: 'Docker Compose', category: 'containers', level: 'expert' },

  // Monitoring & Logging
  { name: 'Datadog', category: 'monitoring', level: 'expert' },
  { name: 'CloudWatch', category: 'monitoring', level: 'expert' },
  { name: 'Prometheus', category: 'monitoring', level: 'advanced' },
  { name: 'Grafana', category: 'monitoring', level: 'advanced' },
  { name: 'ELK Stack', category: 'monitoring', level: 'advanced' },
  { name: 'Splunk', category: 'monitoring', level: 'intermediate' },

  // Programming Languages
  { name: 'Python', category: 'languages', level: 'expert' },
  { name: 'Bash', category: 'languages', level: 'expert' },
  { name: 'JavaScript', category: 'languages', level: 'advanced' },
  { name: 'Go', category: 'languages', level: 'intermediate' },
  { name: 'YAML', category: 'languages', level: 'expert' },

  // Version Control
  { name: 'Git', category: 'vcs', level: 'expert' },
  { name: 'GitHub', category: 'vcs', level: 'expert' },
  { name: 'GitLab', category: 'vcs', level: 'expert' },
  { name: 'Bitbucket', category: 'vcs', level: 'advanced' },

  // Security
  { name: 'AWS Security Hub', category: 'security', level: 'advanced' },
  { name: 'Vault', category: 'security', level: 'advanced' },
  { name: 'SSL/TLS', category: 'security', level: 'expert' },
  { name: 'IAM', category: 'security', level: 'expert' },

  // Others
  { name: 'Linux', category: 'other', level: 'expert' },
  { name: 'Networking', category: 'other', level: 'advanced' },
  { name: 'MySQL', category: 'other', level: 'advanced' },
  { name: 'PostgreSQL', category: 'other', level: 'advanced' },
];

const categoryColors = {
  cloud: 'from-sky-100 to-sky-50 text-sky-700 border-sky-200',
  aws: 'from-orange-100 to-orange-50 text-orange-700 border-orange-200',
  iac: 'from-purple-100 to-purple-50 text-purple-700 border-purple-200',
  cicd: 'from-pink-100 to-pink-50 text-pink-700 border-pink-200',
  containers: 'from-blue-100 to-blue-50 text-blue-700 border-blue-200',
  monitoring: 'from-green-100 to-green-50 text-green-700 border-green-200',
  languages: 'from-yellow-100 to-yellow-50 text-yellow-700 border-yellow-200',
  vcs: 'from-red-100 to-red-50 text-red-700 border-red-200',
  security: 'from-indigo-100 to-indigo-50 text-indigo-700 border-indigo-200',
  other: 'from-slate-100 to-slate-50 text-slate-700 border-slate-200',
};

export function TechnicalSkills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section id="competences" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Compétences techniques</h2>
            <p className="text-xl text-slate-600">
              Boîte à outils complète couvrant les plateformes cloud, les outils DevOps et les langages de programmation
            </p>
          </div>
        </AnimationWrapper>

        <motion.div
          className="flex flex-wrap gap-3 justify-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {technicalSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ scale: 1.1, y: -4 }}
              className={`px-4 py-2 rounded-full font-medium text-sm border bg-gradient-to-br transition-all duration-200 cursor-pointer ${
                categoryColors[skill.category as keyof typeof categoryColors] || categoryColors.other
              }`}
            >
              {skill.name}
              <span className="ml-1 opacity-60">
                {skill.level === 'expert' && '●●●'}
                {skill.level === 'advanced' && '●●'}
                {skill.level === 'intermediate' && '●'}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Legend */}
        <div className="mt-12 flex justify-center gap-8 text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <span className="text-blue-600">●●●</span>
            <span>Expert</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">●●</span>
            <span>Advanced</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-blue-600">●</span>
            <span>Intermediate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
