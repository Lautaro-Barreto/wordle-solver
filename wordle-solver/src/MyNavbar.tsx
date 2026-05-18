import { useState } from "react";
import { Button, Container, Modal, Nav, Navbar } from "react-bootstrap";
import { Word } from "./Word";
import answersFile from '../past-wordle-answers.txt?raw';

export function MyNavbar() {
    
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }
    function handleShow() {
        setShow(true);
    }

    return(
        <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
            <Navbar.Brand href="https://www.nytimes.com/games/wordle/index.html">Wordle Solver</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link onClick={handleShow}>
                    Past answers
                </Nav.Link>
                <Nav.Link>Wordle Dictionary</Nav.Link>
                <Nav.Link>Five letter words dictionary</Nav.Link>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
        
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Past Wordle Answers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                 {answersFile.split(" ").slice(0, answersFile.length).map((word) => (
                                <Word content={word} />
                              ))}
            </Modal.Body>
            <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
                Close
            </Button>
            </Modal.Footer>
      </Modal>
      </>
    )
}