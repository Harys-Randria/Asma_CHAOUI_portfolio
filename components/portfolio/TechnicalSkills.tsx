'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimationWrapper } from './AnimationWrapper';
import { ChevronDown, ChevronUp } from 'lucide-react';

const SKILLS_LIMIT = 4;

const skillCategories = [
  {
    category: 'Infrastructure as Code (IaC)',
    color: 'purple',
    group: 'DevOps',
    skills: [
      { name: 'Terraform', level: 'avancé' },
      { name: 'CloudFormation', level: null },
      { name: 'Terragrunt', level: null },
      { name: 'Checkov (pre-commit)', level: null },
    ],
  },
  {
    category: 'Cloud AWS — Compute',
    color: 'orange',
    group: 'AWS',
    skills: [
      { name: 'EC2', level: null },
      { name: 'ECS Fargate', level: null },
      { name: 'ECS Service Discovery', level: null },
      { name: 'AWS Batch', level: null },
      { name: 'Lambda', level: null },
      { name: 'Elastic Beanstalk', level: null },
      { name: 'Auto Scaling', level: null },
    ],
  },
  {
    category: 'Cloud AWS — Networking',
    color: 'orange',
    group: 'AWS',
    skills: [
      { name: 'VPC', level: null },
      { name: 'VPC Peering', level: null },
      { name: 'ALB (Application Load Balancer)', level: null },
      { name: 'NAT Gateway', level: null },
      { name: 'Internet Gateway', level: null },
      { name: 'Route53', level: null },
      { name: 'Elastic IP', level: null },
    ],
  },
  {
    category: 'Cloud AWS — Database',
    color: 'orange',
    group: 'AWS',
    skills: [
      { name: 'RDS Aurora PostgreSQL', level: null },
      { name: 'RDS Aurora Serverless v2', level: null },
      { name: 'RDS Proxy', level: null },
      { name: 'DMS (Database Migration Service)', level: null },
      { name: 'MariaDB migration', level: null },
    ],
  },
  {
    category: 'Cloud AWS — Storage',
    color: 'orange',
    group: 'AWS',
    skills: [
      { name: 'S3', level: null },
      { name: 'S3 Event Notification', level: null },
      { name: 'EBS', level: null },
      { name: 'EFS', level: null },
    ],
  },
  {
    category: 'Cloud AWS — Security & IAM',
    color: 'indigo',
    group: 'AWS',
    skills: [
      { name: 'IAM', level: null },
      { name: 'IAM Cross-Account', level: null },
      { name: 'Secret Manager', level: null },
      { name: 'Parameter Store', level: null },
      { name: 'ACM (Certificate Manager)', level: null },
      { name: 'Security Groups', level: null },
      { name: 'SCP (Service Control Policies)', level: null },
    ],
  },
  {
    category: 'Cloud AWS — Monitoring & Logging',
    color: 'green',
    group: 'AWS',
    skills: [
      { name: 'CloudWatch', level: null },
      { name: 'CloudWatch Alarms', level: null },
      { name: 'CloudWatch Dashboards', level: null },
      { name: 'CloudTrail', level: null },
      { name: 'Cost Explorer', level: null },
    ],
  },
  {
    category: 'Cloud AWS — Orchestration',
    color: 'orange',
    group: 'AWS',
    skills: [
      { name: 'AWS Step Function', level: null },
      { name: 'AWS Organization', level: null },
      { name: 'Service Catalog', level: null },
      { name: 'SCP', level: null },
      { name: 'Tag Policy', level: null },
      { name: 'AWS Config', level: null },
    ],
  },
  {
    category: 'Cloud AWS — Messaging',
    color: 'orange',
    group: 'AWS',
    skills: [
      { name: 'SNS', level: null },
      { name: 'SQS', level: null },
      { name: 'SES (Simple Email Service)', level: null },
    ],
  },
  {
    category: 'Cloud AWS — Data & Analytics',
    color: 'orange',
    group: 'AWS',
    skills: [
      { name: 'Elasticsearch', level: null },
      { name: 'EMR', level: null },
      { name: 'MWAA', level: null },
      { name: 'Sagemaker Notebook', level: null },
    ],
  },
  {
    category: 'Cloud AWS — Autres services',
    color: 'orange',
    group: 'AWS',
    skills: [
      { name: 'EC2 Userdata', level: null },
      { name: 'EC2 Bastion Host', level: null },
      { name: 'Elasticache Redis', level: null },
    ],
  },
  {
    category: 'Containerisation',
    color: 'blue',
    group: 'DevOps',
    skills: [
      { name: 'Docker', level: null },
      { name: 'ECR (Elastic Container Registry)', level: null },
      { name: 'ECS Fargate', level: null },
      { name: 'Kubernetes', level: null },
      { name: 'EKS', level: null },
    ],
  },
  {
    category: 'Automatisation & Configuration',
    color: 'purple',
    group: 'DevOps',
    skills: [
      { name: 'Ansible', level: 'avancé' },
      { name: 'Playbook Ansible', level: null },
      { name: 'Role Ansible', level: null },
      { name: 'Puppet (décommissionnement)', level: null },
    ],
  },
  {
    category: 'Scripting',
    color: 'yellow',
    group: 'DevOps',
    skills: [
      { name: 'Python', level: 'intermédiaire' },
      { name: 'Bash', level: 'intermédiaire' },
      { name: 'PowerShell', level: null },
    ],
  },
  {
    category: 'CI/CD',
    color: 'pink',
    group: 'DevOps',
    skills: [
      { name: 'GitLab CI', level: 'intermédiaire' },
      { name: 'GitLab Runner', level: null },
      { name: 'GitHub Actions', level: 'intermédiaire' },
      { name: 'OIDC', level: null },
      { name: 'Jenkins', level: null },
      { name: 'Pipeline CI/CD', level: null },
    ],
  },
  {
    category: 'Version Control',
    color: 'red',
    group: 'DevOps',
    skills: [
      { name: 'Git', level: null },
      { name: 'GitHub', level: null },
      { name: 'GitLab', level: null },
    ],
  },
  {
    category: 'Monitoring & Logging',
    color: 'green',
    group: 'DevOps',
    skills: [
      { name: 'CloudWatch', level: null },
      { name: 'Grafana', level: null },
      { name: 'Nagios', level: null },
      { name: 'EyesOfNetwork', level: null },
    ],
  },
  {
    category: 'Virtualisation',
    color: 'slate',
    group: 'Infrastructure',
    skills: [
      { name: 'VMware vSphere 5', level: null },
      { name: 'ESXi', level: null },
      { name: 'HyperV', level: null },
      { name: 'VirtualBox', level: null },
      { name: 'XEN', level: null },
    ],
  },
  {
    category: 'Backup',
    color: 'slate',
    group: 'Infrastructure',
    skills: [
      { name: 'Veeam Backup', level: null },
      { name: 'BackupExec', level: null },
      { name: 'NTBackup', level: null },
      { name: 'DPM', level: null },
    ],
  },
  {
    category: "Systèmes d'exploitation",
    color: 'slate',
    group: 'Infrastructure',
    skills: [
      { name: 'Linux RedHat', level: null },
      { name: 'Windows Server', level: null },
      { name: 'Unix', level: null },
    ],
  },
  {
    category: 'Réseau',
    color: 'sky',
    group: 'Infrastructure',
    skills: [
      { name: 'DNS/Bind', level: null },
      { name: 'Firewall Fortigate', level: null },
      { name: 'Active Directory', level: null },
      { name: 'GPO', level: null },
      { name: 'DHCP', level: null },
      { name: 'SSL/TLS', level: null },
      { name: 'VPN', level: null },
    ],
  },
  {
    category: 'Services Web',
    color: 'slate',
    group: 'Infrastructure',
    skills: [
      { name: 'HTTPD', level: null },
      { name: 'IIS', level: null },
      { name: 'Postfix', level: null },
    ],
  },
  {
    category: 'Base de données',
    color: 'teal',
    group: 'Infrastructure',
    skills: [
      { name: 'PostgreSQL', level: null },
      { name: 'MariaDB', level: null },
      { name: 'SQL Server', level: null },
      { name: 'Redis', level: null },
    ],
  },
  {
    category: 'Méthodologies',
    color: 'blue',
    group: 'Transversal',
    skills: [
      { name: 'DevOps', level: null },
      { name: 'Agile', level: null },
      { name: 'FinOps', level: null },
      { name: 'Best Practices AWS', level: null },
      { name: 'Security Best Practices', level: null },
    ],
  },
  {
    category: 'Sécurité',
    color: 'indigo',
    group: 'Transversal',
    skills: [
      { name: 'ISO AWS Foundations Benchmark', level: null },
      { name: 'SSL/TLS', level: null },
      { name: 'SSH', level: null },
      { name: 'SSSD', level: null },
      { name: 'Audit de sécurité', level: null },
    ],
  },
  {
    category: 'Cloud Platform',
    color: 'sky',
    group: 'Transversal',
    skills: [
      { name: 'OnApp', level: null },
      { name: 'Office 365', level: null },
      { name: 'Exchange', level: null },
    ],
  },
  {
    category: 'Autres',
    color: 'slate',
    group: 'Transversal',
    skills: [
      { name: 'SAN', level: null },
      { name: 'NAS', level: null },
      { name: 'Plesk', level: null },
      { name: 'TSE', level: null },
    ],
  },
];

