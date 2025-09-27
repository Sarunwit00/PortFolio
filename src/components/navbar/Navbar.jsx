import React, { useEffect, useState } from 'react'

export default function Navbar() {
  const links = [
    { name: 'Home', link: '#home' },
    { name: 'About', link: '#about' },
    { name: 'Skills', link: '#skills' },
    { name: 'Projects', link: '#projects' },
    { name: 'Contact', link: '#contact' },
  ]

  const [open, setOpen] = useState(false)
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#home')

    const ids = ['home', 'about', 'skills', 'projects', 'contact']

    const onScroll = () => {
      const { scrollY, innerHeight } = window
      const doc = document.documentElement
      const scrollBottom = scrollY + innerHeight
      const docHeight = Math.max(doc.scrollHeight, doc.offsetHeight)

      // ✅ ถ้าเลื่อนถึงก้นหน้าจอ ให้ติด Contact ทันที
      if (scrollBottom >= docHeight - 2) {
        setActiveHash('#contact')
        return
      }

      // ✅ ใช้กึ่งกลาง viewport เพื่อความแม่นยำกว่าเดิม
      const y = scrollY + innerHeight / 2

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
      <div className="mx-auto max-w-7xl px-4">
        <div className="mt-2 rounded-xl border border-white/10 bg-[#0b152b]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0b152b]/60">
          <div className="flex items-center justify-between px-4 py-3 md:px-6 md:py-3 lg:py-4">
            <a href="#home" className="text-2xl md:text-3xl font-extrabold tracking-tight text-white">
              Portfolio
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="md:hidden inline-flex items-center gap-2 rounded-md border border-white/10 px-3 py-1 text-sm text-white/80 hover:text-white"
              aria-expanded={open}
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 6h18M3 12h18M3 18h18" />
              </svg>
            </button>

            <nav className="hidden md:flex items-center gap-3">
              {links.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  className={`rounded-full px-3 py-2 text-base transition-colors duration-150 ${
                    activeHash === item.link ? 'text-yellow-300' : 'text-white/80'
                  } hover:text-yellow-300`}
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-3 py-2">
              {links.map((item) => (
                <a
                  key={item.link}
                  href={item.link}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 text-sm ${
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
