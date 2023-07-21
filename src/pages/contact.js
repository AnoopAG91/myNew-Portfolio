import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'

function Contact() {
  // const [formStatus, setFormStatus] = React.useState('Send')
  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   setFormStatus('Submitting...')
  //   const { name, email, message } = e.target.elements
  //   let conFom = {
  //     name: name.value,
  //     email: email.value,
  //     message: message.value,
  //   }
  //   console.log(conFom)
  // }
  return (
    <div>
        <div className='contact-header'>
          <h1>Contact Me</h1>
        </div>

        <div className='contact-hero'>

        <div className='contact-form'>
        <div className="container mt-5">
      <h2 className="mb-3">Send an email</h2>
      <form action='https://formspree.io/f/maygnbrz' method='POST'>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" name='user_name'required  placeholder='Your Name'/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required name='user_email' placeholder='Enter Email'/>
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required name='message' placeholder='Message'/>
        </div>
        <button className="btn btn-danger" type="submit">
          {/* {formStatus} */} Submit
        </button>
      </form>
    </div>
        </div>

     
      <div className='contact-details'>
        <h3>Contact me</h3>
        <h4>Mob: +91 9567200950</h4>
        <h4>Email: anoopag47@gmail.com</h4>
        <h4>LinkedIn: <Link to= "https://www.linkedin.com/in/anoopgirish/">Click Here</Link></h4>

        <div className='social-media'>
          <h2>Connect with me</h2>
          <Link to="https://www.facebook.com/anoop.ag.50"><BsFacebook/></Link>   
          <Link to="https://www.instagram.com/an_oop_ag/"><BsInstagram/></Link>
          <Link to="https://www.linkedin.com/in/anoopgirish/"><BsLinkedin/></Link>
        </div>
      </div>

        </div>
    </div>
  )
}

export default Contact