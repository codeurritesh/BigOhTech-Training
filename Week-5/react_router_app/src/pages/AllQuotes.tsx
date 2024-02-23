import React from 'react'
import "./allQuotes.css"
import { Link, useNavigate } from 'react-router-dom'

const AllQuotes = () => {
  const navigate=useNavigate();
  return (
    <section className='quotes-container'>
      <div className='card'>
        <b>A Quick Brown Fox jump right over the lazy Dog</b>
        <p>By Ritesh Verma</p>
        <p><b>Date: </b>12/August/2024</p>
        <div className="card-buttons">
          <Link to={"/delete/erererere-36363gdg-383hdheh"}><button className='card-button'>Delete</button></Link>
          <Link to={"/update-quote/ayaya66-36363gdg-383hsss"}><button className='card-button'>Edit</button></Link>
          <Link to={"/quote/eudj-38djdj-3838ehjeje"}><button className='card-button'>Show</button></Link>
        </div>
      </div>

    </section>
  )
}

export default AllQuotes