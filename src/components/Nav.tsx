import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
]

export default function Nav() {
  const [active, setActive] = useState('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-base)]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a
          href="#about"
          className="font-[family-name:var(--font-display)] text-[var(--color-accent)] font-bold text-lg tracking-tight"
        >
          AG
        </a>
        <div className="flex gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors ${
                active === l.href.slice(1)
                  ? 'text-[var(--color-accent)]'
                  : 'text-[var(--color-muted)] hover:text-white'
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}
