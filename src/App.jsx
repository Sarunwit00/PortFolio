import React, {useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Layout from './components/layout/Layout'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Experience from './components/experience/Experience'
import Contact from './components/contact/Contact'
import SectionTitle from './components/ui/SectionTitle'

export default function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    })
  }, [])
  return (
    <Layout>
      <section className="px-4">
        <Hero />
      </section>

      <section className="px-4 pt-24">
        <SectionTitle id="skills">Skills</SectionTitle>
        <div className="max-w-5xl mx-auto px-4">
          <Skills />
        </div>
      </section>

      <section className="px-4 pt-24">
        <SectionTitle id="projects">My Projects</SectionTitle>
        <div className="max-w-6xl mx-auto px-4">
          <Projects />
        </div>
      </section>

      <section className="px-4 pt-24">
        <SectionTitle id="experience">Experience</SectionTitle>
        <div className="max-w-4xl mx-auto px-4">
          <Experience />
        </div>
      </section>

      <section className="px-4 pt-24 pb-12">
        <SectionTitle id="contact">Contact</SectionTitle>
        <div className="max-w-2xl mx-auto px-4">
          <Contact />
        </div>
      </section>
    </Layout>
  )
}
