import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Col, Container, Row } from 'react-bootstrap';
import { WordGrid } from '../src/WordGrid';
import { MyNavbar } from './MyNavbar';
import { WordList } from './WordList';
import { useState } from 'react';

function App() { 

  const [formData, setFormData] = useState({});

  return (
    <div>
      <MyNavbar />
      <Container>
        <Row>
          <h1 style={{textAlign: "center", marginTop: "20px"}}>Wordle Solver</h1>
          <p style={{textAlign: "center"}}>Enter your guesses and the colors of the letters to filter possible answers.</p>
        </Row>
        <Row>
          <Col md={6}>
            <h2 style={{textAlign: "center", marginTop: "20px"}}>Input your guesses</h2>
            <WordGrid />
          </Col>
          <Col md={6}>
            <h2 style={{textAlign: "center", marginTop: "20px"}}>Possible Answers</h2>
            <WordList words={["ZEBRA", "QUICK", "LION"]} />
          </Col>
        </Row>
      </ Container>
    </div>
  )
}

export default App
