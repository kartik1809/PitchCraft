import React from 'react'
import logo from '../assets/pitchCraft.svg'
const Navbar = () => {
  return (
    <div className='w-full h-[70px] fixed z-[999]  flex justify-between items-center px-10 font-["Neue_Montreal"]'>
      <img src={logo} alt="PitchCraft" className='h-8' />
      <div className='w-1/2 flex justify-between items-center'>
      {/* Old version */}
        {/* <ul className='flex w-1/2 justify-between items-center '>
            <li>Services</li>
            <li>Our Work</li>
            <li>About Us</li>
            <li>Insights</li>
        </ul> */}
        {/* New version */}
        <div className='flex w-1/2 justify-between items-center'>
            {['Services', 'Our work', 'About us', 'Insights'].map((item, index) => (
                <span key={index} className='cursor-pointer'>{item}</span>
            ))}
        </div>
        <span className='cursor-pointer'>Contact us</span>
      </div>
    </div>
  )
}

export default Navbar
