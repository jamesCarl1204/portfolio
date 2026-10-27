import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Profile from './components/Profile.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import styles from './App.module.css'

export default function App() {
  const [now, setNow] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setNow(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  return (
    <>
      <Navbar now={now} />
      <main className={styles.main}>
        <Profile />
        <Projects now={now} />
        <Contact />
      </main>
    </>
  )
}
