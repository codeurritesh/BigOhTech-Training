import React, { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import AddQuote from './pages/AddQuote'
import UpdateQuote from './pages/UpdateQuote'
import AllQuotes from './pages/AllQuotes'
import ShowQuote from './pages/ShowQuote'
import Home from './pages/Home'
import HomeSection from './components/features/HomeSection/HomeSection'
const MyLazyComponent = React.lazy(() => import('./components/features/HomeSection/HomeSection'));

//do not skip review points, use it in every situation
const App = () => {
  return (
    <Routes>

    <Route path='/' element={<Home/>}>
      <Route path='/' element={<HomeSection/> }/>
      <Route path='/add-quote' element={<AddQuote/>}/>
      <Route path='/update-quote/:quoteId' element={<UpdateQuote/>}/>
      <Route path='/all-quotes' element={<AllQuotes/>}/>
      <Route path='/quote/:quoteId' element={<ShowQuote/>}/>
      <Route path='/delete/:quoteId' element={<ShowQuote/>}/>
    </Route>

  </Routes>
  )
}

export default App