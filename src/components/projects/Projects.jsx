// ...existing code...
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import CVV from '../../assets/CVV.png'

export default function Projects() {
  const items = [
    { id: 1, image: CVV, title: 'Project 1', description: 'This is project 1 description.' },
    { id: 2, image: CVV, title: 'Project 2', description: 'This is project 2 description.' },
    { id: 3, image: CVV, title: 'Project 3', description: 'This is project 3 description.' },
    { id: 4, image: CVV, title: 'Project 4', description: 'This is project 4 description.' },
    { id: 5, image: CVV, title: 'Project 5', description: 'This is project 5 description.' },
  ]

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    speed: 500,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  }

  return (
    <section id="projects" className="relative py-24">
      <div className="container mx-auto px-5">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">My Projects</h2>
          <p className="mt-3 text-white/70">A selection of work that highlights my craft.</p>
        </div>

        <div className="mx-auto max-w-5xl">
          <Slider {...settings}>
            {items.map((p) => (
              <div key={p.id} className="p-3">
                <article className="group h-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow transition">
                  <div className="relative">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="h-48 w-full object-cover transition duration-300 group-hover:scale-[1.02]"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
                  </div>

                  <div className="p-5">
                    <h3 className="text-lg font-semibold">{p.title}</h3>
                    <p className="mt-1 text-sm text-white/80">{p.description}</p>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="inline-block rounded-full border border-white/15 px-4 py-2 text-xs text-white/90 hover:border-yellow-300 hover:text-yellow-300"
                      >
                        View details
                      </a>
                    </div>
                  </div>
                </article>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}
// ...existing code...