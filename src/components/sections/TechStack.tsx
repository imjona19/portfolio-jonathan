import { TechCard } from "../TechCard";
import technologiesData from "../../data/data.json";

export const TechStack = () => {
    return(
        <section id="techStack" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 mt-5">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Stack Tecnológico</h2>

            {Object.entries(technologiesData.Technologies).map(([category, techs]) => (
                <div className="mb-10" key={category}>
                    {/* Semánticamente es mejor usar h3 aquí, con tamaño adaptativo */}
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-5">{category}</h3>

                    {/* El Grid responsivo: 1 col (móvil), 2 cols (tablet), 3 cols (laptop), 4 cols (monitor grande) */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                        {Object.entries(techs).map(([key, tech]) => (
                            <TechCard
                                key={key}
                                icon={tech.Icon}
                                name={tech.Name}
                                description={tech.Description}
                                colorStart={tech.ColorStart}
                                colorEnd={tech.ColorEnd}
                            />
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
};