import React from 'react'
import './home.css'
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className='hero-wrapper'>
        <div className='main-info'>
            <h1>Hi, I'm ANOOP.</h1>
            <h3>-Front-End Developer-</h3>
            <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'WEB DEVELOPMENT',
        1000, // wait 1s before replacing "Mice" with "Hamsters"
        'WEB DESIGN',
        1000,
        'GOOGLE ADS',
        1000,
        'FACEBOOK ADS',
        1000
      ]}
      wrapper="span"
      speed={30}
      style={{ fontSize: '2em', display: 'inline-block', color:"#ff7f50"}}
      repeat={Infinity}
    />
           
           
            <button className='main-btn'><Link to={"/contact"}>Contact Me</Link></button>
        </div>
    </div>
  )
}

export default Home