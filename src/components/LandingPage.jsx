import React,{useState}from 'react'
import logo from '../assets/hero_logo.png'

const LandingPage = () => {
    const [reveal, setReveal] = useState(false)
    setTimeout(() => {
        setReveal(true)
    }, 2000);
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.3" className='bg-zinc-900 pt-[70px] h-screen w-full'>
            <div className='textstructure px-10 py-24'>
                <div className='masker'>
                    <h1 className='uppercase leading-[4vw] whitespace-nowrap font-["Test_Founders_Grotesk"] text-8xl'>Empowering Ambitious</h1>
                </div>
                <div className="masker flex gap-2">
                    <img className='h-[70px] rounded-lg hero-reveal' style={reveal ? { display: 'inline' } : { display: 'none' }}src={logo} alt="PitchCraft" />
                    <h1 className='uppercase leading-[4vw] whitespace-nowrap font-["Test_Founders_Grotesk"] text-8xl'>Brands with Persuasive</h1>
                </div>
                <div className="masker">
                    <h1 className='uppercase leading-[4vw] whitespace-nowrap font-["Test_Founders_Grotesk"] text-8xl'>Visual Stories</h1>
                </div>
            </div>
            <div className='border-t-[1px] border-zinc-600 mx-10 p-4 flex justify-between'>
                <span>For public and private companies</span>
                <span>From the first pitch to IPO</span>
                <div className='flex gap-2' >
                    <span className='p-2 px-4 rounded-3xl uppercase border-[1px] border-zinc-600'>Start The Project</span>
                    <span className='rounded-full p-2 border-[1px] border-zinc-300 hover:-rotate-45 '><img className='w-6' src="https://img.icons8.com/?size=100&id=39969&format=png&color=ffffff" alt="arrow" /></span>
                </div>
            </div>

            <div className='text-center pt-10 text-lg text-zinc-500'>Scroll down</div>

        </div>
    )
}

export default LandingPage
