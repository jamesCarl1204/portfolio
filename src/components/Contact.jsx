import { Mail } from 'lucide-react'
import { profile } from '../data.js'
import styles from './Contact.module.css'

export default function Contact() {
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.box}>
        <div className={styles.inner}>
          <span className={styles.eyebrow}>Let's build something extraordinary</span>
          <h2 className={styles.heading}>Have a project in mind?</h2>
          <p className={styles.text}>Open for freelance projects: websites, web apps, and more.</p>
          <div className={styles.buttons}>
            <a href={`mailto:${profile.email}`} className={styles.primary}>
              <Mail className={styles.icon} /> Start a Conversation
            </a>
            <a href="#" className={styles.secondary}>Download Resume (PDF)</a>
          </div>
        </div>
      </div>

      <div className={styles.footer}>
        <div>© 2026 {profile.name}. Built with React.</div>
        <div className={styles.footerLinks}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </section>
  )
}
