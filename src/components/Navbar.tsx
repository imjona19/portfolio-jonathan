import { Button } from "./Button";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#0B111C] border-b border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex flex-col">
           <span className="text-lg font-bold text-white tracking-tight">Jonathan<span className="text-[#1A97DB]"> Falcón</span></span>
           <span className="text-xs text-slate-400 font-mono">Software Engineer</span>
        </div>
        
        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          <li className="hover:text-[#1A97DB] transition-colors cursor-pointer">Inicio</li>
          <li className="hover:text-[#1A97DB] transition-colors cursor-pointer">Proyectos</li>
          <li className="hover:text-[#1A97DB] transition-colors cursor-pointer">Stack</li>
          <li className="hover:text-[#1A97DB] transition-colors cursor-pointer">Experiencia</li>
        </ul>

        <div className="hidden md:block">
            <Button variant="secondary">Descargar CV</Button>
        </div>
      </div>
    </nav>
  );
};