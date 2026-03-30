const icons = {
  LinkedIn: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  ),
  Email: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  ),
  WhatsApp: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  ),
  Facebook: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  ),
  Behance: (props) => (
    <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
      <path d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.908 4.964 5.772 0 .417-.086.874-.153 1.188h-7.61c.061 1.487 1.109 2.508 2.518 2.508 1.173 0 1.944-.336 2.473-1.049l2.007 1.176zm-5-5.592c-1.129 0-1.849.593-2.128 1.637h4.085c-.183-1.045-1.054-1.637-1.957-1.637zm-9.39 5.867c2.197 0 4.314-1.134 4.314-3.528 0-1.777-1.583-2.613-3.1-2.903v-.04c1.472-.341 2.219-1.391 2.219-2.613 0-1.93-1.625-3.023-3.414-3.023h-6.848v12.107h6.828zm-3.342-9.601h2.18c.951 0 1.634.336 1.634 1.192 0 .855-.683 1.258-1.634 1.258h-2.18v-2.45zm0 4.45h2.515c1.196 0 1.986.37 1.986 1.352 0 .983-.79 1.455-1.986 1.455h-2.515v-2.807z" />
    </svg>
  ),
};

const contactLinks = [
  {
    name: "LinkedIn",
    subtitle: "Let's connect",
    cta: "CONNECT NOW \u2192",
    url: "#",
    icon: icons.LinkedIn,
  },
  {
    name: "Email",
    subtitle: "Send me a message",
    cta: "SEND MESSAGE \u2192",
    url: "mailto:hello@usmanstudio.co",
    icon: icons.Email,
  },
  {
    name: "WhatsApp",
    subtitle: "Let's chat directly",
    cta: "CHAT NOW \u2192",
    url: "#",
    icon: icons.WhatsApp,
  },
  {
    name: "Facebook",
    subtitle: "See what I'm up to",
    cta: "FOLLOW ME \u2192",
    url: "#",
    icon: icons.Facebook,
  },
  {
    name: "Behance",
    subtitle: "View my portfolio",
    cta: "VIEW PORTFOLIO \u2192",
    url: "#",
    icon: icons.Behance,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="scroll-mt-24 py-20 sm:py-32">
      <div className="mx-auto max-w-[1280px] px-6">
        <div className="flex flex-col gap-12">
          {/* Section Header */}
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl font-bold uppercase tracking-[0.2em] text-slate-100 sm:text-4xl">
              Let's Connect
            </h2>
            <p className="max-w-xl text-sm text-slate-400">
              Reach out to me across different platforms and let's build
              something unforgettable. I'll respond within 24 hours.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 lg:gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="group relative flex min-h-[240px] flex-col items-center justify-between overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:bg-white/10 hover:shadow-[0_10px_30px_rgba(198,217,45,0.15)]"
              >
                {/* Subtle Hover Gradient Background */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-accent/0 via-accent/0 to-accent/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-all duration-500 group-hover:scale-110 group-hover:border-accent/30 group-hover:bg-accent/10">
                    <link.icon className="h-6 w-6 text-slate-400 transition-colors duration-500 group-hover:text-accent" />
                  </div>
                  <div className="space-y-1.5 text-center">
                    <h3 className="font-bold text-slate-100 transition-colors duration-300 group-hover:text-white">
                      {link.name}
                    </h3>
                    <p className="text-[11px] font-medium text-slate-400">
                      {link.subtitle}
                    </p>
                  </div>
                </div>

                <div className="relative z-10 mt-8 flex w-full justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 transition-all duration-300 group-hover:tracking-[0.25em] group-hover:text-accent">
                    {link.cta}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
