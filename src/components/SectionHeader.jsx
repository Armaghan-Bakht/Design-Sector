const SectionHeader = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const alignment =
    align === 'center'
      ? 'items-center text-center mx-auto'
      : 'items-start text-left'

  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.3em] text-accent">
          {eyebrow}
        </span>
      ) : null}
      <h2 className="text-3xl font-semibold leading-tight text-slate-100 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle ? (
        <p className="text-base text-slate-300 sm:text-lg">{subtitle}</p>
      ) : null}
    </div>
  )
}

export default SectionHeader
