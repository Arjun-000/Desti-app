import React from 'react'
import { Button, Container, Form, Nav, Navbar } from 'react-bootstrap'

import { Link } from 'react-router-dom'

const Header = ({outsideHome}) => {
  return (
    <>
        <Navbar expand="lg" className='fixed-top bg-dark'>
      <Container fluid>
        <Navbar.Brand href="#"><h1 className='text-white'><i class="fa-solid fa-plane-departure me-3"></i>Desti</h1></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <Nav
            className="ms-auto me-3 my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" className='text-white fw-bolder'><Link className='text-white text-decoration-none' to={'/'}>Home</Link></Nav.Link>
            <Nav.Link href="#action2" className='text-white fw-bolder'><Link className='text-white text-decoration-none' to={'/Destination'}>Destinations</Link></Nav.Link>
            <Nav.Link href="#action3" className='text-white fw-bolder'><Link className='text-white text-decoration-none' to={'/Visited'}>Visited</Link></Nav.Link>
            <Nav.Link href="#action3" className='text-white fw-bolder'><Link className='text-white text-decoration-none' to={'/Wishlist'}>Wishlist</Link></Nav.Link>

          </Nav>
          {
            outsideHome &&
            <Form className="d-flex ms-5 me-2">
            <Form.Control
              type="search"
              placeholder="Search destination..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="success">Search</Button>
          </Form>}
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
   
  )
}

export default Header