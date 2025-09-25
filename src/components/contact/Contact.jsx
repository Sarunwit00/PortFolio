// ...existing code...
import React, { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    // simulate success (replace with your backend later)
    setSent(true)
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="container mx-auto max-w-3xl px-5">
        <h2 className="mb-6 text-center text-3xl font-bold sm:text-4xl">Contact Me</h2>

        <form onSubmit={submit} className="space-y-6 rounded-2xl border border-white/10 bg-white/5 p-6 shadow">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-white">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              placeholder="name@gmail.com"
              className="block w-full rounded-lg border border-white/10 bg-gray-900/50 p-3 text-sm text-white placeholder-white/40 outline-none ring-0 focus:border-yellow-400"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-white">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              required
              placeholder="Write your message here..."
              className="block w-full rounded-lg border border-white/10 bg-gray-900/50 p-3 text-sm text-white placeholder-white/40 outline-none focus:border-yellow-400"
            ></textarea>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="submit"
              className="rounded-full bg-orange-500 px-6 py-3 text-sm font-medium text-white shadow-[0_0_40px_rgba(255,165,0,0.5)] transition hover:bg-orange-600"
            >
              Send Message
            </button>

            {sent && <span className="text-sm text-green-400">Thanks! Your message has been sent (demo).</span>}
          </div>
        </form>
      </div>
    </section>
  )
}