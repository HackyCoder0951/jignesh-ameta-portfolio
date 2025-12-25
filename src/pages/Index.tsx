import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Jignesh Ameta | IT Infra Engineer & AI Researcher</title>
        <meta 
          name="description" 
          content="Portfolio of Jignesh Ameta - IT Infra Engineer & AI Researcher, and Python/SQL Developer from India. Expertise in system administration, backend development, and cloud infrastructure." 
        />
        <meta name="keywords" content="Jignesh Ameta, IT Infra Engineer, AI Researcher, Python Developer, SQL, Linux, DevOps, IT Infrastructure" />
        <meta property="og:title" content="Jignesh Ameta | IT Infra Engineer & AI Researcher" />
        <meta property="og:description" content="Portfolio of Jignesh Ameta - IT Infra Engineer and AI Researcher from India." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://jigneshameta.dev" />
      </Helmet>
      
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <main>
          <HeroSection />
          <div id="about" className="scroll-mt-20">
            <SkillsSection />
          </div>
          <ExperienceSection />
          <ProjectsSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
