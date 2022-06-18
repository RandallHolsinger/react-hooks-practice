import React, { useState, useEffect, useCallback } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import './UseCallbackPractice.css'

function UseCallbackPractice(props) {

  const [userInput, setUserInput] = useState('');
  const [num1] = useState(2);
  const [num2] = useState(2);
  
  //useEffect calls on State Change causing render of sum.
  // const sum = () => num1 + num2
  
  //useEffect calls on State Change and calls sum, but sum wont run because sum
  //wont run unless dependencies change. 
  const sum = useCallback(() => num1 + num2, [num1, num2])
  
  //useEffect run when the value of sum changes
  useEffect(() => {
    console.log(`New sum Value: ${sum()}`)
  }, [sum]);
   
  const {showUseCallback, setShowUseCallback} = props
  return(
    <div className="UseCallbackPractice">
      <div className="practice-header">
        <h1>useCallback Practice</h1>
        <span onClick={() => setShowUseCallback(!showUseCallback)}><FontAwesomeIcon icon={faMinus}/></span>
      </div>
      <div>
        <input type="text" placeholder="input" value={userInput} onChange={(e) => setUserInput(e.target.value)} />
        <h1>Output: {userInput}</h1>
      </div>
    </div>
  )
}

export default UseCallbackPractice