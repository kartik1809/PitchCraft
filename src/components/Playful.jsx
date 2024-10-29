import React, { useEffect, useState } from 'react';
import bg from '../assets/bg.png';

const Playful = () => {
    const [rotate, setRotate] = useState(0);
    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY
            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            let angle = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
            setRotate(angle)
        })
    })

    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.7" className='w-full h-screen overflow-hidden'>
            <div
               
                className='relative w-full h-full'
                style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-10 items-center justify-center w-1/2'>
                    <div className='bg-white w-52 h-52 rounded-full p-10 flex justify-center items-center'>
                        <div className='bg-[#282828] h-full w-full rounded-full relative'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate - 180}deg)` }} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                                <div className='w-8 h-8 rounded-full bg-white'>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white w-52 h-52 rounded-full p-10 flex justify-center items-center'>
                        <div className='bg-[#282828] h-full w-full rounded-full relative'>
                            <div style={{ transform: `translate(-50%,-50%) rotate(${rotate - 180}deg)` }} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10 '>
                                <div className='w-8 h-8 rounded-full bg-white'>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Playful;
