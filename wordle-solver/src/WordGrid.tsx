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

export function WordGrid({ data, setData }) {

    const [correctRows, setCorrectRows] = useState(1);
    const [missingRows, setMissingRows] = useState(1);
    const [incorrectRows, setIncorrectRows] = useState(1);

    function handleClickAdd() {
      if (correctRows == 6) return;
      setCorrectRows(correctRows + 1);
    }
    
    function handleClickRemove() {
      if (correctRows == 1) return;
      setCorrectRows(correctRows - 1);
    }

    function handleClickAdd2() {
      if (incorrectRows == 6) return;
      setIncorrectRows(incorrectRows + 1);
    }
    
    function handleClickRemove2() {
      if (incorrectRows == 1) return;
      setIncorrectRows(incorrectRows - 1);
    }

    function handleClickAdd3() {
      if (missingRows == 6) return;
      setMissingRows(missingRows + 1);
    }
    
    function handleClickRemove3() {
      if (missingRows == 1) return;
      setMissingRows(missingRows - 1);
    }

    function handleSubmit(e) {
      e.preventDefault();
      alert("data: " + JSON.stringify(data));
    }

    return(
    <section id="grid">  
      <form onSubmit={handleSubmit}>

        <h2 style={{textAlign: "center", marginTop: "20px"}}>Words in correct positions</h2>
        <div className="correct-inputs-container">
          {[...Array(correctRows)].map((_, rowIndex) => {
            return(
              <div className={`input-${rowIndex + 1}-row`} style={{display: 'flex', alignItems: 'left', justifyContent: 'left'}}>
                {[1,2,3,4,5].map((num) => (
                <input name={`word${num}`} className="form-control text-center bg-success text-white input-letter" maxLength={1} style={{aspectRatio: '1/1', borderRadius: '15px', fontSize: '3rem', border: '1.5px solid #ccc', margin: '1.5px'}}/>
                ))}
                </div>
            )
          })}
          </div>
        <div className="gx-5" style={{display: "flex", justifyContent: "center", marginTop: "10px", gap: "5px"}}>
            <AddRemoveRowsButton action={handleClickAdd} displayText="Add Row" />
            <AddRemoveRowsButton action={handleClickRemove} displayText="Remove Row" />
        </div>  
        
        <h2 style={{textAlign: "center", marginTop: "20px"}}>Words in incorrect positions</h2>
        <div className="correct-inputs-container">
          {[...Array(incorrectRows)].map((_, rowIndex) => {
            return(
              <div className={`input-${rowIndex + 1}-row`} style={{display: 'flex', alignItems: 'left', justifyContent: 'left'}}>
                {[1,2,3,4,5].map((num) => (
                <input name={`word${num}`} className="form-control text-center bg-warning text-white input-letter" maxLength={1} style={{aspectRatio: '1/1', borderRadius: '15px', fontSize: '3rem', border: '1.5px solid #ccc', margin: '1.5px'}}/>
                ))}
                </div>
            )
          })}
          </div>
        <div className="gx-5" style={{display: "flex", justifyContent: "center", marginTop: "10px", gap: "5px"}}>
            <AddRemoveRowsButton action={handleClickAdd2} displayText="Add Row" />
            <AddRemoveRowsButton action={handleClickRemove2} displayText="Remove Row" />
        </div>

        <h2 style={{textAlign: "center", marginTop: "20px"}}>Letters not in the word</h2>
        <div className="incorrect-inputs-container">
          {[...Array(missingRows)].map((_, rowIndex) => {
            return(
              <div className={`input-${rowIndex + 1}-row`} style={{display: 'flex', alignItems: 'left', justifyContent: 'left'}}>
                {[1,2,3,4,5].map((num) => (
                <input name={`word${num}`} className="form-control text-center bg-secondary text-white input-letter" maxLength={1} style={{aspectRatio: '1/1', borderRadius: '15px', fontSize: '3rem', border: '1.5px solid #ccc', margin: '1.5px'}}/>
                ))}
                </div>
            )
          })}
          </div>
        <div className="gx-5" style={{display: "flex", justifyContent: "center", marginTop: "10px", gap: "5px"}}>
            <AddRemoveRowsButton action={handleClickAdd3} displayText="Add Row" />
            <AddRemoveRowsButton action={handleClickRemove3} displayText="Remove Row" />
        </div> 

        <div style={{display:"flex", justifyContent: "center", marginTop: "10px"}}>
          <Button variant="primary" type="submit">Filter</Button>
        </div> 

      </form>
        

          
{/*         {[...Array(rows)].map(() => {
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
        })} */}

    </section>
    )
}