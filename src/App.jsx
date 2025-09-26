import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import Hero from './components/hero/Hero'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Contact from './components/contact/Contact'
import About from './components/about/About'

export default function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <main className='relative min-h-screen bg-[#0b152b] text-white selection:bg-orange-500/40'>
      {/* subtle background decorations */}
      <div aria-hidden className='pointer-events-none fixed inset-0 -z-10'>
        <div className='absolute -top-24 -left-24 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-orange-600/20 via-yellow-500/10 to-red-500/20 blur-3xl' />
        <div className='absolute -bottom-24 -right-24 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-cyan-400/10 via-blue-500/10 to-indigo-600/10 blur-3xl' />
      </div>

      {/* sections */}
      <Hero />
      <About /> 
      <Skills />
      <Projects />
      <Contact />

      {/* footer */}
      <footer className='border-t border-white/10 py-8 text-center text-sm text-white/70'>
        © {new Date().getFullYear()} Portfolio by Sarunwit — Built with React & TailwindCSS
      </footer>
    </main>
  )
}