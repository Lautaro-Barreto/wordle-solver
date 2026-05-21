import { Col, Container, Row } from "react-bootstrap";
import { WordGrid } from "./WordGrid";
import { PossibleAnswers } from "./PossibleAnswers";
import { useState } from "react";

export function Solver() {
    
    const [formData, setFormData] = useState({});

    return(
        <Container>
        <Row>
          <h1 style={{textAlign: "center", marginTop: "20px"}}>Wordle Solver</h1>
          <p style={{textAlign: "center"}}>One solver to rule them all!</p>
        </Row>
        <Row>
          <Col md={6}>
            <WordGrid data={formData} setData={setFormData} />
          </Col>
          <Col md={6} style={{borderLeft: "1px solid rgb(162, 196, 231)"}}>
            <h2 style={{textAlign: "center", marginTop: "20px"}}>Possible Answers</h2>
            <PossibleAnswers data={formData} /> 
          </Col>
        </Row>
      </ Container>
    )
}