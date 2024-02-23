import React from 'react'
import NavBar from '../components/features/NavBar/NavBar'
import Footer from '../components/features/Footer/Footer'
import { Outlet } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <NavBar/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Home