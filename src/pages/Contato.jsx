import { EmailIcon, WhatsAppIcon, LinkedInIcon, GitHubIcon } from '../components/icons'
import {
  EMAIL,
  WHATSAPP_URL,
  WHATSAPP_DISPLAY,
  LINKEDIN_URL,
  LINKEDIN_DISPLAY,
  GITHUB_URL,
  GITHUB_DISPLAY,
} from '../i18n'

export default function Contato({ t }) {
  return (
    <section className="contact-page">
      <p className="eyebrow">{t.contactTitle}</p>
      <h1 className="page-title">{t.contactTitle}</h1>
      <p className="lead">{t.contactIntro}</p>

      <div className="contact-grid">
        <a className="contact-card" href={`mailto:${EMAIL}`}>
          <div className="contact-icon email"><EmailIcon /></div>
          <div className="contact-info">
            <span className="contact-label">{t.contactEmailLabel}</span>
            <span className="contact-value">{EMAIL}</span>
          </div>
        </a>

        <a
          className="contact-card"
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-icon whatsapp"><WhatsAppIcon /></div>
          <div className="contact-info">
            <span className="contact-label">{t.contactWhatsAppLabel}</span>
            <span className="contact-value">{WHATSAPP_DISPLAY}</span>
          </div>
        </a>

        <a
          className="contact-card"
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-icon linkedin"><LinkedInIcon /></div>
          <div className="contact-info">
            <span className="contact-label">{t.contactLinkedInLabel}</span>
            <span className="contact-value">{LINKEDIN_DISPLAY}</span>
          </div>
        </a>

        <a
          className="contact-card"
          href={GITHUB_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="contact-icon github"><GitHubIcon /></div>
          <div className="contact-info">
            <span className="contact-label">{t.contactGitHubLabel}</span>
            <span className="contact-value">{GITHUB_DISPLAY}</span>
          </div>
        </a>
      </div>
    </section>
  )
}
