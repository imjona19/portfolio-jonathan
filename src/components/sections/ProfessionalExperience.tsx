import { ExperienceItem } from "../ExperienceItem";
import experienceData from "../../data/data.json";

export const ProfessionalExperience = () => {
  return (
    <section id="professionalExperience" className="max-w-7xl mx-auto px-6 mb-12 mt-5">
      <h2 className="text-3xl font-bold text-white mb-8">
        Experiencia Laboral
      </h2>

      <div className="relative">
        {/* Línea vertical de la timeline */}
        <div className="absolute left-5 top-0 bottom-0 w-px bg-[#2B2B30]" />

        <ol className="flex flex-col gap-0">
          {experienceData.ProfessionalExperience.map((item, index) => (
            <ExperienceItem key={index} {...item} index={index} />
          ))}
        </ol>
      </div>
    </section>
  );
};