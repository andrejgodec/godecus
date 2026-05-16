import { motion } from 'framer-motion'
import { work, summary } from '../data/cv'

export default function Experience() {
  return (
    <section id="experience" className="py-24 max-w-5xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-[family-name:var(--font-display)] text-3xl font-bold mb-3">
          Experience
        </h2>
        <p className="text-[var(--color-muted)] mb-12 max-w-2xl">{summary}</p>

        <div className="relative">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-white/10" />

          <div className="space-y-10">
            {work.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative pl-14"
              >
                <div className="absolute left-3.5 top-1.5 w-3 h-3 rounded-full bg-[var(--color-accent)] ring-4 ring-[var(--color-base)]" />
                <div className="bg-[var(--color-surface)] border border-white/5 rounded-xl p-6 hover:border-[var(--color-accent)]/20 transition-colors">
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-white text-lg">{job.title}</h3>
                      <p className="text-[var(--color-accent)] text-sm">{job.company}</p>
                    </div>
                    <span className="text-xs text-[var(--color-muted)] bg-white/5 px-3 py-1 rounded-full">
                      {job.period}
                    </span>
                  </div>
                  <p className="text-[var(--color-muted)] text-sm leading-relaxed mb-4">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 text-xs rounded-full bg-[var(--color-accent-dim)] text-[var(--color-accent)] border border-[var(--color-accent)]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}
