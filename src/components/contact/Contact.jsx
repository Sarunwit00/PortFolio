import React from 'react'
import { FiMail, FiPhone } from 'react-icons/fi'
import { FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

export default function Contact() {
  const contacts = [
    {
      label: 'Email',
      value: 'a.sarunwit@gmail.com',
      href: 'mailto:a.sarunwit@gmail.com',
      icon: <FiMail className="h-6 w-6" />,
    },
    {
      label: 'Phone',
      value: '+66 990-521-476',
      href: 'tel:0990521476',
      icon: <FiPhone className="h-6 w-6" />,
    },
  ]

  const socials = [
    { name: 'GitHub', href: 'https://github.com/Sarunwit00', icon: <FaGithub className="h-5 w-5" /> },
    { name: 'Facebook', href: 'https://www.facebook.com/share/1CdFxNQJmJ/', icon: <FaFacebook className="h-5 w-5" /> },
    { name: 'Instagram', href: 'https://www.instagram.com/s_topppy/', icon: <FaInstagram className="h-5 w-5" /> },
  ]

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto px-6 text-center">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-orange-400 via-yellow-300 to-red-400 bg-clip-text text-transparent drop-shadow-lg">
          Contact Me
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          ติดต่อพูดคุย ร่วมงาน หรือสอบถามเพิ่มเติมได้เลย
        </p>

        {/* Contact Card */}
        <div className="mt-12 max-w-2xl mx-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md shadow-xl p-8">
          <div className="grid gap-6">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                className="flex items-center gap-4 rounded-2xl p-4 transition hover:bg-white/10 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full 
                                bg-gradient-to-br from-orange-500 to-yellow-400 text-white shadow-md">
                  {c.icon}
                </div>
                <div className="text-left">
                  <div className="text-sm uppercase tracking-wide text-gray-300">{c.label}</div>
                  <div className="text-lg font-medium text-white">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Socials */}
          <div className="mt-10">
            <div className="text-sm uppercase tracking-wide text-gray-400 mb-3">Follow Me</div>
            <div className="flex items-center justify-center gap-4">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 
                             transition hover:scale-110 hover:border-yellow-400 hover:text-yellow-300 shadow-md"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
