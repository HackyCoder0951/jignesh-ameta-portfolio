import { Github, Linkedin, Mail, ArrowUp, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative py-16 border-t border-border/50">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-secondary/30 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center gap-8">
          {/* Logo/Name */}
          <div className="text-center">
            <h3 className="text-3xl font-bold gradient-text mb-3">Jignesh Ameta</h3>
            <p className="text-muted-foreground text-sm">
                IT Infra Engineer & Linux Enthusiast from India.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a 
              href="https://github.com/HackyCoder0951" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/jignesh-ameta-621772134/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:jignesh.vision.17@gmail.com"
              className="p-3 rounded-xl bg-secondary/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>

          {/* Divider */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              © {new Date().getFullYear()} Jignesh Ameta — Built with 
              <Heart className="h-4 w-4 text-primary animate-pulse" />
              for technology
            </p>
          </div>

          {/* Back to Top Button */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollToTop}
            className="rounded-full hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 hover:-translate-y-1"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
