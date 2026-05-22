import { Container, Row } from 'react-bootstrap';
import dictionaryFile from '../wordle-dictionary.txt?raw';
import { WordList } from './WordList';

export function WordleDictionary() {
    const dictionary : string[] = dictionaryFile.split("\r").map(str => str.trim());
    return(
        <Container>
            <Row>
                <h1 style={{textAlign: "center", marginTop: "20px"}}>Wordle Dictionary</h1>
                <p style={{textAlign: "center"}}>All words included in the game's dictionary</p>
            </Row>
            <Row>
                <WordList words={dictionary}/ >
            </Row>
                <Row>
                <h1 style={{textAlign: "center", marginTop: "20px"}}>Extended 5-letter word dictionary</h1>
                <p style={{textAlign: "center"}}>Words that are not in the official Wordle dictionary, but can be used for pattern matching</p>
            </Row>
            <Row>
                <WordList words={["PLACE","HOLDER"]} />
            </Row>
        </Container>
    )
}