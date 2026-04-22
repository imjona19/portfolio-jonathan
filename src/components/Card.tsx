interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  imageUrl?: string;
  imageFit?: boolean;
  repoUrl?: string;
  demoUrl?: string; // opcional, por si también quieres link a demo
}

export const ProjectCard = ({
  title,
  description,
  tags,
  imageUrl,
  imageFit,
  repoUrl,
  demoUrl,
}: ProjectCardProps) => {
  return (
    <article className="flex flex-col h-full rounded-xl bg-[#121214] border border-[#2B2B30] hover:border-[#1A3A6C] transition-all duration-300 overflow-hidden group hover:shadow-lg hover:shadow-[#1A3A6C]/20">

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

      <div className="p-5 sm:p-6 flex flex-col flex-1 gap-3 sm:gap-4">
        <h3 className="text-lg sm:text-xl font-bold text-slate-100">{title}</h3>
        <p className="text-slate-400 flex-1 text-sm sm:text-base leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map(tag => (
            <span key={tag} className="px-2.5 py-1 bg-slate-800/50 text-blue-400 text-xs font-semibold rounded-full border border-slate-700/50">
              {tag}
            </span>
          ))}
        </div>

        {/* Botones de links — solo renderizan si tienen valor */}
        {(repoUrl || demoUrl) && (
          <div className="flex gap-3 mt-auto pt-3 border-t border-[#2B2B30]">
            {repoUrl && (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors duration-200"
              >
                {/* Icono GitHub SVG inline — sin dependencias */}
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                </svg>
                Repositorio
              </a>
            )}
            {demoUrl && (
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
};