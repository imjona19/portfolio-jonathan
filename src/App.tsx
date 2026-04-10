import { Navbar } from "./components/Navbar";
import { ProjectCard } from "./components/Card";
import { AboutMe } from "./components/sections/AboutMe";
import { Projects } from "./components/sections/Projects";

function App() {
  return (
    <div className="min-h-screen bg-[#07080B] pb-12 font-sans selection:bg-[#0A1019] text-slate-200">
      <Navbar />
      
      <main>

        <AboutMe></AboutMe>
        <Projects></Projects>

        

        <section className="max-w-5xl mx-auto px-6 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8">Experiencia</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProjectCard 
              title="Quantik ERP"
              description="Sistema de gestión empresarial para ventas, inventario y control de proveedores. Interfaz dinámica y arquitectura escalable orientada al rendimiento."
              tags={['Django', 'Python', 'HTMX', 'Tailwind']}
            />
            
            <ProjectCard 
              title="Portal de Cumplimiento (SIROC/REPSE)"
              description="Desarrollo y mantenimiento de portales de cumplimiento técnico con validación estricta de documentos, OCR y consultas optimizadas a bases de datos."
              tags={['.NET Core', 'SQL Server', 'C#', 'React']}
            />
          </div>
        </section>

      </main>
    </div>
  );
}

export default App;