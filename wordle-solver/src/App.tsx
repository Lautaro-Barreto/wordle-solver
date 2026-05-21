import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MyNavbar } from './MyNavbar';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { Solver } from './Solver';
import Row from 'react-bootstrap/esm/Row';
import Container from 'react-bootstrap/esm/Container';
import { PreviousAnswers } from './PreviousAnswers';

function App() { 

  return (
    <BrowserRouter>
      <MyNavbar />
      <Routes>
        <Route path="/" element={<Solver />} />
        <Route path="/past-answers" element={<PreviousAnswers />} />
      </Routes>
      <Container>
        <Row>
          <footer>
            <p style={{textAlign: "center", marginTop: "20px"}}>© 2023 Wordle Solver. All rights reserved.</p>
          </footer>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default App
