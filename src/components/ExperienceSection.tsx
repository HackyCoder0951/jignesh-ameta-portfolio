import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Consultant : Onsite Support Engineer",
    company: "CMS IT Services Pvt. Ltd.",
    location: "Ahmedabad, Gujarat, India",
    period: "Apr 2024 - Sep 2024",
    description: "Providing comprehensive technical support for enterprise systems, ensuring smooth system deployments.",
    responsibilities: [
      "Handled end-to-end IT support operations including ticket management, user assistance, remote/onsite troubleshooting, and daily compliance checks.",
      "Managed software updates, system installations, hardware maintenance, POS setup, and technical issue resolution.",
      "Maintained IT inventory, documented activities, and ensured smooth functioning of all IT systems and applications."
    ]
  },
  {
    type: "work",
    title: "Technical Support Engineer",
    company: "Relyon Softech Ltd.",
    location: "Jaipur, Rajasthan, India",
    period: "Jan 2022 - Sep 2022",
    description: "Providing comprehensive technical support for enterprise software products, managing SQL backend operations, and ensuring smooth system deployments.",
    responsibilities: [
      "Administered and optimized SQL databases, performed backups, and ensured data integrity.",
      "Collaborated with cross-functional teams to streamline support processes and enhance customer satisfaction.",
      "Conducted feedback analysis and proposed improvements to enhance overall support quality and user experience.", 
      "Improvements to enhance overall support quality and user experience.",
    ]
  },
  {
    type: "work",
    title: "IT Engineer",
    company: "Shree Nakoda InfoTech",
    location: "Chittorgarh, Rajasthan,India",
    period: "Apr 2021 - Nov 2021",
    description: "Managed IT infrastructure, system integration, and provided hands-on support for Advance IT Infrastructures.",
    responsibilities: [
      "In this firm I was working on various IT Operations like Advance Computer & Laptop & Printer Repairing / Networking / CCTV Installation / Knowing Advance IT Infrastructures.",
      "Advance Computer & Laptop & Printer Repairing / Networking / CCTV Installation / Knowing Advance IT Infrastructures."
    ]
  },
  {
    type: "work",
    title: "System Administrator / IT Consultant - Part Time",
    company: "Shri Sanwliya Computer Institute",
    location: "Chittorgarh, Rajasthan, India",
    period: "Jun 2016 - Nov 2021",
    description: "I handle Client Server Architecture System. I was responsible for maintaining the institute's IT infrastructure, ensuring optimal performance and security.",
    responsibilities: [
      "Search About latest Tech Updates and give information about required System Updates & Upgrades",
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
    institution: "Mohan Lal Sukhadia University",
    location: "Udaipur, Rajasthan, India",
    period: "Ongoing - 70%",
    description: "Operating Systems, Advance Data Structures, Pythons, DBMS, Web Technologies, Networking, C, JAVA, MIS, Comp. Arch. Cloud Computing, Software Engineering, Embedded Systems, IS & Cyber Security"
  },
  {
    type: "education",
    title: "Bachelor of Computer Applications (BCA)",
    institution: "Mohan Lal Sukhadia University",
    location: "Udaipur, Rajasthan, India",
    period: "Completed - 66%",
    description: "Operating Systems, Data Structures Using C and C++, PC Software Packages, DBMS, Web Technologies, Networking."
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
