import { ProjectCard } from "../Card";
import technologiesData from "../../data/data.json";

export const Projects = () => {
    return(
        <section className="max-w-7xl mx-auto px-6 mb-12 mt-5">
            <h2 className="text-3xl font-bold text-white mb-8">Proyectos Destacados</h2>

            {Object.entries(technologiesData.Projects).map(([category, techs]) => (
                <div className="mb-6" key={category}>
                    <h2 className="text-2xl font-bold text-white mb-5">{category}</h2>

                    <div className="grid grid-cols-3 gap-4">
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
