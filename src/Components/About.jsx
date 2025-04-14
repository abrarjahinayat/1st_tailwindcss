import React from 'react'
import aboutimg from "../assets/images/aboutimg.png"
const About = () => {
  return (
    <section className='lg:pt-[230px] pb-10 lg:pb-[70px] border-b border-primary_white/10'>
         <div className="container">
        <div className='flex flex-col lg:flex-row'>
        <div className='lg:w-2/4 mt-7'>
        <h2 className=" text-4xl lg:text-[64px] lg:leading-24 font-bold text-white">About <span className="text-secondary_color">me</span> </h2>
        <p className='lg:text-xl font-normal leading-100% text-primary_white/75 w-auto lg:w-[420px] pb-3 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur tempus urna at turpis condimentum lobortis.... <span className='text-primary_white font-bold'> Read more</span></p>
        </div>
        <div className='lg:w-2/4'>
        <img className='ml-auto' src={aboutimg} alt="aboutimg" />
        </div>
       </div>
        </div>
    </section>
  )
}

export default About