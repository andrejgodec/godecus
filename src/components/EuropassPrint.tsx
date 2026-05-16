import { profile, summary, work, education, skills, languages, achievements, publications, certifications } from '../data/cv'

// Visible only when printing — renders a Europass-style CV layout
export default function EuropassPrint() {
  return (
    <div className="europass-root">
      {/* Europass header bar */}
      <div className="europass-header">
        <div className="europass-header-left">
          <span className="europass-eu-stars">★ ★ ★ ★ ★ ★</span>
          <span className="europass-label">Curriculum Vitae</span>
        </div>
        <div className="europass-header-right">
          <span className="europass-eu-stars-right">★ ★ ★ ★ ★ ★</span>
        </div>
      </div>

      {/* Personal info */}
      <div className="europass-personal">
        <div className="europass-photo-col">
          <img src="/assets/profile.jpg" alt={profile.name} className="europass-photo" />
        </div>
        <div className="europass-info-col">
          <h1 className="europass-name">{profile.name}</h1>
          <table className="europass-info-table">
            <tbody>
              <tr><td className="europass-info-label">Address</td><td>{profile.location}</td></tr>
              <tr><td className="europass-info-label">Email</td><td>{profile.email}</td></tr>
              <tr><td className="europass-info-label">Website</td><td>godec.us</td></tr>
              <tr><td className="europass-info-label">LinkedIn</td><td>linkedin.com/in/andrejgodec</td></tr>
              <tr><td className="europass-info-label">GitHub</td><td>github.com/andrejgodec</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Summary */}
      <div className="europass-section">
        <div className="europass-section-title">Personal Statement</div>
        <div className="europass-section-body">
          <p>{summary}</p>
        </div>
      </div>

      {/* Work experience */}
      <div className="europass-section">
        <div className="europass-section-title">Work Experience</div>
        <div className="europass-section-body">
          {work.map((job, i) => (
            <div key={job.company} className={i > 0 ? 'europass-entry europass-entry-mt' : 'europass-entry'}>
              <div className="europass-entry-meta">
                <span className="europass-period">{job.period}</span>
              </div>
              <div className="europass-entry-content">
                <div className="europass-entry-title">{job.title}</div>
                <div className="europass-entry-subtitle">{job.company}</div>
                <p className="europass-entry-desc">{job.description}</p>
                <div className="europass-tags">
                  {job.tags.map(t => <span key={t} className="europass-tag">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="europass-section">
        <div className="europass-section-title">Education and Training</div>
        <div className="europass-section-body">
          {education.map((edu, i) => (
            <div key={edu.institution} className={i > 0 ? 'europass-entry europass-entry-mt' : 'europass-entry'}>
              <div className="europass-entry-meta">
                <span className="europass-period">{edu.period}</span>
              </div>
              <div className="europass-entry-content">
                <div className="europass-entry-title">{edu.degree}</div>
                <div className="europass-entry-subtitle">{edu.field}</div>
                <div className="europass-entry-org">{edu.institution} · {edu.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="europass-section">
        <div className="europass-section-title">Personal Skills</div>
        <div className="europass-section-body">
          {Object.entries(skills).map(([cat, tags]) => (
            <div key={cat} className="europass-skill-row">
              <div className="europass-skill-cat">{cat}</div>
              <div className="europass-skill-tags">{tags.join(' · ')}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Language skills */}
      <div className="europass-section">
        <div className="europass-section-title">Language Skills</div>
        <div className="europass-section-body">
          <table className="europass-lang-table">
            <thead>
              <tr>
                <th></th>
                <th colSpan={2}>Understanding</th>
                <th colSpan={2}>Speaking</th>
                <th>Writing</th>
              </tr>
              <tr className="europass-lang-subhead">
                <td></td>
                <td>Listening</td>
                <td>Reading</td>
                <td>Spoken interaction</td>
                <td>Spoken production</td>
                <td>Writing</td>
              </tr>
            </thead>
            <tbody>
              {languages.map(l => (
                <tr key={l.language}>
                  <td className="europass-lang-name">{l.language}<br /><span className="europass-lang-note">{l.note}</span></td>
                  <td>{l.listening}</td>
                  <td>{l.reading}</td>
                  <td>{l.spoken}</td>
                  <td>{l.spoken}</td>
                  <td>{l.written}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="europass-lang-legend">Levels: A1/A2: Basic · B1/B2: Independent · C1/C2: Proficient (CEFR)</p>
        </div>
      </div>

      {/* Achievements + Publications */}
      <div className="europass-section">
        <div className="europass-section-title">Achievements &amp; Publications</div>
        <div className="europass-section-body">
          {achievements.map(a => (
            <div key={a.title} className="europass-misc-row">
              <span className="europass-misc-title">{a.title}</span>
              <span className="europass-misc-desc">{a.description}</span>
            </div>
          ))}
          {publications.map(p => (
            <div key={p.title} className="europass-misc-row">
              <span className="europass-misc-title">{p.venue} ({p.year})</span>
              <span className="europass-misc-desc">{p.title}</span>
            </div>
          ))}
          <div className="europass-misc-row">
            <span className="europass-misc-title">Certifications</span>
            <span className="europass-misc-desc">{certifications.label} — {certifications.url}</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="europass-footer">
        <p>© European Union, 2002–2024 | europass.europa.eu</p>
      </div>
    </div>
  )
}
