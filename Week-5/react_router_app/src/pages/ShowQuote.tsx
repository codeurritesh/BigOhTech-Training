import "./showQuote.css"
import { useParams } from 'react-router-dom';
const ShowQuote = () => {
  const quoteId=useParams();
  console.log(quoteId);
  return (
       <div className='quotes-container'>
            <div className='card' >
        <b>A Quick Brown Fox jump right over the lazy Dog</b>
        <p>By Ritesh Verma</p>
        <p><b>Date: </b>12/August/2024</p>

      </div>
    </div>
   
  )
}

export default ShowQuote