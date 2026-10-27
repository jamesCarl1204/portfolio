import { CloudSun } from 'lucide-react'
import styles from './Navbar.module.css'

export default function Navbar({ now }) {
  const pht = { timeZone: 'Asia/Manila' }
  const clock = now.toLocaleTimeString('en-US', { ...pht, hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
  const date = now.toLocaleDateString('en-US', { ...pht, weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })

  return (
    <header className={styles.header}>
      <div className={styles.inner}>

        <div className={styles.widget}>
          <div className={styles.weather}>
            <CloudSun className={styles.weatherIcon} />
            <span>30°C Manila, PH</span>
          </div>
          <span className={styles.divider}>|</span>
          <div className={styles.datetime}>
            <span className={styles.date}>{date}</span>
            <span className={styles.clock}>{clock} PHT</span>
          </div>
        </div>

        <nav className={styles.nav}>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

      </div>
    </header>
  )
}
