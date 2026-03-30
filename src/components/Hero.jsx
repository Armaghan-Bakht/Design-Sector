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
        <div className="max-w-2xl space-y-8">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-accent animate-fade-in">
            Creative Designer
          </p>
          <h1 className="bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-3xl font-medium leading-tight tracking-tight text-transparent sm:text-4xl lg:text-5xl xl:text-6xl animate-fade-up">
            Designing Experiences That Move Brands Forward.
          </h1>
          <p
            className="max-w-xl text-xs font-light leading-relaxed tracking-wide text-slate-400 sm:text-sm animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            I craft bold brand systems, immersive digital products, and social
            campaigns that feel alive. Every detail is designed to translate
            strategy into unforgettable visual language.
          </p>
          <div
            className="flex flex-wrap items-center gap-6 pt-4 animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="#projects"
              className="group relative overflow-hidden rounded-full bg-accent px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-accent transition-all hover:-translate-y-0.5 hover:shadow-glow"
            >
              <span className="relative z-10">View Projects</span>
              <div className="absolute inset-0 z-0 h-full w-full origin-left scale-x-0 transform bg-white/20 transition-transform duration-300 group-hover:scale-x-100" />
            </a>
            <a
              href="#contact"
              className="group rounded-full border border-white/20 px-8 py-3.5 text-xs font-semibold uppercase tracking-[0.2em] text-slate-300 transition-all duration-300 hover:border-accent hover:bg-accent/5 hover:text-accent"
            >
              Contact Me
            </a>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Years Experience", value: "8+" },
            { label: "Projects Delivered", value: "120+" },
            { label: "Global Clients", value: "32" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="group glass relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 px-6 py-6 backdrop-blur-md transition-all duration-500 hover:-translate-y-1 hover:border-accent/30 hover:shadow-glow"
            >
              <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/20 blur-2xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              <p className="relative z-10 text-3xl font-light tracking-tight text-slate-100">
                {stat.value}
              </p>
              <p className="relative z-10 mt-2 text-[10px] font-medium uppercase tracking-[0.25em] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
