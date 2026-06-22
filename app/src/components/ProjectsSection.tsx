// function ProjectsSection() {
//   return (
//     <section id="projects" className="relative overflow-hidden py-24">
//       {/* <div className="absolute left-0 top-20 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" /> */}
//       <div className="relative z-10 mx-auto max-w-7xl px-6">
//         <div className="max-w-3xl">
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
//             My Work
//           </p>
//           <h2 className="text-4xl font-black leading-tight md:text-6xl">
//             Featured <span className="text-orange-400">Projects</span>
//           </h2>
//           <p className="mt-4 max-w-2xl text-lg md:text-xl text-slate-300">
// Projects that showcase my skills in full-stack development,
// problem-solving, and creating engaging user experiences.
//           </p>
//         </div>
//         <div className="mt-14 grid gap-6 md:grid-cols-2">
//           <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:shadow-[0_0_24px_12px_rgba(251,146,60,0.18)]">
//             <h3 className="text-2xl font-black text-white">
//               Bugged Realities: City of Choices
//             </h3>

//             <p className="mt-4 text-slate-300">
//               Web-based text adventure featuring branching narratives,
//               persistent save systems, character progression, inventory
//               management, and multiple endings.
//             </p>

//             <div className="mt-6 flex flex-wrap gap-3">
//               {["React", "Flask", "PostgreSQL", "TypeScript"].map((tech) => (
//                 <span
//                   key={tech}
//                   className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-sm text-orange-200"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             <a
//               href="#"
//               className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-orange-300 transition-all duration-300 hover:border-orange-400/70 hover:text-orange-200 hover:shadow-[0_0_18px_6px_rgba(251,146,60,0.18)]"
//             >
//               View Project <span>→</span>
//             </a>
//           </article>

//           <article className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-orange-300/40 hover:shadow-[0_0_24px_12px_rgba(251,146,60,0.18)]">
//             <h3 className="text-2xl font-black text-white">
//               BrainRot Universe
//             </h3>

//             <p className="mt-4 text-slate-300">
//               Full-stack React application integrating multiple APIs with
//               pagination, modal systems, search functionality, loading states,
//               and robust error handling.
//             </p>

//             <div className="mt-6 flex flex-wrap gap-3">
//               {["React", "JavaScript", "APIs"].map((tech) => (
//                 <span
//                   key={tech}
//                   className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-sm text-orange-200"
//                 >
//                   {tech}
//                 </span>
//               ))}
//             </div>

//             <a
//               href="#"
//               className="mt-8 inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-orange-300 transition-all duration-300 hover:border-orange-400/70 hover:text-orange-200 hover:shadow-[0_0_18px_6px_rgba(251,146,60,0.18)]"
//             >
//               View Project <span>→</span>
//             </a>
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default ProjectsSection;
//
//
//
import { useState } from "react";

type Project = {
  title: string;
  type: string;
  description: string;
  highlights: string[];
  tech: string[];
  github: string;
  demoType: "video" | "image" | "construction";
  demoSrc?: string;
};

