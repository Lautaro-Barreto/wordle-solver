import { useState, type MouseEventHandler } from "react";
import { Button, FormCheck } from "react-bootstrap";

function AddRemoveRowsButton(props: {action, displayText: string}) {
  return(
    <Button type="button" className={props.displayText === "Add Row" ? "btn btn-success" : "btn btn-danger"} onClick={props.action}>
      {props.displayText}
    </Button>
  )
}

export function WordGrid({ data, setData}) {

    const [misplacedRows, setMisplacedRows] = useState(1);

    function flushForm() {
      
    }

    function handleClickAdd() {
      if (misplacedRows == 6) return;
      setMisplacedRows(misplacedRows + 1);
    }
    
    function handleClickRemove() {
      if (misplacedRows == 1) return;
      setMisplacedRows(misplacedRows - 1);
    }

    function handleSubmit(e) {
      e.preventDefault();
      const formData = new FormData(e.target);
      const datos = {};
      for (const [key, value] of formData.entries()) {
        if (value.valueOf() !== "") datos[key] = value;
      }
      setData(datos);
    }
    
    return(
    <section id="grid">  
      <form onSubmit={handleSubmit}>

        <h2 style={{textAlign: "center", marginTop: "20px"}}>Letters in correct positions</h2>
        <div className="correct-inputs-container" style={{display: 'flex', alignItems: 'left', justifyContent: 'left'}}>
                {[1,2,3,4,5].map((num) => (
                <input name={`correct-letter-${num}`} className="form-control text-center bg-success text-white input-letter" maxLength={1} autoComplete="off" style={{aspectRatio: '1/1', borderRadius: '15px', fontSize: '3rem', border: '1.5px solid #ccc', margin: '1.5px'}}/>
                ))}
          </div>
        <div className="gx-5" style={{display: "flex", justifyContent: "center", marginTop: "10px", gap: "5px"}}>
          <Button type="button" className="btn btn-secondary" onClick={flushForm}>Reset all inputs</Button>
        </div>  
        
        <h2 style={{textAlign: "center", marginTop: "20px"}}>Misplaced Letters</h2>
        <div className="misplaced-inputs-container">
          {[...Array(misplacedRows)].map((_, rowIndex) => {
            return(
              <div className={`misplaced-input-${rowIndex + 1}-row`} style={{display: 'flex', alignItems: 'left', justifyContent: 'left'}}>
                {[1,2,3,4,5].map((num) => (
                <input name={`misplaced-letter-${num}-input-${rowIndex + 1}`} className="form-control text-center bg-warning text-white input-letter" maxLength={1} autoComplete="off" style={{aspectRatio: '1/1', borderRadius: '15px', fontSize: '3rem', border: '1.5px solid #ccc', margin: '1.5px'}}/>
                ))}
                </div>
            )
          })}
          </div>
        <div className="gx-5" style={{display: "flex", justifyContent: "center", marginTop: "10px", gap: "5px"}}>
            <AddRemoveRowsButton action={handleClickAdd} displayText="Add Row" />
            <AddRemoveRowsButton action={handleClickRemove} displayText="Remove Row" />
        </div>

        <h2 style={{textAlign: "center", marginTop: "20px"}}>Letters not in the word</h2>
        <div className="missing-inputs-container">
          <input name="missing-letters-input" className="form-control text-center bg-secondary text-white" maxLength={26} autoComplete="off" style={{borderRadius: '15px', fontSize: '3rem', border: '1.5px solid #ccc', margin: '1.5px'}}/>
        </div>

        <div style={{display:"flex", justifyContent: "center", marginTop: "10px", gap: "20px", alignItems: "center"}}>
          <FormCheck name="exclude-previous" label="Exclude previous answers"/>
          <Button variant="primary" type="submit">Filter</Button>
        </div> 

      </form>
    </section>
    )
}