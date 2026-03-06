import SectionHeader from './SectionHeader'
import { services } from '../data/services'

const Services = () => {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeader
          eyebrow="Services"
          title="Specialized design support for ambitious teams."
          subtitle="Flexible engagements designed to deliver bold visuals, strong systems, and distinctive digital products."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-accent/60 hover:shadow-glow"
            >
              <div className="absolute -right-10 top-6 h-24 w-24 rounded-full bg-accent/20 blur-2xl opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-accent">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-6 w-6"
                >
                  <path d={service.icon} />
                </svg>
              </div>
              <div className="mt-6 space-y-3">
                <h3 className="text-lg font-semibold text-slate-100">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-300">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
