import { useState } from "react";

const ContactMe = () => {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/xjgqgejq", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (!response.ok) {
        throw new Error("Form failed");
      }

      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
            Let&apos;s Connect
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Contact <span className="text-orange-400">Me</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Whether you&apos;re looking for a developer, want to collaborate on
            a project, or just want to say hello, I&apos;d love to hear from
            you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
        >
          <input
            type="hidden"
            name="_subject"
            value="New Portfolio Contact Form Submission"
          />

          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-orange-300"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                name="email"
                required
                placeholder="your@email.com"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-semibold text-orange-300"
              >
                Message
              </label>

              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
              />
            </div>

            {status === "success" && (
              <p className="rounded-xl border border-green-400/30 bg-green-400/10 px-4 py-3 text-center font-semibold text-green-300">
                ✓ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-center font-semibold text-red-300">
                Something went wrong. Please try again.
              </p>
            )}

            <div className="flex justify-center">
              <button
                type="submit"
                disabled={status === "sending"}
                className="group relative overflow-hidden rounded-xl border border-white/20 px-8 py-4 text-sm font-semibold transition-all duration-300 hover:scale-105 hover:border-orange-400/70 hover:shadow-[0_0_24px_4px_rgba(251,146,60,0.15)] active:scale-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                <span className="shine" />

                <span className="relative z-10">
                  {status === "sending" ? "Sending..." : "Send Message"}
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;

// const ContactMe = () => {
//   return (
//     <section id="contact" className="relative overflow-hidden py-24">
//       <div className="relative z-10 mx-auto max-w-5xl px-6">
//         <div className="text-center">
//           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
//             Let's Connect
//           </p>

//           <h2 className="text-4xl font-black leading-tight md:text-6xl">
//             Contact <span className="text-orange-400">Me</span>
//           </h2>

//           <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
//             Whether you're looking for a developer, want to collaborate on a
//             project, or just want to say hello, I'd love to hear from you.
//           </p>
//         </div>

//         <form
//           action="https://formspree.io/f/xjgqgejq"
//           method="POST"
//           className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl"
//         >
//           <div className="space-y-6">
//             <div>
//               <label className="mb-2 block text-sm font-semibold text-orange-300">
//                 Email
//               </label>

//               <input
//                 type="email"
//                 name="email"
//                 placeholder="your@email.com"
//                 className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
//               />
//             </div>

//             <div>
//               <label className="mb-2 block text-sm font-semibold text-orange-300">
//                 Message
//               </label>

//               <textarea
//                 name="message"
//                 rows={6}
//                 placeholder="Tell me about your project..."
//                 className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
//               />
//             </div>
//             <div className="flex justify-center">
//               <button
//                 type="submit"
//                 className="
//       group
//       relative
//       overflow-hidden
//       rounded-xl
//       border
//       border-white/20
//       px-8
//       py-4
//       text-sm
//       font-semibold
//       transition-all
//       duration-300
//       hover:scale-105
//       hover:border-orange-400/70
//       hover:shadow-[0_0_24px_4px_rgba(251,146,60,0.15)]
//       active:scale-95
//     "
//               >
//                 <span className="shine" />

//                 <span className="relative z-10">Send Message</span>
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default ContactMe;
