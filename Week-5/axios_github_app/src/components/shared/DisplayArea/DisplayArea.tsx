import React, { useContext } from 'react'
import "./displayArea.css"
import Card from '../Card/Card'
import { MyContext } from '../../../context/MyContext';
const DisplayArea = () => {
  const myContext=useContext(MyContext);
  return (
    <section className='display-container'>
      {
        myContext?.allUsers?.map((user)=>{
          return <Card user={user}/>
        })
      }
    </section>
  )
}

export default DisplayArea