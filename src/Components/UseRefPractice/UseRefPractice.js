import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import './UseRefPractice.css'

function UseEffectPractice(props) {
  
  const [name, setName] = useState('')
  const count = useRef(0)
  const inputRef = useRef()
  
  // useRef will not trigger a re-render
  useEffect(() => {
    count.current = count.current + 1
  })

  const {showUseRef, setShowUseRef} = props
  return(
    <div className="UseRefPractice">
      <div className="practice-header">
        <h1>useRef Practice</h1>
        <span onClick={() => setShowUseRef(!showUseRef)}><FontAwesomeIcon icon={faMinus}/></span>
      </div>
      <div>My Name is: {name}</div>
      <input ref={inputRef} type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
      <h4>Hello I have rendered {count.current}</h4>
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  )
}

export default UseEffectPractice