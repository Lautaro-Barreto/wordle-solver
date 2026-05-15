import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

function AddRemoveRowsButton(props: {action, displayText: string}) {
  return(
    <button className={props.displayText === "Add Row" ? "btn btn-success" : "btn btn-danger"} onClick={props.action}>
      {props.displayText}
    </button>
  )
}

export function WordGrid() {

    const [rows, setRows] = useState(1);

    function handleClickAdd() {
      setRows(rows + 1);
    }
    
    function handleClickRemove() {
      setRows(rows - 1);
    }

    return(
    <section id="grid">  
        {[...Array(rows)].map(() => {
          return(
            <Container>
            <Row className="g-4">
              {[1,2,3,4,5].map((num) => (
                <Col md={2} key={num} style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <input className="form-control text-center bg-secondary text-white" maxLength={1} style={{height:'75%', aspectRatio: '1/1', borderRadius: '15px'}}/>
                </Col>
              ))}
            </Row>
          </Container>
          )
        })}       
        <AddRemoveRowsButton action={handleClickAdd} displayText="Add Row" />
        <AddRemoveRowsButton action={handleClickRemove} displayText="Remove Row" />
    </section>
    )
}