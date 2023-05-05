import React from 'react'
import {questions} from "./Api"
import { useState } from "react"
import Myaccordion from './Myaccordion'
import "./Accordion.css"


function Accordion() {
    const [data, setData] = useState(questions)
  return (
    <div className='main-div' >
        <section  >
            <h1 className='title'>Technical terms</h1>
        {
            data.map( (curElem) => {
                const {id} = curElem
                return <Myaccordion key={id} {...curElem}/>
            })
        }
        </section>
    </div>
  )
}

export default Accordion