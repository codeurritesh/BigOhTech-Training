import React from 'react'
import "./card.css"
import { Response } from '../../../dataTypes/Response'

type PropType={
  user:Response
}
const Card = (props:PropType) => {
  return (
    <div className='user-card'>
            <img src={props.user.avatar_url} alt="User_image" />
            <div className='user-info'>
                <h3>{props.user.name}</h3>
                <h4>{props.user.login}</h4>
                <p >{props.user.bio}</p>
                <p><i className="fa-solid fa-users"></i> . <b>{props.user.followers}</b> Followers . <b>{props.user.following}</b>  Following</p>
                <div className='buttons-container'>
                    <a href={props.user.html_url}><button className='card-button'>Profile</button></a>
                    {props.user.blog?<a href={props.user.blog}><button className='card-button'>Blog</button></a>:""}
                </div>
            </div>

    </div>
  )
}

export default Card