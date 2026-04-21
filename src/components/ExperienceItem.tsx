interface ExperienceItemProps {
  role: string;
  company: string;
  period: string;
  isCurrent?: boolean;
  logoUrl?: string;
  bullets: string[];
  index: number;
}

export const ExperienceItem = ({
  role,
  company,
  period,
  isCurrent,
  logoUrl,
  bullets,
  index,
}: ExperienceItemProps) => {
  return (
    <li className="relative pl-10 sm:pl-16 pb-8 sm:pb-10 group">
      {/* Número en la timeline */}
      <div className="absolute left-0 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#121214] border border-[#2B2B30] flex items-center justify-center text-slate-500 text-xs sm:text-sm font-mono group-hover:border-[#1A3A6C] transition-colors duration-300 z-10">
        {index + 1}
      </div>

      {/* Card */}
      <div className="bg-[#121214] border border-[#2B2B30] rounded-xl p-4 sm:p-6 hover:border-[#1A3A6C] transition-colors duration-300">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-4 mb-4">
          
          {/* Logo + cargo + empresa — fila en mobile */}
          <div className="flex items-center gap-3 sm:contents">
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={company}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg object-contain bg-slate-800 p-1 shrink-0"
              />
            ) : (
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-500 text-xs shrink-0">
                {company.charAt(0)}
              </div>
            )}

            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center gap-2 mb-0.5">
                <h3 className="text-white font-semibold text-sm sm:text-base leading-tight">
                  {role}
                </h3>
                {isCurrent && (
                  <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 whitespace-nowrap">
                    Actual
                  </span>
                )}
              </div>
              <p className="text-[#1A97DB] text-xs sm:text-sm font-medium">{company}</p>
            </div>
          </div>

          {/* Período — debajo del logo+cargo en mobile, a la derecha en desktop */}
          <span className="text-slate-500 text-xs font-mono sm:whitespace-nowrap sm:shrink-0 sm:mt-1 pl-12 sm:pl-0">
            {period}
          </span>
        </div>

        {/* Bullets */}
        <ul className="flex flex-col gap-2 pl-1">
          {bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 sm:gap-3 text-slate-400 text-xs sm:text-sm leading-relaxed">
              <span className="text-[#1A3A6C] mt-1.5 shrink-0">▸</span>
              {bullet}
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};