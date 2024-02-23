import React from 'react'
import "./navBar.css"
import { Link, useNavigate } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='nav-bar'>
      <h1>React Router</h1>
      <div className='nav-right'>
        <Link to={"/"}>
          <p className='nav-text'>Home</p>
        </Link>

        <Link to={"/add-quote"}>
        <p className='nav-text'>Add Quote</p>
        </Link>

        <Link to={"/all-quotes"}>
        <p className='nav-text'>All Quotes</p>
        </Link>

        <Link to={"/login"}>
        <p className='nav-text'>Login</p>
        </Link>

      </div>
    </div>
  )}

export default NavBar