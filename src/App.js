import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import './App.css';
import UseStatePractice from './Components/UseStatePractice/UseStatePractice'
import UseEffectPractice from './Components/UseEffectPractice/UseEffectPractice'
import UseRefPractice from './Components/UseRefPractice/UseRefPractice'
import UseCallbackPractice from './Components/UseCallbackPractice/UseCallbackPractice'


function App() {

  const [showUseState, setShowUseState] = useState(false)
  const [showUseEffect, setShowUseEffect] = useState(false)
  const [showUseRef, setShowUseRef] = useState(false)
  const [showUseCallback, setShowUseCallback] = useState(false)

  return (
    <div className="App">
      {showUseState ? 
        <UseStatePractice showUseState={showUseState} setShowUseState={setShowUseState}/> 
      : 
        <div onClick={() => setShowUseState(!showUseState)} className='practice-sections'>
          <h1>useState Practice</h1>
          <span><FontAwesomeIcon icon={faPlus}/></span>
        </div>
      }
      {showUseEffect ? 
        <UseEffectPractice showUseEffect={showUseEffect} setShowUseEffect={setShowUseEffect}/> 
      :
        <div onClick={() => setShowUseEffect(!showUseEffect)} className='practice-sections'>
          <h1>useEffect Practice</h1>
          <span><FontAwesomeIcon icon={faPlus}/></span>
        </div>
      }
      {showUseRef ? 
        <UseRefPractice showUseRef={showUseRef} setShowUseRef={setShowUseRef}/> 
      : 
        <div onClick={() => setShowUseRef(!showUseRef)} className='practice-sections'>
          <h1>useRef Practice</h1>
          <span><FontAwesomeIcon icon={faPlus}/></span>
        </div>
      }
      {showUseCallback ? 
        <UseCallbackPractice showUseCallback={showUseCallback} setShowUseCallback={setShowUseCallback}/> 
      : 
        <div onClick={() => setShowUseCallback(!showUseCallback)} className='practice-sections'>
          <h1>useCallback Practice</h1>
          <span><FontAwesomeIcon icon={faPlus}/></span>
        </div>
      }
    </div>
  );
}

export default App;
