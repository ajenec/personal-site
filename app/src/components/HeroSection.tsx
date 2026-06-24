export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
          Full Stack Developer
        </p>

        <h1 className="text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
          Hi, I'm <span className="text-orange-300">Aj</span>
        </h1>

        <p className="mx-auto mt-8 max-w-3xl text-lg text-slate-300 md:text-2xl">
          I build full-stack applications, AI-powered tools, and creative web
          experiences that solve real problems and make people smile.
        </p>

        <blockquote className="mx-auto mt-8 max-w-2xl text-slate-400 italic">
          "It isn't where you came from, it's where you're going that counts." —
          Ella Fitzgerald
        </blockquote>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <a
            href="#projects"
            className="group relative overflow-hidden rounded-xl border border-white/20 px-8 py-4 transition-all duration-300 hover:scale-105 hover:border-orange-400/70 hover:shadow-[0_0_24px_4px_rgba(251,146,60,0.15)]"
          >
            <span className="shine" />
            <span className="relative z-10">View Work</span>
          </a>

          <a
            href="#contact"
            className="group relative overflow-hidden rounded-xl border border-white/20 px-8 py-4 transition-all duration-300 hover:scale-105 hover:border-orange-400/70 hover:shadow-[0_0_24px_4px_rgba(251,146,60,0.15)]"
          >
            <span className="shine" />
            <span className="relative z-10">Let's Connect</span>
          </a>
        </div>

        {/* Optional quick proof */}
        <div className="mt-16 flex flex-wrap justify-center gap-3 text-sm">
          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
            React
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
            TypeScript
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
            Flask
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
            PostgreSQL
          </span>

          <span className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-slate-300">
            AI Applications
          </span>
        </div>
      </div>
    </section>
  );
}
