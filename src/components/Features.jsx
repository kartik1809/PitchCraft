import React, { useState } from 'react'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'
import { motion } from 'framer-motion'
import { Power4 } from 'gsap'

const Features = () => {
    // We can use the useAnimation hook from framer-motion to animate the text i.e make an array of hooks and animate each letter
    const [hover, setHover] = useState(false)
    const [hover2, setHover2] = useState(false)



    return (
        <div data-scroll data-scroll-section data-scroll-speed="0.2" className='w-full py-10 bg-zinc-900 -mt-32'>
            <div className='text-5xl px-10 font-[Neue_Montreal] border-b-[1px] border-zinc-700 pb-10'>
                Featured projects
            </div>
            <div className="cards p-10 w-full flex gap-10 bg-zinc-900 ">
                <div onMouseEnter={() => { setHover2(true) }} onMouseLeave={() => { setHover2(false) }} className="relative card h-[80vh] w-1/2  rounded-xl">
                    <h1 className='pl-10 absolute flex overflow-hidden left-full -translate-x-1/2 -translate-y-1/2 top-1/2 font-["Test_Founders_Grotesk"] text-[#CDEA68] text-9xl z-[100] '>
                        {"FYDE".split('').map((item, index) => {
                            return <motion.span initial={{ y: "100%" }} animate={hover2 ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: 0.06 * index }} key={index} className='inline-block'>{item}</motion.span>
                        })}
                    </h1>
                    <div className="card-container w-full h-full rounded-xl bg-black overflow-hidden ">
                        <img className='w-full h-full bg-cover' src={card1} alt="" />
                    </div>
                </div>
                <div onMouseEnter={() => { setHover(true) }} onMouseLeave={() => { setHover(false) }} className="relative card h-[80vh] w-1/2  rounded-xl">
                    <h1 className='pr-10 absolute flex overflow-hidden right-full translate-x-1/2 -translate-y-1/2 top-1/2 font-["Test_Founders_Grotesk"] text-[#CDEA68] text-9xl z-[100] '>
                        {"VISE".split('').map((item, index) => {
                            return <motion.span initial={{ y: "100%" }} animate={hover ? { y: "0" } : { y: "100%" }} transition={{ ease: [0.22, 1, 0.36, 1], delay: 0.06 * index }} key={index} className='inline-block'>{item}</motion.span>
                        })}
                    </h1>

                    <div className="card-container w-full h-full rounded-xl bg-black overflow-hidden ">
                        <img className='w-full h-full bg-cover' src={card2} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
