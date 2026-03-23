import { Calendar, MapPin, Book } from "lucide-react";

const education = [
    {
        type: "education",
        title: "Master of Computer Applications (MCA)",
        institution: "Mohan Lal Sukhadia University",
        location: "Udaipur, Rajasthan, India",
        period: "Ongoing - 65%",
        description: "Comprehensive study of advanced computing concepts and modern technologies",
        courses: [
            "Advanced understanding of core computer science concepts, including operating systems, computer architecture, data structures, and software engineering.",
            "Strong proficiency in programming, backend development, and system-level technologies using C, Java, Python, databases, and web technologies.",
            "In-depth knowledge of networking, information systems, and cybersecurity with focus on secure, scalable, and reliable system design.",
            "Hands-on exposure to modern computing paradigms such as cloud computing, embedded systems, virtualization, and infrastructure-oriented solutions.",
            "Ability to align technical systems with business and organizational needs through MIS, system analysis, and strategic IT planning."
        ]

    },
    {
        type: "education",
        title: "Bachelor of Computer Applications (BCA)",
        institution: "Mohan Lal Sukhadia University",
        location: "Udaipur, Rajasthan, India",
        period: "Completed - 66%",
        description: "Foundational knowledge in computer applications and IT fundamentals",
        courses: [
            "Fundamental understanding of computer science concepts, including basic programming, operating systems, and computer organization.",
            "Working knowledge of programming languages such as C and Java, along with introductory scripting concepts.",
            "Basic understanding of databases, web technologies, and application development fundamentals.",
            "Introductory knowledge of computer networking and information security principles.",
            "Awareness of information systems and the role of IT in supporting business processes."
        ]
    }
];

const EducationSection = () => {
    return (
        <section id="education" className="py-2 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="section-heading gradient-text">Education</h2>
                    <p className="section-subheading mx-auto">
                        My academic journey
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    {/* Education */}
                    <div className="mb-16">
                        <div className="flex items-center gap-3 mb-8">
                            <div className="p-2 rounded-lg bg-primary/10 text-primary">
                                <Book className="h-5 w-5" />
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

                                        <p className="text-muted-foreground mb-4">{edu.description}</p>

                                        <ul className="space-y-2">
                                            {edu.courses.map((course, i) => (
                                                <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                                                    <span className="text-primary mt-1.5">•</span>
                                                    {course}
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


export default EducationSection;