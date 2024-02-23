import React from 'react'
import "./Stepper.css"
const Stepper = (props:any) => {
  return (
    <section className="stepper">
    <div className="step-form" style={props.formType==="userForm"?{backgroundColor: "#407BFF"}:{}}>1</div>
    <div className="step-form" style={props.formType==="familyForm"?{backgroundColor: "#407BFF"}:{}}>2</div>
    <div className="step-form" style={props.formType==="creativeForm"?{backgroundColor: "#407BFF"}:{}}>3</div> 
    </section>
  )
}

export default Stepper