import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { Button, Form } from 'react-bootstrap';
import { WordGrid } from '../src/WordGrid';
import { MyNavbar } from './MyNavbar';
import { WordList } from './WordList';
import { useState } from 'react';

function App() { 

    const [formData, setFormData] = useState({});
    
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
        <WordList words={["ZEBRA", "QUICK", "LION"]} />
      {/*section (hidden until state show = true): <WordList />*/}
    </div>
  )
}

export default App
