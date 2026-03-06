import { useEffect, useState } from 'react'
import SectionHeader from './SectionHeader'
import { testimonials } from '../data/testimonials'

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [testimonials])

  const testimonial = testimonials[activeIndex]

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6">
        <SectionHeader
          eyebrow="Testimonials"
          title="Trusted by founders and product teams worldwide."
          subtitle="A glimpse of the partnerships and outcomes delivered across digital-first brands."
          align="center"
        />

        <div className="mx-auto w-full max-w-3xl">
          <div className="glass relative overflow-hidden rounded-3xl px-6 py-8 text-center sm:px-10 sm:py-10">
            <div className="absolute -left-8 top-10 h-20 w-20 rounded-full bg-accent/20 blur-2xl" />
            <p className="text-lg text-slate-100 sm:text-xl">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <div className="mt-6 space-y-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">
                {testimonial.name}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                {testimonial.role} • {testimonial.company}
              </p>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={() =>
                setActiveIndex(
                  (prev) => (prev - 1 + testimonials.length) % testimonials.length,
                )
              }
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:border-accent hover:text-accent"
            >
              Prev
            </button>
            <button
              type="button"
              onClick={() =>
                setActiveIndex((prev) => (prev + 1) % testimonials.length)
              }
              className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-100 transition hover:border-accent hover:text-accent"
            >
              Next
            </button>
          </div>

          <div className="mt-6 flex items-center justify-center gap-2">
            {testimonials.map((item, index) => (
              <button
                key={item.name}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-8 rounded-full transition ${
                  index === activeIndex ? 'bg-accent' : 'bg-white/10'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
