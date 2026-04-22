import { useState } from "react";

const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID;

type FormState = "idle" | "loading" | "success" | "error";

export const Contact = () => {
  const [formState, setFormState] = useState<FormState>("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormState("success");
        form.reset();
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <section className="max-w-7xl mx-auto px-6 mb-16 mt-5">
      <h2 className="text-3xl font-bold text-white mb-2">Contacto</h2>
      <p className="text-slate-400 mb-10 text-sm sm:text-base">
        ¿Tienes un proyecto en mente o quieres platicar? Escríbeme.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

        <div className="lg:col-span-2 flex flex-col gap-4">

          <a
            href={"https://github.com/imjona19"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-[#121214] border border-[#2B2B30] hover:border-[#1A3A6C] transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-[#1A3A6C]/20 transition-colors duration-300">
              <svg className="w-5 h-5 text-slate-300" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.744 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">GitHub</p>
              <p className="text-slate-500 text-xs">github.com/imjona19</p>
            </div>
            <svg className="w-4 h-4 text-slate-600 ml-auto group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>

          <a
            href={"https://www.linkedin.com/in/jonathan-yael-falc%C3%B3n-bustos-9aa7a4323/?skipRedirect=true"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-xl bg-[#121214] border border-[#2B2B30] hover:border-[#1A3A6C] transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center shrink-0 group-hover:bg-[#1A3A6C]/20 transition-colors duration-300">
              <svg className="w-5 h-5 text-[#0A66C2]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">LinkedIn</p>
              <p className="text-slate-500 text-xs">linkedin.com/in/jonathan-yael-falcon-bustos</p>
            </div>
            <svg className="w-4 h-4 text-slate-600 ml-auto group-hover:text-blue-400 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>

          {/* Disponibilidad */}
          <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/5 border border-emerald-500/20 mt-2">
            <span className="relative flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <p className="text-emerald-400 text-sm font-medium">
              Disponible para proyectos
            </p>
          </div>
        </div>

        {/* ── Formulario ───────────────────────────── */}
        <div className="lg:col-span-3 bg-[#121214] border border-[#2B2B30] rounded-xl p-5 sm:p-6">
          {formState === "success" ? (
            <div className="h-full flex flex-col items-center justify-center gap-3 py-8 text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
              <p className="text-white font-semibold">¡Mensaje enviado!</p>
              <p className="text-slate-400 text-sm">Te responderé lo antes posible.</p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-2 text-xs text-slate-500 hover:text-slate-300 underline transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-xs font-medium">Nombre</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Tu nombre"
                    className="bg-[#0e0e10] border border-[#2B2B30] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#1A3A6C] transition-colors duration-200"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-slate-400 text-xs font-medium">Correo</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="tu@correo.com"
                    className="bg-[#0e0e10] border border-[#2B2B30] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#1A3A6C] transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-400 text-xs font-medium">Asunto</label>
                <input
                  type="text"
                  name="subject"
                  placeholder="¿De qué se trata?"
                  className="bg-[#0e0e10] border border-[#2B2B30] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#1A3A6C] transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-slate-400 text-xs font-medium">Mensaje</label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Cuéntame sobre tu proyecto o idea..."
                  className="bg-[#0e0e10] border border-[#2B2B30] rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-[#1A3A6C] transition-colors duration-200 resize-none"
                />
              </div>

              {formState === "error" && (
                <p className="text-red-400 text-xs">
                  Algo salió mal. Intenta de nuevo o escríbeme directamente.
                </p>
              )}

              <button
                type="submit"
                disabled={formState === "loading"}
                className="mt-1 w-full sm:w-auto sm:self-end flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-[#1A3A6C] hover:bg-[#1e4a8a] text-white text-sm font-semibold transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {formState === "loading" ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/>
                    </svg>
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};