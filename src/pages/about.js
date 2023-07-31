import React from 'react'
import './about.css'
import Resume from '../Resume2.pdf'

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
            <p>Hello, I have completed my Front-end development Training in <strong>ReactJs</strong> from <strong>FunctionUp</strong>, which started from march 2023. 
                As a front end developer I have been given various Assignments and projects during the training period. Such as, social media websites,
                Kanban App, E-commerce websites and web Applications. During the cohort I have also used many libraries in my projects which makes the apps more user friendly.  
                Team work was the most interested part during developing the projects. we worked in a group where each members will have different tasks
                to complete the project. I have got positive feed backs for my contribution of each projects. </p>
          </div>
        </div>
        
    </div>
  )
}

export default About