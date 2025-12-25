import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  Shield, 
  Terminal,
  Cpu,
  GitBranch,
  Lock,
  KeyRound,
  Globe
} from "lucide-react";
import {
  SiPython,
  SiPostgresql,
  SiDjango,
  SiMysql,
  SiGnubash,
  SiJavascript,
  SiMarkdown,
  SiC,
  SiPhp,
  SiLinux,
  SiVirtualbox,
  SiDocker,
  SiGithub,
  SiAnsible,
  SiJupyter,
  SiPostman,
  SiZoho,
  SiAuth0,
  SiGithubactions,
} from "react-icons/si";
import React from "react";

type IconComp = React.ComponentType<{ className?: string }>;

const skillIconMap: Record<string, IconComp> = {
  // Programming Languages
  Python: SiPython,
  SQL: Database,
  "Bash/Shell": SiGnubash,
  JavaScript: SiJavascript,
  Markdown: SiMarkdown,
  C: SiC,
  PHP: SiPhp,

  // Backend & Databases
  PostgreSQL: SiPostgresql,
  "MS SQL Server": Database,
  Django: SiDjango,
  MySQL: SiMysql,
  "REST APIs": Code,
  ReactJS: SiJavascript,
  NodeJS: SiJavascript,
  MongoDB: Database,
  CodeIgniter: SiPhp,

  // OS & Infrastructure
  "Linux (RHEL/Ubuntu)": SiLinux,
  "Windows Server": Server,
  "System Administration": Server,
  Virtualization: SiVirtualbox,
  Troubleshooting: Terminal,

  // DevOps & Cloud
  Docker: SiDocker,
  "Git/GitHub": SiGithub,
  "CI/CD Basics": GitBranch,
  "Cloud Fundamentals": Cloud,
  Ansible: SiAnsible,
  "Github Actions": SiGithubactions,

  // Networking & Security
  "TCP/IP & DNS": Globe,
  "Security Implementations": Lock,
  "Routers Config": Shield,
  "Switch Config": Shield,
  "Firewall Config": Shield,
  "VPN Setup": Shield,

  // Tools & Platforms
  "VS Code": Cpu,
  "Jupyter Notebook": SiJupyter,
  Postman: SiPostman,
  "AI Models ": Cpu,
  "Zoho CRM": SiZoho,
  "MS365 Suite": Cpu,
};

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C", level: 75 },
      { name: "SQL", level: 60 },
      { name: "PHP", level: 60 },  
      { name: "Bash/Shell", level: 60 },
      { name: "Markdown", level: 60 },
      { name: "JavaScript", level: 50 },
      { name: "Python", level: 40 },  
    ]
  },
  {
    title: "Backend - Databases & Frameworks",
    icon: Database,
    skills: [
      { name: "MS SQL Server", level: 90 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 75 },
      { name: "Django", level: 70 },
      { name: "REST APIs", level: 70 },
      { name: "ReactJS", level: 40 },
      { name: "CodeIgniter", level: 40 },
      { name: "MongoDB", level: 40 },
      { name: "NodeJS", level: 40 },
    ]
  },
  {
    title: "OS & Infrastructure",
    icon: Server,
    skills: [
      { name: "Troubleshooting", level: 90 },
      { name: "Linux (RHEL/Ubuntu)", level: 70 },
      { name: "Windows Server", level: 70 },
      { name: "System Administration", level: 70 },
      { name: "Virtualization", level: 65 },
      
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Docker", level: 70 },
      { name: "Github Actions", level: 45 },
      { name: "Cloud Fundamentals", level: 40 },
      { name: "CI/CD Basics", level: 40 },
    ]
  },
  {
    title: "Networking & Security",
    icon: Shield,
    skills: [
      { name: "Troubleshooting", level: 85 },
      { name: "TCP/IP & DNS", level: 80 },
      { name: "Security Implementations", level: 60 },
      { name: "Firewall Config", level: 60 },
      { name: "Routers Config", level: 60 },
      { name: "Switch Config", level: 60 },
      { name: "VPN Setup", level: 60 },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: [
      { name: "VS Code", level: 90 },
      { name: "Zoho CRM", level: 70 },
      { name: "AI Models ", level: 70 },
      { name: "MS365 Suite", level: 65 },
      { name: "Jupyter Notebook", level: 60 },
      { name: "Postman", level: 40 },
    ]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading gradient-text">Skills & Expertise</h2>
          <p className="section-subheading mx-auto">
            A comprehensive toolkit built through hands-on experience in system administration, 
            backend development, and infrastructure management.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title}
              className="glass-card-hover p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Category Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
              </div>

              {/* Skills List */}
              <div className="space-y-4">
                {category.skills.map((skill) => {
                  const Icon = skillIconMap[skill.name];
                  return (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center gap-2">
                          {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
                          <span className="text-foreground font-medium">{skill.name}</span>
                        </div>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Quick Skills Tags */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">Also experienced with:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {["PHP", "HTML/CSS", "Android Studio", "Matlab", "Assembly", "Adobe Suite", "IoT", "Arch Linux"].map((skill) => (
              <span key={skill} className="skill-badge">
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
