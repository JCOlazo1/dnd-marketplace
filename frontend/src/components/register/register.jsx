import React, { useState, useContext } from 'react'
import { GoldContext, UsernameContext } from '../../App'

const Register = () => {
  // Accessing our 'subscription' props from App.js with useContext
  const { gold, setGold } = useContext(GoldContext);
  const { username, setUsername } = useContext(UsernameContext);
  
  // useState variables
  const [goldInput, setGoldInput] = useState(0);
  const [usernameInput, setUsernameInput] = useState();

  const UserInputsGold = (e) => {
    if(e.target.value >= 27000) {
      alert("The DM doesn't believe you're carrying that much.")
    } else {
      setGoldInput(e.target.value)
    }
    
  }

  const UserInputsName = (e) => {
    setUsernameInput(e.target.value)
  }


  return (
    <div className='register'>
      <div className="set-username">
        Enter your character's name:
        <input 
          type='text'
          id='title'
          onChange={UserInputsName}
        />
        <button onClick={() => setUsername(usernameInput)}>Enter Marketplace</button>
        <br />
      </div>

      <div className="set-gold">
        Gold carrying:
        <input 
          onChange={UserInputsGold}
        />
        <button onClick={() => setGold(goldInput)}>Add</button>
        <br />
        {gold === 0 ? null :`Gold: ${gold}G`}
      </div>
    </div>
  )
}

export default Register
