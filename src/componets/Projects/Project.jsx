import React from 'react'
import './Project.css'
import ecommerce from '../assets/ecommerce.jpg'
import crypto from '../assets/crypto.jpg'
import foodapp from '../assets/foodapp.jpg'

const Project = () => {
    return (
        <div className='project' id='project'>
            <div className="left-project">
                <div className="heading">Projects</div>
                <br />
                <p>These are some of my modest projects that I have constructed, click to see it</p>
            </div>
            <div className="right-project">
                <div className='image-1'>
                <a href="https://github.com/Saravana-189/E-commerce"> <img className='image-1'src={ecommerce} /></a>
                    <div className="discription">
                        <p>Developed a simple food app using React.js, CSS and context API</p>
                    </div>
                </div>
                <div>
                <a href="https://github.com/Saravana-189/Food-App"><img className='image-2' src={foodapp} /></a>
                    <div className="discription">
                        <p>Done a simple food app using React.js and CSS,
                            ensuring a responsive design across all devices</p>
                    </div>
                </div>
                <div>
                <a href="https://github.com/Saravana-189/Crypto-Tracking"><img className='image-2' src={crypto} /></a>
                    <div className="discription">
                        <p>Developed a Responsive crypto tracking system using
                            React, integrated API and CSS</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project