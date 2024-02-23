/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { docType } from '../../datatypes/docType'
import "./Card.css"
const Card = (props:docType) => {
  return (
    <div className="card">
                <img src={props.download_url} className="card-image"/>
                <div className="card-content">
                    <div>
                    <p className="card-name">Card ID: {props.id+1}</p>
                        <p className="card-name">Author: {props.author}</p>
                        <p className="card-name">Height: {props.height} </p>
                    </div>
                        <button className="card-like" ><i className="fa-solid fa-heart"></i></button>
                </div>
            </div>
  )
}

export default Card