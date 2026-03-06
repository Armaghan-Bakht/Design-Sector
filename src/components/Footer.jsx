const Footer = () => {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Usman Studio. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          {[
            { label: 'Dribbble', href: 'https://dribbble.com' },
            { label: 'Behance', href: 'https://www.behance.net' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com' },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="uppercase tracking-[0.2em] transition hover:text-accent"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
