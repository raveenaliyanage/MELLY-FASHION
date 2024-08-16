//import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'
import { Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { sampleProducts } from './data'

function App() {
  //const [count, setCount] = useState(0)


  return (
    <div className='d-flex flex-column vh-100'>
      <header>
        <Navbar bg="dark" variant='dark' expand="lg">
          <Container>
            <Navbar.Brand>MELLY FASHION</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className='nav-link'>
              Cart
            </a>
            <a href="/signin" className='nav-link'>
              Sign In
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className='mt-3'>
        
        </Container>
      </main>
      <footer>
        <div className='text-center'>All Right Reserved</div></footer>
    </div>
  )
}

export default App
