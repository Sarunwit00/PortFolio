import React from 'react'
import Navbar from '../navbar/Navbar'
import CV from './CV.png'
import img from '../../assets/img.png'

export default function Hero() {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[660px] flex flex-col'>
        <Navbar />

        {/* orange circle background */}
        <div className='pointer-events-none absolute right-0 -top-12 md:-top-24 z-0'>
          <div className='hidden md:block w-[540px] h-[540px] rounded-full bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 shadow-[0_0_80px_rgba(255,165,0,0.6)] transform translate-x-24'></div>
          <div className='block md:hidden w-72 h-72 rounded-full bg-gradient-to-r from-orange-600 via-yellow-500 to-red-400 shadow-[0_0_60px_rgba(255,165,0,0.6)]'></div>
        </div>

        <section
        className='text-white body-font z-10'>
            <div className='container mx-auto flex px-5 py-24 md:flex-row flex-col items-center'>
                <div className='lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left
                mb-16 md:mb-0 items-center text-center relative'>
                    <h1 className='title-font sm:text-4xl mb-4 font-bold text-white'>HELLO I'm SARUNWIT</h1>
                    <p className='mb-8 leading-relaxed'>ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss

                    </p>
                    <div className='flex justify-center'>
                        <a href={CV} download>
                            <button className='inline-flex text-white bg-orange-500 border-0 py-2 px-6
                            focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255, 165, 0, 0.7)]
                            rounded-full text-lg'>
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
                <div className='lg:max-w-lg lg:w-full md:w-1/2 w-5/6'>
                    <img src={img} alt="hero" className='object-cover object-center rounded-bl-full w-80 h-80' />
                </div>
            </div>
        </section>
    </div>
  )
}
