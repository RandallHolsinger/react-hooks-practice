import React, { useState, useEffect, useRef } from "react";
import './UseRefPractice.css'

function UseEffectPractice(props) {
  const [users, setUsers] = useState([])
  const [name, setName] = useState('')
  const count = useRef(0)

  useEffect(() => {
    count.current = count.current + 1
  })


  const {showUseEffect, setShowUseEffect} = props
  return(
    <div className="UseRefPractice">
      <div>
        <h3>useRef practice</h3>
        <span onClick={() => setShowUseEffect(!showUseEffect)} className='close-container'> - </span>
      </div>
      <div>My Name is: {name}</div>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' />
      <h4>Hello I have rendered {count.current}</h4>
    </div>
  )
}

export default UseEffectPractice