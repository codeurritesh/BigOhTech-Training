import React from 'react'
import { Quote } from '../../dataTypes/Quote'
import { DeleteHandleType } from '../features/DisplayQuote'
import { useDispatch } from 'react-redux'
import { removeQuote } from '../../reduxStore/actions/actions'

type QuoteBoxType={data:Quote,ind:number} 
const QuoteBox = (props:QuoteBoxType) => {
  const dispatch = useDispatch();
  function deleteHandler(){
    dispatch(removeQuote(props.ind))
  }
  return (
    <div className="quote">
    <p>
      <b>Quote: </b> {props.data.newQuote}
    </p>
    <p>
      <b>Author: </b> {props.data.author}
    </p>
    <div className="button-holder">
      <button
        className="delete-button"
        onClick={deleteHandler}
      >
        Delete
      </button>
    </div>
  </div>
  )
}

export default QuoteBox