import React, { useState, useContext } from 'react'
import { GoldContext, UserContext } from '../../App'

const Register = () => {
  // Accessing our 'subscription' props from App.js with useContext
  const { gold, setGold } = useContext(GoldContext);
  
  // useState variables
  const [goldInput, setGoldInput] = useState(0);

  const UserInputsGold = (e) => {
    setGoldInput(e.target.value)
  }


  return (
    <div className='register'>
      <div className="set-gold">
        Gold carrying:
        <input 
          type={Number}
          onChange={UserInputsGold}
        />
        <button onClick={() => setGold(goldInput)}>Add</button>
        <br />
        Gold: {gold}G
      </div>
    </div>
  )
}

export default Register
