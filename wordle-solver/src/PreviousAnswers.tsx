import { Container, Row } from "react-bootstrap";
import { WordList } from "./WordList";
import answersFile from '../past-wordle-answers.txt?raw';

export function PreviousAnswers(){
    return(
        <Container>
            <Row>
                <h1 style={{textAlign: "center", marginTop: "20px"}}>Previous Answers</h1>
                <p style={{textAlign: "center"}}>Everyone is here</p>
            </Row>
            <Row>
                <WordList words={answersFile.split(" ").sort()}/ >
            </Row>
        </Container>
    )
}