import { useState } from "react";
import { skills } from "../helpers/constants";
import { capitalize } from "../helpers/capitalizeText";
import { cn } from "../lib/utils";

function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const categories = ["all", "frontend", "tools"];
  const selectedSkills =
    activeCategory === "all"
      ? skills
      : activeCategory === "frontend"
      ? skills.filter((skill) => skill.category === "frontend")
      : skills.filter((skill) => skill.category === "tools");

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary/70 text-forefround hover:bd-secondary"
              )}
            >
              {capitalize(category)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {selectedSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-card p-6 rounded-lg card-hover shadow-xs"
            >
              <div className=" mb-4">
                <h3 className="flex flex-col items-start gap-y-2">
                  <img
                    src={skill.icon}
                    alt={skill.name}
                    width={40}
                    height={40}
                  />
                  <span>{skill.name}</span>
                </h3>
              </div>

              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-forground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
