import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Menu.scss';

function Menu() {
    return (
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className='menuNavBar'>
          <Navbar.Brand>To Do List</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#tasks">Tasks</Nav.Link>
              <Nav.Link href="#goals">Goals</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }

export default Menu;