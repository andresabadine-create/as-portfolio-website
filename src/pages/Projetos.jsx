import { useMemo, useState } from 'react'
import { GitHubIcon, DownloadIcon } from '../components/icons'

/* Display order: completed (live) → in development (dev) → in study (study). */
const STATUS_ORDER = { live: 0, dev: 1, study: 2 }

export default function Projetos({ t }) {
  const [filter, setFilter] = useState('all')

  const projects = useMemo(() => {
    const list = [
      {
        name: t.project1Name,
        desc: t.project1Desc,
        status: t.project1Status,
        statusType: 'dev',
        tags: ['WhatsApp API', 'OpenAI', 'Google Calendar', 'Node.js', 'n8n'],
      },
      {
        name: t.project3Name,
        desc: t.project3Desc,
        status: t.project3Status,
        statusType: 'live',
        tags: ['Python', 'MySQL', 'CRUD', 'CLI'],
        github: 'https://github.com/andresabadine-create/task-tracker',
      },
      {
        name: t.project4Name,
        desc: t.project4Desc,
        status: t.project4Status,
        statusType: 'live',
        tags: ['Python', 'Tkinter', 'SQLite', 'JSON', 'Desktop App'],
        download: '/downloads/ResolutoGestor.zip',
      },
      {
        name: t.project2Name,
        desc: t.project2Desc,
        status: t.project2Status,
        statusType: 'study',
        tags: [
          'Java 21',
          'Spring Boot',
          'Spring Security (JWT)',
          'PostgreSQL',
          'Angular',
          'Docker',
        ],
        github: 'https://github.com/andresabadine-create/barbearia_hipotetica',
      },
    ]
    return list.sort(
      (a, b) => STATUS_ORDER[a.statusType] - STATUS_ORDER[b.statusType]
    )
  }, [t])

  const filters = [
    { key: 'all', label: t.filterAll },
    { key: 'live', label: t.filterDone },
    { key: 'dev', label: t.filterDev },
    { key: 'study', label: t.filterStudy },
  ]

  const visible =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.statusType === filter)

  return (
    <section>
      <p className="eyebrow">{t.projectsTitle}</p>
      <h1 className="page-title">{t.projectsTitle}</h1>
      <p className="lead">{t.projectsIntro}</p>

      <div className="filter-bar" role="group" aria-label={t.filterLabel}>
        {filters.map((f) => (
          <button
            key={f.key}
            type="button"
            className={`filter-btn ${filter === f.key ? 'active' : ''}`}
            aria-pressed={filter === f.key}
            onClick={() => setFilter(f.key)}
          >
            {f.label}
          </button>
        ))}
      </div>

      {visible.length > 0 ? (
        <div className="project-list">
          {visible.map((p) => (
            <article key={p.name} className="project-card">
              <div className="project-head">
                <h2 className="project-name">{p.name}</h2>
                <span className={`status status-${p.statusType}`}>{p.status}</span>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="project-tags">
                {p.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              {p.download && (
                <a className="btn-download" href={p.download} download>
                  <DownloadIcon />
                  {t.downloadApp}
                </a>
              )}
              {p.github && (
                <a
                  className="btn-github"
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GitHubIcon />
                  {t.viewOnGithub}
                </a>
              )}
            </article>
          ))}
        </div>
      ) : (
        <p className="empty-state">{t.emptyProjects}</p>
      )}
    </section>
  )
}
