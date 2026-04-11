import { TechCard } from "../TechCard";
import technologiesData from "../../data/data.json";

export const TechStack = () => {
    return(
        <section className="max-w-7xl mx-auto px-6 mb-12">
            <h2 className="text-3xl font-bold text-white mb-8">Stack Tecnológico</h2>

            {Object.entries(technologiesData.Technologies).map(([category, techs]) => (
                <div className="mb-6" key={category}>
                    <h2 className="text-2xl font-bold text-white mb-5">{category}</h2>

                    <div className="grid grid-cols-3 gap-4">
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