import React, { useState, useContext } from 'react'
import { GoldContext, UsernameContext } from '../../App'
import firebase from '../../firebase/firebase.utils'


const Register = () => {
  // Accessing our 'subscription' props from App.js with useContext
  const { gold, setGold } = useContext(GoldContext);
  const { username, setUsername } = useContext(UsernameContext);

  
  // useState variables
  const [goldInput, setGoldInput] = useState(0);
  const [usernameInput, setUsernameInput] = useState('');

  // User inputs their character's name
  const UserInputsName = (e) => {
    setUsernameInput(e.target.value)
  }

  // User inputs their character's gold amount
  const UserInputsGold = (e) => {
    const letters = /^[A-Za-z]+$/; // regex for alphabetic letters

    if(e.target.value >= 27000) {
      alert("The DM doesn't believe you're carrying that much.")
    } else if(e.value.includes(letters)) {
      alert("Numbers only")
    } else {
      setGoldInput(e.target.value)
    }
  }

  const createUser = () => {
    const userRef = firebase.database().ref("DND-characters")
    setUsername(usernameInput) // The reason we put 'setUsername' here is because we want the user to click 'Enter Marketplace'
    const user = {
      usernameInput,
      goldInput,
      isThief: false
    }
    // why does DWC NOT have to lock in values to write to database, but I do????
    userRef.push(user);
 }

 const lockInGold = () => {
   setGold(goldInput)
 }

  return (
    
    <div className='register'>
      <div className="set-username">
        Enter your character's name:
        <input 
          type='text'
          onChange={UserInputsName}
          value={usernameInput}
        />
       {gold === 0 || usernameInput === '' ? null : <button onClick={createUser}>Enter Marketplace</button>}
        <br />
      </div>

      <div className="set-gold">
        Gold carrying:
        <input 
          onChange={UserInputsGold}
        />
        <button onClick={lockInGold}>Add</button>
        <br />
        {gold === 0 ? null :`Gold: ${gold}G`}
      </div>
    </div>
  )
}

export default Register
