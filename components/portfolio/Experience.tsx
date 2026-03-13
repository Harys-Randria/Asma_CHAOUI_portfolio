'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationWrapper } from './AnimationWrapper';
import { ChevronDown, ChevronUp } from 'lucide-react';

const RESPONSIBILITIES_LIMIT = 3;
const TECH_LIMIT = 5;

const experiences = [
  {
    title: 'Ingénieur DevOps AWS',
    company: 'Legalplace',
    period: '09/2025 - Aujourd\'hui',
    description: 'Freelance',
    responsibilities: [
      'Déploiement d\'une nouvelle Infrastructure pour une nouvelle application/service Business (RDS PostgreSQL, ALB, Autoscaling, Bastion Host, NAT GTW, Internet GTW, VPC Peering)',
      'Déploiement de Metabase (BI Tool - OpenSource) via Elastic BeansTalk',
      'Configuration des VPC Peering entre les différents comptes AWS de l\'entreprise',
      'Configuration des droits IAM Cross-Account pour autoriser l\'accès à la RDS et aux Buckets S3',
      'Déploiement d\'un RDS Proxy pour sécuriser l\'accès, améliorer les performances et gérer les sessions API et Lambda de la RDS',
      'Optimisation du pipeline Gitlab ainsi que les images dockers (pipeline long)',
      'Développement des modules terraform et automatisation avec Lambda/Python et bash',
      'Audit de sécurité ISO AWS Foundations Benchmark : Sécurisation des bases de données, Droits IAM',
    ],
    tech: ['Terraform (IaC)', 'Python', 'Ansible', 'Cloudwatch', 'GitLab CI', 'OIDC', 'ECS Fargate', 'ECS Discover', 'Docker', 'ECR', 'ACM', 'S3', 'IAM', 'Route53', 'VPC/Networking', 'ALB', 'RDS', 'EC2', 'Cost Explorer', 'Lambda/Python', 'EC2 Bastion', 'Secret Manager', 'Parameter store'],
  },
  {
    title: 'Ingénieur DevOps AWS',
    company: 'Kelkun',
    period: '07/2024 - 08/2025',
    description: 'Freelance',
    responsibilities: [
      'Projet de Migration de l\'infrastructure et de l\'application du OnPrem vers AWS',
      'Proposition d\'une architecture AWS',
      'Développement des modules terraform (ECS Fargate, ALB, Lambda, AWS SES, Elasticsearch)',
      'Déploiement des différents environnements de la DEV jusqu\'à la PRD via Terraform (Env multicomptes)',
      'Modification du pipeline GitHub Action du client afin de mettre à jour l\'application via des conteneurs Docker',
      'Intégration des nouveaux services à l\'infrastructure et l\'application tel que l\'envoi des emails via AWS SES',
      'Migration DATA de la base des données mariaDB (Onprem) vers AWS RDS Aurora Serverless v2',
      'Développement des Lambda en python pour automatiser le transfert des fichiers entre différents comptes AWS (différentes applications) avec S3 Event notification, lambda en Python, SNS et Cloudwatch',
      'Intégrer les services AWS au dashboard de Grafana',
      'Transfert de compétence et documentation technique',
    ],
    tech: ['Terraform (IaC)', 'Python', 'Ansible', 'Grafana', 'Cloudwatch', 'GithubAction', 'OIDC', 'ECS Fargate', 'ECS Discover', 'Docker', 'ECR', 'SES', 'SNS', 'S3', 'IAM', 'Route53', 'VPC/Networking', 'ALB', 'RDS', 'Elasticsearch', 'Lambda/Python', 'EC2 Bastion', 'DMS', 'Secret Manager', 'Parameter store'],
  },
  {
    title: 'Ingénieur DevOps AWS',
    company: 'CMA CGM',
    period: '01/2023 - 06/2024',
    description: 'Teamwork (ESN)',
    responsibilities: [
      'Renforcer l\'équipe des Builder et des architectes : Build',
      'Développer les modules Terraform',
      'Déployer les infrastructures sur AWS via Terraform (centaine de compte AWS)',
      'Automatiser des tâches de déploiement des applications en collaboration avec les developpeurs',
      'Containeuriser les applications',
      'Migration d\'une application EKS vers ECS Fargate',
      'Modification de la Landing Zone via terragrunt',
      'Vérification des Best Practices des code avec Checkov (Configuration des pre-commit)',
      'Les principaux services AWS utilisés sont Aurora PostgreSQL, RDS Proxy, Redis, ALB, Alarms/Dashboards Cloudwatch, Secret Manager et S3',
    ],
    tech: ['Terraform', 'Terragrunt', 'ECS Fargate', 'ECR', 'Docker', 'EKS', 'RDS Aurora PostgreSQL', 'RDS Proxy', 'Redis', 'ALB', 'Alarms/Dashboards Cloudwatch', 'Secret Manager', 'S3', 'Checkov'],
  },
  {
    title: 'Ingénieur DevOps AWS',
    company: 'Biomerieux',
    period: '05/2022 - 12/2022',
    description: 'Teamwork (ESN)',
    responsibilities: [
      'Projet de 6 mois : Architecture & Build',
      'Etude du besoin : Automatisation d\'un processus de calcul utilisé par les datascientists',
      'Proposition d\'une architecture AWS',
      'Mise en place d\'un workflow automatisé avec AWS Step Function, lambda, S3, ECS Fargate/docker/ECR et AWS Batch',
      'Build de l\'infrastructure (trois environnements Dev, Pre et Prod)',
      'Configuration et déploiement des SCP et des Tag Policy (AWS Organization) afin de respecter les régles de sécuritès AWS et les recommandations FinOps',
      'Automatisation du déploiement des images Docker ainsi les conteneurs via un pipeline CI/CD Github Action',
      'Automatisation avec AWS Lambda en Python',
    ],
    tech: ['ECS Fargate', 'ECR', 'Docker', 'Lambda', 'python', 'AWS Bash', 'Terraform', 'Terragrunt', 'RDS', 'Redis/elasticache', 'SSM', 'EKS', 'ALB', 'Cloudwatch', 'CloudTrail', 'S3', 'SES', 'SNS', 'SQS', 'GithubAction', 'pipeline CI/CD', 'AWS Organization', 'SCP', 'AWS Config', 'Tag Policy', 'Step Function', 'AWS Batch', 'Redis'],
  },
  {
    title: 'Ingénieur DevOps AWS',
    company: 'Caisse de Dépôt et Placement du Québec - Canada',
    period: '02/2020 - 04/2022',
    description: 'Onepoint (ESN)',
    responsibilities: [
      '- Projets EC2 - Build :',
      'Revoir la procédure de déploiements des EC2, les Best Practice AWS et les règles de sécurité',
      'Automatiser des procédures de FinOps, Best practice AWS et de sécurité via Cloudformation',
      'Infra As Code avec CloudFormation',
      'Automatisation du déploiement des services ML avec Service Catalog tel que Jupyter Notebook, EC2 Bastion, EMR, MWAA',
      'Automatisation de l\'authentification via Active Directory en utilisant EC2 Userdata',
      'Scripting bash et python',
      'Automatiser la gestion des droits IAM des ressources ainsi des Datascientistes via Cloudformation',
      '- Projets SNS/SQS - Build :',
      'Infra As Code avec CloudFormation et Service Catalog',
      'Mise en place des restrictions d\'utilisation des services SQS et SNS',
      'Mise en place d\'une solution qui permet d\'envoyer les notifications SNS à une Queue SQS dans le même compte AWS (connexion intra-compte AWS)',
      'Mise en place d\'une solution qui permet d\'envoyer les notifications SNS à une Queue SQS créé dans un autre compte AWS (connexion inter-compte AWS)',
      '- Projet FinOps & Monitoring - Build :',
      'Automatiser l\'arrêt/démarrage des EC2 avec une lambda en python',
      'Automatiser les règles de nommage et tagging des ressources AWS',
      '- Automatisation / Ansible :',
      'Projet de décommissionnement de Puppet et installation d\'ansible',
      'Migration de la plateforme Onprem vers Ansible',
      'Développement des playbook ansible ainsi des roles Ansible',
      'Scripting python',
    ],
    tech: ['AWS', 'Cloudformation', 'IAM', 'EC2', 'EC2 userdata', 'Bastion', 'Service Catalog', 'Sagemaker Notebook', 'SNS', 'SQS', 'Lambda/Python', 'SCP', 'Tag Policy', 'AWS Organization', 'Ansible', 'Python', 'Bash', 'AD', 'Playbook/Role Ansible'],
  },
  {
    title: 'Ingénieur DevOps AWS',
    company: 'Air Liquide',
    period: '10/2018 - 01/2020',
    description: 'Onepoint (ESN)',
    responsibilities: [
      'Renforcer l\'équipe Infrastructure - Build & Run',
      'Déploiement des nouveaux serveurs / ESX',
      'Configuration de la réplication des serveurs critiques (Réplication VmWare)',
      'Gestion du parc : Patching des serveurs gestion des comptes Active Directory et des GPO',
      'Préparation des environnements de Prod et de Test sur AWS et Datacenter',
      'Scripting en Python & Powershell',
      'Gestion des incidents',
    ],
    tech: ['AWS', 'VMware', 'ESX', 'Active Directory', 'GPO', 'Python', 'Powershell'],
  },
  {
    title: 'Ingénieur Infrastructure',
    company: 'Owliance',
    period: '09/2017 - 09/2018',
    description: 'Owliance. Equipe Infra.',
    responsibilities: [
      'Déploiement des nouveaux serveurs Redhat',
      'Configuration du service web HTTPD',
      'Configuration des certificats SSL',
      'Gestion du DNS/Bind et firewall',
      'Automatiser les tâches systèmes d\'Habilitation : sudoers, AD, clés SSH',
      'Monitoring des serveurs Web et DBA via EyesOfNetwork',
      'Migration des VMs avec HA ou Sans HA',
      'Déploiement des nouveaux environnements des projets : Pre et Prod',
      'Gestion et Configuration des machines virtuelles via Vmware',
      'Mise en place de la solution de backup avec BackupExec et Veeam Backup',
      'Configuration du SAN pour les sauvegardes',
      'Installation des agents BackupExec sur les serveurs Windows et Linux',
    ],
    tech: ['VMware 5', 'BackupExec', 'VeeamBackup', 'Linux', 'Bind', 'Postfix', 'EyesOfNetwork', 'redhat', 'HTTPD', 'SSSD', 'SSL'],
  },
  {
    title: 'Consultante Infrastructure et Cloud',
    company: 'RFC',
    period: '09/2015 - 08/2017',
    description: 'RFC. Équipe Infrastructure et Cloud.',
    responsibilities: [
      'Gestion des ressources cloud Onapp',
      'Déploiement des nouvelles versions des VMs et des Templates applicatif',
      'Gestion des incidents des clients',
      'Mise à jour des serveurs (Linux), politique de sécurité et des backups',
      'Installation et configuration des outils de supervision tel que Nagios',
      'Veiller au bon déroulement des mises en production des serveurs dédié et mutualisé ainsi les VMs/VPS',
      'Déploiement des environnements PAAS SAAS et IAAS',
      'Installation et configuration des serveurs applicatifs Configuration des SAN comme solution de stockage des sauvegardes',
      'Création des machines Virtuelles en utilisant HyperV',
      'Configuration des règles d\'accès des firewalls Fortigate',
      'Configuration des AD primaire et secondaire ainsi les rôles DNS DHCP',
    ],
    tech: ['Plesk', 'OnApp', 'Nagios', 'XEN', 'Virtualisation', 'VPS', 'Serveur dédiè', 'Mutualisé', 'Hébergement', 'Domaine', 'TSE', 'Spam', 'Blacklistage', 'Provisionning', 'troubleshooting et ESXI/VSphere', 'IIS', 'SQL Server', 'Serveur de fichier', 'WSUS', 'BackupExec', 'NTBackup', 'DPM', 'Externalisation sur Bande', 'Windows Server', 'RedHat', 'Office 365', 'Exchange', 'HyperV'],
  },
];

