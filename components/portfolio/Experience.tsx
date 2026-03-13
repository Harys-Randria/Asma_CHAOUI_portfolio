'use client';

import { motion } from 'framer-motion';
import { AnimationWrapper } from './AnimationWrapper';

const experiences = [
  {
    title: 'Senior DevOps Engineer',
    company: 'Tech Innovations Inc.',
    period: 'January 2022 - Present',
    description: 'Leading DevOps initiatives and infrastructure transformation',
    responsibilities: [
      'Designed and implemented comprehensive CI/CD infrastructure using Jenkins and GitLab CI, reducing deployment time by 60%',
      'Architected Kubernetes clusters on AWS EKS with auto-scaling and disaster recovery capabilities',
      'Implemented IaC practices using Terraform, managing 500+ AWS resources across multiple environments',
      'Established comprehensive monitoring and logging using Datadog and ELK stack for real-time visibility',
    ],
    tech: ['AWS', 'Kubernetes', 'Terraform', 'Jenkins', 'Datadog', 'Docker'],
  },
  {
    title: 'DevOps Engineer',
    company: 'CloudFirst Solutions',
    period: 'July 2020 - December 2021',
    description: 'Managed AWS infrastructure and deployment automation',
    responsibilities: [
      'Migrated legacy applications to AWS, saving 40% on infrastructure costs',
      'Built automated CI/CD pipelines using GitHub Actions and Jenkins for 20+ microservices',
      'Implemented security best practices including VPC configuration, IAM policies, and encryption',
      'Reduced incident response time by 75% through improved monitoring and alerting strategies',
    ],
    tech: ['AWS', 'GitHub Actions', 'Jenkins', 'Docker', 'Terraform', 'Python'],
  },
  {
    title: 'Infrastructure Engineer',
    company: 'Digital Cloud Services',
    period: 'March 2019 - June 2020',
    description: 'Designed and maintained cloud infrastructure solutions',
    responsibilities: [
      'Designed and deployed scalable AWS infrastructure supporting 10+ mission-critical applications',
      'Implemented Infrastructure as Code using CloudFormation and Terraform',
      'Set up comprehensive backup and disaster recovery strategies',
      'Mentored junior engineers on AWS best practices and DevOps tools',
    ],
    tech: ['AWS', 'CloudFormation', 'Terraform', 'Ansible', 'Python', 'Bash'],
  },
  {
    title: 'Systems Administrator',
    company: 'Enterprise Tech Group',
    period: 'September 2017 - February 2019',
    description: 'Managed on-premise and cloud infrastructure',
    responsibilities: [
      'Managed and optimized Linux servers hosting mission-critical applications',
      'Initiated cloud migration project, moving workloads from on-premise to AWS',
      'Implemented automated backup and recovery systems',
      'Collaborated with development teams to troubleshoot infrastructure issues',
    ],
    tech: ['Linux', 'AWS', 'Ansible', 'Bash', 'MySQL', 'Networking'],
  },
  {
    title: 'Junior DevOps Engineer',
    company: 'StartupTech Labs',
    period: 'May 2017 - August 2017',
    description: 'Started DevOps journey with containerization and automation',
    responsibilities: [
      'Containerized applications using Docker and deployed to development environments',
      'Assisted in setting up monitoring infrastructure with Prometheus and Grafana',
      'Automated routine operational tasks using Bash and Python scripts',
      'Collaborated on initial CI/CD pipeline setup using Jenkins',
    ],
    tech: ['Docker', 'Jenkins', 'Bash', 'Prometheus', 'Grafana', 'Python'],
  },
  {
    title: 'IT Support Specialist',
    company: 'Global IT Solutions',
    period: 'January 2016 - April 2017',
    description: 'Provided technical support and IT infrastructure assistance',
    responsibilities: [
      'Provided technical support to users and resolved infrastructure issues',
      'Maintained Windows and Linux server infrastructure',
      'Assisted with network configuration and troubleshooting',
      'Documented procedures and created knowledge base articles',
    ],
    tech: ['Linux', 'Windows', 'Networking', 'Active Directory', 'Support Ticketing'],
  },
  {
    title: 'Network Administrator',
    company: 'Regional Telecom',
    period: 'August 2015 - December 2015',
    description: 'Managed network infrastructure and connectivity',
    responsibilities: [
      'Managed corporate network infrastructure and security',
      'Configured and maintained network devices (routers, switches)',
      'Implemented network monitoring and alerting systems',
      'Ensured network availability and performance optimization',
    ],
    tech: ['Networking', 'Cisco', 'Linux', 'Monitoring', 'Firewalls'],
  },
  {
    title: 'Junior System Administrator',
    company: 'IT Consultancy Partners',
    period: 'June 2015 - July 2015',
    description: 'Started IT career as junior system administrator',
    responsibilities: [
      'Assisted with system administration and server maintenance',
      'Helped deploy and configure enterprise software',
      'Provided technical support to end users',
      'Learned and documented best practices for infrastructure management',
    ],
    tech: ['Linux', 'Windows', 'System Administration', 'Support'],
  },
];

export function Experience() {
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
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Professional Experience</h2>
            <p className="text-xl text-slate-600">7+ years of progressive DevOps and infrastructure expertise</p>
          </div>
        </AnimationWrapper>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-600" />

          {/* Experience items */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {experiences.map((exp, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={`md:grid md:grid-cols-2 gap-8 ${idx % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 md:left-1/2 w-8 h-8 bg-white border-4 border-blue-600 rounded-full -translate-x-3.5 md:-translate-x-4 top-8"
                  whileInView={{ scale: 1.2 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                />

                {/* Content */}
                <div className={`ml-12 md:ml-0 ${idx % 2 === 1 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <motion.div
                    className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
                    whileHover={{ y: -4 }}
                  >
                    <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                    <p className="text-blue-600 font-semibold mt-1">{exp.company}</p>
                    <p className="text-sm text-slate-600 mt-1">{exp.period}</p>
                    <p className="text-slate-700 mt-3 mb-4">{exp.description}</p>

                    {/* Responsibilities */}
                    <ul className="space-y-2 mb-4">
                      {exp.responsibilities.map((resp, respIdx) => (
                        <li key={respIdx} className="flex gap-2 text-sm text-slate-600">
                          <span className="text-blue-600 font-bold">▸</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.tech.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
