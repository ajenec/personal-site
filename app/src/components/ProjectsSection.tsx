function ProjectsSection() {
  return (
    <section id="projects" className="relative overflow-hidden py-24">
      {/* Background glow */}
      {/* <div className="absolute right-0 top-24 h-[500px] w-[500px] rounded-full bg-red-600/20 blur-[150px]" /> */}

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-300">
            My Work
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Featured <span className="text-red-400">Projects</span>
          </h2>

          <p className="mt-4 max-w-2xl text-lg md:text-xl">
            Projects that showcase my skills in full-stack development,
            problem-solving, and creating engaging user experiences.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/70 hover:shadow-[0_0_18px_4px_rgba(248,113,113,0.25)]">
            <h3 className="text-2xl font-black">
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
                  className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-sm text-red-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-red-300 transition hover:text-red-200"
            >
              View Project <span>→</span>
            </a>
          </article>

          <article className="rounded-2xl border border-white/10 bg-white/[0.03] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-red-400/70 hover:shadow-[0_0_18px_4px_rgba(248,113,113,0.25)]">
            <h3 className="text-2xl font-black">BrainRot Universe</h3>

            <p className="mt-4 text-slate-300">
              Full-stack React application integrating multiple APIs with
              pagination, modal systems, search functionality, loading states,
              and robust error handling.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {["React", "JavaScript", "APIs"].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-sm text-red-200"
                >
                  {tech}
                </span>
              ))}
            </div>

            <a
              href="#"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-red-300 transition hover:text-red-200"
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
