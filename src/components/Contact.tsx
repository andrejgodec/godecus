import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, MapPin } from 'lucide-react'
import { profile } from '../data/cv'

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-[var(--color-surface)]/30 no-print">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-[var(--color-muted)] mb-12 max-w-md mx-auto">
            Open to consulting opportunities, collaborations, or just a conversation about cloud and integration.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-[var(--color-accent)] text-black font-semibold text-lg hover:bg-[var(--color-accent)]/90 transition-colors mb-12"
          >
            <Mail size={20} /> {profile.email}
          </a>

          <div className="flex items-center justify-center gap-8 text-[var(--color-muted)]">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <Github size={16} /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm hover:text-white transition-colors"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <span className="flex items-center gap-2 text-sm">
              <MapPin size={16} /> {profile.location}
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
