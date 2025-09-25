import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
// import Experience from './components/experience/Experience'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <main className=' bg-[#0d182e]'>
      {/* <Hero /> */}
      <Skills />
      {/* <Experience /> */}
      <Projects />
      <Contact />
    </main>
  )
}
