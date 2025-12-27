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
  Globe,
  ChevronLeft,
  ChevronRight
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
  SiGithubactions,
} from "react-icons/si";
import React, { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Button } from "./ui/button";

type IconComp = React.ComponentType<{ className?: string }>;

const skillIconMap: Record<string, IconComp> = {
  Python: SiPython,
  SQL: Database,
  "Bash/Shell": SiGnubash,
  JavaScript: SiJavascript,
  Markdown: SiMarkdown,
  C: SiC,
  PHP: SiPhp,
  PostgreSQL: SiPostgresql,
  "MS SQL Server": Database,
  Django: SiDjango,
  MySQL: SiMysql,
  "REST APIs": Code,
  ReactJS: SiJavascript,
  NodeJS: SiJavascript,
  MongoDB: Database,
  CodeIgniter: SiPhp,
  "Linux (RHEL/Ubuntu)": SiLinux,
  "Windows Server": Server,
  "System Administration": Server,
  Virtualization: SiVirtualbox,
  Troubleshooting: Terminal,
  Docker: SiDocker,
  "Git/GitHub": SiGithub,
  "CI/CD Basics": GitBranch,
  "Cloud Fundamentals": Cloud,
  Ansible: SiAnsible,
  "Github Actions": SiGithubactions,
  "TCP/IP & DNS": Globe,
  "Security Implementations": Lock,
  "Routers Config": Shield,
  "Switch Config": Shield,
  "Firewall Config": Shield,
  "VPN Setup": Shield,
  "VS Code": Cpu,
  "Jupyter Notebook": SiJupyter,
  Postman: SiPostman,
  "AI Models": Cpu,
  "Zoho CRM": SiZoho,
  "MS365 Suite": Cpu,
};

const getSkillLevel = (percentage: number): { label: string; color: string } => {
  if (percentage <= 40) {
    return { label: "Beginner", color: "bg-yellow-500/20 text-yellow-400 border-yellow-500/30" };
  } else if (percentage <= 70) {
    return { label: "Intermediate", color: "bg-blue-500/20 text-blue-400 border-blue-500/30" };
  } else {
    return { label: "Advanced", color: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30" };
  }
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
    title: "Backend & Databases",
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
      { name: "AI Models", level: 70 },
      { name: "MS365 Suite", level: 65 },
      { name: "Jupyter Notebook", level: 60 },
      { name: "Postman", level: 40 },
    ]
  }
];

const SkillsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "center",
      skipSnaps: false,
      dragFree: false,
    },
    [autoplayPlugin.current]
  );

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  const getSlideClass = (index: number) => {
    const totalSlides = skillCategories.length;
    const diff = (index - selectedIndex + totalSlides) % totalSlides;
    
    if (diff === 0) {
      return "scale-100 opacity-100 z-20";
    } else if (diff === 1 || diff === totalSlides - 1) {
      return "scale-[0.85] opacity-70 z-10";
    } else {
      return "scale-[0.7] opacity-40 z-0";
    }
  };

  return (
    <section id="skills" className="relative overflow-hidden">
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

        {/* Skills Carousel */}
        <div className="relative px-12">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
            onClick={scrollPrev}
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-30 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300"
            onClick={scrollNext}
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          {/* Carousel Container */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex touch-pan-y">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_50%] lg:flex-[0_0_33.333%] px-3"
                >
                  <div 
                    className={`glass-card-hover p-6 h-full transition-all duration-500 ease-out ${getSlideClass(index)}`}
                  >
                    {/* Category Header */}
                    <div className="flex items-center gap-4 mb-6">
                      <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        <category.icon className="h-6 w-6" />
                      </div>
                      <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                    </div>

                    {/* Skills List */}
                    <div className="space-y-3">
                      {category.skills.map((skill) => {
                        const Icon = skillIconMap[skill.name];
                        const skillLevel = getSkillLevel(skill.level);
                        return (
                          <div key={skill.name} className="flex items-center justify-between gap-3 p-2 rounded-lg hover:bg-secondary/50 transition-colors duration-200">
                            <div className="flex items-center gap-3 flex-1 min-w-0">
                              {Icon && <Icon className="h-4 w-4 text-muted-foreground flex-shrink-0" />}
                              <span className="text-foreground font-medium text-sm truncate">{skill.name}</span>
                            </div>
                            <span className={`text-xs px-2.5 py-1 rounded-full border font-medium flex-shrink-0 ${skillLevel.color}`}>
                              {skillLevel.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {skillCategories.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === selectedIndex 
                    ? "w-8 bg-primary" 
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
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
