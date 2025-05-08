import { ArrowDown } from "lucide-react";
import { cn } from "../lib/utils";

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Sahar
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Javadi
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm a growing front-end developer with a strong passion for clean
            design and user-friendly interfaces. While I'm still building my
            skills, I'm committed to learning, improving, and creating
            meaningful web experiences.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-3">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "text-center absolute bottom-8 left-1/2 transform -translate-x-1/2",
          "flex flex-col items-center animate-bounce"
        )}
      >
        <span className="text-sm text-muted-forground mb-2">Scroll</span>
        <ArrowDown className="w-6 h-6 text-primary" />
      </div>
    </section>
  );
}

export default HeroSection;
