const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-8 shadow-card sm:p-12">
          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-accent/20 blur-3xl" />
          <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
            <div className="space-y-6">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                Contact
              </p>
              <h2 className="text-3xl font-semibold text-slate-100 sm:text-4xl">
                Ready to build something unforgettable?
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Tell me about your project, timelines, and ambitions. I&apos;ll
                respond within 24 hours with next steps and a tailored proposal.
              </p>
              <div className="space-y-3 text-sm text-slate-300">
                <p>Email: hello@usmanstudio.co</p>
                <p>Based in: Karachi • Working Worldwide</p>
              </div>
            </div>

            <form className="space-y-4">
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@email.com"
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <div>
                <label className="text-xs uppercase tracking-[0.2em] text-slate-400">
                  Project Details
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell me about the project..."
                  className="mt-2 w-full rounded-2xl border border-white/10 bg-ink/60 px-4 py-3 text-sm text-slate-100 outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/30"
                />
              </div>
              <button
                type="button"
                className="w-full rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-accent transition hover:-translate-y-0.5 hover:shadow-glow"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
