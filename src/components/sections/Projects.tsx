// import { ProjectCard } from "../Card";
// import technologiesData from "../../data/data.json";

// export const Projects = () => {
//     return(
//         <section className="max-w-7xl mx-auto px-6 mb-12 mt-5">
//             <h2 className="text-3xl font-bold text-white mb-8">Proyectos Destacados</h2>

//             {Object.entries(technologiesData.Projects).map(([category, techs]) => (
//                 <div className="mb-6" key={category}>
//                     <h2 className="text-2xl font-bold text-white mb-5">{category}</h2>

//                     <div className="grid grid-cols-3 gap-4">
//                         {Object.entries(techs).map(([key, tech]) => (
//                             <ProjectCard
//                             key={key}
//                             title={tech.Title}
//                             description={tech.Description}
//                             tags={tech.Tags}
//                             imageUrl={tech.ImageUrl}
//                             imageFit={tech.ImageFit}
//                             />
//                         ))}
//                     </div>
//                 </div>
//             ))}
//         </section>
//     );
// };

import { ProjectCard } from "../Card";
import technologiesData from "../../data/data.json";

export const Projects = () => {
  return(
    // Añadí sm:px-6 y lg:px-8 para mejor margen en distintas pantallas
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-5">
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
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};