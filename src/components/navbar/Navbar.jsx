import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const links = [
    { name: 'Home', link: '#home' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ]

  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#home')

    const onScroll = () => {
      const ids = ['home', 'skills', 'projects', 'contact']
      const y = window.scrollY + 120
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.offsetTop <= y) {
          setActiveHash('#' + ids[i])
          break
        }
      }
    }

    window.addEventListener('hashchange', onHashChange)
    window.addEventListener('scroll', onScroll, { passive: true })
    onHashChange()
    onScroll()

    return () => {
      window.removeEventListener('hashchange', onHashChange)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mt-4 rounded-2xl border border-white/10 bg-[#0b152b]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0b152b]/60">
          <div className="flex items-center justify-between px-6 py-4 md:px-8 md:py-5 lg:py-6">
            <a href="#home" className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Portfolio
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-base text-white/80 hover:text-white"
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <span>Menu</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            <nav className="hidden md:flex items-center gap-4">
              {links.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className={`rounded-full px-5 py-2 text-lg transition-colors duration-150 ${
                    activeHash === item.link ? 'text-yellow-300' : 'text-white/80'
                  } hover:text-yellow-300`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {/* mobile menu */}
          {open && (
            <div className="md:hidden border-t border-white/10 px-4 py-3">
              {links.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-3 text-base ${
                    activeHash === item.link ? 'bg-white/10 text-yellow-300' : 'text-white/80 hover:text-yellow-300'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  )
}