// Détecte si une ligne est un header de sous-projet (commence par "- " et finit par ":")
function isSubHeader(str: string) {
  return str.startsWith('- ') && str.endsWith(':');
}

function ExperienceCard({ exp, idx }: { exp: typeof experiences[0]; idx: number }) {
  const [showAllResp, setShowAllResp] = useState(false);
  const [showAllTech, setShowAllTech] = useState(false);

  const visibleResp = showAllResp
    ? exp.responsibilities
    : exp.responsibilities.slice(0, RESPONSIBILITIES_LIMIT);

  const visibleTech = showAllTech
    ? exp.tech
    : exp.tech.slice(0, TECH_LIMIT);

  const hasMoreResp = exp.responsibilities.length > RESPONSIBILITIES_LIMIT;
  const hasMoreTech = exp.tech.length > TECH_LIMIT;

  return (
    <motion.div
      className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow"
      whileHover={{ y: -4 }}
    >
      {/* Header */}
      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
      <p className="text-blue-600 font-semibold mt-1">{exp.company}</p>
      <div className="flex items-center gap-3 mt-1">
        <span className="text-sm text-slate-500 font-mono">{exp.period}</span>
        <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full border border-blue-200">
          {exp.description}
        </span>
      </div>

      {/* Responsibilities */}
      <ul className="space-y-2 mt-4 mb-3">
        <AnimatePresence initial={false}>
          {visibleResp.map((resp, respIdx) =>
            isSubHeader(resp) ? (
              <motion.li
                key={respIdx}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="text-sm font-semibold text-blue-700 mt-3 pt-1 border-t border-blue-100"
              >
                {resp}
              </motion.li>
            ) : (
              <motion.li
                key={respIdx}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="flex gap-2 text-sm text-slate-600"
              >
                <span className="text-blue-400 mt-0.5">▸</span>
                <span>{resp}</span>
              </motion.li>
            )
          )}
        </AnimatePresence>
      </ul>

      {hasMoreResp && (
        <button
          onClick={() => setShowAllResp(!showAllResp)}
          className="flex items-center gap-1 text-xs text-blue-600 hover:text-blue-800 font-medium mb-4 transition-colors"
        >
          {showAllResp ? (
            <><ChevronUp className="w-3 h-3" /> Voir moins</>
          ) : (
            <><ChevronDown className="w-3 h-3" /> Voir {exp.responsibilities.length - RESPONSIBILITIES_LIMIT} de plus</>
          )}
        </button>
      )}

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        <AnimatePresence initial={false}>
          {visibleTech.map((tech, techIdx) => (
            <motion.span
              key={techIdx}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-700 rounded-full border border-blue-200"
            >
              {tech}
            </motion.span>
          ))}
        </AnimatePresence>

        {hasMoreTech && (
          <button
            onClick={() => setShowAllTech(!showAllTech)}
            className="px-3 py-1 text-xs font-medium bg-slate-100 text-slate-600 hover:bg-blue-100 hover:text-blue-700 rounded-full border border-slate-200 hover:border-blue-200 transition-colors flex items-center gap-1"
          >
            {showAllTech ? (
              <><ChevronUp className="w-3 h-3" /> Moins</>
            ) : (
              <>+{exp.tech.length - TECH_LIMIT} technologies</>
            )}
          </button>
        )}
      </div>
    </motion.div>
  );
}

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
    <section id="experiences" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper delay={0.1}>
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Expériences professionnelles</h2>
            <p className="text-xl text-slate-600">10 ans d'expertise progressive en DevOps et infrastructure cloud</p>
          </div>
        </AnimationWrapper>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-sky-400 to-blue-600" />

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

                <div className={`ml-12 md:ml-0 ${idx % 2 === 1 ? 'md:col-start-1' : 'md:col-start-2'}`}>
                  <ExperienceCard exp={exp} idx={idx} />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}