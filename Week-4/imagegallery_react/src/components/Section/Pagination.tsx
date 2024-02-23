import React from 'react'
import './Pagination.css'
const Pagination = () => {
  function offsetHandler(){
    console.log("Offset Changed")
  }
  //data apifetch with limit
  return (
        <section className="paging-section">
        <button id="paginate-back">Back</button>
        <div className="paginate-buttons">
            <button className="page-number">1</button>
            <button className="page-number">2</button>
            <button className="page-number">3</button>
            <button className="page-number">4</button>
        </div>
        <button id="paginate-next">Next</button>
        <input type="number" id="offset" defaultValue={20} onChange={offsetHandler} placeholder="OffSet" />
        </section>
  )
}

export default Pagination