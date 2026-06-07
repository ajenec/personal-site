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

  return (
    <section id="about" className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-300">
            Get to know me
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            About <span className="text-red-400">Me</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
            <h3 className="text-2xl font-black text-red-300">Who I Am</h3>

            <p className="mt-4 text-slate-300">
              I’m Ajene Christian, a Full Stack Developer from New York City
              with a passion for building web applications that blend technical
              problem-solving with creativity.
            </p>

            <h3 className="mt-8 text-2xl font-black text-red-300">
              How I Got Here
            </h3>

            <p className="mt-4 text-slate-300">
              My journey into tech started in an unexpected way — through an
              aptitude test for the Navy that revealed my potential for
              high-clearance tech roles. That spark led me to The Marcy Lab
              School, where I built skills in React, Flask, PostgreSQL,
              collaboration, and communication.
            </p>

            <h3 className="mt-8 text-2xl font-black text-red-300">
              What I’m Building
            </h3>

            <p className="mt-4 text-slate-300">
              Today, I’m focused on creating applications that improve people’s
              lives, tell stories through technology, and turn ideas into
              polished digital experiences.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
              <h3 className="text-2xl font-black">Skills</h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-red-400/30 bg-red-400/10 px-3 py-1 text-sm text-red-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-8">
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
