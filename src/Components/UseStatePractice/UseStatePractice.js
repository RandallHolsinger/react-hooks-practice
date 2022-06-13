import React from 'react';
import './UseStatePractice.css'
import { useState } from 'react';

function UseStatePractice() {
   
   const [color, setColor] = useState('black')
   
   const [count, setCount] = useState(0)
   
   const [name, setName] = useState({
       firstName: '',
       lastName: ''
   })

   return (
       <div className='UseStatePractice'>
          <h3>useState Practice</h3>
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
              <label> Enter your First name
                <input value={name.firstName} type='text' placeholder='First Name' onChange={(e) => setName({...name, firstName: e.target.value})}/>
              </label>
          </form>
          <form>
              <label> Enter your LastName
                <input value={name.lastName} type='text' placeholder='Last Name' onChange={(e) => setName({...name, lastName: e.target.value})}/>
              </label>
          </form>

       </div>
   )
}

export default UseStatePractice