import SectionHeader from './SectionHeader'
import { featuredProjects } from '../data/featured'

const FeaturedProjects = () => {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeader
          eyebrow="Featured"
          title="Signature case studies with premium impact."
          subtitle="These long-form engagements combine strategy, storytelling, and premium UI craft to deliver measurable brand growth."
          align="center"
        />

        <div className="flex flex-col gap-10">
          {featuredProjects.map((project, index) => {
            const isReversed = index % 2 === 1
            return (
              <article
                key={project.id}
                className={`flex flex-col gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 lg:flex-row ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 overflow-hidden rounded-3xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full min-h-[260px] w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
                      {project.year}
                    </p>
                    <h3 className="text-2xl font-semibold text-slate-100 sm:text-3xl">
                      {project.title}
                    </h3>
                    <p className="text-sm text-slate-300 sm:text-base">
                      {project.summary}
                    </p>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
                      {project.role}
                    </p>
                  </div>
                  <button
                    type="button"
                    className="w-fit rounded-full bg-accent px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-accent transition hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    View Case Study
                  </button>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default FeaturedProjects
