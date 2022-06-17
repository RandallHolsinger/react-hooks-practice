import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import './UseCallbackPractice.css'

function UseCallbackPractice(props) {

  const {showUseCallback, setShowUseCallback} = props
  return(
    <div className="UseCallbackPractice">
      <div className="practice-header">
        <h1>useCallback Practice</h1>
        <span onClick={() => setShowUseCallback(!showUseCallback)}><FontAwesomeIcon icon={faMinus}/></span>
      </div>
    </div>
  )
}

export default UseCallbackPractice