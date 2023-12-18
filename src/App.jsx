import { useState } from 'react'
import './App.css'
import Navbar from './Header/Navbar'
import About from './Content/About'
import Skills from './Content/Skills'
import Projects from './Content/Projects'
import ContactMe from './Content/ContactMe'
import Footer from './Footer/Footer'

function App() {

  return (
   <>
   <Navbar/>
   <About/>
   <Skills/>
   <Projects/>
   <ContactMe/>
   <Footer/>
   </>
  )
}

export default App
