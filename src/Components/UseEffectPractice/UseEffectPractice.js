import React, { Component, useEffect, useState } from 'react'
import './UseEffectPractice.css'

function UseEffectPractice() {
  
  const [renderCount, setRenderCount] = useState(0)
  const [color, setColor] = useState('white')

  const upDateRenderCount = () => {
    setRenderCount(renderCount => renderCount + 1)
  }
  
  // useEffect run 2 times when mounting component
  useEffect(() => {
    upDateRenderCount()
  }, [color])

  return(
    <div className="UseEffectPractice">
      <h3>useEffect Practice</h3>
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