import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marque from './components/Marque'
import About from './components/About'
import Playful from './components/Playful'
import Features from './components/Features'
import Cards from './components/Cards'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';


const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marque/>
      <About/>
      <Playful/>
      <Features/>
      <Cards/>
      <Footer/>
    </div>
  )
}

export default App
