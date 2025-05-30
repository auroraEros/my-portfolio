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

    icon: "/images/html.png",
  },
  {
    name: "JavaScript",

    icon: "/images/js.png",
  },
  { name: "React", icon: "/images/react.png" },
  {
    name: "TypeScript",

    icon: "/images/ts.png",
  },
  {
    name: "TailwindCSS",

    icon: "/images/tailwind.png",
  },
  {
    name: "Next.js",

    icon: "/images/next.png",
  },
  // Tools
  {
    name: "Git/GitHub",

    icon: "/images/github.png",
  },
  { name: "Figma", icon: "/images/figma.png" },
  { name: "VS Code", icon: "/images/vsc.png" },
];

export const projects = [
  {
    id: 1,
    title: "The Wild Oasis Admin Page",
    description:
      "Wild Oasis is a Single Page Application (SPA) designed for the internal management of a fictional vacation rental Company. Built with React, TailwindCss and Supabase, it offers real-time updates, dark mode, and a smooth user experience. ",
    image: "/projects/react-admin.png",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://the-wild-oasis-admin-six.vercel.app/",
    githubUrl: "https://github.com/auroraEros/the_wild_oasis_admin",
    category: "react.js",
  },
  {
    id: 2,
    title: "The Wild Oasis Website ",
    description:
      "This is the customer version of the hotel management web app, where users can View cabins with descriptions and images, book a them based on available dates and select the number of guests, sign in with Google to manage bookings and view, edit or cancel their booked cabins.",
    image: "/projects/next-oasis.png",
    tags: ["Next.js", "NextAuth.js", "Supabase", "TailwindCSS"],
    demoUrl: "https://the-wild-oasis-customer-website-drab.vercel.app/",
    githubUrl: "https://github.com/auroraEros/the_wild_oasis_customer_website",
    category: "next.js",
  },
  {
    id: 3,
    title: "Portfolio",
    description:
      "A  personal portfolio website built with React and TailwindCSS, designed to showcase my frontend development skills and projects. Fully responsive, minimalistic UI, and optimized for performance.",
    image: "/projects/react-portfolio.png",
    tags: ["React", "TailwindCSS", "react-dom", "vite"],
    demoUrl: "https://my-portfolio-nu-ten-56.vercel.app/",
    githubUrl: "https://github.com/auroraEros/my-portfolio",
    category: "react.js",
  },
  {
    id: 4,
    title: "Blog Management",
    description:
      "A modern blog app built with Next.js, featuring rich-text editing, image upload, dark mode, and role-based dashboards.Authentication is handled via Clerk, with MongoDB and Mongoose for backend data.Images are stored in Supabase, and the app supports both regular and admin users. ",
    image: "/projects/next-blog.png",
    tags: [
      "Next.js",
      "Clerk",
      "MongoDB",
      "Mongoose",
      "TailwindCSS",
      "Supabase",
    ],
    demoUrl: "https://sahar-blog.vercel.app/",
    githubUrl: "https://github.com/auroraEros/next-blog",
    category: "next.js",
  },
  {
    id: 5,
    title: "Pizza Delivery",
    description:
      "Very simple application, where users can order one or more pizzas from a menu. Build with React, React Router, Redux and Tailwindcss",
    image: "/projects/react-Order-page.png",
    tags: ["React", "React Router", "Redux"],
    demoUrl: "https://react-pizza-xi-kohl.vercel.app/",
    githubUrl: "https://github.com/auroraEros/react-pizza",
    category: "react.js",
  },
  {
    id: 6,
    title: "Note App ",
    description:
      "A simple note-taking application built with React and TypeScript. This project was primarily created to practice TypeScript while implementing common features such as adding, sorting, completing, and deleting notes.",
    image: "/projects/ts.png",
    tags: ["React", "TypeScript", "CSS"],
    demoUrl: "https://aurora-note-app.netlify.app/",
    githubUrl: "https://github.com/auroraEros/note-app-typescript",
    category: "react.js",
  },
  {
    id: 11,
    title: "Todo List",
    description:
      "A simple and clean Todo List application built with vanilla JavaScript, HTML, and CSS. Add new tasks with a title and timestamp, mark tasks as completed or uncompleted, filter and delete tasks and Persistent data with localStorage and Fully responsive.",
    image: "/projects/js-todo.png",
    tags: ["JavaScript", "CSS", "HTML"],
    demoUrl: "https://auorora-todo-list.netlify.app/",
    githubUrl: "https://github.com/auroraEros/toDoList",
    category: "javaScript",
  },
  {
    id: 8,
    title: "OmniFood",
    description:
      "An online pizza ordering app built with React and Redux, featuring a dynamic menu, cart functionality, and priority ordering — all without user authentication.",
    image: "/projects/omni-html.png",
    tags: ["React", "TailwindCSS", "react-dom", "vite"],
    demoUrl: "https://aurora-omnifood.netlify.app/",
    githubUrl: "https://github.com/auroraEros/omniFood",
    category: "html&Css",
  },
  {
    id: 9,
    title: "Trillo",
    description:
      "Trillo is a modern, responsive hotel booking landing page built with HTML, SCSS, and JavaScript. This frontend-only project is a showcase of advanced layout techniques using Flexbox, CSS Grid, and a modular SCSS architecture.",
    image: "/projects/htmlSass.png",
    tags: ["HTML5", "SCSS"],
    demoUrl: "https://aurora-trillo.netlify.app/",
    githubUrl: "https://github.com/auroraEros/trillo",
    category: "html&Css",
  },
  {
    id: 10,
    title: "Roulette Dice Game",
    description:
      "A 2-player strategy game blending Russian roulette and dice mechanics.Test your luck against an AI opponent and survive the shootout! ",
    image: "/projects/game-js.png",
    tags: ["JavaScript", "HTML5", "CSS"],
    demoUrl: "https://the-roulette-dice-game.netlify.app/",
    githubUrl: "https://github.com/auroraEros/the-roulette-dice-game",
    category: "javaScript",
  },
  {
    id: 11,
    title: "Inventory Management App",
    description:
      "This project is an inventory management system built using Object-Oriented Programming (OOP) principles. It allows users to manage categories and products with functionalities like adding, deleting, searching, and sorting products. The data is stored in the browser's localStorage. ",
    image: "/projects/js-inventory.png",
    tags: ["JavaScript", "HTML5", "CSS"],
    demoUrl: "https://aurora-inventory.netlify.app/",
    githubUrl: "https://github.com/auroraEros/Inventory-App-with-OOP",
    category: "javaScript",
  },
];
