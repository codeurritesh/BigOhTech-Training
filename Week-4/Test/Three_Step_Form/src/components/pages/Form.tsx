import React, { useState } from 'react'
import UserSection from '../form/UserSection'
import FamilySection from '../form/FamilySection'
import CreativeSection from '../form/CreativeSection'
import Review from '../form/ReviewSection'
import "./form.css"
import Stepper from '../comman/Stepper'
import { FormContext } from '../../context/FormContext'
import Submmitted from '../form/Submmitted'
const Form = () => {
  const [isSubmitted,setIsSubmitted]=useState<boolean>(false);
  const [formType,setFormType]  =useState<"userForm" | "familyForm" | "creativeForm" | "reviewForm">("userForm")
  return (
    <div className='form-background'>
      <img src="https://img.freepik.com/free-vector/forms-concept-illustration_114360-4957.jpg" alt="formImage" className='side-form-image' />
      <div className='form-box'>
        <FormContext.Provider value={{setFormType:setFormType,setIsSubmitted:setIsSubmitted}}>
      { formType!="reviewForm"?<Stepper formType={formType}/>:""}
      {
         isSubmitted?<Submmitted/>: formType==="userForm" ? <UserSection/>:formType==="familyForm" ? <FamilySection/> :formType==="creativeForm" ? <CreativeSection/> : <Review/>
      }
      </FormContext.Provider>
      </div>
    </div>
  )
}

export default Form