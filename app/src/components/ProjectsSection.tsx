function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      {/* <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" /> */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
            My Work
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Featured <span className="text-orange-400">Projects</span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-300">
            Projects that showcase my skills in full-stack development,
            problem-solving, and creating engaging user experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:shadow-[0_0_24px_12px_rgba(251,146,60,0.18)]">
            <h3 className="text-2xl font-black text-white">
              Bugged Realities: City of Choices
            </h3>

            <p className="mt-4 text-slate-300">
              Web-based text adventure featuring branching narratives,
              persistent save systems, character progression, inventory
              management, and multiple endings.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["React", "Flask", "PostgreSQL", "TypeScript"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-sm text-orange-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-orange-300 transition-all duration-300 hover:border-orange-400/70 hover:text-orange-200 hover:shadow-[0_0_18px_6px_rgba(251,146,60,0.18)]"
            >
              View Project <span>→</span>
            </a>
          </article>

          <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:shadow-[0_0_24px_12px_rgba(251,146,60,0.18)]">
            <h3 className="text-2xl font-black text-white">
              BrainRot Universe
            </h3>

            <p className="mt-4 text-slate-300">
              Full-stack React application integrating multiple APIs with
              pagination, modal systems, search functionality, loading states,
              and robust error handling.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["React", "JavaScript", "APIs"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-sm text-orange-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-orange-300 transition-all duration-300 hover:border-orange-400/70 hover:text-orange-200 hover:shadow-[0_0_18px_6px_rgba(251,146,60,0.18)]"
            >
              View Project <span>→</span>
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
