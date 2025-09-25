import React from 'react'

export default function Contact() {
  return (
    <section id='contact'>
        <div className='py-8 lg:py-16 max-w-3xl mx-auto px-4'>
            <h2 className='mb-4 text-4xl tracking-tight font-extrabold text-center text-white'>Contact Me</h2>
            <form action="#" className='space-y-8'>
                <div>
                    <label htmlFor='email' className='block mb-2 text-xl font-medium text-white'>Email</label>
                    <input 
                    type='email' 
                    id='email' 
                    className='shadow-sm bg-gray-300 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500
                    block w-full p-2.5'
                    placeholder='name@gmail.com' required />
                </div>
                <div className='sm:col-span-2'>
                    <label htmlFor='message' className='block mb-2 text-xl font-medium text-white'>Message</label>
                    <textarea
                      rows="6"
                      id='message'
                      className='shadow-sm bg-gray-300 placeholder-gray-500 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500
                      block w-full p-2.5'
                      placeholder='Write your message here...' required>
                    </textarea>
                </div>

                <div className='flex justify-center'>
                  <button type='submit' className='inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 hover:shadow-[0_0_40px_rgb(255,165,0,0.7)] rounded-full text-lg'>
                      Send Message
                  </button>
                </div>
            </form>
        </div>
    </section>
  )
}
