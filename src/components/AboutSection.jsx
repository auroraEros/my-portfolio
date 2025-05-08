import { Code, Palette, Wand } from "lucide-react";
import FeatureCard from "./FeatureCard";
import ProfileIntro from "./ProfileIntro";

function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {" "}
          <ProfileIntro />
          <div className="grid grid-cols-1 gap-6">
            <FeatureCard
              icon={<Code className="h-6 w-6 text-primary" />}
              title="Web Development"
            >
              Building responsive and accessible websites with React, Tailwind,
              and modern front-end tools.
            </FeatureCard>

            <FeatureCard
              icon={<Palette className="h-6 w-6 text-primary" />}
              title="UI Implementation"
            >
              Translating Figma designs into clean, functional components with
              attention to detail.
            </FeatureCard>

            <FeatureCard
              icon={<Wand className="h-6 w-6 text-primary" />}
              title="Learning & Growth"
            >
              Constantly learning new technologies and refining my craft to
              deliver better user experiences.
            </FeatureCard>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
