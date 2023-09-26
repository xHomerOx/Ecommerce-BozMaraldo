import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
      <Navbar expand="lg" style={{ background: '#282c34' }}>
        <Container>
          <Link to="/">
            <img src={logo} alt="gamingfarm" width="150" height="150" />
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/" className='text-white'>Inicio</Nav.Link>
              <Nav.Link href="/games" className='text-white'>Action</Nav.Link>
              <Nav.Link href="/games" className='text-white'>Adventure</Nav.Link>
              <Nav.Link href="/games" className='text-white'>Shooters</Nav.Link>
              <CartWidget />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;