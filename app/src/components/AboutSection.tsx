import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const AboutMe = () => {
  const skills = [
    "JavaScript / TypeScript",
    "React",
    "Tailwind CSS",
    "Python",
    "Flask",
    "PostgreSQL",
    "Git / GitHub",
    "Node.js",
  ];

  const [showTopButton, setShowTopButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTopButton(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="about" className="relative overflow-hidden py-24">
      {/* <div className="absolute left-1/2 top-8 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" /> */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
            Get to know me
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            About <span className="text-orange-400">Me</span>
          </h2>
        </div>

        {showTopButton && (
          <a
            href="#home"
            className="
    fixed
    bottom-8
    right-8
    z-50
    flex
    h-12
    w-12
    items-center
    justify-center
    rounded-full
    border
    border-white/10
    bg-white/10
    backdrop-blur-md
    transition-all
    duration-300
    hover:-translate-y-1
    hover:border-orange-400/50
    hover:shadow-[0_0_20px_rgba(251,146,60,0.3)]
  "
          >
            <ArrowUp size={25} />
          </a>
        )}

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
            <h3 className="text-2xl font-black text-orange-300">Who I Am</h3>

            <p className="mt-4 text-slate-300">
              I’m Ajene Christian, a Full Stack Developer from New York City
              with a passion for building web applications that blend technical
              problem-solving with creativity.
            </p>

            <h3 className="mt-10 text-2xl font-black text-orange-300">
              How I Got Here
            </h3>

            <p className="mt-4 text-slate-300">
              My journey into tech started in an unexpected way — through an
              aptitude test for the Navy that revealed my potential for
              high-clearance tech roles. That spark led me to The Marcy Lab
              School, where I built skills in React, Flask, PostgreSQL,
              collaboration, and communication.
            </p>

            <h3 className="mt-10 text-2xl font-black text-orange-300">
              What I’m Building
            </h3>

            <p className="mt-4 text-slate-300">
              Today, I’m focused on creating applications that improve people’s
              lives, tell stories through technology, and turn ideas into
              polished digital experiences.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#projects"
                className="rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 transition-all duration-300 hover:scale-105 hover:border-orange-400/70 hover:shadow-[0_0_24px_4px_rgba(251,146,60,0.35)]"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold uppercase tracking-[0.18em] text-orange-300 transition-all duration-300 hover:scale-105 hover:border-orange-400/70 hover:shadow-[0_0_24px_4px_rgba(251,146,60,0.35)]"
              >
                Let's Connect
              </a>
            </div>
          </div>

          <div className="grid gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="text-2xl font-black">Skills</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-orange-400/30 bg-orange-400/10 px-3 py-1 text-sm text-orange-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <h3 className="text-2xl font-black">Education & Training</h3>

              <ul className="mt-6 space-y-4 text-slate-300">
                <li>Software Engineering Fellowship – The Marcy Lab School</li>
                <li>Medgar Evers College – Bachelor of Science</li>
                <li>LaGuardia Community College – Veterinary Technology</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;

// const AboutMe = () => {
//   const skills = [
//     "JavaScript / TypeScript",
//     "React",
//     "Tailwind CSS",
//     "Python",
//     "Flask",
//     "PostgreSQL",
//     "Git / GitHub",
//     "Node.js",
//   ];

//   return (
//     <section id="about">
//       <div>
//         <p>Get to know me</p>

//         <h2>
//           About <span>Me</span>
//         </h2>

//         <div>
//           <div>
//             <p>
//               I’m Ajene Christian, a Full Stack Developer from New York City
//               with a passion for building web applications that blend technical
//               problem-solving with creativity. My journey into tech started in
//               an unexpected way — through an aptitude test for the Navy that
//               revealed my potential for high-clearance tech roles.
//             </p>

//             <p>
//               That spark led me to The Marcy Lab School, where I honed my skills
//               in React, Flask, and PostgreSQL while also learning the importance
//               of collaboration and communication in building meaningful
//               projects.
//             </p>

//             <p>
//               Today, I’m focused on creating applications that improve people’s
//               lives and tell stories through technology.
//             </p>
//           </div>

//           <div>
//             <div>
//               <h3>Skills</h3>

//               <div>
//                 {skills.map((skill) => (
//                   <span key={skill}>{skill}</span>
//                 ))}
//               </div>
//             </div>

//             <div>
//               <h3>Education & Training</h3>

//               <ul>
//                 <li>Software Engineering Fellowship – The Marcy Lab School</li>
//                 <li>Medgar Evers College – Bachelor of Science</li>
//                 <li>LaGuardia Community College – Veterinary Technology</li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutMe;
