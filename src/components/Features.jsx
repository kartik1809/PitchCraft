import React from 'react'
import card1 from '../assets/card1.png'
import card2 from '../assets/card2.png'

const Features = () => {
    return (
        <div className='w-full py-10'>
            <div className='text-5xl px-10 font-[Neue_Montreal] border-b-[1px] border-zinc-700 pb-10'>
                Featured projects
            </div>
            <div className="cards p-10 w-full flex gap-10 ">
                <div className="relative card h-[80vh] w-1/2  rounded-xl">
                    {/* <h1 className='pl-10 absolute left-full -translate-x-1/2 -translate-y-1/2 top-1/2 font-["Test_Founders_Grotesk"] text-[#CDEA68] text-9xl z-[100] '>
                        {"FYDE".split('').map((item, index) => {
                            return <span key={index} className=''>{item}</span>
                        })}
                    </h1> */}
                    <div className="card-container w-full h-full rounded-xl bg-black overflow-hidden ">
                        <img className='w-full h-full bg-cover' src={card1} alt="" />
                    </div>
                </div>
                <div className="relative card h-[80vh] w-1/2  rounded-xl">
                    <h1 className='pr-10 absolute right-full translate-x-1/2 -translate-y-1/2 top-1/2 font-["Test_Founders_Grotesk"] text-[#CDEA68] text-9xl z-[100] '>
                        {"VISE".split('').map((item, index) => {
                            return <span key={index} className=''>{item}</span>
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
