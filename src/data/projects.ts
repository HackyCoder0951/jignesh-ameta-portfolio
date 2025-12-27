import { Terminal, Database, Server, Shield, Cloud, Code, LucideIcon } from "lucide-react";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon;
  category: string;
  /** GitHub repository URL - update this with your actual repo link */
  githubUrl: string;
  /** Live demo URL - update this with your actual demo link (leave empty if no demo) */
  demoUrl: string;
}

/**
 * ========================================
 * 📝 PROJECTS CONFIGURATION
 * ========================================
 * 
 * Update the URLs below with your actual project links:
 * - githubUrl: Your GitHub repository URL
 * - demoUrl: Your live demo URL (leave empty string "" if no demo available)
 * 
 * To add a new project, copy an existing object and modify the values.
 * To remove a project, delete the entire object from the array.
 */

export const projects: Project[] = [
  {
    title: "System Administration Toolkit",
    description: "A collection of Bash and Python scripts for automating common system administration tasks including user management, backup automation, and system monitoring.",
    tech: ["Python", "Bash", "Linux", "Cron"],
    icon: Terminal,
    category: "Infrastructure",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/HackyCoder0951",
    demoUrl: "",
  },
  {
    title: "Database Management Suite",
    description: "SQL scripts and utilities for PostgreSQL and MS SQL Server database optimization, backup strategies, and performance monitoring dashboards.",
    tech: ["SQL", "PostgreSQL", "MS SQL", "Python"],
    icon: Database,
    category: "Backend",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/HackyCoder0951",
    demoUrl: "",
  },
  {
    title: "IT Support Portal",
    description: "A web-based ticketing and knowledge base system for IT support teams with role-based access control and automated ticket routing.",
    tech: ["Django", "Python", "PostgreSQL", "HTML/CSS"],
    icon: Server,
    category: "Full Stack",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/HackyCoder0951",
    demoUrl: "",
  },
  {
    title: "Network Security Analyzer",
    description: "Tools for network security assessment including port scanning utilities, firewall rule analyzers, and security audit scripts.",
    tech: ["Python", "Bash", "Linux", "Networking"],
    icon: Shield,
    category: "Security",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/HackyCoder0951",
    demoUrl: "",
  },
  {
    title: "DevOps Pipeline Templates",
    description: "Collection of CI/CD pipeline configurations and Docker containerization templates for various application stacks.",
    tech: ["Docker", "Git", "YAML", "Shell"],
    icon: Cloud,
    category: "DevOps",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/HackyCoder0951",
    demoUrl: "",
  },
  {
    title: "Academic Projects Collection",
    description: "Various academic projects including data structures implementations, algorithm visualizers, and mini applications built during BCA/MCA coursework.",
    tech: ["Java", "C++", "Python", "JavaScript"],
    icon: Code,
    category: "Academic",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/HackyCoder0951",
    demoUrl: "",
  }
];
