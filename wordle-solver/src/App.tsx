import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

import { Button, Form, Navbar } from 'react-bootstrap';
import { WordGrid } from '../src/WordGrid';
import { FilterForm } from './FilterForm';
import { MyNavbar } from './MyNavbar';

function App() { 

    function handleSubmit(event) {
    event.preventDefault();
    alert("submitted :D");
  }

  return (
    <div>
      <MyNavbar />
      <Form onSubmit={handleSubmit}>
        <WordGrid/>
        <div style={{display:"flex", justifyContent: "center", marginTop: "10px"}}>
          <Button variant="primary" type="submit">Filter</Button>
        </div>
        </Form>
      {/*section (hidden until state show = true): <PossibleAnswers/>*/}
    </div>
  )
}

export default App
