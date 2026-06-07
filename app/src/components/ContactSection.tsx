

const ContactMe = () => {
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-red-300">
            Let's Connect
          </p>

          <h2 className="text-4xl font-black leading-tight md:text-6xl">
            Contact <span className="text-red-400">Me</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Whether you're looking for a developer, want to collaborate on a
            project, or just want to say hello, I'd love to hear from you.
          </p>
        </div>

        <form className="mt-14 rounded-2xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-red-300">
                Email
              </label>

              <input
                type="email"
                placeholder="your@email.com"
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-red-300">
                Message
              </label>

              <textarea
                rows={6}
                placeholder="Tell me about your project..."
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 outline-none transition focus:border-red-400 focus:ring-2 focus:ring-red-400/20"
              />
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="mx-auto rounded-xl border border-white/20 px-8 py-4 transition-all duration-300 hover:border-red-400/70 hover:shadow-[0_0_18px_4px_rgba(248,113,113,0.45)] hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
