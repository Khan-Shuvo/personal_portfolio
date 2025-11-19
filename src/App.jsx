import { useState } from 'react'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import About from './components/about/About'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar />
      <Hero/>
      <About/>
      <Skills />
      <Projects />
      <Footer/>
    </>
  )
}

export default App
