import { Button } from "@/components/ui/button";
import { ArrowDown, Download, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  "Technical Support Engineer",
  "IT Infrastructure Specialist",
  "System Administrator",
  "Python & SQL Developer",
  "Cloud & DevOps Learner",
];

const HeroSection = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentRole((prev) => (prev + 1) % roles.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-60"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/40 to-background" />
      
      {/* Animated Glow Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow delay-1000" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Greeting */}
          <p className="animate-fade-up text-muted-foreground text-lg font-medium tracking-wide uppercase">
            Welcome to my portfolio
          </p>
          
          {/* Name */}
          <h1 className="animate-fade-up-delay-1 text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            <span className="block text-foreground">Hi, I'm</span>
            <span className="gradient-text text-glow block mt-2">Jignesh Ameta</span>
          </h1>
          
          {/* Typing Effect Role */}
          <div className="animate-fade-up-delay-2 h-12 flex items-center justify-center">
            <span className="font-mono text-xl md:text-2xl text-primary">
              {displayText}
              <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-pulse" />
            </span>
          </div>
          
          {/* Tagline */}
          <p className="animate-fade-up-delay-3 text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Passionate technician-programmer from India, specializing in system administration, 
            backend development, and cloud infrastructure. Building solutions that bridge 
            technology and business needs.
          </p>
          
          {/* CTA Buttons */}
          <div className="animate-fade-up-delay-4 flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="xl" onClick={scrollToWork}>
              View My Work
              <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl">
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="animate-fade-up-delay-4 flex gap-6 justify-center pt-8">
            <a 
              href="https://github.com/HackyCoder0951" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jignesh-ameta-621772134/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a 
              href="mailto:jignesh.vision.17@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
