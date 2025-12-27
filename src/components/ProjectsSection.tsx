import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Server, Database, Terminal, Code, Shield, Cloud } from "lucide-react";

const projects = [
  {
    title: "System Administration Toolkit",
    description: "A collection of Bash and Python scripts for automating common system administration tasks including user management, backup automation, and system monitoring.",
    tech: ["Python", "Bash", "Linux", "Cron"],
    icon: Terminal,
    category: "Infrastructure"
  },
  {
    title: "Database Management Suite",
    description: "SQL scripts and utilities for PostgreSQL and MS SQL Server database optimization, backup strategies, and performance monitoring dashboards.",
    tech: ["SQL", "PostgreSQL", "MS SQL", "Python"],
    icon: Database,
    category: "Backend"
  },
  {
    title: "IT Support Portal",
    description: "A web-based ticketing and knowledge base system for IT support teams with role-based access control and automated ticket routing.",
    tech: ["Django", "Python", "PostgreSQL", "HTML/CSS"],
    icon: Server,
    category: "Full Stack"
  },
  {
    title: "Network Security Analyzer",
    description: "Tools for network security assessment including port scanning utilities, firewall rule analyzers, and security audit scripts.",
    tech: ["Python", "Bash", "Linux", "Networking"],
    icon: Shield,
    category: "Security"
  },
  {
    title: "DevOps Pipeline Templates",
    description: "Collection of CI/CD pipeline configurations and Docker containerization templates for various application stacks.",
    tech: ["Docker", "Git", "YAML", "Shell"],
    icon: Cloud,
    category: "DevOps"
  },
  {
    title: "Academic Projects Collection",
    description: "Various academic projects including data structures implementations, algorithm visualizers, and mini applications built during BCA/MCA coursework.",
    tech: ["Java", "C++", "Python", "JavaScript"],
    icon: Code,
    category: "Academic"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className=" relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading gradient-text">Featured Projects</h2>
          <p className="section-subheading mx-auto">
            A showcase of practical projects built through hands-on learning and real-world problem solving
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className="glass-card-hover p-6 group flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <project.icon className="h-6 w-6" />
                </div>
                <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Project Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span 
                    key={tech}
                    className="text-xs font-medium px-2 py-1 rounded-md bg-secondary text-muted-foreground"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1"
                  asChild
                >
                  <a href="https://github.com/HackyCoder0951" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Demo
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://github.com/HackyCoder0951" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