function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects = [
    {
      title: "BuddyOS",
      type: "AI-Powered Productivity Platform",
      description:
        "A personal life feedback system that turns daily actions into measurable stats. Users log habits and expenses, receive scoring feedback, and track progress through discipline, money control, and streak systems.",

      highlights: [
        "Designed a scoring engine that converts user actions into measurable stats",
        "Built a React + TypeScript frontend with reusable components",
        "Created Flask API endpoints and PostgreSQL database models",
        "Implemented streak tracking and automatic stat recalculation",
      ],
      tech: ["React", "TypeScript", "Flask", "PostgreSQL", "Python"],
      github: "https://gitlab.com/ajenec1/buddyos",
      demoType: "construction",
    },

    {
      title: "Bugged Realities: City of Choices",
      type: "Interactive Storytelling Game",
      description:
        "A branching narrative experience featuring player choice, character progression, inventory systems, persistent save data, and multiple endings.",

      highlights: [
        "Built a branching dialogue and decision system",
        "Implemented inventory and progression mechanics",
        "Created persistent save functionality",
        "Designed multiple narrative paths and endings",
      ],

      tech: ["React", "TypeScript", "Flask", "PostgreSQL"],

      github: "https://github.com/Bugged-Realities/CityOfChoices",
      demoType: "image",
      demoSrc: "/images/homepageimage.png",
    },

    {
      title: "BrainRot Universe",
      type: "Creative Web Experience",
      description:
        "A collection of experimental and entertaining web experiences focused on interaction, API integrations, animations, and unconventional user interfaces.",

      highlights: [
        "Integrated multiple third-party APIs",
        "Built reusable modal and search systems",
        "Implemented pagination and loading states",
        "Focused on playful UX and frontend experimentation",
      ],

      tech: ["React", "JavaScript", "REST APIs"],

      github: "https://github.com/Josh-Aj2/BrainRot-Uni",
      demoType: "video",
      demoSrc: "/images/BrainRot-Universe.mp4",
    },
  ];

  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
            My Work
          </p>

          <h2 className="text-4xl font-black md:text-6xl">
            Featured <span className="text-orange-400">Projects</span>
          </h2>

          <p className="mt-4 text-lg text-slate-300 md:text-xl">
            A selection of projects that demonstrate full-stack development,
            product thinking, AI integration, and creative problem-solving.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl transition-all duration-300 hover:border-orange-400/30 hover:bg-white/[0.07]"
            >
              <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
                    {project.type}
                  </p>

                  <h3 className="mt-3 text-3xl font-black text-white">
                    {project.title}
                  </h3>

                  <p className="mt-5 text-slate-300">{project.description}</p>

                  <ul className="mt-8 space-y-3">
                    {project.highlights.map((highlight) => (
                      <li key={highlight} className="flex gap-3 text-slate-300">
                        <span className="mt-1 text-orange-400">●</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col justify-between">
                  <div>
                    <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">
                      Tech Stack
                    </p>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-orange-400/20 bg-orange-400/10 px-3 py-1 text-sm text-orange-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="rounded-xl bg-orange-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-orange-300"
                    >
                      Live Demo
                    </button>

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-orange-400/50"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl rounded-[2rem] border border-white/10 bg-[#0b1020] p-6 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute right-5 top-5 z-10 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-white transition hover:bg-white/20"
            >
              ✕
            </button>

            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-orange-300">
              Project Demo
            </p>

            <h3 className="mt-3 text-3xl font-black text-white">
              {selectedProject.title}
            </h3>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
              {selectedProject.demoType === "video" &&
                selectedProject.demoSrc && (
                  <video
                    src={selectedProject.demoSrc}
                    controls
                    muted
                    playsInline
                    className="aspect-video w-full object-cover"
                    onTimeUpdate={(event) => {
                      if (event.currentTarget.currentTime >= 30) {
                        event.currentTarget.pause();
                        event.currentTarget.currentTime = 30;
                      }
                    }}
                  />
                )}

              {selectedProject.demoType === "image" &&
                selectedProject.demoSrc && (
                  <img
                    src={selectedProject.demoSrc}
                    alt={`${selectedProject.title} preview`}
                    className="aspect-video w-full object-cover"
                  />
                )}

              {selectedProject.demoType === "construction" && (
                <div className="flex aspect-video flex-col items-center justify-center px-6 text-center">
                  <p className="text-3xl font-black text-orange-300">
                    Under Construction
                  </p>
                  <p className="mt-3 max-w-xl text-slate-300">
                    This demo is still being polished. The source code is
                    available on GitHub/GitLab.
                  </p>
                </div>
              )}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-xl border border-white/20 px-5 py-3 font-semibold text-white transition hover:border-orange-400/50"
              >
                View Code
              </a>

              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="rounded-xl bg-orange-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-orange-300"
              >
                Close Demo
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
