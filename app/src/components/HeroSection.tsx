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
//
//
//
// import Tilt from "react-parallax-tilt";

// export default function HeroSection() {
//   return (
//     <section id="home" className="relative min-h-screen overflow-hidden">
//       <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
//         {/* LEFT SIDE */}
//         <div className="flex flex-col justify-center">
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
//             Full Stack Developer
//           </p>

//           <h1 className="text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
//             Hi, I'm <span className="text-orange-300">Aj</span>
//           </h1>

//           <p className="mt-6 max-w-xl text-lg text-slate-300 md:text-xl">
//             Full Stack Developer building AI-powered web apps, using creative
//             tools, and scalable systems.
//           </p>

//           <blockquote className="mt-6 max-w-xl border-l-4 border-orange-400 pl-4 text-slate-300 italic">
//             "It isn't where you came from, it's where you're going that counts."
//             — Ella Fitzgerald
//           </blockquote>

//           <div className="mt-10 flex flex-wrap gap-4">
//             <a
//               href="#projects"
//               className="group relative overflow-hidden rounded-xl border border-white/20 px-8 py-4 transition-all duration-300 hover:scale-105 hover:border-orange-400/70 hover:shadow-[0_0_24px_4px_rgba(251,146,60,0.15)]"
//             >
//               <span className="shine" />
//               <span className="relative z-10">View Work</span>
//             </a>

//             <a
//               href="#contact"
//               className="group relative overflow-hidden rounded-xl border border-white/20 px-8 py-4 transition-all duration-300 hover:scale-105 hover:border-orange-400/70 hover:shadow-[0_0_24px_4px_rgba(251,146,60,0.15)]"
//             >
//               <span className="shine" />
//               <span className="relative z-10">Let&apos;s Connect</span>
//             </a>
//           </div>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="relative hidden h-[500px] w-full lg:block">
//           <div className="absolute left-10 top-12">
//             <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.03}>
//               <div className="w-64 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-orange-400/40 hover:bg-white/15">
//                 <p className="text-xs uppercase tracking-[0.3em] text-orange-300">
//                   Project
//                 </p>
//                 <h3 className="mt-3 text-2xl font-bold">BuddyOS</h3>
//                 <p className="mt-2 text-sm text-slate-300">
//                   AI-powered life feedback system.
//                 </p>
//               </div>
//             </Tilt>
//           </div>

//           <div className="absolute right-4 top-44">
//             <Tilt tiltMaxAngleX={7} tiltMaxAngleY={7} scale={1.03}>
//               <div className="w-64 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-blue-400/40 hover:bg-white/15">
//                 <p className="text-xs uppercase tracking-[0.3em] text-blue-300">
//                   Stack
//                 </p>
//                 <h3 className="mt-3 text-2xl font-bold">React + Flask</h3>
//                 <p className="mt-2 text-sm text-slate-300">
//                   Full-stack apps with clean UI and APIs.
//                 </p>
//               </div>
//             </Tilt>
//           </div>

//           <div className="absolute bottom-12 left-20">
//             <Tilt tiltMaxAngleX={12} tiltMaxAngleY={12} scale={1.03}>
//               <div className="w-64 rounded-3xl border border-white/10 bg-white/10 p-5 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-pink-400/40 hover:bg-white/15">
//                 <p className="text-xs uppercase tracking-[0.3em] text-pink-300">
//                   Creative
//                 </p>
//                 <h3 className="mt-3 text-2xl font-bold">BrainRot Universe</h3>
//                 <p className="mt-2 text-sm text-slate-300">
//                   Weird, fun, creative web experiences.
//                 </p>
//               </div>
//             </Tilt>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
