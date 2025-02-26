import HeroSection from "./components/sections/HeroSection";
import TopBar from "@/components/sections/TopBar"
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Experience from "./components/sections/Experience";
import Footer from "./components/sections/Footer";

function App() {
  return (
    <div>
      <TopBar />
      <HeroSection />
      <Skills />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
}

export default App;
