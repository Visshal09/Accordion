import React, { useState } from 'react'
import "./MyAccordion.css"

function Myaccordion({ question, answer}) {
    const [show,setShow] = useState(false);
  return (
    <div className='solution'>
      <div className="main-heading">
        <p className='show' onClick={() => setShow(!show)}>{show? "➖" : "➕"}</p>
        <h3>{question}</h3>
      </div>
      {
        show && <p className='answer'>{answer}</p>
      }
      
    </div>
  )
}

export default Myaccordion