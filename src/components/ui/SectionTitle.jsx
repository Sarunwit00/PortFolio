import React from 'react'
import Navbar from '../navbar/Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0f2030] text-white antialiased">
      <Navbar />
      <main className="pt-6">{children}</main>
      <footer className="mt-20 pb-8 text-center text-sm text-gray-300">
        © {new Date().getFullYear()} SARUNWIT — Built with React & Tailwind
      </footer>
    </div>
  )
}