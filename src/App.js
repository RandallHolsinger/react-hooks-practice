import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import UseStatePractice from './Components/UseStatePractice/UseStatePractice'
import UseEffectPractice from './Components/UseEffectPractice/UseEffectPractice'
import UseRefPractice from './Components/UseRefPractice/UseRefPractice'


function App() {

  const [showUseState, setShowUseState] = useState(false)
  const [showUseEffect, setShowUseEffect] = useState(false)
  const [showUseRef, setShowUseRef] = useState(false)

  return (
    <div className="App">
      {showUseState ? 
        <UseStatePractice showUseState={showUseState} setShowUseState={setShowUseState}/> 
      : 
        <div className='practice-sections'>
          <h1>useState Practice</h1>
          <span onClick={() => setShowUseState(!showUseState)}><FontAwesomeIcon icon={faPlus}/></span>
        </div>
      }
      {showUseEffect ? 
        <UseEffectPractice showUseEffect={showUseEffect} setShowUseEffect={setShowUseEffect}/> 
      :
        <div className='practice-sections'>
          <h1>useEffect Practice</h1>
          <span onClick={() => setShowUseEffect(!showUseEffect)}><FontAwesomeIcon icon={faPlus}/></span>
        </div>
      }
      {showUseRef ? 
        <UseRefPractice showUseRef={showUseRef} setShowUseRef={setShowUseRef}/> 
      : 
        <div className='practice-sections'>
          <h1>useRef Practice</h1>
          <span onClick={() => setShowUseRef(!showUseRef)}><FontAwesomeIcon icon={faPlus}/></span>
        </div>
      }
    </div>
  );
}

export default App;
