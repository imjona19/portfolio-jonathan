// interface TechCardProps {
//   icon: string;
//   name: string;
//   description?: string;
//   colorStart?: string;
//   colorEnd?: string;
// }

// export function TechCard({
//   icon,
//   name,
//   description,
//   colorStart = '#64ffda',
//   colorEnd = '#7b61ff',
// }: TechCardProps) {
//   const isUrl = icon.startsWith('http') || icon.startsWith('/') || icon.startsWith('.');

//   return (
//     <article
//       className="tech-card group relative p-4 rounded-xl border border-white/5 bg-[#111] overflow-hidden transition-all duration-300 hover:-translate-y-1"
//       style={
//         { '--color-start': colorStart, '--color-end': colorEnd } as React.CSSProperties
//       }
//     >
//       {/* Gradient overlay on hover */}
//       <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

//       {/* Glow border on hover via box-shadow */}
//       <div
//         className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
//         style={{
//           boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${colorStart} 30%, transparent)`,
//         }}
//       />

//       {/* Content */}
//       <div className="relative z-10 flex items-start gap-4">
//         {/* Icon wrapper */}
//         <div className="p-3 rounded-lg bg-white/5 border border-white/10 transition-colors duration-300 group-hover:border-white/20 flex-shrink-0">
//           {isUrl ? (
//             <img
//               src={icon}
//               alt={name}
//               width={32}
//               height={32}
//               loading="lazy"
//               decoding="async"
//               className="w-8 h-8 object-contain"
//             />
//           ) : (
//             <span className="w-8 h-8 flex items-center justify-center text-2xl leading-none">
//               {icon}
//             </span>
//           )}
//         </div>

//         {/* Text */}
//         <div className="flex flex-col">
//           <h4 className="text-lg font-bold text-gray-100 transition-all duration-300 group-hover:text-white">
//             {name}
//           </h4>
//           {description && (
//             <p className="text-xs text-gray-300 mt-1 leading-relaxed">{description}</p>
//           )}
//         </div>
//       </div>
//     </article>
//   );
// }


interface TechCardProps {
  icon: string;
  name: string;
  description?: string;
  colorStart?: string;
  colorEnd?: string;
}

export function TechCard({
  icon,
  name,
  description,
  colorStart = '#64ffda',
  colorEnd = '#7b61ff',
}: TechCardProps) {
  const isUrl = icon.startsWith('http') || icon.startsWith('/') || icon.startsWith('.');

  return (
    <article
      // Agregado: h-full para igualar alturas y p-4 sm:p-5 para padding dinámico
      className="tech-card group relative h-full p-4 sm:p-5 rounded-xl border border-white/5 bg-[#111] overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={
        { '--color-start': colorStart, '--color-end': colorEnd } as React.CSSProperties
      }
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Glow border on hover via box-shadow */}
      <div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          boxShadow: `inset 0 0 0 1px color-mix(in srgb, ${colorStart} 30%, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-start gap-3 sm:gap-4">
        {/* Icon wrapper */}
        <div className="p-2.5 sm:p-3 rounded-lg bg-white/5 border border-white/10 transition-colors duration-300 group-hover:border-white/20 flex-shrink-0">
          {isUrl ? (
            <img
              src={icon}
              alt={name}
              width={32}
              height={32}
              loading="lazy"
              decoding="async"
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
          ) : (
            <span className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-xl sm:text-2xl leading-none">
              {icon}
            </span>
          )}
        </div>

        {/* Text */}
        <div className="flex flex-col flex-1">
          <h4 className="text-base sm:text-lg font-bold text-gray-100 transition-all duration-300 group-hover:text-white">
            {name}
          </h4>
          {description && (
            <p className="text-[11px] sm:text-xs text-gray-400 mt-1.5 leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </article>
  );
}