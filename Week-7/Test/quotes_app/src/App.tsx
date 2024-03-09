import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Main from './pages/Main'
import AddQuote from './pages/AddQuotes/AddQuote'
import AllQuotes from './pages/AllQuotes/AllQuotes'
import Home from './pages/Home/Home'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main/>}>
        <Route index element={<Home/>}/>
        <Route path='/add-new-quote' element={<AddQuote/>}/>
        <Route path='/all-quotes' element={<AllQuotes/>}/>
      </Route>
    </Routes>
  )
}

export default App