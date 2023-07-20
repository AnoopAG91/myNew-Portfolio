import React from 'react'
import './about.css'
import Resume from '../anoopResume.pdf'

import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {DiJavascript} from 'react-icons/di'
import {BiLogoReact} from 'react-icons/bi'
import {TbBrandRedux} from 'react-icons/tb'
import {FaBootstrap} from 'react-icons/fa'
import {SiMui} from 'react-icons/si'
import {AiFillGithub} from 'react-icons/ai'


function About() {
  return (
    <div className='about'>
        <div className='about-header'>
          <h1>About Me</h1>
        </div>

        <div className='about-hero'>
          <div className='about-img'>
            <div className='abt-image'></div>
          </div>
          <div className='about-content'>
            <h1>Hi, I am Anoop</h1>
            <h3>Front-End Developer</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

              <a href={Resume}
                 download="Anoop_AG-PDF-document"
                 target="_Anoop_resume"
                 rel="noopener noreferrer">
                <button>Download Resume</button>
              </a>
          </div>
        </div>

        <div className='experience-sec'>
          <div className='skills'>
            <h1>My Skills</h1>
            <p>HTML <AiFillHtml5 className='icons'/></p>
            <p>CSS <DiCss3 className='icons'/></p>
            <p>JAVASCRIPT <DiJavascript className='icons'/></p>
            <p>REACTjs <BiLogoReact/></p>
            <p>REDUX-TOOLKIT <TbBrandRedux className='icons'/></p>
            <p>BOOTSTRAP <FaBootstrap className='icons'/></p>
            <p>MATERIAL UI <SiMui className='icons'/></p>
            <p>GIT <AiFillGithub className='icons'/></p>
          </div>
         <div className='ruler'><hr/></div> 
          <div className='experience'>
            <h1>My Experience</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
              <button>Contact Me</button>
          </div>
        </div>
        
    </div>
  )
}

export default About