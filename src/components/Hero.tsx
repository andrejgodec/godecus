import { motion } from 'framer-motion'
import { MapPin, Mail, Github, Linkedin, Download } from 'lucide-react'
import { profile } from '../data/cv'

interface BubbleProps {
  style: React.CSSProperties
}

function Bubble({ style }: BubbleProps) {
  return (
    <div
      className="absolute rounded-full bg-[var(--color-accent)]/10 pointer-events-none"
      style={style}
    />
  )
}

const bubbles: React.CSSProperties[] = Array.from({ length: 12 }, () => ({
  width: `${30 + Math.random() * 80}px`,
  height: `${30 + Math.random() * 80}px`,
  left: `${Math.random() * 100}%`,
  bottom: '-100px',
  animation: `bubble-up ${6 + Math.random() * 8}s ease-in ${Math.random() * 5}s infinite, wobble ${3 + Math.random() * 4}s ease-in-out infinite`,
}))

export default function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        {bubbles.map((b, i) => (
          <Bubble key={i} style={b} />
        ))}
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--color-base)]" />

      <div className="relative max-w-5xl mx-auto px-6 py-32 flex flex-col md:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex-shrink-0"
        >
          <div className="w-48 h-48 rounded-full ring-2 ring-[var(--color-accent)]/50 ring-offset-4 ring-offset-[var(--color-base)] overflow-hidden">
            <img
              src="/assets/profile.jpg"
              alt={profile.name}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[var(--color-accent)] text-sm font-medium tracking-widest uppercase mb-3"
          >
            Hi, I'm
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-bold mb-3"
          >
            {profile.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-xl text-[var(--color-muted)] mb-6"
          >
            {profile.title}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-4 text-sm text-[var(--color-muted)] mb-8"
          >
            <span className="flex items-center gap-1.5">
              <MapPin size={14} /> {profile.location}
            </span>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
            >
              <Mail size={14} /> {profile.email}
            </a>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-3"
          >
            <button
              onClick={() => window.print()}
              className="no-print flex items-center gap-2 px-5 py-2.5 rounded-lg bg-[var(--color-accent)] text-black font-semibold text-sm hover:bg-[var(--color-accent)]/90 transition-colors cursor-pointer"
            >
              <Download size={15} /> Download CV
            </button>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="no-print flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-sm hover:border-white/30 hover:text-white transition-colors text-[var(--color-muted)]"
            >
              <Github size={15} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="no-print flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/10 text-sm hover:border-white/30 hover:text-white transition-colors text-[var(--color-muted)]"
            >
              <Linkedin size={15} /> LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
