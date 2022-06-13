import React, { useEffect, useState } from 'react'
import './UseEffectPractice.css'

function UseEffectPractice() {
  
  const [renderCount, setRenderCount] = useState(0)

  const upDateRenderCount = () => {
    setRenderCount(renderCount => renderCount + 1)
  }

  useEffect(() => {
    upDateRenderCount()
  }, [])

  return(
    <div className="UseEffectPractice">
      <h3>This Component Has Rendered ( {renderCount} ) Times</h3>
      <button onClick={() => setRenderCount(0)}>Clear</button>
    </div>
  )
}

export default UseEffectPractice