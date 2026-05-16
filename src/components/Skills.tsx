import { motion } from 'framer-motion'
import { Trophy, FileText, BadgeCheck, ExternalLink, Languages } from 'lucide-react'
import { skills, achievements, publications, certifications, languages } from '../data/cv'

export default function Skills() {
  return (
    <section id="skills" className="py-24 max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-12">
          Skills &amp; More
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {Object.entries(skills).map(([category, tags], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-[var(--color-surface)] border border-white/5 rounded-xl p-5"
            >
              <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-accent)] mb-3">
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 text-xs rounded-md bg-white/5 text-gray-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages */}
        <div className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Languages size={18} className="text-[var(--color-accent)]" />
            <h3 className="font-[family-name:var(--font-display)] text-lg font-semibold">Languages</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {languages.map((l, i) => (
              <motion.div
                key={l.language}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-[var(--color-surface)] border border-white/5 rounded-xl p-4"
              >
                <p className="font-semibold text-white mb-1">{l.language}</p>
                <p className="text-[var(--color-accent)] text-xs mb-3">{l.note}</p>
                <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs text-[var(--color-muted)]">
                  <span>Listening</span><span className="text-gray-300">{l.listening}</span>
                  <span>Reading</span><span className="text-gray-300">{l.reading}</span>
                  <span>Speaking</span><span className="text-gray-300">{l.spoken}</span>
                  <span>Writing</span><span className="text-gray-300">{l.written}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-[var(--color-surface)] border border-white/5 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <Trophy size={16} className="text-[var(--color-accent)]" />
              <p className="text-sm font-semibold">Achievements</p>
            </div>
            <ul className="space-y-3">
              {achievements.map((a) => (
                <li key={a.title}>
                  <p className="text-sm font-medium text-white">{a.title}</p>
                  <p className="text-xs text-[var(--color-muted)]">{a.description}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--color-surface)] border border-white/5 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <FileText size={16} className="text-[var(--color-accent)]" />
              <p className="text-sm font-semibold">Publications</p>
            </div>
            <ul className="space-y-3">
              {publications.map((p) => (
                <li key={p.title}>
                  <p className="text-sm font-medium text-white leading-snug">{p.title}</p>
                  <p className="text-xs text-[var(--color-muted)] mt-1">
                    {p.venue} · {p.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-[var(--color-surface)] border border-white/5 rounded-xl p-5">
            <div className="flex items-center gap-2 mb-4">
              <BadgeCheck size={16} className="text-[var(--color-accent)]" />
              <p className="text-sm font-semibold">Certifications</p>
            </div>
            <a
              href={certifications.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-[var(--color-accent)] hover:underline"
            >
              <ExternalLink size={13} /> {certifications.label}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