const GROUPS = ['Tous', 'AWS', 'DevOps', 'Infrastructure', 'Transversal'] as const;

const colorMap: Record<string, string> = {
  orange: 'bg-orange-50 border-orange-200 text-orange-700',
  purple: 'bg-purple-50 border-purple-200 text-purple-700',
  blue:   'bg-blue-50 border-blue-200 text-blue-700',
  sky:    'bg-sky-50 border-sky-200 text-sky-700',
  green:  'bg-green-50 border-green-200 text-green-700',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700',
  pink:   'bg-pink-50 border-pink-200 text-pink-700',
  red:    'bg-red-50 border-red-200 text-red-700',
  yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  teal:   'bg-teal-50 border-teal-200 text-teal-700',
  slate:  'bg-slate-50 border-slate-200 text-slate-600',
};

const headerColorMap: Record<string, string> = {
  orange: 'text-orange-600 border-orange-200',
  purple: 'text-purple-600 border-purple-200',
  blue:   'text-blue-600 border-blue-200',
  sky:    'text-sky-600 border-sky-200',
  green:  'text-green-600 border-green-200',
  indigo: 'text-indigo-600 border-indigo-200',
  pink:   'text-pink-600 border-pink-200',
  red:    'text-red-600 border-red-200',
  yellow: 'text-yellow-600 border-yellow-200',
  teal:   'text-teal-600 border-teal-200',
  slate:  'text-slate-500 border-slate-200',
};

