import React, { useEffect, useState } from 'react'
import './UseEffectPractice.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function UseEffectPractice(props) {
  
  const [renderCount, setRenderCount] = useState(0)
  const [color, setColor] = useState('white')

  const upDateRenderCount = () => {
    setRenderCount(renderCount => renderCount + 1)
  }
  
  // useEffect run 2 times when mounting component
  useEffect(() => {
    upDateRenderCount()
  }, [color])
  
  const {showUseEffect, setShowUseEffect} = props
  return(
    <div className="UseEffectPractice">
      <div className='practice-header'>
        <h1>useEffect Practice</h1>
        <span onClick={() => setShowUseEffect(!showUseEffect)} className='close-container'><FontAwesomeIcon icon={faMinus}/></span>
      </div>
      <h4>This Component Has Rendered ( {renderCount} ) Times</h4>
      <button onClick={() => setRenderCount(0)}>Clear</button>
      <div style={{backgroundColor: `${color}`, transition: '.7s'}} className='color-cube'>Change Me!</div>
      <div className="btns-container">
        <button onClick={() => setColor('aqua')}>Aqua</button>
        <button onClick={() => setColor('magenta')}>Magenta</button>
        <button onClick={() => setColor('springgreen')}>Spring Green</button>
      </div>
    </div>
  )
}

export default UseEffectPractice