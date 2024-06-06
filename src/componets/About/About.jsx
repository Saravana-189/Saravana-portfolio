import React from 'react'
import about_img from '../assets/about.jpg'
import './About.css'

const About = () => {
  return (
    <div className='about' id='about'>
      <div className="left">
        <img src={about_img} />
      </div>
      <div className="right">
        <h1>About me</h1><br />
        <p>I am Saravana Kumar, a rookie web developer and frontend developer. I build projects using React, axios and CSS, focusing on creating dynamic and responsive user interfaces.</p><br />
        <p>Currently, I am expanding my skill set by working on full-stack development with the MERN stack (MongoDB, Express.js, React, Node.js) to build comprehensive web applications.</p>
      </div>
    </div>
  )
}

export default About