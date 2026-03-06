const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen scroll-mt-24 overflow-hidden pb-20 pt-32 sm:pt-36"
    >
      <div className="absolute inset-0 bg-glow opacity-70" />
      <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-accent/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-10 right-10 h-80 w-80 rounded-full bg-deep/40 blur-[120px] animate-float-slow" />
      <div className="absolute inset-0 bg-hero-lines opacity-30" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-10 px-6">
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent animate-fade-in">
            Creative Designer
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-slate-100 sm:text-5xl lg:text-6xl xl:text-7xl animate-fade-up">
            Designing Experiences That Move Brands Forward.
          </h1>
          <p className="max-w-2xl text-base text-slate-300 sm:text-lg">
            I craft bold brand systems, immersive digital products, and social
            campaigns that feel alive. Every detail is designed to translate
            strategy into unforgettable visual language.
          </p>
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-ink shadow-accent transition hover:-translate-y-0.5 hover:shadow-glow"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:border-accent hover:text-accent"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: 'Years Experience', value: '8+' },
            { label: 'Projects Delivered', value: '120+' },
            { label: 'Global Clients', value: '32' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="glass rounded-3xl px-6 py-5 transition hover:-translate-y-1 hover:border-accent/60"
            >
              <p className="text-2xl font-semibold text-accent">{stat.value}</p>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
