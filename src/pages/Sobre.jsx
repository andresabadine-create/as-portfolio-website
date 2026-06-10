import { TECH_STACK } from '../i18n'

export default function Sobre({ t }) {
  return (
    <div className="page-stack">
      {/* Intro: photo + summary */}
      <section className="panel about-panel">
        <div className="about-head">
          <img
            className="about-photo"
            src="/profile.png"
            alt="André Sabadine"
            width="200"
            height="240"
          />
          <div className="about-head-text">
            <p className="eyebrow">{t.aboutTitle}</p>
            <h1 className="page-title">André Sabadine</h1>
            <p className="about-role">{t.aboutRole}</p>
            <p className="lead">{t.aboutText}</p>
          </div>
        </div>

        <div className="tech-stack">
          {TECH_STACK.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
        </div>
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
