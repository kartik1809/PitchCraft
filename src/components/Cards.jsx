import React from 'react'
import logo from '../assets/pitchCraft2.svg'

const Cards = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center pt-12 px-10 gap-10'>
            <div className='bg-[#004D43] w-1/2 h-3/5 rounded-xl relative'>
                <img className='w-[14vw] absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2' src={logo} alt="PitchCraft" />
                <div className='border-[#CDEA68] border-2 w-36 p-2 rounded-3xl absolute bottom-4 left-4 text-[#CDEA68]'>@2024-Present</div>
            </div>

            <div className='w-1/2 h-3/5 flex gap-10'>
                <div className='bg-[#212121] w-1/2 h-full rounded-xl'>

                </div>
                <div className='bg-[#212121] w-1/2 h-full rounded-xl'></div>
            </div>
        </div>
    )
}

export default Cards
