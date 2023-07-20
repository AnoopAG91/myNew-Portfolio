import React from 'react'
import './projects.css'
import Gym_Img from '../gym_image.png'
import Portfolio_Img from '../portfolio_image.png'
import Twitter_Img from '../twitter_image.png'
import Kanban_img from '../kanban_image.png'
import { Link } from 'react-router-dom'


function Projects() {
  return (
    <div className='projects'>
        <div className='projects-header'>
          <h1>My Projects</h1>
        </div>
        <div className='projects-hero'>
          <div className='pro-sec1'>
            <div className='pro1'>
              <img src={Twitter_Img} alt='Twitter'/>
              <div className='pro-text'>
              <h3>Twitter Clone</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <button><Link to={"https://twitter-clone-gamma-three.vercel.app/home"}>Click here</Link></button>
            </div>
            <div className='pro2'>
            <img src={Kanban_img} alt='KanBan'/>
            <div className='pro-text'>
              <h3>Kanban</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
            <button><Link to={"https://kanban-bgaa.vercel.app/"}>Click here</Link></button>
            </div>
         </div>

         <div className='pro-sec2'>
            <div className='pro3'>
            <img src={Gym_Img} alt='Gym'/>
            <div className='pro-text'>
              <h3>Gym website</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </div>
             <button><Link to={"https://gym-65hz.vercel.app/"} >Click here</Link></button>
            </div>
            <div className='pro4'>
            <img src={Portfolio_Img} alt='portfolio'/>
            <div className='pro-text'>
              <h3>Portfolio</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
               <button><Link to={"https://my-new-portfolio-jmo6.vercel.app/"}>Click here</Link></button>
            </div>
         </div>
        </div>

    </div>
  )
}

export default Projects