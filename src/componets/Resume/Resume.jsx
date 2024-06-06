import React from 'react'
import resume_img from '../assets/resume.jpg'
import './Resume.css'

const About = () => {
  return (
    <div className='resume' id='resume'>
      <div className="left-resume">
        <img src={resume_img} />
      </div>
      <div className="right-resume">
        <h1>Resume</h1><br />
        <p>You can view my resume <a href="https://www.canva.com/design/DAGHJRs4rRI/R64FJRQjsPbtATGB4wYetA/edit?utm_content=DAGHJRs4rRI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">Download</a></p>
        </div>
    </div>
  )
}

export default About