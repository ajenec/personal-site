

const ContactMe = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      {/* <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-3xl" /> */}
      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-orange-300">
            Let's Connect
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Contact <span className="text-orange-400">Me</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Whether you're looking for a developer, want to collaborate on a
            project, or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        <form className="mt-14 rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-orange-300">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-orange-300">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100 placeholder:text-slate-500 outline-none transition focus:border-orange-400 focus:ring-2 focus:ring-orange-400/20"
              />
            </div>
            {/* <div className="flex justify-center">
              <button
                type="submit"
                className="mx-auto rounded-xl border border-white/20 bg-gradient-to-r from-orange-300 via-orange-400 to-pink-500 px-8 py-4 text-sm font-semibold text-slate-950 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_24px_8px_rgba(251,146,60,0.25)] active:scale-95"
              >
                Send Message
              </button>
            </div> */}
            <div className="flex justify-center">
              <button
                type="submit"
                className="
      group
      relative
      overflow-hidden
      rounded-xl
      border
      border-white/20
      px-8
      py-4
      text-sm
      font-semibold
      transition-all
      duration-300
      hover:scale-105
      hover:border-orange-400/70
      hover:shadow-[0_0_24px_4px_rgba(251,146,60,0.15)]
      active:scale-95
    "
              >
                <span className="shine" />

                <span className="relative z-10">Send Message</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
