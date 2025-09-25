import React from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaLinkedinIn, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa'

export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'a.sarunwit@gmail.com',
      href: 'mailto:a.sarunwit@gmail.com',
      icon: <FiMail className="h-5 w-5 text-yellow-300" />,
    },
    {
      label: 'Phone',
      value: '+66 990-521-476',
      href: 'tel:0990521476',
      icon: <FiPhone className="h-5 w-5 text-yellow-300" />,
    },
    {
      label: 'Location',
      value: 'Vancouver, BC, Canada',
      href: null,
      icon: <FiMapPin className="h-5 w-5 text-yellow-300" />,
    },
  ]

  const socials = [
    { name: 'LinkedIn',  href: 'https://linkedin.com/',  icon: <FaLinkedinIn className="h-5 w-5" /> },
    { name: 'Twitter',   href: 'https://twitter.com/',    icon: <FaTwitter className="h-5 w-5" /> },
    { name: 'GitHub',    href: 'https://github.com/',     icon: <FaGithub className="h-5 w-5" /> },
    { name: 'Instagram', href: 'https://instagram.com/',  icon: <FaInstagram className="h-5 w-5" /> },
    { name: 'YouTube',   href: 'https://youtube.com/',    icon: <FaYoutube className="h-5 w-5" /> },
  ]

  return (
    <section id="contact" data-aos="fade-up" data-aos-delay="400" className="relative py-24">
      <div className="container mx-auto px-5 flex flex-col items-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center">
          Contact Information
        </h2>

        {/* centered card */}
        <div className="mt-10 w-full max-w-xl">
          <div className="mx-auto rounded-2xl border border-white/10 bg-white/3 p-6 shadow-lg">
            {/* contact list centered inside card */}
            <div className="mx-auto w-full max-w-md">
              {contacts.map((c) => (
                <div key={c.label} className="grid grid-cols-[56px_1fr] items-center gap-4 py-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10">
                    {c.icon}
                  </div>

                  <div className="text-left">
                    <div className="text-sm uppercase tracking-wider text-white/60">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-base font-medium text-white transition hover:text-yellow-300">
                        {c.value}
                      </a>
                    ) : (
                      <div className="text-base font-medium text-white">{c.value}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* socials centered */}
            <div className="mt-6 text-center">
              <div className="text-sm uppercase tracking-wider text-white/60">Connect With Me</div>
              <div className="mt-4 flex items-center justify-center gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="group inline-flex h-11 w-11 items-center justify-center rounded-full
                               border border-white/10 bg-white/5 text-white/80 transition
                               hover:border-yellow-300 hover:text-yellow-300 hover:shadow-[0_0_30px_rgba(255,165,0,0.25)]"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
