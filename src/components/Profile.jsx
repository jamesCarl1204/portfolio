import { Layers, Send, Mail, ArrowUpRight, Github, Facebook, BadgeCheck, Code2, Atom, Server, Palette, FileCode2 } from 'lucide-react'
import { profile, stack } from '../data.js'
import styles from './Profile.module.css'

const TikTok = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.6 6.7a5.5 5.5 0 0 1-3.4-1.9A5.5 5.5 0 0 1 14.9 2h-3.3v13.3a2.7 2.7 0 1 1-2.7-2.7c.3 0 .5 0 .8.1V9.3a6 6 0 1 0 5.2 5.9V8.9a8.8 8.8 0 0 0 4.7 1.4V7a5 5 0 0 1-.1-.3z" />
  </svg>
)

const stackIcons = { HTML: FileCode2, CSS: Palette, JavaScript: Code2, React: Atom, 'Node.js': Server, Express: Server }

export default function Profile() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>
        {/* Profile card */}
        <div className={styles.card}>
          <div className={styles.topRow}>
            <div className={styles.badge}>
              <span className={styles.dot} />
              {profile.status}
            </div>
            <span className={styles.location}>{profile.location}</span>
          </div>

          <div className={styles.identity}>
            <img
              src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250"
              alt={`${profile.name} profile`}
              className={styles.avatar}
              onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x100/111827/ffffff?text=AM' }}
            />
            <div>
              <div className={styles.nameRow}>
                <h1 className={styles.name}>{profile.name}</h1>
                <BadgeCheck className={styles.check} />
              </div>
              <p className={styles.role}>{profile.role}</p>
            </div>
          </div>

          <p className={styles.bio}>{profile.bio}</p>
        </div>

        <div className={styles.column}>
          {/* Stack */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitleRow}>
                <Layers className={styles.panelIcon} />
                <h3 className={styles.panelTitle}>Core Technical Stack</h3>
              </div>
            </div>
            <div className={styles.chips}>
              {stack.map((s) => {
                const Icon = stackIcons[s] || Code2
                return (
                  <span key={s} className={styles.chip}>
                    <Icon className={styles.chipIcon} /> {s}
                  </span>
                )
              })}
            </div>
          </div>

          {/* Direct connect */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <div className={styles.panelTitleRow}>
                <Send className={styles.panelIcon} />
                <h3 className={styles.panelTitle}>Direct Connect</h3>
              </div>
              <span className={styles.fast}>Fast Response</span>
            </div>
            <p className={styles.blurb}>Open for freelance projects. Message me anytime.</p>
            <div className={styles.links}>
              <a href={`mailto:${profile.email}`} className={styles.link}>
                <span className={styles.linkLabel}><Mail className={styles.linkIcon} />{profile.email}</span>
                <ArrowUpRight className={styles.arrow} />
              </a>
              <div className={styles.linkGrid}>
                <a href={profile.github} target="_blank" rel="noreferrer" className={styles.link}>
                  <span className={styles.linkLabel}><Github className={styles.linkIcon} />GitHub</span>
                </a>
                <a href={profile.facebook} target="_blank" rel="noreferrer" className={styles.link}>
                  <span className={styles.linkLabel}><Facebook className={styles.linkIcon} />FB</span>
                </a>
                <a href={profile.tiktok} target="_blank" rel="noreferrer" className={styles.link}>
                  <span className={styles.linkLabel}><TikTok className={styles.linkIcon} />TikTok</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
