// ...existing code...
import React from 'react'
import javascript from '../../assets/javascript.jpg'
import html from '../../assets/html.jpg'
import css from '../../assets/css.jpg'
import reactLogo from '../../assets/react.png'
import mySQL from '../../assets/mySQL.png'

const skills = [
  { name: 'JavaScript', img: javascript },
  { name: 'HTML5', img: html },
  { name: 'CSS3', img: css },
  { name: 'React', img: reactLogo },
  { name: 'MySQL', img: mySQL },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24">
      <div className="container mx-auto px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Skills</h2>
          <p className="mt-3 text-white/70">Core technologies I work with day‑to‑day.</p>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-5">
          {skills.map((s) => (
            <div
              key={s.name}
              data-aos="zoom-in"
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow hover:shadow-[0_0_30px_rgba(255,165,0,0.25)]"
            >
              <div className="mx-auto h-20 w-20 overflow-hidden rounded-full ring-1 ring-white/10">
                <img src={s.img} alt={s.name} className="h-full w-full object-cover" />
              </div>
              <div className="mt-3 text-sm font-medium text-white/90">{s.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
// ...existing code...