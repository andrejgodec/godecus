import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Nav() {
  const [active, setActive] = useState('about')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
      },
      { rootMargin: '-40% 0px -55% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  // Close menu on scroll
  useEffect(() => {
    const close = () => setMenuOpen(false)
    window.addEventListener('scroll', close, { passive: true })
    return () => window.removeEventListener('scroll', close)
  }, [])

  const handleLink = (href: string) => {
    setMenuOpen(false)
    // Small delay so menu closes before scroll
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-[var(--color-base)]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#about" className="font-[family-name:var(--font-display)] text-[var(--color-accent)] font-bold text-lg tracking-tight">
          AG
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex gap-8 text-sm">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`transition-colors ${active === l.href.slice(1) ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)] hover:text-white'}`}
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[var(--color-muted)] hover:text-white transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[var(--color-base)]/95 backdrop-blur-md">
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleLink(l.href)}
              className={`w-full text-left px-6 py-3.5 text-sm border-b border-white/5 transition-colors ${active === l.href.slice(1) ? 'text-[var(--color-accent)]' : 'text-[var(--color-muted)]'}`}
            >
              {l.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
