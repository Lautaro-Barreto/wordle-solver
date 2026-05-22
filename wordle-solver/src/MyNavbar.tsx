import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";

export function MyNavbar() {
    
    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand>WordleHub</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/">Solver</Nav.Link>
                <Nav.Link as={NavLink} to="/past-answers">Previous Answers</Nav.Link>
                <Nav.Link as={NavLink} to="/wordle-dictionary">Wordle Dictionary</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
      </>
    )
}