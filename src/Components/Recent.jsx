import React from 'react'
import recent from "../assets/images/recent.png"
import recentone from "../assets/images/recentone.png"
import recenttwo from "../assets/images/recenttwo.png"
import recentthree from "../assets/images/recentthree.png"

const Recent = () => {
  return (
    <section className='bg-[url("assets/images/recent.png")] bg-no-repeat bg-center bg-cover py-10 lg:py-[268px] mt-10 lg:mt-[132px]'>
        <div className='container'>
        <h2 className="text-4xl lg:text-[64px] lg:leading-24 font-bold text-white mb-4">My recent   <span className="text-secondary_color">works</span></h2>
        <button className='btn_recent btn_shadow'>All</button>
        <button className='btn_recent btn_shadow ml-4'>Ul</button>
        <button className='btn_recent btn_shadow ml-4'>UX</button>
        <button className='btn_recent btn_shadow ml-4'>Web Design</button>
        <div className='flex gap-3 lg:gap-0 flex-col lg:flex-row justify-between mt-5 lg:mt-12'>
            <div className='recent_box py-[61px] px-[52px]'>
            <img src={recentone} alt="" />
            </div>
            <div className='recent_box'>
            <img src={recenttwo} alt="" />
            </div>
            <div className='recent_box'>
            <img src={recentthree} alt="" />
            </div>
        </div>
        </div>
    </section>
  )
}

export default Recent