import "./App.css";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AboutMe from "./components/AboutSection";
import ContactMe from "./components/ContactSection";

function App() {
  return (
    <div className="bg-gray-50">
      <HeroSection />
      <ProjectsSection />
      <AboutMe />
      <ContactMe />
    </div>
  );
}

export default App;
