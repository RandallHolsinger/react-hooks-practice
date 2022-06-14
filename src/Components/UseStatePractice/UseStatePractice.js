import React, { useState } from 'react';
import './UseStatePractice.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus } from '@fortawesome/free-solid-svg-icons'

function UseStatePractice(props) {
   
   const [color, setColor] = useState('black')
   
   const [count, setCount] = useState(0)
   
   const [name, setName] = useState({
       firstName: '',
       lastName: ''
   })
   
   const {showUseState, setShowUseState} = props
   return (
    <div className='UseStatePractice'>
      <div className='practice-header'>
        <h1>useState Practice</h1>
        <span onClick={() => setShowUseState(!showUseState)} className='close-container'><FontAwesomeIcon icon={faMinus}/></span>
      </div>
      {/* using useState to change color properties */}
      <div className='box' style={{backgroundColor: color}}></div>
      <button onClick={() => setColor('Aquamarine')}>Aquamarine</button>
      <button onClick={() => setColor('aqua')}>Aqua</button>
      {/* using useState to increment or decrement a value */}
      <div className='box-2'>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      {/* using useState to store objects from user and display them */}
      <h4>First Name: {name.firstName}</h4>
      <h4>Last Name: {name.lastName}</h4>
      <form>
        <input value={name.firstName} type='text' placeholder='First Name' onChange={(e) => setName({...name, firstName: e.target.value})}/>
        <input value={name.lastName} type='text' placeholder='Last Name' onChange={(e) => setName({...name, lastName: e.target.value})}/>
      </form>
    </div>
   )
}

export default UseStatePractice