function SkillCard({
  group,
  expanded,
  onExpand,
}: {
  group: typeof skillCategories[0];
  expanded: boolean;
  onExpand: () => void;
}) {
  const visible = expanded ? group.skills : group.skills.slice(0, SKILLS_LIMIT);
  const hiddenCount = group.skills.length - SKILLS_LIMIT;

  return (
    <div className="bg-white rounded-xl border border-slate-100 shadow-sm p-5 h-full">
      <h3 className={`text-xs font-bold uppercase tracking-wide pb-3 mb-3 border-b ${headerColorMap[group.color]}`}>
        {group.category}
      </h3>

      <div className="flex flex-wrap gap-2">
        {visible.map((skill) => (
          <span
            key={skill.name}
            className={`px-2.5 py-1 rounded-full text-xs font-medium border ${colorMap[group.color]}`}
          >
            {skill.name}
            {skill.level && (
              <span className="ml-1 opacity-50 italic">· {skill.level}</span>
            )}
          </span>
        ))}

        {/* Badge compteur quand replié — cliquable */}
        {!expanded && hiddenCount > 0 && (
          <button
            onClick={onExpand}
            className="px-2.5 py-1 rounded-full text-xs font-medium border bg-slate-50 border-slate-200 text-slate-400 hover:bg-blue-50 hover:border-blue-200 hover:text-blue-500 transition-colors"
          >
            +{hiddenCount}
          </button>
        )}
      </div>
    </div>
  );
}

