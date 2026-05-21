import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function MyNavbar() {
    
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>Wordle Solver</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link>
                  <NavLink to="/">Solver</NavLink>  
                </Nav.Link>
                <Nav.Link>
                <NavLink to="/past-answers">Previous Answers</NavLink>
                </Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </>
    )
}