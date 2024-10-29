import React from 'react'
import logo from '../assets/pitchCraft.svg'

const Footer = () => {
    return (
        <>
            <div className='w-full h-screen min-h-screen flex pt-0 p-10  bg-zinc-900'>
                <div className='relative w-1/2 h-full'>
                    <div className='flex flex-col leading-none'>
                        <h2 className='font-["Test_Founders_Grotesk"] text-[8vw] uppercase'>Eye-</h2>
                        <h2 className='font-["Test_Founders_Grotesk"] text-[8vw] uppercase'>Opening</h2>
                    </div>

                </div>
                <div className='w-1/2 h-full leading-none'>
                    <h2 className='font-["Test_Founders_Grotesk"] text-[8vw] uppercase'>Presentations</h2>
                    <div className='links pt-10'>
                        <div className='flex flex-col mb-10'>
                            {['S:', 'Instagram', 'Twitter', 'Facebook', 'LinkedIn'].map((item, index) => (
                                <span key={index} className='cursor-pointer' style={index === 0 ? { marginBottom: 20 } : { marginBottom: 5 }}>{item}</span>
                            ))}
                        </div>
                        <div className='flex flex-col mb-10'>
                            {['L:', '202-1965 W 4th Ave', 'Vancouver, Canada', '30 Chukarina St', 'Lviv, Ukraine'].map((item, index) => (
                                <span key={index} className='cursor-pointer' style={index === 0 || index === 2 ? { marginBottom: 20 } : { marginBottom: 5 }}>{item}</span>
                            ))}
                        </div>
                        <div className='flex w-full justify-between mb-5'>
                            <div className='flex flex-col' >
                                {['E:', 'hello@ochi.design'].map((item, index) => (
                                    <span key={index} className='cursor-pointer' style={index === 0 ? { marginBottom: 20 } : { marginBottom: 5 }}>{item}</span>
                                ))}
                            </div>
                            <div className='flex flex-col'>
                                {['M:', 'Home', 'Services', 'Our work', 'About us', 'Insights', 'Contact us'].map((item, index) => (
                                    <span key={index} className='cursor-pointer' style={index === 0 ? { marginBottom: 20 } : { marginBottom: 5 }}>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div >

                    </div>
                </div>

            </div>
            <div className='w-full flex pr-10  bg-zinc-900'>
                <div className='w-1/2'>
                    <img className='p-10 pt-0 w-[14vw]' src={logo} alt="PitchCraft" />
                </div>
                <div className='flex w-1/2 justify-between '>
                    <span className='text-zinc-500'>© PitchCraft design 2024. Legal Terms</span>
                    <span className='text-zinc-500'>Website by Kartik1809</span>
                </div>
            </div>
        </>
    )
}

export default Footer
