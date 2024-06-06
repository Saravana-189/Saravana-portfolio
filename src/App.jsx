import React from 'react'
import './App.css'
import Header from './componets/Header/Header'
import Hero from './componets/Hero/Hero'
import About from './componets/About/About'
import Project from './componets/Projects/Project'
import Resume from './componets/Resume/Resume'
import Contact from './componets/Contact/Contact'
import Footer from './componets/Footer/Footer'


const App = () => {
  return (
    <div>
    <Header/>
    <Hero/>
    <About/>
    <Project/>
    <Resume/>
    <Contact/>
    <Footer/>
    </div>
  )
}

export default App