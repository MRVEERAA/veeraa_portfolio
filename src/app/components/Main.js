import Introduction from "./Introduction";
import Skills from "./Skills";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import Achievements from "./Achievements";

export default function Main() {
  return (
    <main className="mx-8 flex flex-col justify-center gap-16 md:mx-auto md:w-10/12 md:gap-48 lg:w-9/12 xl:w-2/3 2xl:w-1/2">
      <Introduction />
      <About />
      <Skills />
      <Projects />
      <Achievements />
      <Contact />
    </main>
  );
}
