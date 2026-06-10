import { useEffect, useMemo, useState } from 'react'
import { copy } from '../i18n'
import { LocationIcon } from './icons'

/* Nav items map to standalone .html pages (multi-page site). */
const NAV = [
  { id: 'home', href: 'index.html', key: 'navHome' },
  { id: 'sobre', href: 'sobre.html', key: 'navAbout' },
  { id: 'projetos', href: 'projetos.html', key: 'navProjects' },
  { id: 'blog', href: 'blog.html', key: 'navBlog' },
  { id: 'contato', href: 'contato.html', key: 'navContact' },
]

/*
 * Layout owns the shared chrome (header/footer) and the persisted language
 * state. Pages are passed in as a render function so they receive the active
 * translation table: <Layout current="projetos">{(t) => <Projetos t={t} />}</Layout>
 */
export default function Layout({ current, children }) {
  const [language, setLanguage] = useState(() => {
    const saved = window.localStorage.getItem('portfolio-language')
    return saved === 'pt-BR' || saved === 'en' ? saved : 'en'
  })

  useEffect(() => {
    window.localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

  const t = useMemo(() => copy[language], [language])

  return (
    <div className="shell">
      <header className="site-header">
        <a className="brand" href="index.html">André Sabadine</a>

        <nav className="nav" aria-label="Main navigation">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={current === item.id ? 'active' : ''}
              aria-current={current === item.id ? 'page' : undefined}
            >
              {t[item.key]}
            </a>
          ))}
        </nav>

        <div className="lang-toggle" role="group" aria-label={t.languageLabel}>
          <button
            type="button"
            className={language === 'en' ? 'active' : ''}
            onClick={() => setLanguage('en')}
          >
            EN
          </button>
          <button
            type="button"
            className={language === 'pt-BR' ? 'active' : ''}
            onClick={() => setLanguage('pt-BR')}
          >
            PT
          </button>
        </div>
      </header>

      <main className="content">{children(t)}</main>

      <footer className="site-footer">
        <div className="footer-loc">
          <LocationIcon />
          <span>{t.contactLocationValue}</span>
        </div>
        <p className="footer-text">{t.footer}</p>
        <p className="footer-rights">© {new Date().getFullYear()} André Sabadine. {t.footerRights}</p>
      </footer>
    </div>
  )
}
