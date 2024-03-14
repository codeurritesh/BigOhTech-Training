import { useTheme } from '@mui/material'
import React, { useContext, useState } from 'react'
import "./style.css"
import QuoteCard from '../../components/Card/Card'
import { Quote } from '../../dataTypes/Quote'
import { localStorageManagement } from '../../services/LocalStorageManagement'
import { ThemeContext } from '../../ThemeContext/themeContext'
const AllQuotes = () => {
    const theme=useTheme()
    const themeContext=useContext(ThemeContext);
    const initialQuote=localStorageManagement.getItem("Quotes");
    const [allQuotes,setAllQuotes]=useState<Quote[] | null>(initialQuote);

  return (<div className='main-container' style={{backgroundColor:themeContext?.themeColor}}>
  <h1>All-Quotes</h1>
    <div className='quotes-container' >
    {
      allQuotes!==null && allQuotes.length>0?
      allQuotes?.map((quote)=>{
        return <QuoteCard quote={quote} setAllQuotes={setAllQuotes}/>
      }):
      <h2>No Quote Found</h2>
    }
    </div>
  </div>

  )
}

export default AllQuotes