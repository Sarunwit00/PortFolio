import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CVV from '../../assets/CVV.png'

export default function Projects() {
    const ListProjects = [
        {id:1, image:CVV, title:"Project 1", description:"This is project 1 description."},
        {id:2, image:CVV, title:"Project 2", description:"This is project 2 description."},
        {id:3, image:CVV, title:"Project 3", description:"This is project 3 description."},
        {id:4, image:CVV, title:"Project 4", description:"This is project 4 description."},
        {id:5, image:CVV, title:"Project 5", description:"This is project 5 description."},
    ];
    const settings ={
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 700,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
  return (
  <section data-aos='fade-up' data-aos-delay='400' id='projects' className='relative overflow-hidden flex flex-col text-white body-font'>
        <div className='container px-5 py-24 mx-auto'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>

            {/* wrapper จำกัดความกว้างและจัดกึ่งกลาง */}
            <div className='max-w-5xl w-full mx-auto'>
                <Slider {...settings}>
                    {
                        ListProjects.map((project)=>{
                            return(
                            <div key={project.id} className='p-4' >
                                <div className='h-full border-2 border-orange-400 shadow-[0_0_40px_rgb(255, 165, 0, 0.7)] border-opacity-60
                                 rounded-lg overflow-hidden'>
                                    <img src={project.image} alt={project.title} className='w-full h-auto lg:h-48 sm:h-24 object-cover object-center' />
                                    <div className='p-6'>
                                        <h2 className='tracking-widest text-xl title-font font-medium text-gray-400 mb-1'>{project.title}</h2>
                                        <p className='leading-relaxed mb-3'>{project.description}</p>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                </Slider>
            </div>
        </div>
  </section>
  )
}
