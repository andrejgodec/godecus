import { profile } from '../data/cv'

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 text-center text-[var(--color-muted)] text-sm no-print">
      <p>
        © {new Date().getFullYear()} {profile.name} · Built with React + Vite
      </p>
    </footer>
  )
}
