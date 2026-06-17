import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiMysql,
  SiPostgresql,
  SiGooglecloud,
  SiN8N,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa'

/*
 * Technologies shown on the About page. Each entry carries its official
 * brand color, which drives the per-card hover accent so every logo lights
 * up in its own identity instead of a single flat highlight.
 */
const TECHNOLOGIES = [
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'MySQL', Icon: SiMysql, color: '#4479A1' },
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  { name: 'Google Cloud', Icon: SiGooglecloud, color: '#4285F4' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
  { name: 'n8n', Icon: SiN8N, color: '#EA4B71' },
]

export default function TechGrid() {
  return (
    <div className="tech-grid">
      {TECHNOLOGIES.map((tech) => (
        <div
          key={tech.name}
          className="tech-card"
          style={{ '--tech-color': tech.color }}
        >
          <tech.Icon className="tech-icon" aria-hidden="true" />
          <span className="tech-label">{tech.name}</span>
        </div>
      ))}
    </div>
  )
}
