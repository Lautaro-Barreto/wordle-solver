import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MyNavbar } from './MyNavbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Solver } from './Solver';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { PreviousAnswers } from './PreviousAnswers';
import { WordleDictionary } from './WordleDictionary';

function App() { 

  return (
    <BrowserRouter basename="/">
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Solver />} />
        <Route path="/past-answers" element={<PreviousAnswers />} />
        <Route path="/wordle-dictionary" element={<WordleDictionary />} />
      </Routes>
      <Container>
        <Row>
          <footer>
            <p style={{textAlign: "center", marginTop: "20px"}}>© 2026 WordleHub. Visit the <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank" rel="noopener noreferrer"> official Wordle site</a>.</p>
          </footer>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
