import ProjectShowcase from "./sections/ProjectShowcase.tsx";
import Hero from "./sections/Hero.tsx";
import TechStack from "./sections/TechStack.tsx";
import Contact from "./sections/Contact.tsx";
import Pagewrapper from "./sections/Pagewrapper.tsx";

export default function Home() {
  return (
    <Pagewrapper>
      <Hero />
      <TechStack />
      <ProjectShowcase />
      <Contact />
    </Pagewrapper>
  );
}
