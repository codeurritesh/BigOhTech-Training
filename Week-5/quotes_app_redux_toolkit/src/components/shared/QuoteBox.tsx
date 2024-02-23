import React from 'react'
import { Quote } from '../../dataTypes/Quote'
import { DeleteHandleType } from '../features/DisplayQuote'

type QuoteBoxType={data:Quote,deleteHandler:DeleteHandleType} 
const QuoteBox = (props:QuoteBoxType) => {
  return (
    <div className="quote">
    <p>
      <b>Quote: </b> {props.data.quote}
    </p>
    <p>
      <b>Author: </b> {props.data.author}
    </p>
    <p>
      <b>Date: </b> {props.data.date}
    </p>
    <div className="button-holder">
      <button
        className="delete-button"
        onClick={() => props.deleteHandler(props.data.id)}
      >
        Delete
      </button>
    </div>
  </div>
  )
}

export default QuoteBox