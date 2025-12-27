import { Terminal, Database, Server, Shield, Cloud, Code, LucideIcon } from "lucide-react";
import { SiLinux } from "react-icons/si";

export interface Project {
  title: string;
  description: string;
  tech: string[];
  icon: LucideIcon | typeof SiLinux;
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
    title: "Online E-Bookshop & e-learning",
    description: "This is an online book shop project developed by PHP framework (CodeIgniter). This application is like an online books market place, where user allows to buy and sell their books. Here user can also get different types of e-books as pdf books based on the category. This project also has many other cool functionalities.",
    tech: ["PHP", "MySQL", "CodeIgniter", "Bootstrap", "HTML/CSS", "JS-JQuery"],
    icon: Database,
    category: "Full Stack",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/VisionITConsultancy/E-Bookshop",
    demoUrl: "",
  },
  {
    title: "Traffic Management Command Center",
    description: "A modern, real-time traffic management system designed for professional command center operations. Built with React, TypeScript, and Tailwind CSS.",
    tech: ["React 18","TypeScript", "Tailwind CSS","Python", "Traffic Camera APIs","Supabase"],
    icon: Server,
    category: "Full Stack",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/HackyCoder0951/kalinga-drishti",
    demoUrl: "",
  },
  {
    title: "LVM Thin Provisioning with Auto Expansion on Ubuntu",
    description: "This project provides a modular, production-ready setup to manage large, dynamically growing storage using LVM Thin Provisioning on Ubuntu. It enables you to start with minimal storage and expand on-the-fly by detecting and integrating new disks.",
    tech: ["Python", "Bash", "LVM", "Linux", "Ubuntu"],
    icon: SiLinux,
    category: "Infrastructure",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/HackyCoder0951/ubuntu_lvm_excercise",
    demoUrl: "https://github.com/HackyCoder0951/ubuntu_lvm_excercise",
  },
  {
    title: "Focus Hub - Alumni Collaboration Platform",
    description: "Focus Hub is a modern, full-stack social platform that brings together communication, knowledge sharing, and collaboration in one beautiful interface. The platform features real-time messaging, social feeds, Q&A communities, and resource sharing capabilities. It is built with React, TypeScript, Tailwind CSS, and integrates AI-powered features for enhanced user experience.",
    tech: ["React/Vite","Cypress", "TypeScript", "Tailwind CSS", "Groq API", "AI Integration", "Supabase/PgSQL"],
    icon: Database,
    category: "Full Stack",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/HackyCoder0951/focus-hub",
    demoUrl: "https://focus-hub-two.vercel.app/",
  },
  {
    title: "My Portfolio Website",
    description: "This is my personal portfolio website showcasing my skills, experience, and projects. Built with React, TypeScript, and Tailwind CSS, it features a modern design and responsive layout.",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vite", "React Helmet"],
    icon: Terminal,
    category: "Portfolio",
    // 👇 UPDATE THESE LINKS
    githubUrl: "https://github.com/HackyCoder0951/jignesh-ameta-portfolio",
    demoUrl: "https://hacky-coder.vercel.app/",
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
