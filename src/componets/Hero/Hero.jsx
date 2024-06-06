import React, { useState, useEffect } from 'react'
import './Hero.css'
import hero_img from '../assets/hero.jpg'
import { FaGithub } from "react-icons/fa6";
import { SlSocialLinkedin } from "react-icons/sl";


const Hero = () => {
  const titles = ["Full-stack developer", "Web Development", "Frontend developer"];
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className='section' id='hero'>
      <div className='contianer'>
        <h1 className='main'>Hi, <br /> I'm Saravana Kumar
          <p>{titles[currentTitleIndex]}</p>
        </h1>
        <div className="icons">
            <a href="https://github.com/Saravana-189"><FaGithub/></a>
            <a href="#"><SlSocialLinkedin/></a>
        </div>
      </div>
      <img className='hero'src={hero_img} />
    </section>
  )
}

export default Hero