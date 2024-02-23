import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
            <header className="navbar">
        <div className="header-component">
            <h2>Photo Gallery</h2>
        </div>
        <div className="header-component">
            <input
            type="text"
            id="searchbar"
            name="search"
            placeholder="Search Image"
            />
            <button className="hover-black" id="search-button">
            Search
            </button>
        </div>
        <div className="header-component">
            <a href="./LikedPhotos.html">
            <button id="like-button">
                <i className="fa-solid fa-heart hover-black" />{" "}
            </button>
            </a>
            <h2 id="countLikes" />
        </div>
        </header>

  )
}

export default Navbar