import { 
  Code, 
  Database, 
  Server, 
  Cloud, 
  Shield, 
  Terminal,
  Cpu,
  GitBranch
} from "lucide-react";

const skillCategories = [
  {
    title: "Programming Languages",
    icon: Code,
    skills: [
      { name: "C", level: 75 },
      { name: "SQL", level: 60 },
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
      { name: "PostgreSQL", level: 85 },
      { name: "MS SQL Server", level: 90 },
      { name: "Django", level: 70 },
      { name: "MySQL", level: 75 },
      { name: "REST APIs", level: 70 },
    ]
  },
  {
    title: "OS & Infrastructure",
    icon: Server,
    skills: [
      { name: "Linux (RHEL/Ubuntu)", level: 90 },
      { name: "Windows Server", level: 88 },
      { name: "System Administration", level: 85 },
      { name: "Virtualization", level: 75 },
      { name: "Troubleshooting", level: 92 },
    ]
  },
  {
    title: "DevOps & Cloud",
    icon: Cloud,
    skills: [
      { name: "Docker", level: 70 },
      { name: "Git/GitHub", level: 85 },
      { name: "CI/CD Basics", level: 65 },
      { name: "Cloud Fundamentals", level: 60 },
      { name: "Ansible", level: 55 },
    ]
  },
  {
    title: "Networking & Security",
    icon: Shield,
    skills: [
      { name: "TCP/IP & DNS", level: 80 },
      { name: "Permissions & ACLs", level: 85 },
      { name: "AAA Model", level: 75 },
      { name: "Firewall Config", level: 70 },
      { name: "VPN Setup", level: 65 },
    ]
  },
  {
    title: "Tools & Platforms",
    icon: Terminal,
    skills: [
      { name: "VS Code", level: 90 },
      { name: "Jupyter Notebook", level: 80 },
      { name: "Postman", level: 75 },
      { name: "Jira/Confluence", level: 70 },
      { name: "OBS Studio", level: 65 },
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
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
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
