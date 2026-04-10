import { ProjectCard } from "../Card";

export const Projects = () => {
    return(
        <section className="max-w-5xl mx-auto px-6 mb-12 mt-5">
            <h2 className="text-3xl font-bold text-white mb-8">Proyectos Destacados</h2>
            
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
    );
};
