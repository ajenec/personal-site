import "./App.css";
import "./index.css";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AnimatedGlow from "./components/AnimatedGlow";
import AboutMe from "./components/AboutSection";
import ContactMe from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <main className="scheherazade bg-[#070b18] min-h-screen relative text-white">
      <AnimatedGlow />
      <HeroSection />
      <ProjectsSection />
      <AboutMe />
      <ContactMe />
      <Footer />
    </main>
  );
}

export default App;
