import Wave from "react-wavify";

export default function Footer() {
  return (
    // <footer className="relative overflow-hidden border-t border-white/5 pt-32">
    <footer className="relative overflow-hidden pt-32">
      <div className="absolute bottom-0 left-0 w-full opacity-50">
        {/* <div> */}
        <Wave
          fill="#172554"
          paused={false}
          options={{
            height: 120,
            amplitude: 100,
            speed: 0.12,
            points: 4,
          }}
        />
      </div>

      <div className="absolute bottom-0 left-0 w-full opacity-30">
        <Wave
          fill="#1d4ed8"
          paused={false}
          options={{
            height: 120,
            amplitude: 45,
            speed: 0.08,
            points: 5,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 pb-10 text-center">
        <p className="text-sm uppercase tracking-[0.35em] text-orange-300">
          Ajene Christian
        </p>

        <p className="text-slate-300">
          Built with React, TypeScript, and Tailwind CSS.
        </p>

        <p className="text-xs uppercase tracking-[0.25em] text-slate-500">
          &copy; 2026 Ajene Christian. All rights reserved.
        </p>

        <div className="flex gap-6 text-sm text-slate-400">
          <a href="#home" className="transition hover:text-orange-300">
            Home
          </a>
          <a href="#projects" className="transition hover:text-orange-300">
            Projects
          </a>
          <a href="#about" className="transition hover:text-orange-300">
            About
          </a>
          <a href="#contact" className="transition hover:text-orange-300">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

// import Wave from "react-wavify";

// export default function Footer() {
//   return (
//     <footer className="relative overflow-hidden pt-20">
//       <div className="absolute bottom-0 left-0 w-full opacity-60">
//         <Wave
//           fill="#991b1b"
//           paused={false}
//           options={{
//             height: 90,
//             amplitude: 35,
//             speed: 0.12,
//             points: 4,
//           }}
//         />
//       </div>

//       <div className="absolute bottom-0 left-0 w-full opacity-35">
//         <Wave
//           fill="#ef4444"
//           paused={false}
//           options={{
//             height: 120,
//             amplitude: 45,
//             speed: 0.08,
//             points: 5,
//           }}
//         />
//       </div>

//       <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-4 px-6 pb-10 text-center">
//         <p className="text-sm uppercase tracking-[0.35em] text-red-300">
//           Ajene Christian
//         </p>

//         <p className="text-slate-300">
//           Built with React, TypeScript, and Tailwind CSS.
//         </p>

//         <div className="flex gap-6 text-sm text-slate-400">
//           <a href="#home" className="transition hover:text-red-300">
//             Home
//           </a>
//           <a href="#projects" className="transition hover:text-red-300">
//             Projects
//           </a>
//           <a href="#about" className="transition hover:text-red-300">
//             About
//           </a>
//           <a href="#contact" className="transition hover:text-red-300">
//             Contact
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }
