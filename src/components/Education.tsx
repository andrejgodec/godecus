import { motion } from 'framer-motion'
import { GraduationCap, MapPin } from 'lucide-react'
import { education } from '../data/cv'

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[var(--color-surface)]/30">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-12">
            Education
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <motion.div
                key={edu.institution}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-[var(--color-surface)] border border-white/5 rounded-xl p-6 hover:border-[var(--color-accent)]/20 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--color-accent-dim)] flex items-center justify-center mb-4">
                  <GraduationCap size={20} className="text-[var(--color-accent)]" />
                </div>
                <p className="text-[var(--color-accent)] text-xs font-medium uppercase tracking-wider mb-1">
                  {edu.degree}
                </p>
                <h3 className="font-semibold text-white mb-1">{edu.field}</h3>
                <p className="text-[var(--color-muted)] text-sm mb-3">{edu.institution}</p>
                <div className="flex items-center justify-between text-xs text-[var(--color-muted)]">
                  <span className="flex items-center gap-1">
                    <MapPin size={11} />
                    {edu.location}
                  </span>
                  <span>{edu.period}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
