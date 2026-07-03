import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiAngular,
  SiNodedotjs,
  SiPostgresql,
  SiGooglecloud,
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa'

/*
 * Technologies shown on the About page. Each entry carries its official
 * brand color, which drives the per-card hover accent so every logo lights
 * up in its own identity instead of a single flat highlight.
 *
 * Ordered by domain: Frontend → Backend → Data → Other.
 */
const TECHNOLOGIES = [
  // Frontend
  { name: 'JavaScript', Icon: SiJavascript, color: '#F7DF1E' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'React', Icon: SiReact, color: '#61DAFB' },
  { name: 'Angular', Icon: SiAngular, color: '#DD0031' },
  // Backend
  { name: 'Node.js', Icon: SiNodedotjs, color: '#5FA04E' },
  { name: 'Java', Icon: FaJava, color: '#E76F00' },
  { name: 'Python', Icon: SiPython, color: '#3776AB' },
  // Data
  { name: 'PostgreSQL', Icon: SiPostgresql, color: '#4169E1' },
  // Other
  { name: 'Google Cloud', Icon: SiGooglecloud, color: '#4285F4' },
  { name: 'AWS', Icon: FaAws, color: '#FF9900' },
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
