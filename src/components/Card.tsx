interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  imageFit?: boolean;
}

export const ProjectCard = ({ title, description, tags, imageUrl, imageFit }: ProjectCardProps) => {
  return (
    <article className="flex flex-col rounded-xl bg-[#121214] border border-[#2B2B30] hover:border-[#1A3A6C] transition-colors duration-300 overflow-hidden group">
      {/* Contenedor de la imagen con zoom on hover */}
      <div className="w-full h-48 bg-slate-800 overflow-hidden relative">
        {imageFit ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500" 
          />
        ) : imageUrl ? (
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-slate-500">
            [ Espacio para mockups o capturas ]
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-1 gap-4">
        <h3 className="text-xl font-bold text-slate-100">{title}</h3>
        <p className="text-slate-400 flex-1 text-sm leading-relaxed">{description}</p>
        
        {/* Renderizado de los tags */}
        <div className="flex flex-wrap gap-2 mt-auto pt-4">
          {tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-slate-800/50 text-[#] text-xs font-semibold rounded-full border border-slate-700/50">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};