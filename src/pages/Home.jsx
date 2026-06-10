/* Landing / hero page with quick links to each section page. */
export default function Home({ t }) {
  const sections = [
    { idx: '01', href: 'sobre.html', title: t.navAbout, hint: t.homeAboutHint },
    { idx: '02', href: 'projetos.html', title: t.navProjects, hint: t.homeProjectsHint },
    { idx: '03', href: 'blog.html', title: t.navBlog, hint: t.homeBlogHint },
    { idx: '04', href: 'contato.html', title: t.navContact, hint: t.homeContactHint },
  ]

  return (
    <>
      <section className="hero">
        <p className="hero-role">{t.heroRole}</p>
        <h1 className="hero-title">André Sabadine</h1>
        <div className="hero-lines">
          <p>{t.heroIntro}</p>
          <p>{t.heroLine2}</p>
          <p>{t.heroLine3}</p>
        </div>
        <div className="actions">
          <a href="projetos.html" className="btn btn-primary">{t.ctaPrimary}</a>
          <a href="contato.html" className="btn btn-secondary">{t.ctaSecondary}</a>
        </div>
      </section>

      <div className="section-grid">
        {sections.map((s) => (
          <a key={s.idx} href={s.href} className="section-card">
            <span className="idx">{s.idx}</span>
            <h3>{s.title}</h3>
            <p>{s.hint}</p>
            <span className="arrow">→</span>
          </a>
        ))}
      </div>
    </>
  )
}
