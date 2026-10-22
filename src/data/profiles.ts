import {
  Cloud,
  Server,
  Code,
  Code2,
  Headset,
  Terminal,
  Network,
  LucideIcon,
} from "lucide-react";

export interface RoleProfile {
  id: string;
  label: string;
  title: string;
  summary: string;
  highlights: string[];
  skills: string[];
  icon: LucideIcon;
}

export const roleProfiles: RoleProfile[] = [
  {
    id: "software-engineer",
    label: "Software Engineer",
    title: "Software Engineer | Full Stack & Systems",
    summary:
      "Early-career software engineer who has owned a product end-to-end — architecture, backend, frontend, databases, infrastructure, and production — rather than a single narrow feature. Builds with modern TypeScript/Python stacks, ships behind CI/CD, and writes tests as part of the job, not an afterthought.",
    highlights: [
      "Founding engineer at Appneural Pvt. Ltd. (Apr 2026 – Sep 2026): independently designed and built an internal product platform as a NestJS + Next.js modular monolith (TypeScript, PostgreSQL via Prisma, Redis caching, BullMQ background jobs), exposing versioned REST APIs secured with JWT auth and role-based access control.",
      "Shipped reusable internal libraries (auth/RBAC, notifications, shared UI) to a private package registry, and built the Next.js/React frontend with TanStack Query for data fetching.",
      "Owned the engineering lifecycle end-to-end: Docker environments, YAML CI/CD pipelines (lint, test, build, publish), Nginx-fronted Linux deployments, and a config-driven observability stack (Prometheus, Grafana, Loki, Tempo, OpenTelemetry).",
      "Built \"Scalable REST API with Authentication & RBAC\" (FastAPI, React 19, TypeScript, Docker) with PyTest coverage, OpenAPI/Swagger docs, and a GitHub Actions CI workflow — plus Focus Hub, an AI-integrated alumni platform on Supabase/PostgreSQL with Groq LLM-powered Q&A.",
      "Used AI coding agents (Claude, GPT, Gemini, Copilot) as part of the daily workflow for implementation, debugging, and research.",
    ],
    skills: [
      "TypeScript",
      "React",
      "Next.js",
      "NestJS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "BullMQ",
      "REST APIs",
      "JWT/RBAC",
      "Docker",
      "GitHub Actions",
      "PyTest/Jest/Cypress",
    ],
    icon: Code2,
  },
  {
    id: "devops-cloud",
    label: "DevOps / Cloud",
    title: "DevOps & Cloud Engineer | RHCSA Certified",
    summary:
      "RHCSA-certified engineer hands-on with Linux, Docker, YAML CI/CD, PostgreSQL, and Redis, with a growing observability stack (Prometheus, Grafana, Loki, Tempo, OpenTelemetry). Also skilled in networking, AWS/Azure fundamentals, and Python/Bash automation.",
    highlights: [
      "Founding engineer at Appneural Pvt. Ltd. (Apr–Sep 2026) — owned architecture, databases, infrastructure, deployment, and production end-to-end.",
      "Deployed Prometheus, Grafana, Loki, Tempo, OpenTelemetry, and Alertmanager for metrics, logs, and traces.",
      "Wrote YAML CI/CD pipelines (install, lint, test, build, publish) with Nginx-fronted Docker deployments on Linux.",
      "RHCSA certified at 90%, plus AWS Fundamentals and AWS Cloud Support Associate (Coursera).",
    ],
    skills: [
      "Linux (RHEL/Ubuntu)",
      "Docker",
      "AWS",
      "Azure",
      "GitHub Actions",
      "GitLab CI",
      "Prometheus",
      "Grafana",
      "Loki",
      "OpenTelemetry",
      "Nginx",
      "PostgreSQL",
      "Redis",
    ],
    icon: Cloud,
  },
  {
    id: "fullstack-infra",
    label: "Full Stack Infra",
    title: "IT Infrastructure | DevOps & Cloud | Full Stack Developer",
    summary:
      "RHCSA-certified engineer with 3+ years spanning IT infrastructure/cloud operations and full stack development — comfortable owning a system end-to-end, from provisioning and networking to building and deploying the application that runs on it.",
    highlights: [
      "Solo-built an internal product platform: a NestJS + Next.js modular monolith on TypeScript/PostgreSQL/Redis, with a config-driven observability stack and reusable internal libraries published to a private registry.",
      "3+ years combining Linux administration, networking, and AWS/Azure fundamentals with Python (Django/FastAPI) and Node/React development.",
      "Shipped across both domains: LVM thin-provisioning storage automation (infra) and a Traffic Management Command Center (full stack, React/Supabase).",
    ],
    skills: [
      "Linux",
      "Networking",
      "AWS",
      "Azure",
      "Docker",
      "React",
      "Next.js",
      "NestJS",
      "Python",
      "PostgreSQL",
      "MySQL",
      "Redis",
    ],
    icon: Server,
  },
  {
    id: "fullstack-backend",
    label: "Full Stack / Backend",
    title: "Full Stack Developer | Python Back-End Engineer",
    summary:
      "Builds end-to-end web apps with React, Next.js, NestJS, TypeScript, and PostgreSQL, and RESTful APIs in Django/FastAPI with clean, structured service layers. Shipped an internal product platform solo as a founding engineer at Appneural.",
    highlights: [
      "Solo-built a NestJS/Next.js modular monolith with Prisma/PostgreSQL, Redis caching, and BullMQ background jobs behind versioned, JWT/RBAC-secured REST APIs.",
      "Built \"Scalable REST API with Authentication & RBAC\" — FastAPI + React 19 + TypeScript + Docker, with PyTest coverage, OpenAPI/Swagger docs, and a GitHub Actions CI workflow.",
      "Developing Focus Hub, an AI-integrated alumni platform on Supabase/PostgreSQL with Groq LLM-powered Q&A.",
    ],
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "NestJS",
      "Python",
      "Django",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "REST APIs",
      "Docker",
      "PyTest",
    ],
    icon: Code,
  },
  {
    id: "it-support",
    label: "IT Support",
    title: "IT Support & Technical Support Engineer | Application Support",
    summary:
      "Nearly 2 years of hands-on enterprise IT support and L1/L2 technical support for payroll software, plus hands-on production-support experience as an early engineer at Appneural. Skilled in ticket handling, remote/onsite troubleshooting, and clear documentation.",
    highlights: [
      "Managed the end-to-end ticket queue, remote/onsite troubleshooting, and daily compliance checks at CMS IT Services.",
      "Provided L1/L2 application support for payroll software at Relyon Softech — gathered requirements, coordinated customizations, and drove feedback-led improvements.",
      "Debugged and resolved issues across frontend, backend, databases, and deployments of a production platform at Appneural (Apr–Sep 2026).",
    ],
    skills: [
      "Ticket Management",
      "Windows",
      "Linux",
      "macOS",
      "SQL",
      "Networking",
      "ITIL 4",
      "Documentation",
      "Incident Handling",
    ],
    icon: Headset,
  },
  {
    id: "sys-admin",
    label: "System Admin",
    title: "System Administrator | Linux (RHCSA) & Infrastructure",
    summary:
      "RHCSA-certified system administrator with 2+ years across IT infrastructure support, networking, and Linux deployments — RHEL/Ubuntu administration, LVM storage automation, Windows environments, Docker, and AWS fundamentals.",
    highlights: [
      "Built LVM Thin Provisioning with Auto Expansion — shell scripts that detect new disks and auto-expand storage pools on Ubuntu.",
      "Deployed applications on Linux servers using Docker and Nginx as reverse proxy, with PostgreSQL and Redis running in production, at Appneural (Apr–Sep 2026).",
      "RHCSA certified at 90%; hands-on with users/groups, permissions, services, systemctl, and firewall configuration.",
    ],
    skills: [
      "RHEL",
      "Ubuntu",
      "LVM",
      "Bash/Shell",
      "Docker",
      "Nginx",
      "Firewall Config",
      "VMware",
      "GitHub Actions",
    ],
    icon: Terminal,
  },
  {
    id: "network-engineer",
    label: "Network Engineer",
    title: "Network Engineer | TCP/IP, Routing & Firewalls",
    summary:
      "Practical networking background across LAN/WAN setup, routing, firewalls, and troubleshooting, built through years of IT infrastructure and support roles.",
    highlights: [
      "Applied TCP/IP, DNS, DHCP, NAT, subnetting, and routing fundamentals across enterprise support engagements.",
      "Configured firewalls (Sophos, router-based), static IP mapping, and port forwarding for client-server environments.",
      "Combines networking fundamentals with Linux/Nginx and cloud (AWS/Azure networking basics) for modern infrastructure.",
    ],
    skills: [
      "TCP/IP",
      "DNS",
      "DHCP",
      "NAT",
      "Subnetting",
      "Routing",
      "Firewall Config",
      "LAN/WAN",
      "Nginx",
      "VPN Setup",
    ],
    icon: Network,
  },
];
