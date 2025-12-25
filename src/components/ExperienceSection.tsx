import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Technical Support Engineer",
    company: "Software Product Company",
    location: "Chittorgarh, Rajasthan, India",
    period: "Present",
    description: "Providing comprehensive technical support for enterprise software products, managing SQL backend operations, and ensuring smooth system deployments.",
    responsibilities: [
      "End-to-end system support and troubleshooting for enterprise clients",
      "SQL database management, query optimization, and backend operations",
      "Client issue resolution and technical documentation",
      "Software deployment, configuration, and maintenance",
      "Collaboration with development teams for bug resolution"
    ]
  },
  {
    type: "work",
    title: "IT Service Engineer",
    company: "IT Infrastructure",
    location: "India",
    period: "Previous",
    description: "Managed IT infrastructure, system integration, and provided hands-on support for Windows and Linux environments.",
    responsibilities: [
      "System administration across Windows Server and Linux platforms",
      "Network configuration and security implementation",
      "Hardware and software troubleshooting",
      "User support and technical training"
    ]
  }
];

const education = [
  {
    type: "education",
    title: "Master of Computer Applications (MCA)",
    institution: "University",
    location: "India",
    period: "Ongoing",
    description: "Advancing knowledge in software development, database systems, and enterprise computing."
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "University",
    location: "India",
    period: "Completed",
    description: "Foundation in programming, databases, networking, and computer fundamentals with practical project experience."
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-heading gradient-text">Experience & Education</h2>
          <p className="section-subheading mx-auto">
            My professional journey and academic foundation in technology
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <Briefcase className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Work Experience</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border" />

              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-10 pb-12 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-0 top-1" />

                  {/* Content Card */}
                  <div className="glass-card-hover p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{exp.title}</h4>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{exp.description}</p>
                    
                    <ul className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                          <span className="text-primary mt-1.5">•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 rounded-lg bg-primary/10 text-primary">
                <GraduationCap className="h-5 w-5" />
              </div>
              <h3 className="text-2xl font-bold text-foreground">Education</h3>
            </div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border" />

              {education.map((edu, index) => (
                <div key={index} className="relative pl-10 pb-12 last:pb-0">
                  {/* Timeline Dot */}
                  <div className="timeline-dot absolute left-0 top-1" />

                  {/* Content Card */}
                  <div className="glass-card-hover p-6">
                    <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{edu.title}</h4>
                        <p className="text-primary font-medium">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {edu.location}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
