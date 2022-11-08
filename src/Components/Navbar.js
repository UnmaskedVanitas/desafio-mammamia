import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'

function CollapsibleExample() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Pizzeria Mamma Mia!</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features"></Nav.Link>
                        <Nav.Link href="#pricing"></Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link href="#deets"></Nav.Link>
                        <LinkContainer to="/carrito">
                            <Nav.Link >
                                Carrito
                            </Nav.Link>
                        </LinkContainer>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;

