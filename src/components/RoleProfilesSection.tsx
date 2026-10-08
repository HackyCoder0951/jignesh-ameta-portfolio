import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { roleProfiles } from "@/data/profiles";

const RoleProfilesSection = () => {
  return (
    <section id="roles" className="py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-heading gradient-text">Role Profiles</h2>
          <p className="section-subheading mx-auto">
            The same experience, framed for the role you're hiring for.
          </p>
        </div>

        <Tabs defaultValue={roleProfiles[0].id} className="max-w-4xl mx-auto">
          <TabsList className="flex flex-wrap h-auto justify-center gap-2 bg-transparent p-0 mb-8">
            {roleProfiles.map((profile) => (
              <TabsTrigger
                key={profile.id}
                value={profile.id}
                className="flex items-center gap-2 rounded-full border border-border/50 bg-secondary/40 px-4 py-2 text-sm data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:border-primary"
              >
                <profile.icon className="h-4 w-4" />
                {profile.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {roleProfiles.map((profile) => (
            <TabsContent key={profile.id} value={profile.id} className="mt-0">
              <div className="glass-card-hover p-6 md:p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <profile.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{profile.title}</h3>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">{profile.summary}</p>

                <ul className="space-y-2 mb-6">
                  {profile.highlights.map((point, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
                      <span className="text-primary mt-1.5">•</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {profile.skills.map((skill) => (
                    <span key={skill} className="skill-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default RoleProfilesSection;
