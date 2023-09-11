import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo.svg';
import './NavBar.css';

function NavBar() {
  return (
      <Navbar expand="lg" style={{ background: '#282c34' }}>
        <img src={logo} alt="gamingfarm" width="150" height="150" />
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavDropdown title={<span className="text-white">Store</span>} id="basic-nav-dropdown">
                <NavDropdown.Item href="/">Home</NavDropdown.Item>
                <NavDropdown.Item href="/">Action</NavDropdown.Item>
                <NavDropdown.Item href="/">Adventure</NavDropdown.Item>
                <NavDropdown.Item href="/">Shooters</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default NavBar;