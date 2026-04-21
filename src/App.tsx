import { Navbar } from "./components/Navbar";
import { AboutMe } from "./components/sections/AboutMe";
import { Projects } from "./components/sections/Projects";
import { TechStack } from "./components/sections/TechStack";
import { ProfessionalExperience } from "./components/sections/ProfessionalExperience";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="min-h-screen bg-[#07080B] pb-12 font-sans selection:bg-[#0A1019] text-slate-200">
      <Navbar />
      
      <main>

        <AboutMe></AboutMe>
        <Projects></Projects>
        <TechStack></TechStack>
        <ProfessionalExperience></ProfessionalExperience>
        <Contact></Contact> 
      </main>
    </div>
  );
}

export default App;