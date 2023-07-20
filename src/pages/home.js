import React from 'react'
import './home.css'
import Typed from 'react-typed';

function Home() {
  return (
    <div className='hero-wrapper'>
        <div className='main-info'>
            <h1>Hi, I'm ANOOP.</h1>
            <h3>-Front-End Developer-</h3>
            
            <Typed
                className='typed-text'
                strings={["Web Design", "Web Development", "Facebook Ads", "Google Ads"]}
                typeSpeed={80}
                backSpeed={100}
                loop
            />
           
            <button className='main-btn'>Contact Me</button>
        </div>
    </div>
  )
}

export default Home