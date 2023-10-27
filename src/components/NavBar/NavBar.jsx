import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../assets/logo.svg';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';


// Bootstrap Navbar links
const NavBar = ({ item }) => {
  return (
        <Navbar variant="dark" bg="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">
              <img src={logo} alt="gamingfarm" width="150" height="150" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbar-dark-example" />
            <Navbar.Collapse id="navbar-dark-example" className="justify-content-end">
              <Nav>
                <NavDropdown id="nav-dropdown-dark-example" title="Categories" menuVariant="dark">
                  <NavDropdown.Item href="/">Home</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/games/sports">Sports</NavDropdown.Item>
                  <NavDropdown.Item href="/games/adventure">Adventure</NavDropdown.Item>
                  <NavDropdown.Item href="/games/shooter">Shooters</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
            <Nav.Link as={Link} to="/cart">
              <CartWidget item={item} />
            </Nav.Link>
          </Container>
        </Navbar>
  );
}

export default NavBar;