import SectionHeader from './SectionHeader'

const skills = [
  'Brand Strategy',
  'Visual Identity',
  'UI/UX Systems',
  'Art Direction',
  'Design Systems',
  'Motion Principles',
]

const About = () => {
  return (
    <section id="about" className="relative scroll-mt-24 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-28 w-28 rounded-2xl bg-accent/30 blur-2xl" />
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-2">
            <img
              src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80"
              alt="Designer portrait"
              className="h-[420px] w-full rounded-3xl object-cover"
            />
          </div>
        </div>

        <div className="space-y-8">
          <SectionHeader
            eyebrow="About"
            title="Designer rooted in strategy, obsessed with premium detail."
            subtitle="I partner with founders and marketing teams to translate complex ideas into striking brand systems. My process blends research, typography, and interactive storytelling for digital-first experiences."
          />

          <div className="flex flex-wrap gap-3">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-200"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {[
              {
                label: 'Dribbble',
                href: 'https://dribbble.com',
                icon: (
                  <path d="M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20Zm6.93 7.07a7.98 7.98 0 0 1-3.3 2.1 20.5 20.5 0 0 0-1.1-2.3 7.98 7.98 0 0 0 4.4-1.8ZM12 4c1.54 0 2.96.44 4.16 1.2a6 6 0 0 1-4.03 1.64c-.33-.95-.73-1.87-1.2-2.76.35-.05.7-.08 1.07-.08Zm-3.08.63a19.1 19.1 0 0 1 1.32 2.87A8.04 8.04 0 0 1 4.2 7.1a7.98 7.98 0 0 1 4.72-2.47Zm-5.4 6.34c0-.08 0-.16.01-.24a9.98 9.98 0 0 1 5.8-.12 24.6 24.6 0 0 1 .7 2.4 8.05 8.05 0 0 1-5.64 2.6 7.97 7.97 0 0 1-.87-4.64Zm2.2 6.17a6.02 6.02 0 0 1-.19-.16 10 10 0 0 0 4.45-2.29c.23.98.36 1.93.4 2.83a7.98 7.98 0 0 1-4.66-.38Zm6.3.9c-.02-.93-.16-1.97-.44-3.1a7.98 7.98 0 0 1 3.2-.55 6.1 6.1 0 0 1 2.1.34A8.02 8.02 0 0 1 12 18.04Zm6.22-3.93a7.97 7.97 0 0 0-3.94-.6c-.2-.72-.43-1.46-.7-2.2a9.98 9.98 0 0 0 3.69-2.45 7.98 7.98 0 0 1 .95 5.25Z" />
                ),
              },
              {
                label: 'Behance',
                href: 'https://www.behance.net',
                icon: (
                  <path d="M9.5 9.75c0-.97-.78-1.75-1.75-1.75H4.5v3.5h3.25c.97 0 1.75-.78 1.75-1.75Zm6.25-3.5h-5V7h5V6.25Zm.5 5.5c0-.83-.67-1.5-1.5-1.5h-3.5v3h3.5c.83 0 1.5-.67 1.5-1.5ZM2 5.5v13h6.25c1.93 0 3.5-1.57 3.5-3.5 0-1.39-.81-2.6-2-3.15.83-.49 1.38-1.39 1.38-2.4C11.13 7.01 9.61 5.5 7.75 5.5H2Zm13 2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2H15Zm-3.5 4.5v2h3.5v-2h-3.5Z" />
                ),
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com',
                icon: (
                  <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3V9Zm7 0h3.6v1.71h.05c.5-.95 1.73-1.95 3.56-1.95 3.81 0 4.51 2.5 4.51 5.75V21h-4v-5.27c0-1.26-.02-2.87-1.75-2.87-1.75 0-2.02 1.37-2.02 2.78V21h-4V9Z" />
                ),
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-100 transition hover:-translate-y-1 hover:border-accent hover:text-accent"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  {item.icon}
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
