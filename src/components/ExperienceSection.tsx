import { Briefcase, GraduationCap, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Junior Software Engineer L1 Intern",
    company: "Appneural Pvt. Ltd.",
    location: "Udaipur, Rajasthan, India",
    period: "Apr 2026 - Sep 2026",
    description: "Founding engineer who owned architecture, databases, infrastructure, deployment, and production for an early-stage product.",
    responsibilities: [
      "Independently designed and built an internal product platform: a NestJS/Next.js modular monolith (TypeScript, PostgreSQL, Redis) with reusable internal libraries (auth/RBAC, notifications, shared UI) published to a private registry.",
      "Set up PostgreSQL, Redis, Docker environments, and Nginx-fronted deployments on Linux.",
      "Deployed a config-driven observability stack — Prometheus, Grafana, Loki, Tempo, OpenTelemetry, Alertmanager — for metrics, logs, and traces.",
      "Wrote YAML CI/CD pipelines for install, lint, test, build, and package publishing."
    ]
  },
  {
    type: "work",
    title: "Freelance IT Consultant",
    company: "Self-Employed (Family Reasons)",
    location: "Chittorgarh, Rajasthan, India",
    period: "Sep 2022 - Mar 2024",
    description: "Independent IT consulting covering management, tech sales, and web applications for local clients.",
    responsibilities: [
      "Provided IT management and consulting services to small business clients.",
      "Handled technology sales and recommendations based on client needs.",
      "Built and maintained small web applications for clients."
    ]
  },
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
    location: "Chittorgarh, Rajasthan, India",
    period: "Apr 2021 - Nov 2021",
    description: "Managed IT infrastructure, system integration, and provided hands-on support for enterprise IT infrastructure.",
    responsibilities: [
      "Advanced computer, laptop, and printer repairing.",
      "Networking and CCTV installation across client sites.",
      "Knowledge of advanced IT infrastructure operations."
    ]
  },
  {
    type: "work",
    title: "Computer Operator / System Administrator / IT Consultant (Part-Time)",
    company: "Shri Sanwliya Computer Institute",
    location: "Bhadsoda, Chittorgarh, Rajasthan, India",
    period: "Jun 2016 - Nov 2021",
    description: "Handled client-server architecture system administration while maintaining the institute's IT infrastructure.",
    responsibilities: [
      "Administered a client-server setup and ensured optimal performance and security.",
      "Repaired computers and printers after learning the trade hands-on.",
      "Researched latest tech updates and advised on required system updates and upgrades."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="section-heading gradient-text">Experience</h2>
          <p className="section-subheading mx-auto">
            My professional journey
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;