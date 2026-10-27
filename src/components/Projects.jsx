import { useState } from 'react'
import { Layers, Laptop, Smartphone, ChevronLeft, ChevronRight, Sparkles, ExternalLink, Github } from 'lucide-react'
import { projects } from '../data.js'
import styles from './Projects.module.css'

export default function Projects({ now }) {
  const [slide, setSlide] = useState(0)
  const [mode, setMode] = useState('both') // 'laptop' | 'phone' | 'both'
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const laptopClock = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  const p = projects[slide]
  const next = () => setSlide((slide + 1) % projects.length)
  const prev = () => setSlide((slide - 1 + projects.length) % projects.length)

  const onMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - r.left - r.width / 2
    const y = e.clientY - r.top - r.height / 2
    setTilt({ x: (-y / r.height) * 12, y: (x / r.width) * 12 })
  }

  const modeClass = (m, extra = '') =>
    `${styles.modeBtn} ${mode === m ? styles.modeBtnActive : ''} ${extra}`

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.header}>
        <div>
          <div className={styles.eyebrowRow}>
            <span className={styles.eyebrowDot} />
            <span className={styles.eyebrow}>Featured Work</span>
          </div>
          <h2 className={styles.heading}>Projects</h2>
        </div>

        <div className={styles.controls}>
          <div className={styles.modes}>
            <button onClick={() => setMode('laptop')} className={modeClass('laptop')}>
              <Laptop className={styles.icon14} /> Laptop
            </button>
            <button onClick={() => setMode('phone')} className={modeClass('phone')}>
              <Smartphone className={styles.icon14} /> Mobile
            </button>
            <button onClick={() => setMode('both')} className={modeClass('both', styles.dualBtn)}>
              <Layers className={styles.icon14} /> Dual
            </button>
          </div>

          <div className={styles.slideControls}>
            <span className={styles.counter}>0{slide + 1} / 0{projects.length}</span>
            <button onClick={prev} className={styles.arrowBtn} aria-label="Previous project"><ChevronLeft /></button>
            <button onClick={next} className={styles.arrowBtn} aria-label="Next project"><ChevronRight /></button>
          </div>
        </div>
      </div>

      <div className={styles.layout}>
        {/* Project details */}
        <div className={styles.details}>
          <div className={styles.category}>
            <Sparkles className={styles.icon14} />
            <span>{p.category}</span>
          </div>

          <div>
            <h3 className={styles.title}>{p.title}</h3>
            <p className={styles.description}>{p.description}</p>
          </div>

          <div>
            <div className={styles.techLabel}>TECHNOLOGIES USED</div>
            <div className={styles.techTags}>
              {p.tech.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
            </div>
          </div>

          <div className={styles.actions}>
            <a href="#" className={styles.primaryBtn}>
              <span>Live Demo</span><ExternalLink className={styles.icon14} />
            </a>
            <a href="#" className={styles.secondaryBtn}>
              <Github className={styles.icon14} /><span>Repository</span>
            </a>
          </div>
        </div>

        {/* Devices */}
        <div className={styles.stage} onMouseMove={onMove} onMouseLeave={() => setTilt({ x: 0, y: 0 })}>
          <div className={styles.glow} />

          {/* Laptop */}
          <div
            className={`${styles.device} ${styles.laptop} ${mode === 'phone' ? styles.hidden : ''}`}
            style={{ transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
          >
            <div className={styles.laptopBezel}>
              <div className={styles.laptopGlare} />
              <div className={styles.laptopCamera} />
              <div className={styles.screen}>
                <div className={styles.browserBar}>
                  <div className={styles.trafficDots}>
                    <span className={styles.trafficDot} />
                    <span className={styles.trafficDot} />
                    <span className={styles.trafficDot} />
                  </div>
                  <div className={styles.url}>{p.url}</div>
                  <span className={styles.barClock}>{laptopClock}</span>
                </div>
                <div className={styles.laptopContent}>
                  <img src={p.laptopImage} alt={`${p.title} laptop view`} className={styles.shot} />
                </div>
              </div>
            </div>
            <div className={styles.laptopBase}><div className={styles.laptopNotch} /></div>
          </div>

          {/* Phone */}
          <div
            className={`${styles.device} ${styles.phone} ${mode === 'both' ? styles.phoneFloating : styles.phoneSolo} ${mode === 'laptop' ? styles.hidden : ''}`}
            style={{ transform: `rotateX(${tilt.x * 1.2}deg) rotateY(${tilt.y * 1.2}deg) translateZ(${tilt.x || tilt.y ? 30 : 0}px)` }}
          >
            <div className={styles.phoneChassis}>
              <div className={styles.phoneGlare} />
              <div className={styles.island}><div className={styles.lens} /></div>
              <div className={styles.phoneScreen}>
                <img src={p.phoneImage} alt={`${p.title} mobile view`} className={styles.shot} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.pager}>
        {projects.map((_, i) => (
          <button
            key={i}
            onClick={() => setSlide(i)}
            aria-label={`Project ${i + 1}`}
            className={`${styles.pagerDot} ${i === slide ? styles.pagerDotActive : ''}`}
          />
        ))}
      </div>
    </section>
  )
}
