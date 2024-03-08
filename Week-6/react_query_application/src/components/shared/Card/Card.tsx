import React from 'react'
import "./card.css"
import { Response } from '../../../dataTypes/Response'

type PropType={
  post:Response
}
const Card = (props:PropType) => {
  return (
    <div className='user-card'>
            <div className='user-info'>
                <h3>Title: {props.post.title}</h3>
                <p >Post ID: {props.post.id}</p>
                <p>Description: {props.post.desc}</p>
                <p >Views: {props.post.views}</p>
            </div>

    </div>
  )
}

export default Card