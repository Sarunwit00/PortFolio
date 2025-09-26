import React from 'react'
import Navbar from '../navbar/Navbar'
import img from '../../assets/img.png'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <Navbar />

      {/* hero content */}
      <div className="container mx-auto grid min-h-[92vh] grid-cols-1 items-center gap-10 px-5 pt-36 pb-16 md:grid-cols-2">
        <div data-aos="fade-up" className="order-2 md:order-1">
          <h1 className="mb-4 text-4xl font-extrabold leading-tight sm:text-5xl">
            Hello, I'm{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-400 bg-clip-text text-transparent">
              Sarunwit
            </span>
          </h1>

          <p className="mb-8 max-w-xl text-white/80">
            นักศึกษาด้านเทคโนโลยีสารสนเทศที่มุ่งมั่นพัฒนาทักษะด้านการเขียนโปรแกรมและการออกแบบระบบ เพื่อสร้างสรรค์ผลงานที่มีคุณภาพและตอบโจทย์การใช้งานจริง
          </p>
        </div>

        <div data-aos="fade-left" className="order-1 md:order-2 relative flex items-center justify-center">
          {/* glowing circle behind image */}
          <div className="absolute right-0 bottom-0 -z-10 hidden md:block">
            <div className="h-[420px] w-[420px] rounded-full bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 opacity-90 shadow-[0_0_80px_rgba(255,165,0,0.6)]" />
          </div>

          <div className="absolute right-6 bottom-6 -z-10 md:hidden">
            <div className="h-56 w-56 rounded-full bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 opacity-90 shadow-[0_0_60px_rgba(255,165,0,0.6)]" />
          </div>

          <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-white/10 bg-gray-900 shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
            <img src={img} alt="hero" className="h-full w-full object-cover object-top" />
          </div>
        </div>
      </div>
    </section>
  )
}