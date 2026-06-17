import TechGrid from '../components/TechGrid'

export default function Sobre({ t }) {
  return (
    <div className="page-stack">
      {/* Technologies I work with */}
      <section className="panel tech-section">
        <h2 className="section-heading">{t.techTitle}</h2>
        <p className="tech-intro">{t.techIntro}</p>
        <TechGrid />
      </section>

      {/* Experience */}
      <section className="panel resume-section">
        <h2 className="section-heading">{t.experienceTitle}</h2>
        <div className="resume-list">
          {t.experience.map((item) => (
            <article key={item.role + item.org} className="resume-item">
              <div className="resume-item-head">
                <h3 className="resume-role">{item.role}</h3>
                <span className="resume-period">{item.period}</span>
              </div>
              <p className="resume-org">{item.org}</p>
              <ul className="resume-points">
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="panel resume-section">
        <h2 className="section-heading">{t.educationTitle}</h2>
        <div className="resume-list">
          {t.education.map((item) => (
            <article key={item.course} className="resume-item">
              <div className="resume-item-head">
                <h3 className="resume-role">{item.course}</h3>
                <span className="resume-period">{item.period}</span>
              </div>
              <p className="resume-org">{item.org}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Certifications */}
      <section className="panel resume-section">
        <h2 className="section-heading">{t.certificationsTitle}</h2>
        <div className="resume-list">
          {t.certifications.map((item) => (
            <article key={item.name} className="resume-item">
              <div className="resume-item-head">
                <h3 className="resume-role">{item.name}</h3>
                <span className="resume-period">{item.period}</span>
              </div>
              <p className="resume-org">{item.org}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
