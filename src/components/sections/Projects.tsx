import { ProjectCard } from "../Card";
import technologiesData from "../../data/data.json";

export const Projects = () => {
  return(
    // Añadí sm:px-6 y lg:px-8 para mejor margen en distintas pantallas
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-5">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Proyectos Destacados</h2>

      {Object.entries(technologiesData.Projects).map(([category, techs]) => (
        <div className="mb-10" key={category}>
          {/* Cambié a h3 por semántica y ajusté tamaños responsivos */}
          <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-5">{category}</h3>

          {/* ESTA ES LA CLAVE RESPONSIVA: 1 col móvil, 2 cols tablet, 3 cols desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techs).map(([key, tech]) => (
              <ProjectCard
                key={key}
                title={tech.Title}
                description={tech.Description}
                tags={tech.Tags}
                imageUrl={tech.ImageUrl}
                imageFit={tech.ImageFit}
                repoUrl={tech.RepoUrl}
                demoUrl={tech.DemoUrl}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

// import { ProjectCard } from "../Card";
// import technologiesData from "../../data/data.json";

// type Tech = {
//   Title: string;
//   Description: string;
//   Tags: string[];
//   ImageUrl?: string;
//   ImageFit?: boolean;
//   RepoUrl?: string;
//   DemoUrl?: string;
//   Featured?: boolean;
// };

// export const Projects = () => {
//   const all = Object.values(technologiesData.Projects)
//     .flatMap(cat => Object.values(cat) as Tech[]);

//   const featured = all.filter(p => p.Featured);
//   const rest     = all.filter(p => !p.Featured);

//   const toProps = (p: Tech, i: number) => ({
//     index:       i + 1,
//     title:       p.Title,
//     description: p.Description,
//     tags:        p.Tags,
//     imageUrl:    p.ImageUrl,
//     imageFit:    p.ImageFit,
//     repoUrl:     p.RepoUrl,
//     demoUrl:     p.DemoUrl,
//   });

//   return (
//     <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 mt-5">

//       <div className="flex items-end justify-between mb-10">
//         <div>
//           <p className="font-mono text-[11px] text-[#1A97DB] tracking-[0.18em] uppercase mb-1.5">
//             — trabajos
//           </p>
//           <h2 className="text-2xl sm:text-3xl font-bold text-white">Proyectos</h2>
//         </div>
//         <span className="font-mono text-[11px] text-[#252530] hidden sm:block">
//           {all.length.toString().padStart(2, "0")} proyectos
//         </span>
//       </div>

//       {/* Featured */}
//       {featured.map((p, i) => (
//         <ProjectCard key={i} {...toProps(p, i + 1)} featured />
//       ))}

//       {/* Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[10px]">
//         {rest.map((p, i) => (
//           <ProjectCard key={i} {...toProps(p, featured.length + i + 1)} />
//         ))}

//         {/* Placeholder próximamente */}
//         <div className="border border-dashed border-[#111118] rounded-xl flex flex-col items-center justify-center min-h-[200px] gap-1.5 hover:border-[#1e1e2a] transition-colors duration-300">
//           <span className="font-mono text-[16px] text-[#111118]">+</span>
//           <span className="font-mono text-[10px] text-[#111118] tracking-widest">próximamente</span>
//         </div>
//       </div>

//     </section>
//   );
// };