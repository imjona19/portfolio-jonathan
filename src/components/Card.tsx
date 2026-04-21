interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  imageFit?: boolean;
}

export const ProjectCard = ({ title, description, tags, imageUrl, imageFit }: ProjectCardProps) => {
  return (
    // Agregué h-full para que todas las cards en una fila midan lo mismo
    <article className="flex flex-col h-full rounded-xl bg-[#121214] border border-[#2B2B30] hover:border-[#1A3A6C] transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-[#1A3A6C]/20">
      
      {/* Contenedor de la imagen. h-40 en móvil, h-48 en pantallas más grandes. shrink-0 evita que se aplaste */}
      <div className="w-full h-40 sm:h-48 bg-slate-800 overflow-hidden relative shrink-0">
        {imageFit ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-contain p-4 sm:p-6 group-hover:scale-105 transition-transform duration-500" 
          />
        ) : imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500 text-sm">
            [ Sin imagen ]
          </div>
        )}
      </div>
      
      {/* Contenedor de texto con p-5 en móvil y p-6 en desktop */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3 sm:gap-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-100">{title}</h3>
        <p className="text-slate-400 flex-1 text-sm sm:text-base leading-relaxed">{description}</p>
        
        {/* Renderizado de los tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {tags.map(tag => (
            // Reparado el text-[#] vacío. Ahora usa un azul claro que hace juego con el borde hover.
            <span key={tag} className="px-2.5 py-1 bg-slate-800/50 text-blue-400 text-xs font-semibold rounded-full border border-slate-700/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};