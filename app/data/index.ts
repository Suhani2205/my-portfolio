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
    id: 1,
    title: "Multiple Disease Prediction Chatbot Using Machine Learning",
    des: "Predicts heart disease, diabetes, PCOS, malaria using symptoms or diagnostic inputs from users.",
    img: "/streamlit3.png",
    iconLists: ["/icons/typescript.svg", "/icons/nextjs.svg", "/icons/firebase.svg"]

  },
  {
    id: 2,
    title: "E-Commerce Website",
    des: "Implemented product grids, navigation bar, and layout components resembling an E-Commerce Website.",
    img: "/amazon.png",
    iconLists: ["/icons/react.svg", "/icons/prisma.svg", "/icons/postgresql.svg"],
    link: "https://github.com/Suhani2205/Project-Amazon_clone"
  },
  {
    id: 3,
    title: "Portfolio Website",
    des: "Personal portfolio website built with Next.js, TailwindCSS, and Aceternity UI for a sleek, responsive design.",
    img: "/portfolio.png",
    iconLists: ["/icons/nextjs.svg", "/icons/tailwindcss.svg", "/icons/aceternity.svg"]
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