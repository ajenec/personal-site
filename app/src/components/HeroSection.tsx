// FINAL VERSION
export default function HeroSection() {
  return (
    <section id="home" className="overflow-hidden relative min-h-screen">
      {/* Background glow */}
      {/* <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-red-600/30 blur-[150px]" /> */}

      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-300">
            Full Stack Developer
          </p>
          <h1 className="text-5xl font-black leading-tight md:text-7xl lg:text-8xl">
            Hi, I'm <span className="text-red-400">Aj</span>
          </h1>
          <p className=" max-w-xl text-lg md:text-xl">
            Full Stack Developer building AI-powered web apps, using creative
            tools, and scalable systems.
          </p>
          <blockquote className="mt-6 max-w-xl border-l-4 border-red-400 italic ">
            "It isn't where you came from, it's where you're going that counts."
            — Ella Fitzgerald
          </blockquote>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* glow and scale effect */}
            <button className="rounded-xl border border-white/20 px-8 py-4 transition-all duration-300 hover:border-red-400/70 hover:shadow-[0_0_18px_4px_rgba(248,113,113,0.45)] hover:scale-105 active:scale-97">
              View Work
            </button>
            <button className="rounded-xl border border-white/20 px-8 py-4 transition-all duration-300 hover:border-red-400/70 hover:shadow-[0_0_18px_4px_rgba(248,113,113,0.45)] hover:scale-105 active:scale-97">
              Lets Connect
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// EXAMPLE 2 GREEN TECH VIBE
// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-black text-green-400">
//       <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#1e293b_0%,#000_70%)]" />

//       <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-8">
//         <div className="grid w-full gap-16 lg:grid-cols-2">
//           {/* {/_ LEFT _/} */}
//           <div>
//             <div className="font-mono text-5xl md:text-7xl">
//               <p>
//                 {">"} Hi, I'm <span className="text-lime-400">Ajene</span>.
//               </p>

//               <p className="mt-6">{">"} I build things</p>

//               <p>{">"} for the web.</p>
//             </div>

//             <p className="mt-10 max-w-xl font-mono text-xl text-green-300">
//               Front-end developer focused on building fast, responsive
//               applications.
//             </p>

//             <div className="mt-10 flex gap-4">
//               <button className="border border-lime-400 bg-lime-400 px-8 py-4 font-bold text-black">
//                 View Work
//               </button>

//               <button className="border border-lime-400 px-8 py-4">
//                 Connect
//               </button>
//             </div>
//           </div>

//           {/* {/_ RIGHT _/} */}
//           <div className="flex items-center justify-center">
//             <div className="relative">
//               <img src="/ajene-laptop.png" alt="" className="w-[450px]" />

//               <div className="absolute right-0 top-0 rounded-xl border border-lime-400 p-4 font-mono">
//                 <p>Status: Building</p>
//                 <p>BuddyOS...</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// HAS THE WAVE AT BOTTOM AND THE TILT EFFECT ON THE CHARACTER; PURPLE TECH VIBE
// import Tilt from "react-parallax-tilt";
// import Wave from "react-wavify";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#070B18] text-white">
//       {/* background glow */}
//       <div className="absolute right-10 top-24 h-[500px] w-[500px] rounded-full bg-violet-600/30 blur-[140px]" />

//       {/* bottom layered waves */}
//       <div className="absolute bottom-0 left-0 z-0 w-full opacity-70">
//         <Wave
//           fill="#6d28d9"
//           paused={false}
//           options={{
//             height: 70,
//             amplitude: 25,
//             speed: 0.14,
//             points: 4,
//           }}
//         />
//       </div>

//       <div className="absolute bottom-0 left-0 z-0 w-full opacity-40">
//         <Wave
//           fill="#a855f7"
//           paused={false}
//           options={{
//             height: 95,
//             amplitude: 35,
//             speed: 0.08,
//             points: 5,
//           }}
//         />
//       </div>

//       <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
//         {/* text */}
//         <div>
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-violet-300">
//             Front-End Developer
//           </p>

//           <h1 className="text-5xl font-black leading-tight md:text-7xl">
//             Hi, I'm <span className="text-violet-400">Ajene</span>
//             <br />I build for the web.
//           </h1>

//           <p className="mt-6 max-w-xl text-lg text-slate-300">
//             I turn ideas into clean, interactive web experiences using React,
//             TypeScript, Flask, and creative design.
//           </p>

//           <div className="mt-8 flex flex-wrap gap-4">
//             <a
//               href="#projects"
//               className="rounded-xl bg-violet-500 px-7 py-4 font-semibold shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
//             >
//               View My Work
//             </a>

//             <a
//               href="#contact"
//               className="rounded-xl border border-white/20 px-7 py-4 font-semibold transition hover:bg-white/10"
//             >
//               Let's Connect
//             </a>
//           </div>
//         </div>

//         {/* character */}
//         <Tilt tiltMaxAngleX={5} tiltMaxAngleY={5} scale={1.02}>
//           <div className="relative flex justify-center">
//             <div className="absolute bottom-20 h-[360px] w-[360px] rounded-full bg-violet-500/30 blur-3xl" />

//             <img
//               src="/ajene-character.png"
//               alt="Cart character of Ajene"
//               className="relative z-10 w-[300px] drop-shadow-2xl md:w-[420px]"
//             />

//             <div className="absolute left-4 top-24 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm backdrop-blur">
//               React
//             </div>

//             <div className="absolute right-4 top-40 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm backdrop-blur">
//               TypeScript
//             </div>
//           </div>
//         </Tilt>
//       </div>
//     </section>
//   );
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import Tilt from "react-parallax-tilt";
// import Wave from "react-wavify";

// function HeroSection() {
//   return (
//     <section className="min-h-screen flex items-center justify-center px-6">
//       <Tilt
//         tiltMaxAngleX={4}
//         tiltMaxAngleY={4}
//         glareEnable={true}
//         glareMaxOpacity={0.12}
//         scale={1.01}
//         transitionSpeed={1200}
//       >
//         <div className="max-w-4xl text-center space-y-6 rounded-3xl border border-sky-300/20 bg-white/5 p-10 shadow-2xl backdrop-blur">
//           <p className="text-sky-300 font-semibold tracking-widest uppercase">
//             Welcome to AjeneOS
//           </p>

//           <h1 className="text-5xl md:text-7xl font-bold leading-tight">
//             I'm <span className="text-sky-300">Ajene Christian</span>
//           </h1>

//           <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
//             Full Stack Developer building AI-powered web apps, creative tools,
//             and scalable systems.
//           </p>

//           <p className="text-lg text-slate-400 max-w-2xl mx-auto">
//             React • Python • Flask • PostgreSQL • Docker • LangGraph
//           </p>

//           <blockquote className="italic text-slate-400 border-l-4 border-sky-300 pl-4 mx-auto max-w-xl text-left">
//             "It isn't where you came from, it's where you're going that counts."
//             — Ella Fitzgerald
//           </blockquote>

//           <div className="pt-4 flex flex-col sm:flex-row justify-center gap-4">
//             <a
//               href="#projects"
//               className="bg-sky-300 hover:bg-sky-200 transition px-8 py-4 rounded-xl font-semibold text-lg shadow-lg text-slate-950"
//             >
//               View Projects
//             </a>

//             <a
//               href="#contact"
//               className="border border-sky-300/50 hover:bg-sky-300/10 transition px-8 py-4 rounded-xl font-semibold text-lg text-sky-200"
//             >
//               Contact Me
//             </a>
//           </div>
//         </div>
//       </Tilt>

//       <Wave mask="url(#mask)" fill="#1277b0">
//         <defs>
//           <linearGradient id="gradient" gradientTransform="rotate(90)">
//             <stop offset="0" stopColor="white" />
//             <stop offset="0.5" stopColor="black" />
//           </linearGradient>
//           <mask id="mask">
//             <rect x="0" y="0" width="2000" height="200" fill="url(#gradient)" />
//           </mask>
//         </defs>
//       </Wave>
//     </section>
//   );
// }

// export default HeroSection;
