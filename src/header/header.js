import React from 'react'
import './header.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {BrowserRouter,Routes, Route,Link} from 'react-router-dom'
import Home from '../pages/home';
import About from '../pages/about'
import Projects from '../pages/projects';
import Contact from '../pages/contact';


function Header() {
  return (
    <BrowserRouter>
    <div className='Header'>
    <Navbar expand="lg" className="bg-dark navbar-dark" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to={"/"}>ANOOP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link} to={"/projects"}>projects</Nav.Link>
            <Nav.Link as={Link} to={"/contact"}>Contact</Nav.Link>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
     
</div>
</BrowserRouter>

  )

}

export default Header