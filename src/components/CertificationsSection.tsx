import { Award, BadgeCheck } from "lucide-react";

const headlineCert = {
  title: "RHCSA — Red Hat Certified System Administrator",
  issuer: "RCAT, Udaipur, Rajasthan",
  period: "Jun 2025 - Jul 2025",
  result: "90%",
};

const courseraCerts = [
  "AWS Fundamentals",
  "AWS Cloud Support Associate",
  "CompTIA A+ Network",
  "ITIL 4 Foundation",
  "Google IT Support",
  "IBM IT Support",
  "Microsoft IT Support",
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="py-10 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="section-heading gradient-text">Certifications</h2>
          <p className="section-subheading mx-auto">
            Credentials backing up the hands-on experience
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Headline Certification */}
          <div className="glass-card-hover p-6 mb-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{headlineCert.title}</h3>
                  <p className="text-primary font-medium">{headlineCert.issuer}</p>
                </div>
              </div>
              <div className="flex flex-col items-end gap-1 text-sm text-muted-foreground">
                <span>{headlineCert.period}</span>
                <span className="skill-badge">Result: {headlineCert.result}</span>
              </div>
            </div>
          </div>

          {/* Coursera Certifications */}
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <BadgeCheck className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Coursera Certifications</h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {courseraCerts.map((cert) => (
              <span key={cert} className="skill-badge">
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