const CATEGORIES_LIMIT = 6;

export function TechnicalSkills() {
  const [activeGroup, setActiveGroup] = useState<string>('Tous');
  const [expandedAll, setExpandedAll] = useState(false);
  const [showAllCategories, setShowAllCategories] = useState(false);

  const filtered = activeGroup === 'Tous'
    ? skillCategories
    : skillCategories.filter((c) => c.group === activeGroup);

  const visibleCategories = activeGroup === 'Tous' && !showAllCategories
    ? filtered.slice(0, CATEGORIES_LIMIT)
    : filtered;

  const hiddenCount = filtered.length - CATEGORIES_LIMIT;

  return (
    <section id="competences" className="py-20 bg-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimationWrapper delay={0.1}>
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Compétences techniques</h2>
            <p className="text-xl text-slate-600">
              27 domaines couvrant l'ensemble de l'écosystème Cloud AWS et DevOps
            </p>
          </div>
        </AnimationWrapper>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {GROUPS.map((g) => (
            <button
              key={g}
              onClick={() => {
                setActiveGroup(g);
                setShowAllCategories(false);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                activeGroup === g
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm'
                  : 'bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600'
              }`}
            >
              {g}
              <span className="ml-1.5 text-xs opacity-60">
                {g === 'Tous'
                  ? skillCategories.length
                  : skillCategories.filter((c) => c.group === g).length}
              </span>
            </button>
          ))}
        </div>

        {/* Grille */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {visibleCategories.map((group, idx) => (
              <motion.div
                key={group.category}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2, delay: idx * 0.02 }}
              >
                <SkillCard
                  group={group}
                  expanded={expandedAll}
                  onExpand={() => setExpandedAll(true)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Boutons */}
        <div className="flex flex-col items-center gap-3 mt-8">

          {/* Voir plus de catégories — uniquement sur "Tous" */}
          {activeGroup === 'Tous' && !showAllCategories && (
            <button
              onClick={() => setShowAllCategories(true)}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-slate-200 bg-white text-slate-600 hover:bg-slate-50 hover:border-slate-400 transition-all duration-200 shadow-sm"
            >
              <ChevronDown className="w-4 h-4" />
              Voir les {hiddenCount} autres catégories
            </button>
          )}

          {/* Voir toutes les compétences dans les cartes */}
          {(showAllCategories || activeGroup !== 'Tous') && (
            <button
              onClick={() => setExpandedAll(!expandedAll)}
              className="flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium border border-blue-200 bg-white text-blue-600 hover:bg-blue-50 hover:border-blue-400 transition-all duration-200 shadow-sm"
            >
              {expandedAll ? (
                <><ChevronUp className="w-4 h-4" /> Voir moins de compétences</>
              ) : (
                <><ChevronDown className="w-4 h-4" /> Voir toutes les compétences</>
              )}
            </button>
          )}

          {/* Réduire */}
          {activeGroup === 'Tous' && showAllCategories && (
            <button
              onClick={() => {
                setShowAllCategories(false);
                setExpandedAll(false);
              }}
              className="flex items-center gap-2 text-xs text-slate-400 hover:text-slate-600 transition-colors"
            >
              <ChevronUp className="w-3 h-3" /> Réduire
            </button>
          )}
        </div>
      </div>
    </section>
  );
}