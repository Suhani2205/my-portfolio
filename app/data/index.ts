export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Education", link: "#education" },
  { name: "Responsibilities", link: "#responsibilities" },
  { name: "Contact", link: "#contact" },
];

export interface Project {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link?: string;
  liveLink?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: " AI-Powered Trip Itinerary Generator",
    des: "This is a full-stack AI-based trip planner that generates a personalized travel itinerary based on your inputs like destination, number of days, people traveling, and budget.",
    img: "trip-planner.png",
    iconLists: ["/icons/langchain.svg", "/icons/openai.svg", "/icons/qdrant.svg", "/icons/ai.svg"],
    link: "https://github.com/Suhani2205/my-itinerary-generator",
    liveLink: "https://my-itinerary-generator.vercel.app/"
  },
  {
    id: 2,
    title: "Multiple Disease Prediction Chatbot Using Machine Learning",
    des: "Predicts heart disease, diabetes, PCOS, malaria using symptoms or diagnostic inputs from users.",
    img: "/streamlit3.png",
    iconLists: ["/icons/typescript.svg", "/icons/nextjs.svg", "/icons/firebase.svg"]

  },
  {
    id: 3,
    title: "E-Commerce Website",
    des: "Implemented product grids, navigation bar, and layout components resembling an E-Commerce Website.",
    img: "/amazon.png",
    iconLists: ["/icons/react.svg", "/icons/prisma.svg", "/icons/postgresql.svg"],
    link: "https://github.com/Suhani2205/Project-Amazon_clone"
  },
  {
    id: 4,
    title: "Portfolio Website",
    des: "Personal portfolio website built with Next.js, TailwindCSS, and Aceternity UI for a sleek, responsive design.",
    img: "/portfolio.png",
    iconLists: ["/icons/nextjs.svg", "/icons/tailwindcss.svg", "/icons/aceternity.svg"],
    link: "https://github.com/Suhani2205/my-portfolio",
    liveLink: "https://my-portfolio-blue-one-80.vercel.app/"
  }
];



export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url:"https://github.com/Suhani2205"
  },
  {
    id: 2,
    img: "/link1.svg",
    url:"https://www.linkedin.com/in/suhani-gupta-2bb1a2272/"
    
  },
];

// Education Section Data
export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
}

export const educationData: EducationItem[] = [
  {
    institution: "The LNM Institute of Information Technology, Jaipur",
    degree: "B.Tech in Electronics and Communication Engineering",
    year: "2022 – 2026",
  },
  {
    institution: "Cambridge Court High School, Jaipur",
    degree: "Class XII – CBSE",
    year: "2021 – 2022",
  },
  {
    institution: "Cambridge Court High School, Jaipur",
    degree: "Class X – CBSE",
    year: "2019 – 2020",
  },
];

// Responsibilities Section Data
export interface Responsibility {
  role: string;
  org: string;
  duration: string;
  details: string[];
}

export const responsibilities: Responsibility[] = [
  {
    role: "Teaching Assistant, Data Structures and Algorithms Lab",
    org: "LNMIIT",
    duration: "Jan 2025 – Apr 2025",
    details: [
      "Assisted lab sessions for 80 students in core Data Structures course.",
      "Covered topics: Linked Lists, Stacks, Queues, Trees, Heaps, Graphs."
    ],
  },
  {
    role: "Organizer, TEDxLNMIIT'25",
    org: "LNMIIT",
    duration: "Mar 2024 – Jan 2025",
    details: [
      "Coordinated end-to-end execution of TEDxLNMIIT 2025 event.",
      "Led sponsorship, logistics, speaker curation. Worked with 40+ volunteers."
    ],
  },
  {
    role: "Coordinator, Media Cell LNMIIT",
    org: "LNMIIT",
    duration: "Mar 2024 – Mar 2025",
    details: [
      "Managed communications, social media strategy, and event promotion.",
      "Led 60+ volunteers handling media coverage for campus events."
    ],
  },
];

// Skills Section Data
export interface Technology {
  name: string;
}

export interface SkillCardProps {
  category: string;
  skills: Technology[];
  index: number;
}

export interface SkillCategory {
  id: number;
  category: string;
  technologies: Technology[];
}

export const skills: SkillCategory[] = [
  {
    id: 1,
    category: "Programming Languages",
    technologies: [
      { name: "C++" },
      { name: "C" },
      { name: "MySQL" },
    ]
  },
  {
    id: 2,
    category: "Frontend Development",
    technologies: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "TailwindCSS" },
      { name: "ShadCN" },
      { name: "Aceternity UI" },
      { name: "React.js" },
      { name: "API Integration" }
    ]
  },
  {
    id: 3,
    category: "Backend & Database",
    technologies: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
      { name: "HTTP Server" },
      { name: "Firebase" }
    ]
  },
  {
    id: 4,
    category: "Frameworks & Tools",
    technologies: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "Streamlit" },
      { name: "Jupyter" },
      { name: "PyCharm" }
    ]
  },
  {
    id: 5,
    category: "ML & Data Science",
    technologies: [
      { name: "TensorFlow" },
      { name: "PyTorch" },
      { name: "Scikit-learn" },
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Seaborn" }
    ]
  },
  {
    id: 6,
    category: "Computer Science Fundamentals",
    technologies: [
      { name: "DSA" },
      { name: "DBMS" },
      { name: "OOPs" },
      { name: "CNs" },
      { name: "OS" }
    ]
  }
];
