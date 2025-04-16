import React from 'react'
import project from '../assets/images/project.png'
import { FiSend } from "react-icons/fi";
const Project = () => {
  return (
    <section className=' mt-10 lg:mt-[258px] pb-10 lg:pb-[238px] border-b border-primary_white/10'>
        <div className="container">
        <div className="flex flex-col lg:flex-row">
        <div className="lg:w-2/4">
        <h2 className=' text-2xl lg:text-[64px] text-primary_white font-bold lg:leading-[80px] mb-8 '>Got a project in <span className='text-secondary_color'>mind?</span></h2>
        <img className='lg:ml-[206px]' src={project} alt="project" />
        </div>
        <div className="lg:w-2/4">
        <div className=' mt-4 lg:mt-0 flex flex-col lg:flex-row gap-3 lg:gap-6 mb-3 lg:mb-6'>
        <div>
        <label className='font-bold text-primary_white text-lg leading-[100%]' htmlFor="name">Your name</label>
        <input className=' placeholder:text-primary_white/50 placeholder:font-bold text-primary_white text-[18px] py-4 pl-6 w-full lg:w-[288px] rounded-[16px] bg-[#393E46BF] mt-2.5'  type="text" id='name' placeholder='Name'/>
        </div>
        <div>
        <label className='font-bold text-primary_white text-lg leading-[100%]' htmlFor="email">Your email</label>
       <input className=' placeholder:text-primary_white/50 placeholder:font-bold text-primary_white text-[18px] py-4 w-full lg:w-[288px] pl-6 rounded-[16px] bg-[#393E46BF] mt-2.5' type="text" placeholder='Email'/>
        </div>
        </div>
        <label className='font-bold text-primary_white text-lg leading-[100%]'  htmlFor="">Your Message</label>
        <textarea className=' w-full lg:w-[600px] placeholder:text-primary_white/50 placeholder:font-bold text-primary_white text-[18px] pl-6 pt-4 pb-[237px] rounded-[16px] bg-[#393E46BF] mt-2.5' type="text" placeholder='Message' />
        <button className=" flex items-center mt-3 lg:mt-6 py-2.5 px-4 lg:px-8 text-lg font-bold text-primary_white rounded-full bg-[#393E46BF]  hover:bg-secondary_color hover: cursor-pointer hover:duration-[0.4s]">Send Message <span className='text-2xl ml-2.5'><FiSend /></span> </button>
        </div>
            </div>
        </div>
    </section>
  )
}

export default Project