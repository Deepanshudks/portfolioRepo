import { TbBrandCpp, TbBrandNextjs, TbSql } from "react-icons/tb";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiPostman,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiPrisma,
  SiMoonrepo,
  SiTurborepo,
} from "react-icons/si";
import {
  FaReact,
  FaNodeJs,
  FaAws,
  FaDocker,
  FaCloudflare,
} from "react-icons/fa";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineHome,
} from "react-icons/ai";
import {
  BsTwitter,
  BsFillPersonVcardFill,
  BsGit,
  BsGithub,
} from "react-icons/bs";

export const skillsData = [
  {
    category: "Languages",
    icons: [
      { icon: TbBrandCpp, size: "w-5 h-5" },
      { icon: SiJavascript, size: "w-5 h-5" },
      { icon: SiTypescript, size: "w-5 h-5" },
      { icon: TbSql, size: "w-7 h-7" },
    ],
  },
  {
    category: "Libraries/Frameworks",
    icons: [
      { icon: SiTailwindcss, size: "w-5 h-5" },
      { icon: FaReact, size: "w-5 h-5" },
      { icon: TbBrandNextjs, size: "w-5 h-5" },
      { icon: FaNodeJs, size: "w-5 h-5" },
      { icon: SiExpress, size: "w-5 h-5" },
    ],
  },
  {
    category: "Databases",
    icons: [
      { icon: SiMongodb, size: "w-5 h-5" },
      { icon: SiPostgresql, size: "w-5 h-5" },
      { icon: SiMysql, size: "w-7 h-7" },
    ],
  },
  {
    category: "Tools/Technologies",
    icons: [
      { icon: SiPostman, size: "w-5 h-5" },
      { icon: SiPrisma, size: "w-5 h-5" },
      { icon: BsGit, size: "w-5 h-5" },
      { icon: BsGithub, size: "w-5 h-5" },
      { icon: FaDocker, size: "w-5 h-5" },
      { icon: FaAws, size: "w-5 h-5" },
    ],
  },
];

export const resumeLink =
  "https://drive.google.com/file/d/1DUC9-ZNzDR8EzLVG6korauHDgwvURvtB/view?usp=drive_link";

export const socialLinks = [
  { href: "https://x.com/Deepanshudk08", icon: BsTwitter, label: "Twitter" },
  {
    href: "https://www.instagram.com/deepanshudks?igsh=MTFyamdkeGF5eHAxOQ==",
    icon: AiFillInstagram,
    label: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/kuldeepgaud-dev",
    icon: AiFillLinkedin,
    label: "LinkedIn",
  },
  {
    href: "https://github.com/Deepanshudks",
    icon: AiFillGithub,
    label: "GitHub",
  },
  {
    href: "mailto:kuldeepgaud.0810@gmail.com",
    icon: AiFillMail,
    label: "Email",
  },
];

export const navLinks = [
  { href: "/home", icon: AiOutlineHome, label: "Home" },
  { href: "/about", icon: BsFillPersonVcardFill, label: "About" },
];

export const experienceData = [
  {
    position: "Trainee Software Engineer",
    companyName: "Singsys",
    joinAt: "March 2025",
    leaveAt: "Present",
    websiteUrl: "https://www.linkedin.com/company/singsys-pte-ltd/about/",
    description: [
      "Contributed to multiple real-time client-facing projects using React.js, Next.js, and Material UI, enhancing product reliability and UI/UX.",
      "Optimized component performance by 30% through refactoring, debouncing, and minimizing unnecessary re-renders.",
      "Resolved over 50+ production bugs, improving system stability and maintaining high-quality codebase standards.",
      "Actively collaborated with cross-functional teams in Agile sprints, delivering features ahead of deadlines.",
    ],
  },
];

export const projectsData = [
  {
    name: "Quicklink",
    tag: "Maintained",
    // liveLink: "http://15.271.30:3000",
    githubLink: "https://github.com/Deepanshudks/Quicklink.git",
    liveLink: "http://3.6.113.20:3000/",
    description: [
      "QuickLink is a fast and secure file-sharing app that lets users upload files and share them via QR codes.",
      "It uses AWS S3 for storage, PostgreSQL for database management, and Dockerized deployment on AWS EC2 for scalability and reliability.",
    ],
    category: "Full Stack Development",
    techStack:
      "React.js, Tailwind CSS, Express, PostgreSQL (Neon), Prisma, Docker, Nginx, AWS EC2, GitHub Actions",
  },
  {
    name: "Medium Clone",
    tag: "",
    githubLink: "https://github.com/Deepanshudks/medium.git",
    liveLink: "https://blogmedium1.netlify.app/",
    description: [
      "Medium Clone is a full-stack blogging platform that allows users to create, edit, and publish articles.",
      "It features authentication, rich text editing, and a seamless user experience",
    ],
    category: "Web Development",
    techStack:
      "Vite, React, TypeScript, Tailwind CSS, Hono, Cloudflare Workers, PostgreSQL (Prisma ORM), Zod, and @deepanshdks/medium-common for shared utilities.",
  },
  {
    name: "YourBook",
    tag: "",
    liveLink: "https://yourbook-frontend.onrender.com/",
    githubLink: "https://github.com/Deepanshudks/NoteBook.git",
    description: [
      "Implemented secure login and registration with JWT-based authentication.",
      "Create, edit, delete, and organize notes effortlessly.",
      "Cloud storage with MongoDB Atlas for accessibility and data security",
      "Used React Hooks for state management and component logic, and Context API for efficient global state management.",
      "Responsive and modern UI built with React and Tailwind CSS.",
    ],
    category: "Web Development",
    techStack:
      "React.js, Tailwind CSS, Node.js, Express.js, MongoDB Atlas, JWT (JSON Web Token).",
  },
  {
    name: "Alabay",
    tag: "",
    liveLink: "https://exquisite-crostata-d65e2c.netlify.app/",
    // githubLink: "https://github.com/",
    description: [
      "It is a responsive UI project built with React that features smooth animations, elegant design, and an interactive user experience.",
      "It uses Tailwind CSS for styling, Framer Motion for animations, and React Slick & Swiper for carousels.",
      "The project ensures a modern, fast, and visually appealing interface.",
    ],
    category: "Frontend Development",
    techStack:
      "React.js, TypeScript, Tailwind CSS, Framer Motion, React Slick, Swiper",
  },
  {
    name: "News-Space",
    tag: "",
    githubLink: "https://github.com/Deepanshudks/NewsSpace.git",
    description: [
      "Fetches real-time news updates from the News API, ensuring users stay informed with the latest headlines.",
      "Supports category-based filtering, allowing users to explore news in various sections like sports, technology, business, and more.",
      "Features a clean and responsive UI built with Bootstrap, ensuring a seamless experience across all devices.",
    ],
    category: "Web Development",
    techStack: "React.js, JavaScript, Bootstrap, News API.",
  },
  {
    name: "TextUtils",
    tag: "",
    githubLink: "https://github.com/Deepanshudks/TextUtils.git",
    liveLink: "https://analyzetextt.netlify.app/",
    description: [
      "It is a React-based text manipulation tool that allows users to modify and analyze text efficiently. ",
      "It includes features like case conversion, word and character count, extra space removal, text copying, and dark mode for better usability.",
    ],
    category: "Web Development",
    techStack: "React.js, JavaScript, Bootstrap.",
  },
];
