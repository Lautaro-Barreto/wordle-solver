import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";

function AddRemoveRowsButton(props: {action, displayText: string}) {
  return(
    <Button type="button" className={props.displayText === "Add Row" ? "btn btn-success" : "btn btn-danger"} onClick={props.action}>
      {props.displayText}
    </Button>
  )
}

function ChangeInputColor() {
  return(
    <div className="form-control text-center bg-secondary text-white"></div>
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

    function handleSubmit(event) {
    event.preventDefault();
    alert("submitted :D");
    }

    return(
    <section id="grid">  
      <Form onSubmit={handleSubmit}>
        {[...Array(rows)].map(() => {
          return(
            <Container style={{display: 'flex', alignItems: 'left', justifyContent: 'left'}}>
            <Row className="gx-1 gy-0">
              {[1,2,3,4,5].map((num) => (
                <Col xs={2} md={2} key={num} >
                  <input className="form-control text-center bg-secondary text-white" maxLength={1} style={{height:'75%', aspectRatio: '1/1', borderRadius: '15px'}}/>
                </Col>
              ))}
            </Row>
          </Container>
          )
        })}
        <div className="gx-5" style={{display: "flex", justifyContent: "center", marginTop: "10px", gap: "20px"}}>
            <AddRemoveRowsButton action={handleClickAdd} displayText="Add Row" />
            <AddRemoveRowsButton action={handleClickRemove} displayText="Remove Row" />
        </div>  
        <div style={{display:"flex", justifyContent: "center", marginTop: "10px"}}>
          <Button variant="primary" type="submit">Filter</Button>
        </div>
      </Form>     
    </section>
    )
}