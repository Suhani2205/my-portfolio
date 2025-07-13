import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Responsibilities from "@/components/Responsibilities";

export default function Home() {
  return (
    <>
      <Hero />
      <Education />
      <RecentProjects />
      <Skills />
      <Responsibilities />
      <About />
      <Footer />
    </>
  );
}