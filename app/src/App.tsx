import "./App.css";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutMe from "./components/AboutSection";
import ContactMe from "./components/ContactSection";

function App() {
  return (
    <div className="relative overflow-hidden min-h-screen">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#072929] via-[#2F702F] to-[#E05219] animate-gradientMove opacity-90"></div>
      <div className="absolute inset-0 -z-20 bg-neutral-900"></div>
      <HeroSection />
      <ProjectsSection />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
