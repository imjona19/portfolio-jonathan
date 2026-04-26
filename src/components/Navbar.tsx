import { useState } from "react";
import { Button } from "./Button";

const CV_URL = "/assets/CV-JonathanYaelFalconBustos.pdf";

const NAV_LINKS = [
  { label: "Inicio",      href: "#aboutMe" },
  { label: "Proyectos",   href: "#projects" },
  { label: "Stack",       href: "#techStack" },
  { label: "Experiencia", href: "#professionalExperience" },
  { label: "Contacto",    href: "#contact" },
];

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (

    <nav className="fixed top-0 z-50 w-full backdrop-blur-md bg-[#0B111C] border-b border-slate-800/50">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">

        <div className="flex flex-col">
          <span className="text-lg font-bold text-white tracking-tight">
            Jonathan<span className="text-[#1A97DB]"> Falcón</span>
          </span>
          <span className="text-xs text-slate-400 font-mono">Software Engineer</span>
        </div>

        <ul className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href} className="hover:text-[#1A97DB] transition-colors cursor-pointer">
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a href={CV_URL} download>
            <Button variant="secondary">Descargar CV</Button>
          </a>
        </div>

        
        <button
          onClick={() => setMenuOpen(prev => !prev)}
          className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-lg hover:bg-slate-800 transition-colors"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
        >
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 origin-center
            ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300
            ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span className={`block w-5 h-0.5 bg-slate-300 transition-all duration-300 origin-center
            ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out
        ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <ul className="flex flex-col px-6 pb-5 pt-2 gap-1 border-t border-slate-800/50">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
             <a 
                href={href}
                onClick={handleNavClick}
                className="block py-2.5 text-sm font-medium text-slate-300 hover:text-[#1A97DB] transition-colors"
              >
                {label}
              </a>
            </li>
          ))}

          <li className="pt-3 mt-1 border-t border-slate-800/50">
            <a href={CV_URL} download onClick={handleNavClick}>
              <Button variant="secondary">Descargar CV</Button>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};