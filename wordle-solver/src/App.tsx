import { useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Button } from 'react-bootstrap';
import { WordGrid } from '../src/WordGrid';

function App() {
  return (
    <>
    <h2>Word Grid</h2>
    <WordGrid/>
    <Button variant="primary">Filter</Button>
    </>
  )
}

export default App
