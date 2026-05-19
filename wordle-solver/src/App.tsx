import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Col, Container, Row } from 'react-bootstrap';
import { WordGrid } from '../src/WordGrid';
import { MyNavbar } from './MyNavbar';
import { useState } from 'react';
import { PossibleAnswers } from './PossibleAnswers';

function App() { 

  const [formData, setFormData] = useState({});

  return (
    <div>
      <MyNavbar />
      <Container>
        <Row>
          <h1 style={{textAlign: "center", marginTop: "20px"}}>Wordle Solver</h1>
          <p style={{textAlign: "center"}}>* Insert placeholder text *</p>
        </Row>
        <Row>
          <Col md={6}>
            <WordGrid data={formData} setData={setFormData} />
          </Col>
          <Col md={6} style={{borderLeft: "1px solid rgb(162, 196, 231)"}}>
            <h2 style={{textAlign: "center", marginTop: "20px"}}>Possible Answers</h2>
            <PossibleAnswers />
          </Col>
        </Row>
      </ Container>
    </div>
  )
}

export default App
