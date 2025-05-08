
export const SCROLL_THRESHOLD = 10;

export const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills = [
  // Frontend
  {
    name: "HTML/CSS",
    level: 95,
    category: "frontend",
    icon: "/images/html.png",
  },
  {
    name: "JavaScript",
    level: 90,
    category: "frontend",
    icon: "/images/js.png",
  },
  { name: "React", level: 90, category: "frontend", icon: "/images/react.png" },
  {
    name: "TypeScript",
    level: 75,
    category: "frontend",
    icon: "/images/ts.png",
  },
  {
    name: "Tailwind CSS",
    level: 80,
    category: "frontend",
    icon: "/images/tailwind.png",
  },
  {
    name: "Next.js",
    level: 80,
    category: "frontend",
    icon: "/images/next.png",
  },
  // Tools
  {
    name: "Git/GitHub",
    level: 70,
    category: "tools",
    icon: "/images/github.png",
  },
  { name: "Figma", level: 60, category: "tools", icon: "/images/figma.png" },
  { name: "VS Code", level: 95, category: "tools", icon: "/images/vsc.png" },
];

export const projects = [
  {
    id: 1,
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
    mainTech: "",
  },
  {
    id: 2,
    title: "Orbit Analytics Dashboard",
    description:
      "Interactive analytics dashboard with data visualization and filtering capabilities.",
    image: "/projects/project2.png",
    tags: ["TypeScript", "D3.js", "Next.js"],
    demoUrl: "#",
    githubUrl: "#",
    mainTech: "",
  },
  {
    id: 3,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
    image: "/projects/project3.png",
    tags: ["React", "Node.js", "Stripe"],
    demoUrl: "#",
    githubUrl: "#",
    mainTech: "",
  },
];


