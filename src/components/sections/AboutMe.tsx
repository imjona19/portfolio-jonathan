import { ParticlesBackground } from "../animations/animationBackground";

export const AboutMe = () => {

    return(
        <section id="aboutMe" className="relative flex flex-col items-center justify-center min-h-[100vh] px-4 md:px-6 py-20 fade-up overflow-hidden">
            <ParticlesBackground />

            <span className="relative inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.18em] uppercase text-[#1A97DB] px-[18px] py-2 rounded-full border border-[#1A97DB]/30 bg-[#1A97DB]/[0.06] mb-3">
            <span className="relative flex-shrink-0 w-[7px] h-[7px]">
                <span className="absolute inset-0 rounded-full bg-[#1A97DB] animate-ping opacity-50" />
                <span className="absolute inset-0 rounded-full bg-[#1A97DB]" />
            </span>
            Open to work
            </span>

            {/* Nombre - Escala desde 4xl en móvil hasta 7xl/8xl en desktop */}
            <h1 className="text-4xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-2 text-center">
            Jonathan<span className="text-[#1A97DB]"> Falcón</span>
            </h1>

            {/* Título Profesional - Ajuste de escala y margen */}
            <h2 className="text-lg sm:text-xl md:text-3xl text-slate-400 font-mono mb-8 text-center">
            Software Engineer
            </h2>
            
            {/* Párrafo Descriptivo - Control de lectura (max-w) y balanceo de texto */}
            <p className="font-mono text-sm md:text-base text-slate-300 tracking-tight text-center max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl leading-relaxed">
            Software Engineer especializado en el ecosistema .NET (Core/Framework) y React. 
            Con experiencia en el ciclo de vida completo del software, desarrollo soluciones escalables para entornos web, móviles y de escritorio. 
            Experto en el diseño y optimización de bases de datos relacionales con SQL Server.
            </p>
        </section>
    );
};